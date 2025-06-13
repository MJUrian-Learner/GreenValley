import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import { HeaderHeightProvider } from "@/providers/header-height";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeaderHeightProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </HeaderHeightProvider>
  );
}
