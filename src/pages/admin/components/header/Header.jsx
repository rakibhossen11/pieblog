import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../../../constants/Images";
import { AiFillDashboard, AiOutlineMenu } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";
import { useQueryClient } from "@tanstack/react-query";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [isMenuActive,setIsMenuActive] = useState(false);
    const [activeNavName,setActiveNavName] = useState("dashboard");
    const windowsize = useWindowSize();



  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
      {/* logo */}
      <Link to="/">
        <img src={Images.Logo} alt="logo" className="w-16 lg:hidden" />
      </Link>
      {/* menu burger icon */}
      <div className="cursor-pointer lg:hidden">
        <AiOutlineMenu className="w-6 h-6" />
      </div>
      {/* sidebar container */}
      <div>
        {/* underlay */}
        {/* <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleMenuHandler}
          /> */}
        {/* sidebar */}
        <div>
          <Link to="/">
            <img src={Images.Logo} alt="logo" className="w-16" />
          </Link>
          <h4 className="mt-10 font-bold text-[#C7C7C7]">MAIN MENU</h4>
          <div className="mt-6 flex flex-col gap-y-[0.563rem]">
            <NavItem
              title="Dashboard"
              link="/admin"
              icon={<AiFillDashboard className="text-xl" />}
              name="dashboard"
              activeNavName={activeNavName}
              setActiveNavName={setActiveNavName}
            />
            <NavItem
              title="Comments"
              link="/admin/comments"
              icon={<FaComments className="text-xl" />}
              name="comments"
              activeNavName={activeNavName}
              setActiveNavName={setActiveNavName}
            />
            <NavItemCollapse
              title="Posts"
              icon={<MdDashboard className="text-xl" />}
              name="posts"
              activeNavName={activeNavName}
              setActiveNavName={setActiveNavName}
            >
              <Link to="/admin/posts/manage">Manage all posts</Link>
              <button
                // disabled={isLoadingCreatePost}
                className="text-start disabled:opacity-60 disabled:cursor-not-allowed"
                // onClick={() =>
                //   handleCreateNewPost({ token: userState.userInfo.token })
                // }
              >
                Add New Post
              </button>
            </NavItemCollapse>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
