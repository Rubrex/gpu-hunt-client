import { Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import loginBannerImg from "../../../assets/images/icons/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitleChange from "../../../hooks/useTitle";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);
  const from = location?.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  // States
  const [error, setError] = useState();
  // Hooks
  useTitleChange("Login");
  // Access Context
  const { logIn } = useContext(AuthContext);

  // Event Handlers
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    handleSignin(email, password);
  };

  const handleSignin = (email, password) => {
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setLoginEmail(user?.email);
          toast.success(`Welcome back ${user?.displayName}`);
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="container mx-auto my-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto  border-slate-300 border overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-white/50  flex justify-center items-center flex-col">
            <img src={loginBannerImg} className="w-2/4 mx-auto" alt="" />
            <h1 className="text-5xl font-extrabold text-white text-center">
              Login
            </h1>
          </div>
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/Best-GPU-3.jpg"
            alt=""
            className=" mx-auto order-2 md:order-1 object-cover w-full h-full z-10"
          />
        </div>

        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2 bg-gray-100">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 max-w-[500px] p-14 mx-auto"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                // color="warning"
                placeholder="name@mailme.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                name="password"
                type="password"
                required={true}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" name="checked" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/register" className="text-sm">
                Don't have an account ?
              </Link>
            </div>
            <p className="text-red-700 text-sm ">{error}</p>
            <PrimaryButton type="submit">Sign In</PrimaryButton>
            {/* <OtherSignInProvider /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
