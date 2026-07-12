// Creating products component
import "./Product.css";

function Product({ title, price, features = [] }) {
  let isDiscout = price > 30000;
  let styles = { backgroundColor: isDiscout ? "maroon" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      {isDiscout && <p>Discount of 5%</p>}
      <p>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </p>
    </div>
  );
}

export default Product;
