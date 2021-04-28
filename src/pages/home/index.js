import { useState, useEffect } from "react";
import { getBooks } from "../../services/bookApi";
export default function Home() {
  const [books, setBooks] = useState([]);

  const [pesquisa, setPesquisa] = useState("harry");
  //fazer algo no começo da renderização do compente
  useEffect(() => {
    const booksData = async () => {
      const data = await getBooks("harry");

      console.log(data);
      setBooks([...books, ...data.items]);
    };

    booksData();
  }, []);

  useEffect(() => {
    console.log(pesquisa);
    const booksData = async () => {
      if (!pesquisa) {
        return;
      }
      const data = await getBooks(pesquisa);

      console.log(data);
      setBooks(data.items);
    };

    booksData();
  }, [pesquisa]);

  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h2>Busca</h2>
          <input
            type="text"
            value={pesquisa}
            onChange={(event) => {
              setPesquisa(event.target.value);
            }}
          />
        </div>
        {books.map((book) => {
          return (
            <div className="col-md-3">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <p className="card-text">{book.volumeInfo.description}</p>
                  <a href="#" className="btn btn-primary">
                    Ver reviews
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
