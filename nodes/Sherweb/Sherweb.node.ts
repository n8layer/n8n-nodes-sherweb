import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { customerOperations } from './descriptions/CustomerDescription';
import { customerCatalogsOperations, customerCatalogsFields } from './descriptions/CustomerCatalogs.Description';
import { customerPlatformsOperations, customerPlatformsFields } from './descriptions/CustomerPlatformsDescription';
import { platformsOperations, platformsFields } from './descriptions/PlatformsDescription';
import { subscriptionsOperations, subscriptionsFields } from './descriptions/SubscriptionsDescription';
import { trackingOperations, trackingFields } from './descriptions/TrackingDescription';
import { receivableChargesOperations, receivableChargesFields } from './descriptions/ReceivableChargesDescription';
import { ordersOperations, ordersFields } from './descriptions/OrdersDescription';
import { payableChargesOperations, payableChargesFields } from './descriptions/PayableChargesDescription';

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
				displayName: 'API Type',
				name: 'apiType',
				type: 'options',
				options: [
					{
						name: 'Service Provider API',
						value: 'serviceProviderApi',
					},
					{
						name: 'Distributor API',
						value: 'distributorApi',
					},
				],
				default: 'serviceProviderApi',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						apiType: ['serviceProviderApi'],
					},
				},
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
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						apiType: ['distributorApi'],
					},
				},
				options: [
					{
						name: 'Payable Charge',
						value: 'payableCharge',
					},
				],
				default: 'payableCharge',
			},
			// Operation
			...customerOperations,
			...customerCatalogsOperations,
			...customerPlatformsOperations,
			...platformsOperations,
			...subscriptionsOperations,
			...trackingOperations,
			...receivableChargesOperations,
			...ordersOperations,
			...payableChargesOperations,
			// Fields
			...customerCatalogsFields,
			...customerPlatformsFields,
			...platformsFields,
			...subscriptionsFields,
			...trackingFields,
			...receivableChargesFields,
			...ordersFields,
			...payableChargesFields,
		],
	};
}
