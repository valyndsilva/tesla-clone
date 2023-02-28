import React from "react";
import { Header, Product } from "../../components";
import fetchProducts from "../../utils/fetchProducts";

type Props = {
  product: IProduct;
  urlSlug: string;
};

function ProductSlug({ product, urlSlug }: Props) {
  // console.log(product);
  // console.log({ urlSlug });

  return (
    <>
      <Header slug={urlSlug} />
      <div className="flex flex-col items-center">
        <Product
          slug={urlSlug}
          title={product.title}
          description={product.description}
          backgroundImg={product.backgroundImg}
          col1Text={product.col1Text}
          col1Desc={product.col1Desc}
          col2Text={product.col2Text}
          col2Desc={product.col2Desc}
          col3Text={product.col3Text}
          col3Desc={product.col3Desc}
          col4Text={product.col4Text}
          col4Desc={product.col4Desc}
          btnText={product.btnText}
        />
      </div>
    </>
  );
}

export default ProductSlug;

export async function getServerSideProps({
  params,
}: {
  params: { slug: string };
}) {
  const productsData = await fetchProducts();
  const parsedProducts = JSON.parse(productsData);
  const slug = params.slug;
  const productData = parsedProducts?.find((product) => product.slug === slug);
  console.log(productData);
  return {
    props: {
      product: productData,
      urlSlug: slug,
    },
  };
}