import type { INodeProperties } from 'n8n-workflow';

export const ordersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'orders',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: 'Place Order',
				value: 'placeOrder',
				action: 'Place order',
				routing: {
					request: {
						method: 'POST',
						url: '/service-provider/v1/orders',
						qs: {
							customerId: '={{ $parameter.customerId }}',
						},
						body: {
							cartItems: '={{ $parameter.cartItems }}',
							orderedBy: '={{ $parameter.orderedBy }}',
						},
					},
				},
			},
			{
				name: 'Validate Place Order',
				value: 'validatePlaceOrder',
				action: 'Validate place order',
				routing: {
					request: {
						method: 'POST',
						url: '/service-provider/v1/orders/validate',
						qs: {
							customerId: '={{ $parameter.customerId }}',
						},
						body: {
							cartItems: '={{ $parameter.cartItems }}',
							orderedBy: '={{ $parameter.orderedBy }}',
						},
					},
				},
			},
		],
		default: 'placeOrder',
	},
];

export const ordersFields: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['orders'],
				operation: ['placeOrder', 'validatePlaceOrder'],
			},
		},
		default: '',
		description: 'The ID of the customer',
	},
	{
		displayName: 'Cart Items',
		name: 'cartItems',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['orders'],
				operation: ['placeOrder', 'validatePlaceOrder'],
			},
		},
		default: '[{"sku": "string", "quantity": 0}]',
		description: 'Array of cart items with SKU and quantity',
	},
	{
		displayName: 'Ordered By',
		name: 'orderedBy',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['orders'],
				operation: ['placeOrder', 'validatePlaceOrder'],
			},
		},
		default: '',
		description: 'The person or entity placing the order',
	},
];
