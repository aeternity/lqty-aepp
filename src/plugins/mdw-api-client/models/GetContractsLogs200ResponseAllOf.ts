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
import type { ContractLog } from './ContractLog';
import {
    ContractLogFromJSON,
    ContractLogFromJSONTyped,
    ContractLogToJSON,
} from './ContractLog';

/**
 * 
 * @export
 * @interface GetContractsLogs200ResponseAllOf
 */
export interface GetContractsLogs200ResponseAllOf {
    /**
     * 
     * @type {Array<ContractLog>}
     * @memberof GetContractsLogs200ResponseAllOf
     */
    data?: Array<ContractLog>;
}

/**
 * Check if a given object implements the GetContractsLogs200ResponseAllOf interface.
 */
export function instanceOfGetContractsLogs200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetContractsLogs200ResponseAllOfFromJSON(json: any): GetContractsLogs200ResponseAllOf {
    return GetContractsLogs200ResponseAllOfFromJSONTyped(json, false);
}

export function GetContractsLogs200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContractsLogs200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ContractLogFromJSON)),
    };
}

export function GetContractsLogs200ResponseAllOfToJSON(value?: GetContractsLogs200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ContractLogToJSON)),
    };
}

