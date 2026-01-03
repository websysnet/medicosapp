import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Componentes/NavBar.jsx";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medicos App",
  description: "Medicos app en nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
