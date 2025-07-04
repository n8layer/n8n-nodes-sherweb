import type { INodeProperties } from 'n8n-workflow';

export const receivableChargesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'receivableCharge',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: 'Get Receivable Charges',
				value: 'getReceivableCharges',
				action: 'Get receivable charges',
				routing: {
					request: {
						method: 'GET',
						url: '/service-provider/v1/billing/receivable-charges',
						qs: {
							customerId: '={{ $parameter.customerId }}',
							date: '={{ $parameter.date }}',
						},
					},
				},
			},
		],
		default: 'getReceivableCharges',
	},
];

export const receivableChargesFields: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['receivableCharge'],
				operation: ['getReceivableCharges'],
			},
		},
		default: '',
		description: 'The ID of the customer',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['receivableCharge'],
				operation: ['getReceivableCharges'],
			},
		},
		default: '',
		description: 'Format - date (as full-date in RFC3339). Specify any date Format: yyyy-MM-dd (UTC). The date will return the charges of either (a) the associated (and invoiced) billing period within which the specified date falls, or (b) the most recent invoiced charges for the last billing period. See the periodFrom and periodTo in your results to verify which billing period you have queried.',
	},
];
