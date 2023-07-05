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
import type { Aex9ContractBalanceResponse } from './Aex9ContractBalanceResponse';
import {
    Aex9ContractBalanceResponseFromJSON,
    Aex9ContractBalanceResponseFromJSONTyped,
    Aex9ContractBalanceResponseToJSON,
} from './Aex9ContractBalanceResponse';

/**
 * 
 * @export
 * @interface GetAex9ContractBalances200Response
 */
export interface GetAex9ContractBalances200Response {
    /**
     * 
     * @type {Array<Aex9ContractBalanceResponse>}
     * @memberof GetAex9ContractBalances200Response
     */
    data?: Array<Aex9ContractBalanceResponse>;
    /**
     * 
     * @type {string}
     * @memberof GetAex9ContractBalances200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAex9ContractBalances200Response
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the GetAex9ContractBalances200Response interface.
 */
export function instanceOfGetAex9ContractBalances200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAex9ContractBalances200ResponseFromJSON(json: any): GetAex9ContractBalances200Response {
    return GetAex9ContractBalances200ResponseFromJSONTyped(json, false);
}

export function GetAex9ContractBalances200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAex9ContractBalances200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(Aex9ContractBalanceResponseFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'prev': !exists(json, 'prev') ? undefined : json['prev'],
    };
}

export function GetAex9ContractBalances200ResponseToJSON(value?: GetAex9ContractBalances200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(Aex9ContractBalanceResponseToJSON)),
        'next': value.next,
        'prev': value.prev,
    };
}

