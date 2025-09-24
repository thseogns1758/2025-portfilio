import TopNav from "../comopnents/TopNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[80%] mx-auto">
      <TopNav />
      {children}
    </div>
  );
}
