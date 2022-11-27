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
    <div>
      <h2 className="text-3xl">Blogs</h2>
    </div>
  );
};

export default Blogs;
