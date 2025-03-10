"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Emporium from "./pages/emporium/Emporium";
import Library from "./pages/library/Library";
import Studio from "./pages/studio/Studio";
import Ocoin from "./pages/ocoin/Ocoin";
import ProfileBar from "./pages/ProfileBar";
import "./globals.css";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  let ActiveComponent;
  switch (activePage) {
    case "dashboard":
      ActiveComponent = Dashboard;
      break;
    case "emporium":
      ActiveComponent = Emporium;
      break;
    case "library":
      ActiveComponent = Library;
      break;
    case "studio":
      ActiveComponent = Studio;
      break;
    case "ocoin":
      ActiveComponent = Ocoin;
      break;
    default:
      ActiveComponent = Dashboard;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      sx={{
        background:
          "linear-gradient(to bottom, #171029, #192336, #2A1D3C, #2C2239, #1E122A)",
        color: "#fff",
      }}
      width="100%"
    >
      <Sidebar setActivePage={setActivePage} />

      <Box gridColumn="span 8" width="100%" ml={"20%"} p={2}>
        <ActiveComponent />
      </Box>

      <ProfileBar />
    </Box>
  );
}
