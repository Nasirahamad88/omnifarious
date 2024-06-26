import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WELCOME TO OMNIFARIOUS INC",
  description: "Generated by WebHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
