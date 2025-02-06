import React from "react";

const AboutPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 border-2 border-gray-500 p-4">
        {data.map((post) => (
          <div className="border-2" key={post.id}>
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
