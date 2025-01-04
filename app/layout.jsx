import "./globals.css";

export const metadata = {
  title: "Learning Language",
  description: "Connecting You to the World of Knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
