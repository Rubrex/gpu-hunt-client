import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import loginBannerImg from "../../../assets/images/icons/logo.png";
import { Link } from "react-router-dom";
import useTitleChange from "../../../hooks/useTitle";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Register = () => {
  useTitleChange("Register");
  // Access Context
  // Event Handlers
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const profileImg = form.imageLink.value;
    const email = form.email.value;
    const password = form.password.value;
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
                <Label htmlFor="name1" value="Your Name" />
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
                <Label htmlFor="email1" value="Your email" />
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
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                required={true}
              />
            </div>
            {/* Profile Image Link */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="imageLink" value="Your Profile Image Link" />
              </div>
              <TextInput
                id="imageLink"
                type="text"
                name="imageLink"
                placeholder="Link to the image"
                required={true}
              />
            </div>
            {/* Already have an account */}
            <div>
              <Link to="/login">Already have an account</Link>
            </div>
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
            {/* Other Signin */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
