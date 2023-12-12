import Navbar from "@/components/navigation/Navbar";
import "../styles/globals.css";
export const metadata = {
  title: "Secretary",
  description: "Virtual Secretary",
  keywords: ["secretary", "calendar", "virtual secretary", "appointments"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
