import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import "./BooksPage.css";
import { adultBooks, kidsBooks } from "../../utils/books.js";
import Footer from "../Footer/Footer.jsx";

export default function BooksPage() {
  return (
    <section className="books">
      <Link to="/" className="books__logo">
        <Sparkles size={48} />
      </Link>

      <h2 className="books__title">Books by Justine Sears</h2>
      <p className="books__subtitle">A growing collection of mythic works</p>

      <div className="books__section">
        <h3 className="books__section-title">Adult Books</h3>
        <div className="books__section-list">
          {adultBooks.map((book) => (
            <div key={book.title} className="books__card">
              <h4 className="books__card-title">{book.title}</h4>
              <p className="books__card-description">{book.description}</p>
              <p className="books__card-year">{book.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="books__section">
        <h3 className="books__section-title">Children's Books</h3>
        <div className="books__section-list">
          {kidsBooks.map((book) => (
            <div key={book.title} className="books__card">
              <h4 className="books__card-title">{book.title}</h4>
              <p className="books__card-description">{book.description}</p>
              <p className="books__card-year">{book.year}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
