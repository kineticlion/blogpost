import React, { useContext } from "react";
import BlogPostForm from "../components/blogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

export default CreateScreen;
