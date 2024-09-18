"use client";

import clsx from "clsx";
import Header from "../header";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={clsx("w-full", isMenuOpen && "fixed")}>
      <Header
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
        showNav={isMenuOpen}
      />
      {children}
    </main>
  );
}
