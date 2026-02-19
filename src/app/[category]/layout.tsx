import TopNav from "../comopnents/TopNav";
import { Box } from "@mui/material";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[92%] sm:w-[88%] lg:w-[80%] mx-auto">
      <TopNav />
      <Box className="mt-10 sm:mt-16 lg:mt-20">{children}</Box>
    </div>
  );
}
