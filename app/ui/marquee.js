import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => (
  <Marquee className=" ">
      <Image src="/next.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/bootstrap.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/css.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/express.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/git.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/github.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/html.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/javascript.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/mongodb.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/mui.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/node.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/npm.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/postgresql.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/python.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/react.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/redux.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/tailwind.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/typescript.png" width={80} height={30} alt="nextjs" className="mr-2"/>
      <Image src="/ultralytics.png" width={80} height={30} alt="nextjs" className="mr-2"/>
  </Marquee>
);

export default HomeMarquee;
