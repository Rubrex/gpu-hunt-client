import React, { useContext, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import loginBannerImg from "../../../assets/images/icons/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitleChange from "../../../hooks/useTitle";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import SmallLoading from "../../Shared/SmallLoading/SmallLoading";

const Register = () => {
  useTitleChange("Register");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // States
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // Access Context
  const { user, createUser, updateUser } = useContext(AuthContext);

  // Event Handlers
  const handleRegistration = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const userName = form.name.value;
    const profileImg = form.uploadPhoto.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const role = form.roleRadio.value;

    handleSignUp(userName, email, password, profileImg, role);
  };

  //   IMAGEBB API KEY
  const imagehostkey = import.meta.env.VITE_IMGBB_KEY;

  // Update Profile in firebase
  const updateProfileData = (profileInfo) => {
    updateUser(profileInfo)
      .then(() => {
        // Profile updated!
        toast.success("Profile Updated");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        toast.error(error.code);
        // ...
      });
  };

  // Handle Signup
  const handleSignUp = (userName, email, password, profileImg, role) => {
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user.email) {
          // User Created successfully here
          // Upload Image to imgbb
          // After this we are saving the image from imgbb to db

          const url = `https://api.imgbb.com/1/upload?&key=${imagehostkey}`;
          const formData = new FormData();
          formData.append("image", profileImg);

          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())

            .then((imgData) => {
              if (imgData.success) {
                const imageLink = imgData.data.url;

                // Uploading User info to DB
                axios
                  .post(import.meta.env.VITE_API + "/users", {
                    email,
                    password,
                    role,
                    image: imageLink,
                    wishlists: [],
                  })
                  .then((response) => {
                    if (response.data.acknowledged) {
                      toast.success("Account created successfully");
                      // Update Profile
                      const profileInfo = {
                        displayName: userName,
                        photoURL: imageLink,
                      };
                      updateProfileData(profileInfo);
                      setLoading(false);
                      navigate(from, { replace: true });
                    }
                  })
                  .catch((error) => {
                    setLoading(false);
                    console.log(error);
                  });
              }
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoading(false);
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
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Account Type
              </p>
              <div className="flex items-center ">
                <input
                  defaultChecked
                  id="default-radio-1"
                  type="radio"
                  value="user"
                  name="roleRadio"
                  className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  User
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="seller"
                  name="roleRadio"
                  className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seller
                </label>
              </div>
            </div>

            {/* Profile Image Link */}
            <div>
              <label
                className="ml-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                htmlFor="file_input"
              >
                Upload Your Profile Picture
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                name="uploadPhoto"
                type="file"
              />
            </div>
            {/* Already have an account */}
            <div>
              <Link to="/login">Already have an account? </Link>
            </div>
            <p className="text-red-700 text-lg ">{error}</p>
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? <SmallLoading /> : "Signup"}
            </PrimaryButton>
            {/* Other Signin */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
