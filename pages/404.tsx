// pages/404.js
import Image from "next/image";

const NotFoundPage = () => {
  const loaderProp = ({ src }) => {
    return src;
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[80vw] my-10 mx-auto">
        <h2 className="text-4xl my-4">Page Not Found</h2>
        <p className="text-lg">Oops... There is nothing to see here!</p>
        <Image
          src="/assets/whatsapp-home.png"
          alt="Whatsapp Logo"
          height={250}
          width={250}
          className="object-contain"
          loader={loaderProp}
        />
        <p className="text-md text-gray-500">
         Add some description here...
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
