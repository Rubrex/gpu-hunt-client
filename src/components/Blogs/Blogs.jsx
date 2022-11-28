import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../Shared/Loading/Loading";

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () =>
      axios.get(`${import.meta.env.VITE_API}/blogs`).then((res) => res.data),
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(blogs);
  return (
    <section className="mb-32 ">
      <h2 className="text-xl  mb-16 text-center">BLOGS</h2>
      {/* Categories  */}
    </section>
  );
};

export default Blogs;
