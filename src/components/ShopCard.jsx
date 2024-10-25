import PropTypes from "prop-types";

export default function ShopCard(props) {
  const { name, price, color, img } = props;
  return (
    <div className="shop-card">
      <h2>{name}</h2>
      <h4>{color}</h4>
      <div className="shop-img">
        <img src={img} />
      </div>
      <div className="price">
        <p>{`$${price}`}</p>
        <button>Add to card</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
