/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import Container from "../container/Container";
import PostCard from "../PostCard";

//updated Home Successfully
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full p-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div className="p-2 w-1/4">
              <PostCard {...post}></PostCard>
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;
