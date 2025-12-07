import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "배드민턴 대회 캘린더",
    short_name: "BT Calendar",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101014",
  };
};

export default manifest;
