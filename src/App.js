import { useState } from "react";
import BookList from "./BookList";
import Button from "./components/Button";
import FormAddBook from "./components/FormAddBook";
import Title from "./components/Title";
import TitleH2 from "./components/TitleH2";


function App() {

  const [addNewBook, addBook] = useState(false)

  const buttonLabel = addNewBook ? "Fermer l'ajout" : "Ajouter";

  const handleAddBook = () => {
    addBook(!addNewBook);
  }

  return (
    <div className="container">
      <Title>Pages listant les livres</Title>
      <BookList />
      <FormAddBook addNewBook={addNewBook} />
      <Button btnType="btn-success w-100" clic={handleAddBook}>{buttonLabel}</Button>
    </div>
  );
}

export default App;
