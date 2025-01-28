const productsList = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
];

const Products = () => {
  return (
    <main className="p-5">
      <h1>Products page</h1>
      <div className="flex flex-col ">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
          {productsList.map(product => (
            <a href={`/products/${product.id}`} key={product.id}>
              <li className="list-none p-5 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow">{product.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Products
