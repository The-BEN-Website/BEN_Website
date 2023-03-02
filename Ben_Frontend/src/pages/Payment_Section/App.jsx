import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import Random from '../../assets/Home_assets/random.webp'
import './App.css';

const App = () => {
  const publicKey = 'pk_test_78b4909e86a720e1775d9ac1ebd79ae782b0bddb';
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setAmount('');
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! Giving is important, don't go!!!!"),
  };

  return (
    <div className="App mb-10">
      <div className="flex flex-row m-auto bg-white drop-shadow-2xl w-2/3 h-fit">
        <div className="w-1/2 relative">
          <img
            className="w-full h-[10rem] my-32"
            src={Random}
            alt="product"
          />
          <div className="absolute bottom-0 mb-4 ml-5 text-my-red text-left">
            <p className="text-lg">Category: Giving</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 h-[26.9rem] border-[0.05rem] border-l-gray-300 bg-white">
          <div className="p-5">
            <div className="flex flex-col mb-4">
              <label className="text-left text-my-black text-xs mb-2 uppercase ">Name</label>
              <input
                className='bg-transparent border border-gray-300 rounded-md text-my-black h-10 p-3'
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-left text-my-black text-xs mb-2 uppercase ">Email</label>
              <input
                className='bg-transparent border border-gray-300 rounded-md text-my-black h-10 p-3'
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-left text-my-black text-xs mb-2 uppercase ">Phone</label>
              <input
              className='bg-transparent border border-gray-300 rounded-md text-my-black h-10 p-3'
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-left text-my-black text-xs mb-2 uppercase ">Amount</label>
              <input
                className='bg-transparent border border-gray-300 rounded-md text-my-black h-10 p-3'
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <PaystackButton className="text-center text-base uppercase bg-my-red text-white font-medium rounded-md w-full h-[2.5rem] mt-10 cursor-pointer" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;