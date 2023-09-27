import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const auth = getAuth();
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

  const [firebaseErr, setFirebaseErr] = useState("");

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state only if the value is different
    if (formData[name] !== value) {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: "", // Clear the error when the input changes
      });
      // Reset registration success message when the user makes changes
      setRegistrationSuccess(false);
      // Clear Firebase error message when the input changes
      setFirebaseErr();
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.clientName) {
      newErrors.clientName = "Enter your name";
    }

    if (!formData.email) {
      newErrors.email = "Enter your email";
      setFirebaseErr(""); // Clear firebaseErr when the email field is empty
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
      setFirebaseErr(""); // Clear firebaseErr when the email is invalid
    }

    if (!formData.password) {
      newErrors.password = "Enter your password";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.cPassword) {
      newErrors.cPassword = "Re-enter your password";
    }

    if (formData.password !== formData.cPassword) {
      newErrors.cPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Registration is successful, update state
      // setRegistrationSuccess(true);
      // Here, you can proceed with the registration process

      // Call createUserWithEmailAndPassword here
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setRegistrationSuccess(true);
          updateProfile(auth.currentUser, {
            displayName: formData.clientName,
          });
          // Signed in
          const user = userCredential.user;

          setTimeout(() => {
            navigate("/signin");
          }, 3000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email Already in use, Try another one");
          } else {
            setFirebaseErr(errorMessage); // Set firebaseErr with the error message
          }
        });
    }
  };

  const isValidEmail = (email) => {
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
            {registrationSuccess ? (
              <p className="text-green-500 text-sm font-semibold mb-4 bg-green-100 border border-green-400 p-2 rounded-md">
                Registration Successful! You have created an account.
              </p>
            ) : (
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
                  {firebaseErr && (
                    <p className="text-xs font-semibold text-red-500">
                      {firebaseErr} !
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
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Registration;
