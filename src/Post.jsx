import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
function Post() {
  const mutation = useMutation((todo) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", todo);
  });
  return (
    <>
      {mutation.isError ? <div>{error.message}</div> : null}
      {mutation.isSuccess ? <div>Success </div> : null}
      {mutation.isLoading ? (
        "Malumot yuborlimoqda..."
      ) : (
        <>
          <button
            onClick={() => {
              mutation.mutate({ title: "salom mishqilar..." });
            }}
          >
            Junatish....
          </button>
        </>
      )}
    </>
  );
}

export default Post;
