import type { INodeProperties } from 'n8n-workflow';

export const customerPlatformsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'customerPlatform',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: 'Configure Customer Platforms',
				value: 'configureCustomerPlatforms',
				action: 'Configure customer platforms',
				routing: {
					request: {
						method: 'POST',
						url: '=/service-provider/v1/customers/{{$parameter.customerId}}/platforms-configurations',
						body: {
							platformConfigurations: '={{ $parameter.platformConfigurations }}',
						},
					},
				},
			},
			{
				name: 'Get Customer Meter Usages',
				value: 'getCustomerMeterUsages',
				action: 'Get customer meter usages',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/customers/{{$parameter.customerId}}/platforms/{{$parameter.platformId}}/meter-usages',
					},
				},
			},
			{
				name: 'Get Customer Platform Details',
				value: 'getCustomerPlatformDetails',
				action: 'Get customer platform details',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/customers/{{$parameter.customerId}}/platforms/{{$parameter.platformId}}/details',
					},
				},
			},
			{
				name: 'Get Customer Platforms Configurations',
				value: 'getCustomerPlatformsConfigurations',
				action: 'Get customer platforms configurations',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/customers/{{$parameter.customerId}}/platforms-configurations',
					},
				},
			},
		],
		default: 'getCustomerMeterUsages',
	},
];

export const customerPlatformsFields: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customerPlatform'],
				operation: ['getCustomerMeterUsages', 'getCustomerPlatformDetails', 'getCustomerPlatformsConfigurations', 'configureCustomerPlatforms'],
			},
		},
		default: '',
		description: 'The ID of the customer',
	},
	{
		displayName: 'Platform ID',
		name: 'platformId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['customerPlatform'],
				operation: ['getCustomerMeterUsages', 'getCustomerPlatformDetails'],
			},
		},
		default: '',
		description: 'The ID of the platform',
	},
	{
		displayName: 'Platform Configurations',
		name: 'platformConfigurations',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['customerPlatform'],
				operation: ['configureCustomerPlatforms'],
			},
		},
		default: '[{"platformId": "string", "requiredParameters": [{"identifier": "string", "value": "string"}]}]',
		description: 'Array of platform configurations with their required parameters',
	},
];
