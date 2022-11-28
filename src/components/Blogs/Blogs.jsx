import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Blogs = () => {
  const [selectBlog, setSelectBlog] = useState({});
  console.log(selectBlog);

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () =>
      axios.get(`${import.meta.env.VITE_API}/blogs`).then((res) => res.data),
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(blogs);

  const blogss = [
    {
      author: "Tauki Tahmid",
      authorImg:
        "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg",
      publishDate: "",
      coverImage: "",
      question:
        "What are the different ways to manage a state in a React application?",
      answer:
        "There are many ways to manage a state in a React application. By using context api we can easily access state across the scopped components. We can also lift state up to the upper components and by props drilling we can access the state from it's child components. There are other third part popular library called Redux, Recoil,Zustand etc",
    },
    {
      question: "How does prototypical inheritance work?",
      answer:
        "Everything in Javascript is an object. Even when creating a Class is an Object via a Constructor Function. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object and thus it creates prototype chaining.",
    },
    {
      question: "What is a unit test? Why should we write unit tests?",
      answer:
        "Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development of an application by the developers",
    },
    {
      question: "React vs. Angular vs. Vue?",
      answer:
        "React, Angular and Vue all are Frontend javascript frameworks built to make interactive UI development. React is the most popular frontend library built and maintained by facebook, it is popular because of it's simple and focuses on re-useable components also it uses diff algorithm to optimize rerender thus it makes fast rendering with virtual dom. Also it has a large community and huge collections of libraries.",
    },
  ];

  return (
    <section className="mb-32 ">
      <h2 className="text-xl  mb-16 text-center">BLOGS</h2>
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
          <img src={selectBlog?.coverImage} alt="" />
          <div className="flex items-center">
            <img src={selectBlog?.authorImg} alt="" />
            <div className="flex flex-col justify-center">
              <p>{selectBlog.author}</p>
              <p>
                <small>{selectBlog.publishDate}</small>
              </p>
            </div>
          </div>
          {/* Blog Title */}
          <h2 className="text-2xl font-medium">{selectBlog.question}</h2>
          {/* Answer */}
          <p>{selectBlog.answer}</p>
        </main>
      </div>
    </section>
  );
};

export default Blogs;
