import { useState } from "react";

import Navigation from "../Navigation/Navigation.jsx";
import Header from "../Header/Header.jsx";
import IndexSection from "../IndexSection/IndexSection.jsx";
import Archives from "../Archives/Archives.jsx";
import Footer from "../Footer/Footer.jsx";

import { archiveEntries } from "../../utils/archivesData.js";

export default function Main() {
  const [search, setSearch] = useState("");
  const [randomId, setRandomId] = useState(null);
  const [theme, setTheme] = useState("All");
  const [letter, setLetter] = useState("");

  function randomCard() {
    const random =
      archiveEntries[Math.floor(Math.random() * archiveEntries.length)];
    setRandomId(random.id);

    setTimeout(() => {
      const card = document.getElementById(`entry-${random.id}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
  }

  function relatedTerm(entryId) {
    setRandomId(entryId);

    setTimeout(() => {
      const card = document.getElementById(`entry-${entryId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} randomCard={randomCard} />
      <IndexSection
        theme={theme}
        setTheme={setTheme}
        letter={letter}
        setLetter={setLetter}
      />
      <Archives
        entry={archiveEntries}
        search={search}
        randomId={randomId}
        theme={theme}
        letter={letter}
        relatedTerm={relatedTerm}
      />
      <Footer />
    </>
  );
}
