const OrderDetails = ({ params }: { params: { orderDetails: string } }) => {
  return (
    <main className="p-5">
      <h1>Order {params.orderDetails} details</h1>
    </main>
  );
}

export default OrderDetails
