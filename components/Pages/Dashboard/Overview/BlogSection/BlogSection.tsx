
import React from "react";
import BlogCard from "../../../../Global/Reuseable/Cards/BlogCard";

const BlogSection = () => {
  return (
    <div className="mt-16 grid gap-x-4 gap-y-5 xl:gap-y-6 xl:gap-x-8 
    grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <BlogCard
        title="Learning how to get started with Rect Vision"
        readTime={15}
        imageUrl="/images/road.png"
      />

      <BlogCard
        title="Annotating principles"
        readTime={5}
        imageUrl="/images/markedImage3.jpg"
      />

      <BlogCard
        title="How to train data with Rect Vision"
        readTime={12}
        imageUrl="/images/football.png"
      />

      <BlogCard
        title="Learning how to get started with Rect Vision"
        readTime={15}
        imageUrl="/images/road.png"
      />
      
    </div>
  );
};

export default BlogSection;
