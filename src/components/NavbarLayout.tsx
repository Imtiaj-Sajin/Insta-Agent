"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Messages from "./Messages";
import Settings from "./Settings";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedContent, setSelectedContent] = useState("home");

  const renderContent = () => {
    switch (selectedContent) {
      case "home":
        return <div>Home Content</div>;
      case "search":
        return <div>Search Content</div>;
      case "messages":
        return <Messages/>;
      case "profile":
        return <div>Profile Content</div>;
      case "settings":
        return <Settings/>;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="app">
      <Navbar onSelect={setSelectedContent} />
      <main className="content">
        {renderContent()}
        {children}
      </main>
    </div>
  );
}
