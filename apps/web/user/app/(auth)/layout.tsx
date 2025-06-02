import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      suppressHydrationWarning
      className="flex h-screen w-screen items-center justify-center"
    >
      {children}
    </div>
  );
}
