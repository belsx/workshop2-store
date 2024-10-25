import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

export default function ListView({ cards }) {
  return (
    <div className="list-view">
      {cards.map((card, index) => (
        <ShopItem key={index} {...card} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
