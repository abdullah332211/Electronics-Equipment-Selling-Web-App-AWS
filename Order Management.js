exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  try {
    const orderParams = {
      TableName: 'Orders',
      Item: {
        orderId: body.orderId,
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity,
        totalAmount: body.totalAmount,
        status: 'Processing',
        createdAt: new Date().toISOString(),
      },
    };

    await dynamoDb.put(orderParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Order placed successfully' }),
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
