import "./globals.css";
import WelcomePopup from "@/components/welcome-popup";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export const metadata = {
  title: "Settle Mitra",
  description: "One Solution to all your financial problems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <Head>
        <title>Settle Mitra</title>
        <meta
          name="description"
          content="One Solution to all your financial problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Toaster />
        <WelcomePopup />
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
