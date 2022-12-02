import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  const [tokenLoading, setTokenLoading] = useState(false);
  useEffect(() => {
    if (email) {
      setTokenLoading(true);
      fetch(`${import.meta.env.VITE_API}/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("JWT from server: ", data);
          if (data.accessToken) {
            // Set token to localstorate
            localStorage.setItem("gpuhunt_token", data.accessToken);
            setToken(data.accessToken);
          }
          setTokenLoading(false);
        });
    }
  }, [email]);

  return [token, tokenLoading];
};

export default useToken;
