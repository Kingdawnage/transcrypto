import Image from "next/image";
import Transcrypto from "./ui/mainpage/transcrypto";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen p-2 border-2 border-y-gray-200 rounded-2xl">
      <Transcrypto />
    </div>
  );
}
