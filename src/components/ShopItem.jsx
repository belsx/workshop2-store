import PropTypes from "prop-types";

export default function ShopItem(props) {
  const { name, price, color, img } = props;
  return (
    <div className="shop-item">
      <img src={img} />
      <h2>{name}</h2>
      <h4>{color}</h4>
      <p>{`$${price}`}</p>
      <button>Add to card</button>
    </div>
  )
}

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};