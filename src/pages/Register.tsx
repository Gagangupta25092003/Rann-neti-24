import React from 'react';

const Register = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-scree p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
        Register for Events
      </h1>
      <p className="mb-4 text-lg text-center">
        Please fill out the form below to register for your desired sports events. We look forward to your participation!
      </p>
      <div className="w-full max-w-4xl shadow-md rounded-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfpTrU1cWN8OmsJg3hhATAdKvNX3IUygdX3jauqGivMMSOgrA/viewform?embedded=true"
          width="100%"
          height="3400"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg bg-transparent"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Register;
