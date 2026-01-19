import { useRef } from "react";

import "./Archives.css";
import ArchivesCard from "../ArchivesCard/ArchivesCard.jsx";

export default function Archives({
  entry,
  search,
  randomId,
  theme,
  letter,
  relatedTerm,
}) {
  const searchTerm = search.toLowerCase();

  const filtered = entry.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm);
    const matchesTheme = theme === "All" || e.themes.includes(theme);
    const matchesLetter =
      letter === "" || e.title.charAt(0).toUpperCase() === letter;
    return matchesSearch && matchesTheme && matchesLetter;
  });

  const cardRefs = useRef([]);

  return (
    <section className="archives">
      <h2 className="archives__title">The Archives</h2>
      <p className="archives__count">{filtered.length} entries found</p>

      <div className="archives__list">
        {filtered.map((entry, index) => (
          <ArchivesCard
            key={entry.id}
            entry={entry}
            ref={(card) => (cardRefs.current[index] = card)}
            isOpen={randomId === entry.id}
            relatedTerm={relatedTerm}
          />
        ))}
      </div>
    </section>
  );
}
