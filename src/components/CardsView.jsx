import ShopCard from "./ShopCard";
import PropTypes from "prop-types";

export default function CardsView({ cards }) {
  return (
    <div className="card-view">
      {cards.map((card, index) => (
        <ShopCard key={index} {...card}/>
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};



