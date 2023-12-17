import Navbar from "@/components/navigation/Navbar";
import "../styles/globals.css";
import RqProvider from "@/providers/RqProvider";
import NextAuthSessionProvider from "@/providers/SessionProvider";

export const metadata = {
  title: "Secretary",
  description: "Virtual Secretary",
  keywords: ["secretary", "calendar", "virtual secretary", "appointments"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          <RqProvider>
            <Navbar />
            {children}
          </RqProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
