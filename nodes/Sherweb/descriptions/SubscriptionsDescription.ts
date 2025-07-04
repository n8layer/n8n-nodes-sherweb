import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				apiType: ['serviceProviderApi'],
			},
		},
		options: [
			{
				name: 'Cancel Subscriptions',
				value: 'cancelSubscriptions',
				action: 'Cancel subscriptions',
				routing: {
					request: {
						method: 'POST',
						url: '=/service-provider/v1/billing/subscriptions/cancellations',
						qs: {
							customerId: '={{ $parameter.customerId }}',
						},
						body: {
							subscriptionIds: '={{ $parameter.subscriptionIds }}',
						},
					},
				},
			},
			{
				name: 'Create Subscriptions Amendment',
				value: 'createSubscriptionsAmendment',
				action: 'Create subscriptions amendment',
				routing: {
					request: {
						method: 'POST',
						url: '=/service-provider/v1/billing/subscriptions/amendments',
						qs: {
							customerId: '={{ $parameter.customerId }}',
						},
						body: {
							subscriptionAmendmentParameters: '={{ $parameter.subscriptionAmendmentParameters }}',
						},
					},
				},
			},
			{
				name: 'Get Customer Subscription Details',
				value: 'getCustomerSubscriptionDetails',
				action: 'Get customer subscription details',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/billing/subscriptions/details',
						qs: {
							customerId: '={{ $parameter.customerId }}',
						},
					},
				},
			},
			{
				name: 'Get Customer Subscription Meters',
				value: 'getCustomerSubscriptionMeters',
				action: 'Get customer subscription meters',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/billing/subscriptions/meters',
						qs: {
							customerId: '={{ $parameter.customerId }}',
							platformId: '={{ $parameter.platformId }}',
						},
					},
				},
			},
			{
				name: 'Get Customer Subscription Pricing',
				value: 'getCustomerSubscriptionPricing',
				action: 'Get customer subscription pricing',
				routing: {
					request: {
						method: 'GET',
						url: '=/service-provider/v1/billing/subscriptions/pricing-information',
						qs: {
							customerId: '={{ $parameter.customerId }}',
						},
					},
				},
			}
		],
		default: 'getCustomerSubscriptionMeters',
	},
];

export const subscriptionsFields: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['getCustomerSubscriptionMeters', 'getCustomerSubscriptionDetails', 'getCustomerSubscriptionPricing', 'cancelSubscriptions', 'createSubscriptionsAmendment'],
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
				resource: ['subscription'],
				operation: ['getCustomerSubscriptionMeters'],
			},
		},
		default: '',
		description: 'The ID of the platform',
	},
	{
		displayName: 'Subscription IDs',
		name: 'subscriptionIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['cancelSubscriptions'],
			},
		},
		default: '',
		description: 'The IDs of the subscriptions to cancel',
	},
	{
		displayName: 'Subscription Amendment Parameters',
		name: 'subscriptionAmendmentParameters',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['subscription'],
				operation: ['createSubscriptionsAmendment'],
			},
		},
		default: '[{"subscriptionId": "string", "newQuantity": 0}]',
		description: 'The parameters for the subscription amendment',
	},
];
