import { useEffect, useState } from "react";

export function ProductsCard () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC')
    .then((response) => response.json())
    .then((json) => setProducts(json.products))
  }, [])

  console.log(products)
}