import type { INodeProperties } from 'n8n-workflow';

export const trackingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'tracking',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: 'TrackRequest',
				value: 'trackRequest',
				action: 'Track request',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/tracking/{{$parameter.trackingId}}',
					},
				},
			},
		],
		default: 'trackRequest',
	},
];

export const trackingFields: INodeProperties[] = [
	{
		displayName: 'Tracking ID',
		name: 'trackingId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['tracking'],
				operation: ['trackRequest'],
			},
		},
		default: '',
		description: 'The ID of the tracking request',
	},
];
