import "./globals.css";

export const metadata = {
  title: "Settles My Loan",
  description: "One Solution to all your finical problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
