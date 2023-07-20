import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function FlutterWaveBtn({user}) {
   const config = {
    public_key: "FLWPUBK_TEST-f6cadd59b5a302f8ebb19e93f46fa398-X" ,
    tx_ref: Date.now(),
    amount: 2000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd,transfer',
    customer: {
      email: user.email,
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
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