const ordersList = [
  { id: 1, name: 'Order 1' },
  { id: 2, name: 'Order 2' },
  { id: 3, name: 'Order 3' },
  { id: 4, name: 'Order 4' },
  { id: 5, name: 'Order 5' },
  { id: 6, name: 'Order 6' },
];

const Orders = () => {
  return (
    <main className="p-5">
      <h1>Orders page</h1>
      <div className="flex flex-col ">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
          {ordersList.map(order => (
            <a href={`/orders/${order.id}`} key={order.id}>
              <li className="list-none p-5 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow">{order.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Orders
