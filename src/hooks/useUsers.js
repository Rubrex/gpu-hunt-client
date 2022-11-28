import axios from "axios";
import { useEffect, useState } from "react";

const useUser = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    if (email) {
      // Check if role is user
      const url = import.meta.env.VITE_API + "/users/role/" + email;

      axios
        .get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("gpuhunt_token")}`,
          },
        })
        .then((response) => {
          // If the role is user continue
          if (response.data === "user") {
            setIsUser(true);
          } else {
            setIsUser(false);
          }
          setIsUserLoading(false);
        });
    }
  }, [email]);

  return [isUser, isUserLoading];
};

export default useUser;
