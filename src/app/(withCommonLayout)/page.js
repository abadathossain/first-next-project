import Image from "next/image";
import Img from "../../assets/next.jpg";
const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
