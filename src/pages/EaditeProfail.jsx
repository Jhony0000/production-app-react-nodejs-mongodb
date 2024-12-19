import React, { useEffect, useState } from "react";
import {  CreateFrom } from "../components/index";
import Service from "../appwrite/Service";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function EaditeProfail() {
  const naviget = useNavigate();

  const [post, setPost] = useState();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    Service.getProfail(userData.$id).then((post) => {
      if (userData.$id) {
        setPost(post);
      } else {
        naviget("/profail");
      }
    });
    console.log(post);
  }, [naviget, userData]);
  return (
    <>
    
        <CreateFrom post={post} />
      
    </>
  );
}

export default EaditeProfail;
