import type { INodeProperties } from 'n8n-workflow';

export const platformsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'platform',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: 'Get Platforms',
				value: 'getPlatforms',
				action: 'Get platforms',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/platforms',
					},
					output: {
						postReceive: [
							{
								type: 'setKeyValue',
								properties: {
									extractedPlatforms: '={{ $parameter.extractPlatforms ? $response.body.platforms : [$response.body] }}',
								},
							},
							{
								type: 'rootProperty',
								properties: {
									property: 'extractedPlatforms',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Platform For Skus',
				value: 'getPlatformForSkus',
				action: 'Get platform for skus',
				routing: {
					request: {
						method: 'POST',
						url: '=/service-provider/v1/platforms/platform-for-skus',
						body: {
							skus: '={{ $parameter.skus.split(",") }}',
						},
					},
				},
			},
			{
				name: 'Get Platform Required Parameters',
				value: 'getPlatformRequiredParameters',
				action: 'Get platform required parameters',
				routing: {
					request: {
						method: 'POST',
						url: '=/service-provider/v1/platforms/required-parameters',
						body: {
							platformIds: '={{ $parameter.platformIds.split(",") }}',
						},
					},
				},
			},
		],
		default: 'getPlatforms',
	},
];

export const platformsFields: INodeProperties[] = [
	{
		displayName: 'Platform IDs',
		name: 'platformIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['platform'],
				operation: ['getPlatformRequiredParameters'],
			},
		},
		default: '',
		description: 'Array of platform IDs to get required parameters for',
	},
	{
		displayName: 'Extracted Platforms',
		name: 'extractedPlatforms',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				resource: ['platform'],
				operation: ['getPlatforms'],
			},
		},
		default: [],
		description: 'Array of platforms',
	},
	{
		displayName: 'Extract Platforms',
		name: 'extractPlatforms',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['platform'],
				operation: ['getPlatforms'],
			},
		},
		default: false,
		description: 'Whether to extract the platforms from the response',
	},
	{
		displayName: 'SKUs',
		name: 'skus',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['platform'],
				operation: ['getPlatformForSkus'],
			},
		},
		default: '',
		description: 'Array of SKUs',
	},
	// {
	// 	displayName: 'Customer ID',
	// 	name: 'customerId',
	// 	type: 'string',
	// 	required: true,
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['platform'],
	// 			operation: ['getPlatforms'],
	// 		},
	// 	},
	// 	default: '',
	// 	description: 'The ID of the customer',
	// },
];
