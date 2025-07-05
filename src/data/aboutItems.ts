import AstroSVG from "@/assets/astro-light.svg";
import Bootstrap from "@/assets/bootstrap.svg";
import CSS from "@/assets/css.svg";
import Figma from "@/assets/figma.svg";
import HTML5 from "@/assets/html5.svg";
import JavaScript from "@/assets/javascript.svg";
import React from "@/assets/react.svg";
import Sass from "@/assets/sass.svg";
import ShadCN from "@/assets/shadcn.svg";
import Tailwind from "@/assets/tailwind.svg";
import TypeScript from "@/assets/typescript.svg";
import Vite from "@/assets/vite.svg";
import NodeJS from "@/assets/nodejs.svg";
import npm from "@/assets/npm.svg";
import pnpm from "@/assets/pnpm.svg";
import Java from "@/assets/java.svg";
import MongoDB from "@/assets/mongodb.svg";
import MySQL from "@/assets/mysql.svg";
import VSCode from "@/assets/vscode.svg";
import VisualStudio from "@/assets/visual-studio.svg";
import Neovim from "@/assets/neovim.svg";
import Cursor from "@/assets/cursor.svg";
import AndroidStudio from "@/assets/android-studio.svg";
import { VscCode } from "react-icons/vsc";

type TechnologyEntry = {
  icon: ImageMetadata | "";
  href: string;
  highlight?: boolean;
};

type TechnologyMap = Record<string, TechnologyEntry>;

export const items: TechnologyMap = {
  Astro: {
    icon: AstroSVG,
    href: "https://astro.build/",
    highlight: true,
  },
  Bootstrap: {
    icon: Bootstrap,
    href: "https://getbootstrap.com/",
  },
  CSS: {
    icon: CSS,
    href: "https://en.wikipedia.org/wiki/CSS",
  },
  Figma: {
    icon: Figma,
    href: "https://figma.com/",
  },
  HTML: {
    icon: HTML5,
    href: "https://en.wikipedia.org/wiki/HTML",
  },
  JavaScript: {
    icon: JavaScript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  React: {
    icon: React,
    href: "https://react.dev/",
    highlight: true,
  },
  Sass: {
    icon: Sass,
    href: "https://sass-lang.com/",
  },
  ShadCN: {
    icon: ShadCN,
    href: "https://ui.shadcn.com/",
    highlight: true,
  },
  Tailwind: {
    icon: Tailwind,
    href: "https://tailwindcss.com/",
    highlight: true,
  },
  TypeScript: {
    icon: TypeScript,
    href: "https://www.typescriptlang.org/",
    highlight: true,
  },
  Vite: { icon: Vite, href: "https://vite.dev/", highlight: true },
  NodeJS: { icon: NodeJS, href: "https://nodejs.org" },
  npm: { icon: npm, href: "https://www.npmjs.com/" },
  pnpm: { icon: pnpm, href: "https://pnpn.io/", highlight: true },
  Java: { icon: Java, href: "https://www.java.com/" },
  MongoDB: { icon: MongoDB, href: "https://www.mongodb.com/", highlight: true },
  MySQL: { icon: MySQL, href: "https://www.mysql.com/" },
  "Visual Studio Code": {
    icon: VSCode,
    href: "https://code.visualstudio.com/",
    highlight: true,
  },
  "Visual Studio": {
    icon: VisualStudio,
    href: "https://visualstudio.microsoft.com/",
  },
  Neovim: { icon: Neovim, href: "https://neovim.io/", highlight: true },
  Cursor: { icon: Cursor, href: "https://cursor.com/" },
  "Android Studio": {
    icon: AndroidStudio,
    href: "https://developer.android.com/studio",
  },
  "Genshin Impact": {
    icon: "",
    href: "https://genshin.hoyoverse.com/",
    highlight: true,
  },
  "Zenless Zone Zero": { icon: "", href: "https://zenless.hoyoverse.com/" },
  "Wuthering Waves": {
    icon: "",
    href: "https://store.steampowered.com/app/3513350/Wuthering_Waves/",
    highlight: true,
  },
  "Girls' Frontline 2: Exilium": {
    icon: "",
    href: "https://gf2exilium.sunborngame.com/",
  },
  Arknights: {
    icon: "",
    href: "https://www.arknights.global/",
    highlight: true,
  },
  "Blue Archive": {
    icon: "",
    href: "https://store.steampowered.com/app/3557620/Blue_Archive/",
  },
  "Rocket League": {
    icon: "",
    href: "https://store.epicgames.com/en-US/p/rocket-league",
    highlight: true,
  },
  "Counter Strike 2": {
    icon: "",
    href: "https://store.steampowered.com/app/730/CounterStrike_2/",
  },
  Rematch: {
    icon: "",
    href: "https://store.steampowered.com/app/2138720/REMATCH/",
  },
  OMORI: {
    icon: "",
    href: "https://store.steampowered.com/app/1150690/OMORI/",
    highlight: true,
  },
  "PAYDAY 2": {
    icon: "",
    href: "https://store.steampowered.com/app/218620/PAYDAY_2/",
  },
  "Half-Life": { icon: "", href: "https://www.half-life.com/en/home/" },
  "Hello Charlotte": {
    icon: "",
    href: "https://store.steampowered.com/app/557630/Hello_Charlotte_EP2_Requiem_Aeternam_Deo/",
    highlight: true,
  },
  "Assetto Corsa": {
    icon: "",
    href: "https://store.steampowered.com/app/244210/Assetto_Corsa/",
  },
  "End Roll": {
    icon: "",
    href: "https://vgperson.com/games/endroll.htm",
    highlight: true,
  },
  "NEEDY STREAMER OVERLOAD": {
    icon: "",
    href: "https://store.steampowered.com/app/1451940/NEEDY_GIRL_OVERDOSE/",
    highlight: true,
  },
};
