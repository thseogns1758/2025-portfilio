import TopNav from "../comopnents/TopNav";
import { Box } from "@mui/material";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[80%] mx-auto">
      <TopNav />
      <Box className="mt-20">{children}</Box>
    </div>
  );
}
