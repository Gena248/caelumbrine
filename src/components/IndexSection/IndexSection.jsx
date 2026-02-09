import "./IndexSection.css";

export default function IndexSection({ theme, setTheme, letter, setLetter }) {
  const themes = [
    "All",
    "Characters",
    "Rituals",
    "Locations",
    "Dreams",
    "Symbols",
    "Weapons",
    "Location Feature",
    "Power",
    "Artifact",
    "Environmental",
    "Phenomenon",
  ];
  const alaphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section className="index">
      <div className="index__divider"></div>

      <div className="index__group">
        <h2 className="index__title">Browse by Theme</h2>
        <p className="index__subtitle">
          Filter the archives by ritual category
        </p>

        <div className="index__buttons">
          {themes.map((t) => (
            <button
              key={t}
              className={`index__btn ${theme === t ? "active" : ""}`}
              onClick={() => setTheme(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="index__divider"></div>

      <div className="index__group">
        <h2 className="index__title">Alphabetical Index</h2>
        <p className="index__subtitle">Navigate by first letter</p>

        <div className="index__buttons">
          {alaphabet.map((l) => (
            <button
              key={l}
              className={`index__btn index__btn-alpha ${letter === l ? "active" : ""}`}
              onClick={() => setLetter(letter === l ? "" : l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="index__divider"></div>
    </section>
  );
}
