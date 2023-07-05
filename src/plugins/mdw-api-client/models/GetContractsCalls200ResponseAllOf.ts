/* tslint:disable */
/* eslint-disable */
/**
 * Aeternity Middleware
 * API for [Aeternity Middleware](https://github.com/aeternity/ae_mdw)
 *
 * The version of the OpenAPI document: 1.51.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ContractCall } from './ContractCall';
import {
    ContractCallFromJSON,
    ContractCallFromJSONTyped,
    ContractCallToJSON,
} from './ContractCall';

/**
 * 
 * @export
 * @interface GetContractsCalls200ResponseAllOf
 */
export interface GetContractsCalls200ResponseAllOf {
    /**
     * 
     * @type {Array<ContractCall>}
     * @memberof GetContractsCalls200ResponseAllOf
     */
    data?: Array<ContractCall>;
}

/**
 * Check if a given object implements the GetContractsCalls200ResponseAllOf interface.
 */
export function instanceOfGetContractsCalls200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetContractsCalls200ResponseAllOfFromJSON(json: any): GetContractsCalls200ResponseAllOf {
    return GetContractsCalls200ResponseAllOfFromJSONTyped(json, false);
}

export function GetContractsCalls200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContractsCalls200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ContractCallFromJSON)),
    };
}

export function GetContractsCalls200ResponseAllOfToJSON(value?: GetContractsCalls200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ContractCallToJSON)),
    };
}

