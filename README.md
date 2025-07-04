# n8n-nodes-sherweb

This is an n8n community node. It lets you use Sherweb in your n8n workflows.

Sherweb is a cloud solutions provider that offers a range of services including email hosting, cloud servers, and collaboration tools.


[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)   

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following operations:

### Customers
- **Get Customers**: Retrieve a list of all customers.

### Customer Catalogs
- **Get Customer Catalog Items Pricing Information**: Retrieve pricing information for customer catalog items.
- **Get Customer Catalogs**: Retrieve a list of customer catalogs.

### Customer Platforms
- **Configure Customer Platforms**: Configure platforms for a customer.
- **Get Customer Meter Usages**: Retrieve meter usages for a customer's platform.
- **Get Customer Platform Details**: Retrieve details for a customer's platform.
- **Get Customer Platforms Configurations**: Retrieve platform configurations for a customer.

### Orders
- **Place Order**: Place a new order.
- **Validate Place Order**: Validate an order before placing it.

### Platforms
- **Get Platforms**: Retrieve a list of platforms.
- **Get Platform For Skus**: Retrieve platform information for specific SKUs.
- **Get Platform Required Parameters**: Retrieve required parameters for platforms.

### Receivable Charges
- **Get Receivable Charges**: Retrieve receivable charges for a customer.

### Subscriptions
- **Cancel Subscriptions**: Cancel subscriptions for a customer.
- **Create Subscriptions Amendment**: Create an amendment for subscriptions.
- **Get Customer Subscription Details**: Retrieve subscription details for a customer.
- **Get Customer Subscription Meters**: Retrieve subscription meters for a customer.
- **Get Customer Subscription Pricing**: Retrieve subscription pricing for a customer.

### Tracking
- **Track Request**: Track a request using a tracking ID.

## Credentials

To use this node, you'll need to set up OAuth2 credentials with Sherweb. Here's how:

1. **Access your Sherweb admin portal**:
   - Log in to your Sherweb admin portal
   - Navigate to **Security** , then **API**
	 - Enter an application name and click "Create"
	 - Note down your Client ID, Client Secret, and Subscription Key

2. **Create OAuth2 Application**:
   - Create a new OAuth2 application
   - Note down the Client ID and Client Secret
   - Copy your Tenant ID from the admin portal

3. **In n8n**:
   - Create new credentials for "Sherweb OAuth2 API"
   - Enter the Client ID, Client Secret, and Subscription Key from your Sherweb application
   - The Base URL will default to: `https://api.sherweb.com/`
	 - Save the credentials

## Compatibility

This node is compatible with n8n version 1.100.1 and above.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Sherweb](https://www.sherweb.com/)
* [Sherweb API Documentation](https://developers.sherweb.com/apis)


