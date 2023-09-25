import React from "react";
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm">See Personalised Recommendations</p>
          <Link to="/signin">
            <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <p className="text-sm mt-1">
              New Customer?{""}
              <span className="text-blue-600 ml-1 cursor-pointer">
                Start Here.
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
