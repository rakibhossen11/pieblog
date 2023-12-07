import React from "react";

const CreatePost = () => {


  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const caption = form.caption.value;
    const  newBlog = {title, caption};
    console.log(newBlog);
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // if(data.acknowledged = true){
      //   Swal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: 'Your Toy is Added',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // }
    });
    
  };

  return (
    <div>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <form onSubmit={handleAddBlog} className="flex-1">
          {/* <input
            type="file"
            className="file-input w-fit bg-red-500 text-sm text-white font-semibold rounded-lg px-2 py-1 mt-5"
          /> */}
          <div className="d-form-control w-full">
            <label className="d-label">
              <span className="d-label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
              placeholder="title"
            />
          </div>

          <div className="d-form-control w-full">
            <label className="d-label">
              <span className="d-label-text">caption</span>
            </label>
            <textarea
              type="text"
              name="caption"
              className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard h-96"
              placeholder="caption"
            />
          </div>
          <button
            className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70 mt-3"
          >
            Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
