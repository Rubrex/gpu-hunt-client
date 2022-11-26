import axios from "axios";
import { useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState(false);
  const [roleLoading, setRoleLoading] = useState(true);

  // Get user role
  useEffect(() => {
    if (email) {
      //   set user Role
      const roleUrl = import.meta.env.VITE_API + "/users/role/" + email;
      axios.get(roleUrl).then((response) => {
        setRole(response.data);
        setRoleLoading(false);
      });
    }
  }, [email]);
  return [role, roleLoading];
};

export default useRole;
