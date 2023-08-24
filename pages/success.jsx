import FlutterWaveBtn from "@/components/reusables/FlutterWaveBtn";
import Spinner from "@/components/reusables/Spinner";
import { useUserContext } from "@/context/UserProvider";
import { useFlutterwave } from "flutterwave-react-v3";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
import Head from "next/head";
const SuccessPage = () => {

  const {
    userObject,
    loading,
    setLoading,
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
  const config = {
    public_key: "FLWPUBK-c740e8a5275c9ca467456cf4e8737963-X",
    tx_ref: Date.now(),
    amount: submissionType === "cof_method" ? 20000 : 10000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd,banktransfer',
    customer: {
      email: userObject.email,
      phone_number: '070********',
      name: userObject.email,
    },
    customizations: {
      title: 'Pneuma systems and integrated services',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config)

  return (
    <>
    <Head>
        <title>Havens</title>
      </Head>
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
          <button
            className="bg-red-500 p-3 hover:opacity-80 duration-300 transition-all rounded-md shadow-md text-white w-full py-4"
          
          onClick={() => {
            setLoading(true)
            handleFlutterPayment({
              callback: async(response) => {
                console.log(response);
                closePaymentModal() 
                if(response.status === "successful"){
                 setLoading(true)
                 try {
                   const {data} = await axios.put(`https://survey-net-backend.onrender.com/api/users/updatepayment/${userObject.email}`, {
                       payment_status: "paid"
                   })
         
                   if(data.msg === "done"){
                     setLoading(false)
                     setPaymentSuccess(true)
                     toast.success(
                       "Congratulations, Your request has been received",
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
                   }
                 } catch (error) {
                   setLoading(false)
                 }
                }else{
                 toast.error(
                   "Payment failed",
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
                }
               // this will close the modal programmatically
             },
             onClose: () => {},
            });
            setLoading(false)
          }}
          >

            Pay with flutterwave
          </button>

{/* {userObject.email !== undefined && (<FlutterWaveBtn submissionType={submissionType} user={userObject} />)} */}
    
          
        </div>
      )}
    </div>
    </>
  );
};

export default SuccessPage;
