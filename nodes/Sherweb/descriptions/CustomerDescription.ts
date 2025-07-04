import type { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
			},
		},
		options: [
			{
				name: 'Get Customers',
				value: 'getMany',
				action: 'Get customers',
				routing: {
					request: {
						method: 'GET',
						url: '/service-provider/v1/customers',
					},
				output: {
					postReceive: [
						{
							type: 'rootProperty',
							properties: {
								property: 'items',
							},
						},
					],
				},
			},
			},
		],
		default: 'getMany',
	},
];

