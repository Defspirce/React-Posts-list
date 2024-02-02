import React, { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <div>
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Post name"
        ></MyInput>
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Post description"
        ></MyInput>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  );
}
