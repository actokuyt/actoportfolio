"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { WebDevProjectsCard, CvProjectsCard } from "../ui/cards";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProjectTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%"}} className="flex flex-col items-center">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="gap-x-4"
        >
          <Tab label="Web Dev Projects" {...a11yProps(0)} className="mr-4" />
          <Tab label="Computer Vision Projects" {...a11yProps(1)} className="mr-4" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="mt-2" >
        <WebDevProjectsCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="mt-2"  >
        <CvProjectsCard />
      </CustomTabPanel>
    </Box>
  );
}
