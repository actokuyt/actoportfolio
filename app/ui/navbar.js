"use client"

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} className="max-w-full" >
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
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<PersonIcon />}
        className="basis-1/5"
      />
    </BottomNavigation>
  );
}
