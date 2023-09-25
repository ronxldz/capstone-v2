import React, { useEffect, useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [errors, setErrors] = useState({
    clientName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error when the input changes
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.clientName) {
      newErrors.clientName = "Enter your name";
    }

    if (!formData.email) {
      newErrors.email = "Enter your email or phone number";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Enter your password";
    } else if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }

    if (!formData.cPassword) {
      newErrors.cPassword = "Re-enter your password";
    }

    if (formData.password !== formData.cPassword) {
      newErrors.cPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Continue with the registration process
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-4 pb-4">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-80 mx-auto flex flex-col items-center">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  name="clientName"
                  onChange={handleChange}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm"
                  type="text"
                />
                {errors.clientName && (
                  <p className="text-xs font-semibold text-red-500">
                    {errors.clientName} !
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  name="email"
                  onChange={handleChange}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm"
                  type="email"
                />
                {errors.email && (
                  <p className="text-xs font-semibold text-red-500">
                    {errors.email} !
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  name="password"
                  onChange={handleChange}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm"
                  type="password"
                />
                {errors.password && (
                  <p className="text-xs font-semibold text-red-500">
                    {errors.password} !
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  name="cPassword"
                  onChange={handleChange}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm"
                  type="password"
                />
                {errors.cPassword && (
                  <p className="text-xs font-semibold text-red-500">
                    {errors.cPassword} !
                  </p>
                )}
              </div>

              <button
                onClick={handleRegistration}
                className="w-full py-2 text-sm font-normal rounded-sm bg-yellow-400 hover:bg-yellow-500 border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
