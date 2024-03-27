"use client"


import { Button } from "@mui/material";
import { Home, Verified, Work, Article } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function DesktopNav() {
  const router = useRouter();
  return (
    <div className="fixed top-0 bg-gray-300 w-screen flex flex-row justify-end z-50">
      <Button
        className="px-4 py-[8px] text-xl shadow-none"
        onClick={() => {
          router.push(`/`);
        }}
      >
        Home
      </Button>
      <Button
        className="px-4 py-[8px] text-xl shadow-none"
        onClick={() => {
          router.push(`/certifications`);
        }}
      >
        Certifications
      </Button>
      <Button
        className="px-4 py-[8px] text-xl shadow-none"
        onClick={() => {
          router.push(`/projects`);
        }}
      >
        Projects
      </Button>
      <Button
        className="px-4 py-[8px] text-xl shadow-none"
        onClick={() => {
          router.push(`/articles`);
        }}
      >
        Articles
      </Button>
    </div>
  );
}
