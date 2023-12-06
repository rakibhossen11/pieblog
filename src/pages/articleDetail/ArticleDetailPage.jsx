import React from "react";
import SuggestedPost from "./container/SuggestedPost";

const ArticleDetailPage = () => {
  return (
    <div>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <img
            className="rounded-xl w-full"
            src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D"
            // src={
            //   data?.photo
            //     ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
            //     : images.samplePostImage
            // }
            // alt={data?.title}
          />
          {/* article category */}
          <div className="mt-4 flex gap-2">
            {/* {data?.categories.map((category) => (
              <Link
                to={`/blog?category=${category.name}`}
                className="text-primary text-sm font-roboto inline-block md:text-base"
              >
                {category.name}
              </Link>
            ))} */}
            <p  className="text-primary text-sm font-roboto inline-block md:text-base">Education</p>
          </div>
          {/* article title */}
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus tenetur voluptatibus.
            </h1>
            {/* content body */}
            <div className="w-full">
              {/* {!isLoading && !isError && (
                <Editor content={data?.body} editable={false} /> 
              )} */}
            </div>
        </article>
        {/* leatest article */}
        <div>
            <SuggestedPost header="Latest Article" className="mt-8 lg:mt-0 lg:max-w-xs" />
            <div>
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
