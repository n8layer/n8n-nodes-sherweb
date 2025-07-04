import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class SherwebOAuth2Api implements ICredentialType {
	name = 'sherwebOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Sherweb OAuth2 API';
	documentationUrl = 'https://developers.sherweb.com/apis';
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.sherweb.com/auth/oidc/connect/token',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
		{
			displayName: 'Subscription Key',
			name: 'subscriptionKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'Header',
		},
	];
}