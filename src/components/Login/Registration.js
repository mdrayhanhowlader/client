import React from "react";
import RegisterWelcome from "./RegisterWelcome";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto my-20 shadow-2xl grid md:grid-cols-3">
        <div className="bg-teal-500 p-4 text-slate-50">
          <RegisterWelcome></RegisterWelcome>
        </div>
        <div className="md:col-span-2">
          <RegistrationForm></RegistrationForm>
        </div>
      </div>
    </div>
  );
};

export default Registration;
