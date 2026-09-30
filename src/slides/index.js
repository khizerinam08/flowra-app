import { TitleSlide, ChallengeSlide, ProblemSlide, LandscapeSlide } from "./opening";
import { ObjectivesSlide, UsersSlide, FeaturesSlide, InActionSlide } from "./solution";
import { ScopeSlide, TimelineSlide, WorkSlide } from "./plan";
import { SdgSlide, ReferencesSlide, ThanksSlide } from "./closing";

/* Order follows the advisor's FYDP-I outline. word1 + word2 is the split title the
   loader shows on the way into each slide; theme picks the page colour behind the card. */
export const slides = [
  { component: TitleSlide, title: "Title", word1: "DE", word2: "POT", theme: "light" },
  { component: ChallengeSlide, title: "The challenge", word1: "CHAL", word2: "LENGE", theme: "dark" },
  { component: ProblemSlide, title: "Problem statement", word1: "THE", word2: "GAP", theme: "light" },
  { component: LandscapeSlide, title: "What exists today", word1: "TO", word2: "DAY", theme: "dark" },
  { component: UsersSlide, title: "Users of the system", word1: "US", word2: "ERS", theme: "dark" },
  { component: ObjectivesSlide, title: "Objectives", word1: "GO", word2: "ALS", theme: "light" },
  { component: FeaturesSlide, title: "Key features", word1: "FEAT", word2: "URES", theme: "light" },
  { component: InActionSlide, title: "Depot in action", word1: "IN", word2: "ACTION", theme: "dark" },
  { component: ScopeSlide, title: "Scope", word1: "SC", word2: "OPE", theme: "light" },
  { component: TimelineSlide, title: "Timeline", word1: "TIME", word2: "LINE", theme: "light" },
  { component: WorkSlide, title: "Work division", word1: "TE", word2: "AM", theme: "light" },
  { component: SdgSlide, title: "UN Sustainable Development Goals", word1: "S", word2: "DGS", theme: "light" },
  { component: ReferencesSlide, title: "References", word1: "SOUR", word2: "CES", theme: "light" },
  { component: ThanksSlide, title: "Thank you", word1: "THA", word2: "NKS", theme: "light" },
];

/* Navbar sections: label → first slide index, active across [from, to]. */
export const sections = {
  left: [
    { label: "Problem", from: 1, to: 3 },
    { label: "Solution", from: 4, to: 7 },
    { label: "Scope", from: 8, to: 8 },
  ],
  right: [
    { label: "Plan", from: 9, to: 12 },
  ],
};
