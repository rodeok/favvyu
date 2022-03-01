import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CustomError: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Image
        objectFit="contain"
        width={500}
        height={300}
        src="/16.png"
        alt=""
      />

      <h2 className="mb-5 text-2xl font-semibold font-sora">
        Lost in the void?
      </h2>
      <p className="text-center">
        The page you&apos;re looking for doesn&apos;t exist. <br />
        We suggest you back to home :)
      </p>

      <Link href="/">
        <a className="mt-4 cursor-pointer flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerblue bg-neongreen border-neongreen hover:bg-transparent hover:text-neongreen">
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default CustomError;
