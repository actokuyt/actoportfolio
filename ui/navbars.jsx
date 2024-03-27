"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/navigation";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    if (newValue === "home") {
      router.push(`/`);
    } else {
      router.push(`/${newValue}`);
    }
    setValue(newValue);
  };

  React.useEffect(() => {
    let currentPath = window.location.pathname.slice(1)
    if (currentPath === "") {
      setValue("home")
    } else {
      setValue(currentPath)
    }
  }, [])

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value}
      onChange={handleChange}
      className="max-w-full bg-white"
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        className="basis-1/5"
      />
      <BottomNavigationAction
        label="Certifications"
        value="certifications"
        icon={<VerifiedIcon />}
        className="basis-1/5"
      />
      <BottomNavigationAction
        label="Projects"
        value="projects"
        icon={<WorkIcon />}
        className="basis-1/5"
      />
      <BottomNavigationAction
        label="Articles"
        value="articles"
        icon={<ArticleIcon />}
        className="basis-1/5"
      />
    </BottomNavigation>
  );
}
