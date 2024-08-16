import Image from "next/image";
import Header from "../components/header";
export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center border-b-2 border-black">
        <h1 className="text-4xl font-bold">
          This is gonna be an epic ecommerce store made by next.js and MongoDB
        </h1>
      </div>
    </>
  );
}
