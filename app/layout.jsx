import TanstackProvider from "@/components/providers/TanstackProvider";
import "./globals.css";

export const metadata = {
  title: "Language learning",
  description: "Connecting You to the World of Knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <TanstackProvider>
          <main>{children}</main>
        </TanstackProvider>
      </body>
    </html>
  );
}
