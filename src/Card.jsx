import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const url = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
  const res = await axios.get(url);
  return res.data;
}
function Card() {
  const { data, isError, error, isLoading } = useQuery("posts", getPost);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error{error.message}</h2>;
  return (
    <div className="d-flex">
      {data.map((item) => {
        return (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
