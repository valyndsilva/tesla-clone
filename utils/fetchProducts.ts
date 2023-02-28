const fetchProducts = async () => {
  const productsResponse = await fetch(
    `http://localhost:3000/api/products`
  );
  const productsData = await productsResponse.json();

  console.log(productsData);
  return productsData;
};
export default fetchProducts;
