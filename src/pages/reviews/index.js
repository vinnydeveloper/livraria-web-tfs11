import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../../services/bookApi";

export default function Reviews() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getBookById(id);
      console.log(data);
      setBook(data);
    };

    getData();
  }, [id]);
  return (
    <div className="container">
      <div className="row bg-light">
        <div className="col-md-4 ">
          <img
            className="w-75"
            src="http://books.google.com/books/content?id=aN0PEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          />
        </div>
        <div className="col-md-8">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Titulo do livro</h1>
              <p className="lead">
                Harry Potter fans of all ages will enjoy these fifteen
                sticker-puzzle challenges! Follow Harry, Hermione, Ron, and your
                favorite wizards through the halls of Hogwarts and learn what it
                takes to be a hero. Each sticker puzzle spread features a
                signature trait a wizard must have: courage, cleverness,
                loyalty, resilience, and more. The fifteen puzzles feature more
                than 100 stickers each to create memorable scenes from the Harry
                Potter films. Fans of all ages will relive the magic of the
                films as they complete each puzzle.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h1>Mais informações</h1>
        </div>
        <div className="col-12">
          <ul className="list-group">
            <li className="list-group-item">
              <b>Data de Publicação:</b>
            </li>
            <li className="list-group-item">
              <b>Editora:</b>
            </li>
            <li className="list-group-item">
              <b>Nota:</b>
            </li>
            <li className="list-group-item">
              <b>Lançamento:</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
