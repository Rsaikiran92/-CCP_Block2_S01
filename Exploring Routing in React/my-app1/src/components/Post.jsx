import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getpost(setpost,id) {
  try {
    let data = await fetch(`https://dummyjson.com/posts/${id}`);
    data = await data.json();
    setpost(data);
  } catch (error) {

  }
}

function Post(){
   const {id}=useParams();
   const [post,setpost]=useState({})

    useEffect(()=>{
        getpost(setpost,id)
    },[])
    return (<div style={{padding:"20px 40px"}}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>views : {post.views}</p>
        <p>Likes : {post.reactions?.likes}</p>
        <p>Dislikes : {post.reactions?.dislikes}</p>
    </div>)
}

export default Post