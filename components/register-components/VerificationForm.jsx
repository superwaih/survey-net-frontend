import { useUserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const VerificationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const{setUserObject, loading, setLoading, submissionType, setSubmissionType} = useUserContext()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    
    setUserObject(data);
    router.push("/success")
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" shadow-md px-4 flex  bg-white rounded-md flex-col space-y-10 py-4 m-auto w-full md:w-[70%] max-w-md my-5 "
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
      <div className="flex flex-col space-y-3">
        <label className="font-bold" htmlFor="">Select Verification Method</label>
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
            <input
              {...register("survey_number", { required: true })}
              className="px-3 py-4 border border-yellow-400 rounded-md"
              type="text"
              placeholder="Please enter your firstname"
            />
            {errors.survey_number && (
              <div>
                <span>{errors.survey_number}</span>
              </div>
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
              placeholder="Enter name of surveyor"
            />
          </div>
        </>
      )}

      {submissionType === "cof_method" && (
        <div className="flex flex-col gap-3">
          <label className="font-semibold" htmlFor="">
            C of O Number
          </label>
          <input
            {...register("co_number", { required: true })}
            className="px-3 py-4 border border-yellow-400 rounded-md"
            type="text"
            placeholder="Enter Certification of Occupancy Number"
          />
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
        </div>
      </div>

      <button
        type="submit"
        className="bg-red-500 p-3 rounded-md shadow-md text-white w-full py-4"
      >
        Verify Documents
      </button>
    </form>
  );
};

export default VerificationForm;
