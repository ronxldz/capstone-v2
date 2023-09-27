import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../components/redux/Slice";

function SignIn() {
  const dipatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [signInError, setSignInError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Extract email and password from formData
    const { email, password } = formData;

    // Call signInWithEmailAndPassword
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        dipatch(
          setUserInfo({
            _id: user.uid,
            userName: user.displayName,
            email: user.email,
          })
        );
        setLoggedIn(true);
        setFormData({
          email: "",
          password: "",
        });
        setSignInError(null); // Clear any previous sign-in error
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        // Handle sign-in error
        const errorCode = error.code;
        let errorMessage = "Invalid login"; // Default error message

        // Customize error message based on error code (add more cases as needed)
        if (errorCode === "auth/user-not-found") {
          errorMessage =
            "User not found. Please check your email and try again.";
        } else if (errorCode === "auth/wrong-password") {
          errorMessage = "Wrong password. Please try again.";
        }

        setSignInError(errorMessage);
        setLoggedIn(false);
      });
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
              {renderInput("Email", "email", formData.email, handleChange)}
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
              {signInError && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {signInError}
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
