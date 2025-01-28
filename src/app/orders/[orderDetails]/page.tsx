const OrderDetails = ({ params }: { params: { orderDetails: string } }) => {
  return (
    <main>
      <h1>Order {params.orderDetails} details</h1>
    </main>
  );
}

export default OrderDetails
