import { useUserContext } from "@/context/UserProvider";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Spinner from "../reusables/Spinner";
import { toast } from "react-toastify";
import SubmissionSuccessful from "../modal/SubmissionSuccessful";
import AccountNotFound from "../modal/AccountNofFound";

const VerificationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [imageOne, setImageOne] = useState("");
  const [convertingImage, setConvertingImage] = useState(false);
  const watchAll = watch(["document"]);
  const [accountNotfound, setAccountNotFound] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const router = useRouter();
  const {
    setUserObject,
    loading,
    setLoading,
    submissionType,
    setSubmissionType,
  } = useUserContext();

  const conver2base64 = async (file) => {
    setConvertingImage(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageOne(reader.result.toString());
      setConvertingImage(false);
    };
  };

  useEffect(() => {
    if (watchAll[0] === undefined) return;
    if (watchAll[0][0] !== undefined) {
      conver2base64(watchAll[0][0]);
    }
  }, [watchAll]);

  const onSubmit = async (formdata) => {
    
    setLoading(true);
    let newData;
    if (submissionType === "surveyor_method") {
      newData = {
        images: [imageOne],
        sureyor_name: formdata.surveyor_name,
        survey_number: formdata.survey_number,
        email: formdata.email,
        verification_type: submissionType,
      };
    } else {
      newData = {
        images: [imageOne],
        email: formdata.email,
        cof_number: formdata.cof_number,
        verification_type: submissionType,
      };
    }
    setUserObject(newData);
    try {
      const config = { "content-type": "application/json" };
      const { data } = await axios.put(
        `https://survey-net-backend.vercel.app/api/users/update/${formdata.email}`,

        newData,
        config
      );

      if (data.msg == "done") {
        toast.success("Congratulations, Your request has been received", {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setUserObject(data.payload);

        setSubmissionSuccess(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setAccountNotFound(true);
    }
  };
  return (
    <>
      {loading && <Spinner />}

      {submissionSuccess && (
        <SubmissionSuccessful
          isOpen={submissionSuccess}
          setIsOpen={setSubmissionSuccess}
        />
      )}
      {accountNotfound && (
        <AccountNotFound
          isOpen={accountNotfound}
          setIsOpen={setAccountNotFound}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" shadow-md px-4 flex  bg-white rounded-md  flex-col space-y-10 py-4 m-auto w-full md:w-[70%] max-w-md my-5 "
      >
        <div className="flex flex-col gap-3">
          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="px-3 py-4 border border-yellow-400 rounded-md"
            type="text"
            placeholder="please enter email"
          />
          {errors.email?.type === "required" && (
            <small className="text-red-400 font-semibold">
              Please enter your email address
            </small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="text-red-400 font-semibold">
              Please enter a valid email address
            </small>
          )}
        </div>
        
        <div className="flex flex-col gap-3">
          <label className="font-semibold" htmlFor="">
            State
          </label>
          <select
            {...register("state", { required: true })}
            className="px-3 py-4 border border-yellow-400 rounded-md"
          >
            <option value="Oyo">Oyo state</option>
          </select>
       
        </div>
        <div className="flex flex-col space-y-3">
          <label className="font-bold" htmlFor="">
            Select Verification Method
          </label>
          <div className="flex gap-2">
            <input
              type="radio"
              onChange={(e) => setSubmissionType(e.target.value)}
              value={"surveyor_method"}
              name="submission_type"
              id="submission_type"
            />
            <p>Verification by survey number</p>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              value={"cof_method"}
              onChange={(e) => setSubmissionType(e.target.value)}
              name="submission_type"
              id="submission_type"
            />
            <p>Verification by C of O </p>
          </div>
        </div>
        {submissionType === "surveyor_method" && (
          <>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="">
                Survey Number
              </label>
              <small className="text-[12px]  font-semibold">
                Format: OY/1234/1996/12
              </small>
              <input
                {...register("survey_number", {
                  required: true,
                  pattern: /^OY\/\d{4}\/\d{4}\/\d{2}$/,
                })}
                className="px-3 py-4 border   border-yellow-400 rounded-md"
                type="text"
                placeholder="Please enter survey number i.e OY/1234/1996/12"
              />
              {errors.survey_number === "required" && (
                <div>
                 <small className="text-red-400 font-semibold">
                  Please enter a survey number
                </small>
                </div>
              )}

              {errors.survey_number?.type === "pattern" && (
                <small className="text-red-400 font-semibold">
                  Please enter a valid survey number
                </small>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold" htmlFor="">
                Surveyor's Name
              </label>
              <input
                {...register("surveyor_name", { required: true })}
                className="px-3 py-4 border border-yellow-400 rounded-md"
                type="text"
                placeholder="Enter surveyor name"
              />
              {errors.surveyor_name === "required" && (
                <small className="text-red-400 font-semibold">
                  Please enter surveyor name
                </small>
              )}
            </div>
          </>
        )}

        {submissionType === "cof_method" && (
          <div className="flex flex-col gap-3">
            <label className="font-semibold" htmlFor="">
              C of O Number
            </label>
            <small className="text-red-900/50 font-semibold">
              Format: A1234567
            </small>
            <input
              {...register("cof_number", {
                required: true,

                pattern: /^[a-zA-Z]\d{7}$/,
              })}
              className="px-3 py-4 border border-yellow-400 rounded-md"
              type="text"
              placeholder="Enter Certification of Occupancy Number"
            />
            {errors.cof_number === "required" && (
              <small className="text-red-400 font-semibold">
                Please enter C of O number 
              </small>
            )}
            {errors.cof_number?.type === "pattern" && (
              <small className="text-red-400 font-semibold">
                Please enter a valid C Of O Number i.e a8544378
              </small>
            )}
          </div>
        )}

        <div className="flex flex-col  gap-3 mb-3">
          <label className="font-semibold" htmlFor="">
            Upload Document
          </label>
          <div className="relative w-full">
            <input
              {...register("document", { required: true })}
              className="px-3 w-full py-4 border border-yellow-400 rounded-md"
              type="file"
              placeholder="Upload your document"
            />
            {errors.document && (
              <small className="text-red-400 font-semibold">
                Please upload your document
              </small>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-500 p-3 rounded-md shadow-md text-white w-full py-4"
        >
          Verify Documents
        </button>
      </form>
    </>
  );
};

export default VerificationForm;
