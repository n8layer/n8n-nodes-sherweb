import { INodeProperties } from "n8n-workflow";

export const payableChargesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['payableCharge'],
				apiType: ['distributorApi'],
			},
		},
		noDataExpression: true,
		options: [
			{
				name: 'Get Payable Charges',
				value: 'getPayableCharges',
				action: 'Get payable charges',
				routing: {
					request: {
						method: 'GET',
						url: '=/distributor/v1/billing/payable-charges',
						qs: {
							date: '={{ $parameter.date }}',
						},
					},
				},
			},
		],
		default: 'getPayableCharges',
	},
];

export const payableChargesFields: INodeProperties[] = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: '2025-01-01',
		description: 'Format - date (as full-date in RFC3339). Specify a date within the desired billing period. Format: yyyy-MM-dd (UTC). Default: Today. For example, if the date is March 17th and your billing period is from the 1st to the 31st of the month, it will return data from March 1st to March 31st.',
		displayOptions: {
			show: {
				operation: ['getPayableCharges'],
			},
		},
	},
];
