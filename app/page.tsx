import Link from "next/link";
import Button from "@mui/material/Button";
import HomeMarquee from "../ui/marquees";
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
    <main>
      <div className="w-screen py-8 overflow-hidden border-box text-gray-700 md:flex md:flex-row md:w-4/5 md:mx-auto md:mt-16 md:max-h-screen">
        <div className="flex flex-col items-center m-4 md:basis-2/5">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden w-[150px] h-[150px] mb-4 border-box rounded-full md:w-[80%] md:h-[auto]">
              <img src="/face-img.jpg" alt="face image" />
            </div>

            <div className="flex flex-col items-center mb-4 ">
              <h1 className="text-2xl font-semibold">ThankGod Obobo</h1>
              <p className="text-l">Fullstack Developer | AI/ML Engineer</p>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Button
              variant="contained"
              className="mx-2 px-8 py-[8px] bg-[#369df7] text-xl shadow-none"
            >
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=2348087149150&text&type=phone_number&app_absent=0"
                }
                className="mr-2 flex "
              >
                <Handshake className="mr-2" />
                Hire Me
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:basis-3/5 md:pt-28">
          <div className="m-4 text-l ">
            <p className="text-center">
              A well versed and enthusiastic software engineer with good
              experience in full-stack web development, artificial intelligence
              and machine learning. Analytical and detail-oriented programmer,
              as well as a team player.
            </p>
          </div>

          <div className="flex flex-col items-center my-4">
            <h1 className="text-xl  mb-2 font-semibold">Tech Stacks</h1>
            <HomeMarquee />
          </div>

          <div className="flex m-4 mb-[10vh] flex-col my-4 md:mt-12">
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
      </div>
      <div className="hidden md:block md:fixed md:bottom-0 md:w-full md:text-center">
        <p>Forgive my minimalistic approach, I am not a UI/UX designer.</p>
      </div>
    </main>
  );
}
