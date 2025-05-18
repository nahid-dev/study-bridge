import TanstackProvider from "@/components/providers/TanstackProvider";
import "./globals.css";
import Toast from "@/components/Toast";
import MobxProvider from "@/components/providers/MobxProvider";

export const metadata = {
  title: "Language learning",
  description: "Connecting You to the World of Knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MobxProvider>
          <TanstackProvider>
            <Toast />
            <main>{children}</main>
          </TanstackProvider>
        </MobxProvider>
      </body>
    </html>
  );
}
