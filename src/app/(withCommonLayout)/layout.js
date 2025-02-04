import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
