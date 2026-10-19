import { createPost } from "./post.js";

async function fetchData(){
  let response= await fetch('data.json');
  let data = await response.json();
  console.log(data);
  
  data.forEach((post) => {
    createPost(post.title, post.userDetails, post.imgUrl, post.likes, post.profilePic, post.comments, post.postTime);
  });
}

fetchData();