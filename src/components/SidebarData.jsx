import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";

import HomeIcon from "@mui/icons-material/Home";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
import MailIcon from "@mui/icons-material/Mail";
import ImageIcon from "@mui/icons-material/Image";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Analytics",
    icon: <AssessmentIcon />,
    link: "/analytics",
  },
  {
    title: "MailBox",
    icon: <MailIcon />,
    link: "/mailicon",
  },
  {
    title: "Images",
    icon: <ImageIcon />,
    link: "/images",
  },
  {
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
];
