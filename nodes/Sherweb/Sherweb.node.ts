import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { customerOperations } from './descriptions/CustomerDescription';

export class Sherweb implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sherweb',
		name: 'sherweb',
		icon: 'file:Sherweb.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Sherweb API',
		defaults: {
			name: 'Sherweb',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'sherwebOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.sherweb.com',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Ocp-Apim-Subscription-Key': '={{$credentials.subscriptionKey}}',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Customer Catalog',
						value: 'customerCatalog',
					},
					{
						name: 'Customer Platform',
						value: 'customerPlatform',
					},
					{
						name: 'Order',
						value: 'orders',
					},
					{
						name: 'Payable Charge',
						value: 'payableCharge',
					},
					{
						name: 'Platform',
						value: 'platform',
					},
					{
						name: 'Receivable Charge',
						value: 'receivableCharge',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
					{
						name: 'Tracking',
						value: 'tracking',
					},
				],
				default: 'customer',
			},
			// Operation
			...customerOperations,
		],
	};
}
