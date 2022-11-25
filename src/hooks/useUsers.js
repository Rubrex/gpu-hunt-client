import axios from "axios";
import { useEffect, useState } from "react";

const useUser = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    console.log("Email inside useUsers hook:", email);
    if (email) {
      // Check if role is user
      const url = import.meta.env.VITE_API + "/users/role/" + email;

      axios.get(url).then((response) => {
        // If the role is user continue
        if (response.data === "user") {
          setIsUser(true);
        }
        setIsUserLoading(false);
      });
    }
  }, [email]);

  return [isUser, isUserLoading];
};

export default useUser;
