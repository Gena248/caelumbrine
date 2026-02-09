import { Route, Routes } from "react-router-dom";

import Main from "../Main/Main.jsx";
import BooksPage from "../BooksPage/BooksPage.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </>
  );
}
