import { useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([
    {
      id: 1,
      nome: "Fortaleza Digital",
      descricao:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      capa:
        "https://opiniaobomvaleapena.com.br/imagens/livro-fortaleza-digital.png",
    },
  ]);
  return (
    <section className="container">
      <div className="row">
        {books.map((book) => {
          return (
            <div className="col-md-3">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={book.capa}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.nome}</h5>
                  <p className="card-text">{book.descricao}</p>
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
