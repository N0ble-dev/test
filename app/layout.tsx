import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <NavBar />
        <section className=" pt-36 pb-20 lg:pt-52">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
