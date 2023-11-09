import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Axios/Api";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const Navigate = useNavigate();
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");

  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  // ---------------  LogOut  -----------------------------
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    Navigate("/login");
  };
  // ---------------  Submit  -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);
    const response = await axios.post("api/auth/users/change-password", input, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    alert(response.data.message);
    if (response.status === 200) {
      handleLogOut();
    }
  };

  return (
    <>
      <div className="flex justify-center item-center mt-4">
        <h2 className="mr-10">Welcome {name}</h2>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
      {/* ----------------------  Form  ------------------------------------------- */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            {/*--------------------New Password ------------------------- */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.newPassword}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            {/*--------------------confirm Password ------------------------- */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.confirmPassword}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            {/* --------------------- Button  ----------------------- */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not having a Account{" "}
            <Link
              to="/signUP"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
