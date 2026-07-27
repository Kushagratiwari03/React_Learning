import Product from './Product.jsx';

function ProductTab() {
    let options = ["Hi-tech", "Durable"]
    return (
        <>
            <Product title="Phone" price={30000} features={options}/>
            <Product title="Laptop" price={50000}/>
            <Product title="Pen" price={50}/>
        </>
    )
}

export default ProductTab;