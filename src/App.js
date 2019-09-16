import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList.js";


export default function App() {
  return (
    <main>
      <Header />
      <EpisodeList />
      {/* <TabNav /> */}
    </main>
  );
}
