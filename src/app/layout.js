import "./globals.css";
import WelcomePopup from "@/components/welcome-popup";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Settle Mitra",
  description: "One Solution to all your finical problems",
  icons: {
    icon: "/logowbg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WelcomePopup />
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
