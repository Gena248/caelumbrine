import { forwardRef, useState, useEffect } from "react";

import "./ArchivesCard.css";
import { archiveEntries } from "../archivesData.js";

const ArchivesCard = forwardRef(function ArchivesCard(
  { entry, isOpen, relatedTerm },
  ref,
) {
  const [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  function handleRelatedTerm(term) {
    const match = archiveEntries.find(
      (entry) => entry.title.toLowerCase() === term.toLowerCase(),
    );
    if (match) {
      relatedTerm(match.id);
    }
  }

  return (
    <div
      id={`entry-${entry.id}`}
      className={`card ${open ? "card__open" : ""}`}
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      {/* //// */}
      <h3 className="card__title">{entry.title}</h3>
      {!open && (
        <p className="card__preview">{entry.DEFINITION.slice(0, 120)}...</p>
      )}
      {/* //// */}
      {open && (
        <div className="card__content">
          <p className="card__definition">{entry.DEFINITION}</p>

          <div className="card__section">
            <h4 className="card__section-title">Etymology</h4>
            <p className="card__section-definition">{entry.etymology}</p>
          </div>

          <div className="card__section">
            <h4 className="card__section-title">Ritual Context</h4>
            <p className="card__section-definition">{entry.ritualContext}</p>
          </div>

          <div className="card__section">
            <h4 className="card__section-title">Related Terms</h4>
            <div className="card__related">
              {entry.relatedTerms.map((term) => (
                <button
                  key={term}
                  className="card__related-btn"
                  onClick={() => handleRelatedTerm(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div className="card__section">
            <h4 className="card__section-title">Themes</h4>
            <div className="card__themes">
              {entry.themes.map((theme) => (
                <span key={theme} className="card__theme">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default ArchivesCard;
