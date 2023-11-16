import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import logoImg from "../images/lighthouse_logo.png";

const cards = [...Array(28)].map((_, i) => ({
  id: i,
  content: `Card ${i + 1}`,
}));

const Tour = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 14;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="App">
        <img className="Logoimg" src={logoImg} alt="Logo" />

        <Link to="/Reservation">
          <h1>RESERVA AHORA!</h1>
        </Link>

        <div className="card-grid">
          {currentCards.map((card) => (
            <div className="card" key={card.id}>
              {card.content}
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />

        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(cards.length / cardsPerPage)}
          >
            Next
          </button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Tour;
