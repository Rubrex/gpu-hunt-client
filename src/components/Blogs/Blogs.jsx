import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Loading from "../Shared/Loading/Loading";

const Blogs = () => {
  const [selectBlog, setSelectBlog] = useState({});

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () =>
      axios.get(`${import.meta.env.VITE_API}/blogs`).then((res) => res.data),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mb-32 ">
      {/* Blogs  */}
      {/* Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Side Nav */}
        <aside className="lg:col-span-3 bg-gray-50">
          <ul className="flex flex-col  gap-2 px-5 py-5">
            {blogs.map((blog) => (
              <li
                key={blog._id}
                onClick={() => setSelectBlog(blog)}
                className={` ${({ isActive }) =>
                  isActive
                    ? "border-primary"
                    : "border-gray-500"}  bg-gray-100 pl-2 p-2 border-l-4 font-medium cursor-pointer`}
              >
                {blog.question}
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Content Area */}
        <main className="lg:col-span-9 bg-gray-100 min-h-screen p-5">
          {selectBlog?.coverImage ? (
            <>
              <img
                src={selectBlog?.coverImage}
                className="max-h-72 w-full object-cover"
                alt=""
              />
              <div className="flex items-center my-5">
                <img
                  src={selectBlog?.authorImg}
                  className="w-11 h-11 mr-2"
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold">{selectBlog.author}</p>
                  <p>
                    <small>{selectBlog.publishDate}</small>
                  </p>
                </div>
              </div>
              {/* Blog Title */}
              <h2 className="text-2xl font-medium mb-2">
                {selectBlog.question}
              </h2>
              {/* Answer */}
              <p>{selectBlog.answer}</p>
            </>
          ) : (
            <h2 className="text-3xl font-medium text-center">
              Choose your question
            </h2>
          )}
        </main>
      </div>
    </section>
  );
};

export default Blogs;
