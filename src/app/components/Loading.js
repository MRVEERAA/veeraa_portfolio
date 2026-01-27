import Image from "next/image";
import loadinggif from "../../../public/loading_logo.gif";

export default function Loading() {
  return (
    <div className="flex h-screen select-none items-center justify-center bg-black md:bg-transparent">
      <Image
        src={loadinggif}
        alt="Loading"
        width={192}
        height={192}
        className="mix-blend-lighten"
        priority
      />
    </div>
  );
}
