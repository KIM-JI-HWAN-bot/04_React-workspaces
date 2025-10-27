import React, { useEffect, useState } from "react";

function Example5() {
  // let arr = [];
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((jsonData) => (arr = jsonData));

  // const [posts, setPosts] = useState(arr);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonData) => setPosts(jsonData));
  }, []);

  return (
    <>
      <h2>전체 게시글 목록</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default Example5;
