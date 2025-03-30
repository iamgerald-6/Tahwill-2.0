import React from "react";
import HeroBlog from "./components/HeroBlog";
import SearchNav from "./components/SearchNav";
// import BlogPost from "./components/BlogPost";
import MoreBlog from "./components/MoreBlog";

const Blog = () => {
  return (
    <>
      <div>
        <HeroBlog />
      </div>
      <div>
        <SearchNav />
      </div>
      
      <div>
        <MoreBlog />
      </div>
    </>
  );
};

export default Blog;
