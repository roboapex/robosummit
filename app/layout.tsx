import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/motion-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SST RoboSummit — Planetary Pioneers",
  description:
    "SST RoboSummit is the School of Science and Technology's flagship student robotics competition. This season: Planetary Pioneers. Form a crew, build your machine, claim the frontier.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-snow">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
