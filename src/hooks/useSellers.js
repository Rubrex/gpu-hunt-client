import axios from "axios";
import { useEffect, useState } from "react";

const useSellers = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    console.log("Email inside Seller hook:", email);
    if (email) {
      console.log(email);
      // Check if role is seller
      const url = import.meta.env.VITE_API + "/users/role/" + email;

      axios.get(url).then((response) => {
        // If the role is seller then continue
        console.log(response.data);
        if (response.data === "seller") {
          setIsSeller(true);
        } else {
          setIsSeller(false);
        }
        setIsSellerLoading(false);
      });
    }
  }, [email]);

  return [isSeller, isSellerLoading];
};

export default useSellers;
