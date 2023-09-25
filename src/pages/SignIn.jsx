import React, { useEffect } from "react";

function SignIn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Added an empty dependency array here

  return (
    <div className="w-full pt-4 pb-4">
      {/* Added padding top and bottom */}
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-80 mx-auto flex flex-col items-center" action="">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Sign In
            </h2>
            <div className="flex flex-col gap-3">
              {renderInput("Email or Mobile Phone Number", "email")}
              {renderInput("Password", "password")}
              <button
                onClick={(e) => e.preventDefault()}
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

function renderInput(label, type) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{label}</p>
      <input
        className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm"
        type={type}
      />
    </div>
  );
}

export default SignIn;
