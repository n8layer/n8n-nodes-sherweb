import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class SherwebOAuth2Api implements ICredentialType {
	name = 'sherwebOAuth2Api';
	displayName = 'Sherweb API';
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
	];
}