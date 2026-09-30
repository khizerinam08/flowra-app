import { TitleSlide, ChallengeSlide, ProblemSlide, WhyItMattersSlide, LandscapeSlide } from "./opening";
import { ObjectivesSlide, UsersSlide, HowItWorksSlide, FeaturesSlide, InActionSlide, ArchitectureSlide } from "./solution";
import { ScopeSlide, EvaluationSlide, TimelineSlide, WorkSlide, RisksSlide } from "./plan";
import { SdgSlide, ReferencesSlide, ThanksSlide } from "./closing";

/* Order follows the advisor's FYDP-I outline. word1 + word2 is the split title the
   loader shows on the way into each slide; theme picks the page colour behind the card. */
export const slides = [
  { component: TitleSlide, title: "Title", word1: "DE", word2: "POT", theme: "dark" },
  { component: ChallengeSlide, title: "The challenge", word1: "CHAL", word2: "LENGE", theme: "dark" },
  { component: ProblemSlide, title: "Problem statement", word1: "THE", word2: "GAP", theme: "light" },
  { component: WhyItMattersSlide, title: "Why it matters", word1: "WHY", word2: "NOW", theme: "light" },
  { component: LandscapeSlide, title: "What exists today", word1: "TO", word2: "DAY", theme: "dark" },
  { component: ObjectivesSlide, title: "Objectives", word1: "GO", word2: "ALS", theme: "light" },
  { component: UsersSlide, title: "Users of the system", word1: "US", word2: "ERS", theme: "dark" },
  { component: HowItWorksSlide, title: "How Depot works", word1: "THE", word2: "FLOW", theme: "light" },
  { component: FeaturesSlide, title: "Key features", word1: "FEAT", word2: "URES", theme: "light" },
  { component: InActionSlide, title: "Depot in action", word1: "IN", word2: "ACTION", theme: "dark" },
  { component: ArchitectureSlide, title: "System architecture", word1: "ST", word2: "ACK", theme: "light" },
  { component: ScopeSlide, title: "Scope", word1: "SC", word2: "OPE", theme: "light" },
  { component: EvaluationSlide, title: "How we'll prove it works", word1: "PR", word2: "OOF", theme: "dark" },
  { component: TimelineSlide, title: "Timeline", word1: "TIME", word2: "LINE", theme: "light" },
  { component: WorkSlide, title: "Work division", word1: "TE", word2: "AM", theme: "light" },
  { component: RisksSlide, title: "Risks and safety", word1: "RI", word2: "SKS", theme: "dark" },
  { component: SdgSlide, title: "UN Sustainable Development Goals", word1: "S", word2: "DGS", theme: "light" },
  { component: ReferencesSlide, title: "References", word1: "SOUR", word2: "CES", theme: "light" },
  { component: ThanksSlide, title: "Thank you", word1: "THA", word2: "NKS", theme: "dark" },
];

/* Navbar sections: label → first slide index, active across [from, to]. */
export const sections = {
  left: [
    { label: "Problem", from: 1, to: 4 },
    { label: "Solution", from: 5, to: 9 },
    { label: "System", from: 10, to: 11 },
  ],
  right: [
    { label: "Proof", from: 12, to: 12 },
    { label: "Plan", from: 13, to: 17 },
  ],
};
