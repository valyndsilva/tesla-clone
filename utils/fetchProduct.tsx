const fetchProduct = async (slug) => {
  const productsResponse = await fetch(
    `http://localhost:3000/api/product/${slug}`
  );
  const productsData = await productsResponse.json();
  //   console.log(productsData);
  return productsData;
};
export default fetchProduct;
