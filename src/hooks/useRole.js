import axios from "axios";
import { useEffect, useState } from "react";

const useRole = (user) => {
  const [role, setRole] = useState(false);
  const [roleLoading, setRoleLoading] = useState(true);

  // Get user role
  useEffect(() => {
    if (user?.email) {
      //   set user Role
      const roleUrl = import.meta.env.VITE_API + "/users/role/" + user?.email;
      axios
        .get(roleUrl, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("gpuhunt_token")}`,
          },
        })
        .then((response) => {
          setRole(response.data.role);
        });
    }
    setRoleLoading(false);
  }, [user]);
  return [role, roleLoading];
};

export default useRole;
