import { TitleSlide, StatsSlide, GapSlide } from "./opening";
import { CompetitorsSlide, ComparisonSlide, WhatIsCKSlide, HowItWorksSlide, WhyBetterSlide } from "./solution";
import { TechStackSlide, ArchitectureSlide, TimelineSlide } from "./plan";
import { SdgSlide, BusinessSlide, ReferencesSlide, ThanksSlide } from "./closing";

/* word1 + word2 is the split title the loader shows on the way into each slide;
   theme picks the page colour behind the card (light slides sit on black). */
export const slides = [
  { component: TitleSlide, title: "Title", word1: "CAREER", word2: "KONNECT", theme: "light" },
  { component: StatsSlide, title: "The crisis", word1: "THE", word2: "CRISIS", theme: "light" },
  { component: GapSlide, title: "The gap", word1: "THE", word2: "GAP", theme: "light" },
  { component: CompetitorsSlide, title: "Three platforms", word1: "TO", word2: "DAY", theme: "light" },
  { component: ComparisonSlide, title: "None solve it all", word1: "COM", word2: "PARE", theme: "light" },
  { component: WhatIsCKSlide, title: "What is CareerKonnect", word1: "WHAT", word2: "IS CK", theme: "light" },
  { component: HowItWorksSlide, title: "How it works", word1: "HOW", word2: "IT WORKS", theme: "light" },
  { component: WhyBetterSlide, title: "Why it's different", word1: "WHY", word2: "BETTER", theme: "light" },
  { component: TechStackSlide, title: "Tech stack", word1: "TECH", word2: "STACK", theme: "light" },
  { component: ArchitectureSlide, title: "Architecture", word1: "ARCHI", word2: "TECTURE", theme: "light" },
  { component: TimelineSlide, title: "Timeline", word1: "TIME", word2: "LINE", theme: "light" },
  { component: SdgSlide, title: "UN Sustainable Development Goals", word1: "S", word2: "DGS", theme: "light" },
  { component: BusinessSlide, title: "Business plan", word1: "BUSI", word2: "NESS", theme: "light" },
  { component: ReferencesSlide, title: "References", word1: "SOUR", word2: "CES", theme: "light" },
  { component: ThanksSlide, title: "Thank you", word1: "THA", word2: "NKS", theme: "light" },
];

/* Navbar sections: label → first slide index, active across [from, to]. */
export const sections = {
  left: [
    { label: "Problem", from: 1, to: 2 },
    { label: "Competitors", from: 3, to: 4 },
    { label: "Solution", from: 5, to: 7 },
  ],
  right: [
    { label: "Tech", from: 8, to: 10 },
    { label: "Impact", from: 11, to: 12 },
  ],
};
