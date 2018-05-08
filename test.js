const someOrder = {
	items: [
		{name: 'dragon food', price:10, quantity: 8},
		{name: 'dragon cage small', price:10, quantity: 12},
		{name: 'shipping', price:40, shipping: true},
	]
}


const orderTotal = order => {

	const tototalItems = 	order.items
	.filter(x => !x.shipping)
	.reduce((prev, cur) => prev + (cur.price * cur.quantity),0)

	const shippingItems = order.items.find(x => !!x.shipping);

	const shipping = tototalItems > 1000 ? 0 : shippingItems.price;

	console.log('total Items:', tototalItems, 'shiiping charge:', shipping)

	return tototalItems + shipping

}
result = orderTotal(someOrder)

console.log(result);