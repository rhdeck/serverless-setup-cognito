
<a name="readmemd"></a>

Set up cognito.json for web apps and react native apps in serverless monorepos


<a name="__climd"></a>

# Usage
```bash
npx @raydeck/serverless-setup-cognito [options]
```
# Options
* -s --stage [stage] Stage for the stack we are examining (default from monorepo root) 
* -r --region [region] Region for the stack (default us-east-1) 
* -p --cognitoPath [path] Path to the cognito serverless package 
* -c --clientPath [path] Path to the package defining the app client 
* -k --clientName [resourceName] Logical name of the cognito client name resource (e.g. CounselorClient) 

<a name="_librarymd"></a>


# @raydeck/serverless-setup-cognito - v1.0.0

## Index

### Variables

* [clientName](#clientname)
* [clientPath](#clientpath)
* [cognitoPath](#cognitopath)
* [region](#region)
* [stage](#stage)

### Functions

* [getConfig](#getconfig)
* [writeConfig](#writeconfig)

## Variables

###  clientName

• **clientName**: *any*

*Defined in [bin.ts:28](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/bin.ts#L28)*

___

###  clientPath

• **clientPath**: *any*

*Defined in [bin.ts:28](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/bin.ts#L28)*

___

###  cognitoPath

• **cognitoPath**: *any*

*Defined in [bin.ts:28](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/bin.ts#L28)*

___

###  region

• **region**: *any*

*Defined in [bin.ts:28](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/bin.ts#L28)*

___

###  stage

• **stage**: *any*

*Defined in [bin.ts:28](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/bin.ts#L28)*

## Functions

###  getConfig

▸ **getConfig**(`__namedParameters`: object): *Promise‹object›*

*Defined in [index.ts:7](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/index.ts#L7)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`clientName` | undefined &#124; string | - |
`clientPath` | undefined &#124; string | - |
`cognitoPath` | undefined &#124; string | - |
`path` | string | process.cwd() |
`region` | undefined &#124; string | - |
`stage` | string | - |

**Returns:** *Promise‹object›*

___

###  writeConfig

▸ **writeConfig**(`config`: PromiseValue‹ReturnType‹typeof getConfig››, `path`: string): *void*

*Defined in [index.ts:54](https://github.com/rhdeck/serverless-setup-cognito/blob/13bffe0/src/index.ts#L54)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | PromiseValue‹ReturnType‹typeof getConfig›› | - |
`path` | string | join(process.cwd(), "config") |

**Returns:** *void*
