import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

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
				name: 'SherwebOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.sherweb.com',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
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
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},
		],
	};
}
