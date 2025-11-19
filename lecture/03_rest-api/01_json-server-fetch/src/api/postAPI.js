const BASE_URL = "http://localhost:3000";

const postAPI = {
  // 전체 게시글 조회 (GET)
  getAllPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  },

  // 특정 게시글 조회 (GET)
  getPostById: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  },

  // 게시글 추가 (POST)
  addPost: async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  },

  // 게시글 수정 (PUT)
  updatePost: async (id, postData) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  },

  // 게시글 삭제 (DELETE)
  deletePost: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  },
};

export default postAPI;
