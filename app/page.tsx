import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import HomeMarquee from "./ui/marquee";
import LabelBottomNavigation from "./ui/navbar";
import Avatars from "./ui/avatar";
import {
  GitHub,
  LinkedIn,
  Handshake,
  Phone,
  AlternateEmail,
  LocationOn,
  WhatsApp,
  Facebook,
  Instagram,
} from "@mui/icons-material";

export default function Home() {
  return (
    <main className="w-screen overflow-hidden border-box text-gray-700">
      <div className="m-4 mb-[10vh]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden w-[150px] h-[150px] mb-4 border-box rounded-full">
              <Avatars />
            </div>

            <div className="flex flex-col items-center mb-4 ">
              <h1 className="text-2xl font-semibold">ThankGod Obobo</h1>
              <p className="text-l">Fullstack Developer | AI/ML Engineer</p>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Button
              variant="contained"
              className="mx-2 px-8 py-[4px] bg-[#369df7] text-xl shadow-none"
            >
              <Handshake className="mr-2" />
              Hire Me
            </Button>
          </div>
        </div>

        <div className="mt-4 text-l ">
          <p className="text-center">
            A well versed and enthusiastic software engineer with good
            experience in full-stack web development artificial intelligence and
            machine learning. Analytical and detail-oriented programmer, as well
            as a team player.
          </p>
        </div>

        <div className="flex flex-col items-center my-4">
          <h1 className="text-xl  mb-2 font-semibold">Tech Stacks</h1>
          <HomeMarquee />
        </div>

        <div className="flex flex-col my-4">
          <span className="flex mb-2">
            <span className="mr-2">
              <LocationOn />
            </span>{" "}
            Lagos, Lagos Nigeria.
          </span>
          <span className="flex mb-2">
            <span className="mr-2">
              <AlternateEmail />
            </span>{" "}
            chibthankgod@gmail.com
          </span>
          <span className="flex mb-2">
            <span className="mr-2">
              <Phone />
            </span>{" "}
            +234 808 714 9150
          </span>
          <span className="flex">
            <Link
              href={"https://www.linkedin.com/in/thankgod-obobo-66ba28271/"}
              className="mr-2"
            >
              <LinkedIn />
            </Link>
            <Link href={"https://github.com/actokuyt"} className="mr-2">
              <GitHub />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=2348087149150&text&type=phone_number&app_absent=0"
              }
              className="mr-2"
            >
              <WhatsApp />
            </Link>
            <Link
              href={"https://web.facebook.com/profile.php?id=100076898382655"}
              className="mr-2"
            >
              <Facebook />
            </Link>
            <Link href={"https://www.instagram.com/acto60/"} className="mr-2">
              <Instagram />
            </Link>
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 max-w-full border-t-2">
        <LabelBottomNavigation />
      </div>
    </main>
  );
}
