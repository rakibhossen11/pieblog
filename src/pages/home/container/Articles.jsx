import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getAllPosts } from "../../../services/index/posts";
import toast from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
import ArticleCard from "../../../components/ArticleCard";
import { data } from "autoprefixer";

const Articles = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/blogs')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  // const {data, isLoading, isError} = useQuery({
  //     queryFn: () => getAllPosts(),
  //     queryKey: ["posts"],
  //     onError: (error) => {
  //         toast.error(error.message);
  //         console.log(error);
  //     }
  // })

  const posts = [
    {
      title: "Sanowar is a playboy",
      description: "He is a lots of girl friends",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLR0STzX5VAwKnDZ3YZn4BegvXj6WwSmWfg&usqp=CAU",
    },
    {
      title: "Sanowar is a playboy",
      description: "He is a lots of girl friends",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLR0STzX5VAwKnDZ3YZn4BegvXj6WwSmWfg&usqp=CAU",
    },
    {
      title: "Sanowar is a playboy",
      description: "He is a lots of girl friends",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLR0STzX5VAwKnDZ3YZn4BegvXj6WwSmWfg&usqp=CAU",
    },
    {
      title: "Sanowar is a playboy",
      description: "He is a lots of girl friends",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLR0STzX5VAwKnDZ3YZn4BegvXj6WwSmWfg&usqp=CAU",
    },
    {
      title: "Sanowar is a playboy",
      description: "He is a lots of girl friends",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLR0STzX5VAwKnDZ3YZn4BegvXj6WwSmWfg&usqp=CAU",
    },
  ];

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      {/* <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                {isLoading ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the posts data" />
        ) : (
          data?.data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))
        )}
            </div> */}

      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {blogs.map((item, index) => (
          <ArticleCard
          key={index}
          post={item}
          className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
        />
        ))}
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More Articles</span>
        <FaArrowRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Articles;
