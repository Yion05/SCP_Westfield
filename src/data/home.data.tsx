import { FiArrowDownCircle } from "react-icons/fi";
import type { AccordionProp, linkFormat } from "../types/types";
import { image_asset } from "./asset.location";

export const homeSlide = [
  <img
    src={image_asset["wallpapers"][0]}
    alt={image_asset["wallpapers"][0]}
    className="w-full h-64 object-cover"
  />,
  <img
    src={image_asset["wallpapers"][1]}
    alt={image_asset["wallpapers"][1]}
    className="w-full h-64 object-cover"
  />,
  <img
    src={image_asset["wallpapers"][2]}
    alt={image_asset["wallpapers"][2]}
    className="w-full h-64 object-cover"
  />,
  <img
    src={image_asset["wallpapers"][3]}
    alt={image_asset["wallpapers"][3]}
    className="w-full h-64 object-cover"
  />,
  <img
    src={image_asset["wallpapers"][4]}
    alt={image_asset["wallpapers"][4]}
    className="w-full h-64 object-cover"
  />,
];

export const accordionData: AccordionProp[] = [
  {
    title: "Companion History",
    content: "Fu Hua and Senti...",
    image: image_asset["wallpapers"][3],
  },
  {
    title: "Our Hobbies",
    content: [
      "Cycling.",
      "Grocery.",
      "Tea Party."
    ],
    image: image_asset["wallpapers"][0],
  },
  {
    title: "About Me",
    content: "I LOVE FU HUA!",
    image: image_asset["logo"],
    customArrow: <FiArrowDownCircle size={24} className="text-slate-indigo" />
  }
];

export const collapseData = [
  { title: "Our height", content: "165cm but for american, that's around 5'4." },
  { title: "My divine key", content: "The Fenghuang Down" },
  { title: "Did we travel to the edge of the solar system.", content: "Yes...unintentionally" }
];

export const profileLinks: linkFormat[] = [
  { header: "View Profile", link: "/profile" },
  { header: "Account Settings", link: "/settings" },
  { header: "Subscription", link: "/billing" },
  { header: "Log Out", link: "/logout", hasDivider: true }, // This will have a line above it
];