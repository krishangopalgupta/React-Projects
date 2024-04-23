import React, { useEffect, useState } from "react";
import "./LoadMoreProduct.css";

const LoadMoreProducts = () => {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(1);

  async function fetchMoreData() {
    try {
      const fetchData = await fetch(
        `https://dummyjson.com/products?limit=${skip * 50}`
      );
      const res = await fetchData.json();
      console.log(res.products.length);
      setData(res.products);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchMoreData();
  }, [skip]);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {data && data.length
          ? data.map((item) => {
              return (
                <>
                  <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                </>
              );
            })
          : null}
      </div>
      <button onClick={() => setSkip(skip + 1)}>
        {data.length === 100
          ? "Hurray You reached the end!"
          : "Load More Products"}
      </button>
    </div>
  );
};

export default LoadMoreProducts;
