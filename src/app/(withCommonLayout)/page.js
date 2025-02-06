import Image from "next/image";
import Img from "../../assets/next.jpg";
import Link from "next/link";
const HomePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl text-center text-blue-600">Home local Page</h1>
      <Image
        src={Img}
        alt="logo"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-4xl text-center text-blue-600">Home URL Page</h1>
      <Image
        src="https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg"
        alt="logo"
        width={200}
        height={200}
        className="mx-auto"
      />
      <div className="grid grid-cols-2 gap-4 border-2 border-gray-500 p-4">
        {data.slice(0, 6).map((post) => (
          <div className="border-2" key={post.id}>
            {post.title}
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/about">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
