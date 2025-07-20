import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <div className="flex flex-col min-h-screen">
      <Header authenticated={!!userId} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
