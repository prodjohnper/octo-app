
const ProductDetails = ({ params }: { params: { productDetails: string } }) => {
  return (
    <main className="p-5">
      <h1>Product {params.productDetails} details</h1>
    </main>
  );
}

export default ProductDetails
