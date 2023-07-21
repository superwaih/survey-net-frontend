import React, { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';
import { useUserContext } from '@/context/UserProvider';
import { toast } from 'react-toastify';

export default function FlutterWaveBtn({user}) {
  const {loading, setLoading, setPaymentSuccess} = useUserContext()
   const config = {
    public_key: "FLWPUBK_TEST-f6cadd59b5a302f8ebb19e93f46fa398-X" ,
    tx_ref: Date.now(),
    amount: 1000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd,banktransfer',
    customer: {
      email: user.email,
      phone_number: '070********',
      name: user.email,
    },
    customizations: {
      title: 'Pneuma systems and integrated services',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: async(response) => {
       console.log(response);
       closePaymentModal() 
       if(response.status === "successful"){
        setLoading(true)
        try {
          const {data} = await axios.put(`https://survey-net-backend.onrender.com/api/users/updatepayment/${user.email}`, {
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
  };

  return (
    <div >
    
      <FlutterWaveButton
            className="bg-red-500 p-3 rounded-md shadow-md text-white w-full py-4"
      
      {...fwConfig} />
    </div>
  );
}