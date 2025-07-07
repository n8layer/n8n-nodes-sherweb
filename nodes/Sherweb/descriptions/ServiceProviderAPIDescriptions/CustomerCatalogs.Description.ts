import type { INodeProperties } from 'n8n-workflow';

export const customerCatalogsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'customerCatalog',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: "Get Customer Catalog Items Pricing Information",
				value: "getCustomerCatalogItemsPricingInformation",
				action: "Get customer catalog items pricing information",
				routing: {
					request: {
						method: "POST",
						url: '=/service-provider/v1/customer-catalogs/{{$parameter.customerId}}/catalog-items-pricing',
						body: {
							skus: '={{ $parameter.skus }}',
						},
					},
				},
			},
			{
				name: 'Get Customer Catalogs',
				value: 'getCustomerCatalogs',
				action: 'Get customer catalogs',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/customer-catalogs/{{$parameter.customerId}}',
					},
				},
			},
		],
		default: 'getCustomerCatalogs',
	},
];

export const customerCatalogsFields: INodeProperties[] = [
	// Fields for Get Customer Catalogs
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customerCatalog'],
				operation: ['getCustomerCatalogs', 'getCustomerCatalogItemsPricingInformation'],
			},
		},
		default: '',
		description: 'The ID of the customer to get catalogs for',
	},
	{
		displayName: 'SKUs',
		name: 'skus',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['customerCatalog'],
				operation: ['getCustomerCatalogItemsPricingInformation'],
			},
		},
		default: [],
		description: 'Array of SKUs to get pricing information for',
	},
];
