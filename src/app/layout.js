import "./globals.css";
import LoaderWrapper from "../components/LoaderWrapper";

export const metadata = {
  title: "Flowra — Agentic Agile Orchestration & Performance Verification",
  description: "Flowra is an intelligent orchestration platform that eliminates manual Agile management friction through AI-powered synchronization. SE Project — Group 3, Section C.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LoaderWrapper>
          {children}
        </LoaderWrapper>
      </body>
    </html>
  );
}
