import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React from "react";
import { Router } from "react-router-dom";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grow">
      {children}
    </main>
  );
}