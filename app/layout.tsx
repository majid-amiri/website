import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import cx from "classnames";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Majid Amiri - Senior Software Engineer & Web Development Instructor",
  description:
    "Personal website of Majid Amiri, Senior Software Engineer & Web Development Instructor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className)}>{children}</body>
    </html>
  );
}
