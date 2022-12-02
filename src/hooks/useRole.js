import axios from "axios";
import { useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState(false);
  const [roleLoading, setRoleLoading] = useState(false);

  // Get user role
  useEffect(() => {
    if (email) {
      //   set user Role
      const roleUrl = import.meta.env.VITE_API + "/users/role/" + email;
      axios
        .get(roleUrl, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("gpuhunt_token")}`,
          },
        })
        .then((response) => {
          setRole(response.data);
        })
        .catch((err) => console.log(err));
    }
    setRoleLoading(false);
  }, [email]);
  return [role, roleLoading];
};

export default useRole;
