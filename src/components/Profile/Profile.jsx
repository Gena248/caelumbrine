import "./Profile.css";

export default function Profile({ currentUser, savedBooks, onDeleteBook }) {
  return (
    <section className="profile">
      <h2 className="profile__title">Saved Books</h2>

      <p className="profile__info">{currentUser.name}'s liked books</p>

      <h3 className="profile__subtitle">Saved Books</h3>
      <ul className="profile__books">
        {savedBooks?.length === 0 && <li>No saved books yet.</li>}
        {savedBooks?.map((book) => (
          <li key={book.title}>
            {book.title}
            <p className="books__card-description">{book.description}</p>
            <p className="books__card-year">{book.year}</p>
            <button onClick={() => onDeleteBook(book.title)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
