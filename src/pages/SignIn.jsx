import React, { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Perform your sign-in logic here
    // For demonstration purposes, we're setting loggedIn to true after 2 seconds
    setTimeout(() => {
      setLoggedIn(true);
      setFormData({
        email: "",
        password: "",
      });
    }, 2000);
  };

  return (
    <div className="w-full pt-4 pb-4">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-80 mx-auto flex flex-col items-center" action="">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Sign In
            </h2>
            <div className="flex flex-col gap-3">
              {renderInput(
                "Email or Mobile Phone Number",
                "email",
                formData.email,
                handleChange
              )}
              {renderInput(
                "Password",
                "password",
                formData.password,
                handleChange
              )}
              <button
                onClick={handleSignIn}
                className="w-full py-2 text-sm font-normal rounded-sm bg-yellow-400 hover:bg-yellow-500 border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Continue
              </button>
              {loggedIn && (
                <p className="text-green-500 text-sm font-semibold mb-2">
                  Successfully logged in!
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function renderInput(label, type, value, onChange) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{label}</p>
      <input
        name={type}
        value={value}
        onChange={onChange}
        className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm"
        type={type}
      />
    </div>
  );
}

export default SignIn;
