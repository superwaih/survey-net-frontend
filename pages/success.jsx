import FlutterWaveBtn from "@/components/reusables/FlutterWaveBtn";
import Spinner from "@/components/reusables/Spinner";
import { useUserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const SuccessPage = () => {
  const {
    userObject,
    loading,
    submissionType,
    paymentSuccess,
    setPaymentSuccess,
    successMsg,
    setSuccessMessage,
  } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    if (userObject.email === undefined) {
      router.push("/verify");
    }
  });

  return (
    <>
    {loading && <Spinner />}
    <div className="h-screen w-full p-4 flex items-center justify-center bg-[#5483a0]">
      {paymentSuccess ? (
        <div className="flex text-lg md:text-xl  flex-col shadow-lg rounded-md  space-y-4 bg-white py-4 px-3  items-center justify-center max-w-md">
          <h3>Transaction successful</h3>
          <p>
            Please proceed to your dashboard, while our admins verify your
            documents
          </p>
          <p>
            you will receive an email notification from us, when this is done.
          </p>
        </div>
      ) : (
        <div className="flex  flex-col text-center leading-7 shadow-lg text-lg md:text-xl rounded-md  space-y-4 bg-white py-4 px-3  items-center justify-center max-w-md">
          <h3>
            Dear <span className="font-bold ">{userObject?.email}</span>, your
            information has been recieved{"."}
          </h3>
          {/* <AiFillCheckCircle className='text-5xl text-green-500' /> */}
          {submissionType === "surveyor_method" ? (
            <p>
              with survey number{" "}
              <span className="font-semibold">{userObject.survey_number} </span>{" "}
              please click on the button below to proceed to make payment for
              verification of your document
            </p>
          ) : (
            <p>
              with C of O number{" "}
              <span className="font-semibold">{userObject.cof_number} </span>{" "}
              please click on the button below to proceed to make payment for
              verification of your document
            </p>
          )}

{userObject.email !== undefined && (<FlutterWaveBtn user={userObject} />)}
    
          
        </div>
      )}
    </div>
    </>
  );
};

export default SuccessPage;
