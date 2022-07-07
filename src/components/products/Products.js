import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Products.css"; 
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
 
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(''); 

 // console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      //  console.log(filter);
    };
    getProducts();
    
  }, []);
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const searchProduct = (search) => {
     const updatedList = data.filter((x) => x.includes(search));
     setFilter(updatedList);
    console.log(updatedList);
    console.log(search);
  };
  const addToCart = (product) => {
    console.log(product);
    dispatch(
      cartActions.addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
      })
    );
  };
  const Loading = () => {
    return (
      <>
        <h5>......Loading</h5>
      </>
    );
  };

  return (
    <div className="products_page">
      <div className="products_header">
        <h3 className="product_title">High Range of Products</h3>
        <div className="search" onSubmit={searchProduct}><input type="text" placeholder="Search Products" onChange={(e) => setSearch(e.target.value)}  /></div>
        <div className="btn_group">
          <Button variant="outlined" onClick={() => setFilter(data)}>
            All
          </Button>
          <Button
            variant="outlined"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            variant="outlined"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
            variant="outlined"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </Button>
          <Button variant="outlined" onClick={() => filterProduct("jewelery")}>
            Jewelry
          </Button>
        </div>
        <hr />
        {loading ? (
          <Loading />
        ) : (
          <>
            {" "}
            <div className="products-container">
              {filter.filter((prod) => {
                if (search === "") {
                  return prod
                } else if (prod.title.toLowerCase().includes(search.toLowerCase())) {
                  return prod
                } 
              }).map((product) => {
                return (
                  <div key={product.id}>
                    <div className="card">
                      <img
                        to={`/product/${product.id}`}
                        src={product.image}
                        alt={product.title}
                      />

                      <h5>{product.title}</h5>
                      <p>₹ {product.price}</p>
                      <button onClick={() => addToCart(product)}>
                        {" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
