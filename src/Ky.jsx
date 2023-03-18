import React from "react";
import ky from "ky";
// malumot yuborish uchun foydalanamiz.
const kyButtonGet = async () => {
  try {
    const res = await ky
      .get("https://jsonplaceholder.typicode.com/posts")
      .json();
    console.log(res);
  } catch (err) {
    console.log("Xatolik", err.message);
  }
};
function Ky() {
  return (
    <div>
      <button onClick={kyButtonGet}>Ky button</button>
    </div>
  );
}

export default Ky;
