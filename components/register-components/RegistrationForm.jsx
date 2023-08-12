import { useUserContext } from "@/context/UserProvider";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import Spinner from "../reusables/Spinner";
import AccountExists from "../modal/AccountExists";
const RegistrationForm = ({ setIsOpen }) => {
  const { loading, setLoading, setRegData } = useUserContext();
  const[accountExist, setAccountExist] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formdata) => {
    setLoading(true);
    const newForm = {
      email: formdata.email,
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      phone_number: formdata.phone_number,
    };
  
    const config = { "content-type": "application/json" };
    try {
      const { data } = await axios.post(
        "https://survey-net-backend.onrender.com/api/users/create",

        newForm,
        config
      );
      setLoading(false);
     
      if (data.status == 201) {
        toast.success(
          "You just created an account, You will be redirected verification page",
          {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setRegData(data.payload);
        setIsOpen(true);
      }
    } catch (error) {
      
     if(error?.response?.data?.payload === "user already exists"){
      setAccountExist(true)
     }
      toast.error(`${error?.response?.data?.payload}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    
    }
  };

  return (
    <>
      {loading && <Spinner />}
      {accountExist && (<AccountExists isOpen={accountExist} setIsOpen={setAccountExist} />)}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" box-shadow px-4 flex bg-white rounded-md flex-col space-y-10 py-4 m-auto w-full md:w-[70%] max-w-md my-5 "
      >
        <div className="flex flex-col gap-3">
          <label className="font-semibold" htmlFor="">
            Firstname
          </label>
          <input
            {...register("firstname", { required: true })}
            className="px-3 py-4 border border-yellow-400 rounded-md"
            type="text"
            placeholder="Please enter your firstname"
          />
          {errors.firstname && (
            <small className="text-red-400 font-semibold">
              Please enter your firstname
            </small>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="">Lastname</label>
          <input
            {...register("lastname", { required: true })}
            className="px-3 py-4 border border-yellow-400 rounded-md"
            type="text"
            placeholder="please your lastname"
          />
          {errors.lastname && (
            <small className="text-red-400 font-semibold">
              Please enter your last name
            </small>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="">Phone Number</label>
          <input
            {...register("phone_number", {
              required: true,
              minLength: 10,
              maxLength: 17,
            })}
            className="px-3 py-4 border border-yellow-400 rounded-md"
            type="text"
            placeholder="please enter your phone number"
          />
          {errors.phone_number?.type === "required" && (
            <small className="text-red-400 font-semibold">
              Please enter your phone number
            </small>
          )}

          {errors.phone_number?.type === "minLength" && (
            <small className="text-red-400 font-semibold">
              Please enter valid phone number
            </small>
          )}
          {errors.phone_number?.type === "maxLength" && (
            <small className="text-red-400 font-semibold">
              Please enter valid phone number
            </small>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="">Email</label>
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
        {/* <div className="flex flex-col  gap-3 mb-3">
        <label htmlFor="">Password</label>
        <div className="relative w-full">
          <input
            {...register("password", { required: true })}
            className="px-3 w-full py-4 border border-yellow-400 rounded-md"
            type={showPassword ? "text" : "password"}
            placeholder="please enter your password"
          />

          <div
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer text-xl absolute right-2 top-[30%]"
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>
      </div> */}

        <button
          type="submit"
          disabled={loading}
          className="bg-red-500 disabled:opacity-50 p-3 rounded-md shadow-md text-white w-full py-4"
        >
          {loading ? "Loading ..." : " Create Account"}
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
