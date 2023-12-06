import React from "react";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      {/* card image */}
      <img
        src={post.img}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        {/* ----------------------------- */}
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            {/* -------------------- */}
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {post.title}
              </h4>
            </div>
            <span className="font-bold text-dark-light italic text-sm md:text-base">
              {/* {new Date(post.createdAt).getDate()}{" "}
              {new Date(post.createdAt).toLocaleString("default", {
                month: "long",
              })} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
