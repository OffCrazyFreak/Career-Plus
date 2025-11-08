import localFont from "next/font/local";

export const uniZg = localFont({
  src: [
    {
      path: "../../public/fonts/UniZGLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/UniZgLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/UniZGMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/UniZgMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/UniZgBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/UniZgBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-unizg",
});

export const uniZgDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/UnizgDisplay Normal.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/UnizgDisplay Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/UnizgDisplay Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-unizg-display",
});
