import React, { useContext, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import loginBannerImg from "../../../assets/images/icons/logo.png";
import { Link } from "react-router-dom";
import useTitleChange from "../../../hooks/useTitle";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  useTitleChange("Register");
  // States
  const [error, setError] = useState();
  // Access Context
  const { createUser } = useContext(AuthContext);
  // Event Handlers
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const profileImg = form.imageLink.value;
    const email = form.email.value;
    const password = form.password.value;

    handleSignUp(email, password);
  };

  const handleSignUp = (email, password) => {
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          toast.success("Account created successfully");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        // ..
      });
  };

  return (
    <div className="container mx-auto my-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto  border-slate-300 border overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-white/50  flex justify-center items-center flex-col">
            <img src={loginBannerImg} className="w-2/5 mx-auto" alt="" />
            <h1 className="text-5xl font-extrabold text-white text-center">
              Register
            </h1>
          </div>
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/Best-GPU-3.jpg"
            alt=""
            className=" mx-auto order-2 md:order-1 object-cover w-full h-full z-10"
          />
        </div>
        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2">
          <form
            onSubmit={handleRegistration}
            className="flex flex-col gap-4 max-w-[500px] p-14  mx-auto rounded-md"
          >
            {/* Name */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="name1"
                  value="Your Name"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                />
              </div>
              <TextInput
                id="name1"
                type="text"
                name="name"
                placeholder="Your Name"
                required={true}
              />
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Your email"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="name@mailme.com"
                required={true}
              />
            </div>
            {/*  Password */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Password"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                required={true}
              />
            </div>
            {/* Select Buyer / Seller  */}
            <div className="flex items-center gap-5">
              Account Type
              <div class="flex items-center ">
                <input
                  checked
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Buyer
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seller
                </label>
              </div>
            </div>

            {/* Profile Image Link */}
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload Your Profile Picture
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
            </div>
            {/* Already have an account */}
            <div>
              <Link to="/login">Already have an account? </Link>
            </div>
            <p className="text-red-700 text-lg ">{error}</p>
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
            {/* Other Signin */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
