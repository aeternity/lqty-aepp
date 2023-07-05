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
import type { Tx } from './Tx';
import {
    TxFromJSON,
    TxFromJSONTyped,
    TxToJSON,
} from './Tx';

/**
 * 
 * @export
 * @interface GetMicroBlockTransactions200Response
 */
export interface GetMicroBlockTransactions200Response {
    /**
     * 
     * @type {Array<Tx>}
     * @memberof GetMicroBlockTransactions200Response
     */
    data?: Array<Tx>;
    /**
     * 
     * @type {string}
     * @memberof GetMicroBlockTransactions200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetMicroBlockTransactions200Response
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the GetMicroBlockTransactions200Response interface.
 */
export function instanceOfGetMicroBlockTransactions200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetMicroBlockTransactions200ResponseFromJSON(json: any): GetMicroBlockTransactions200Response {
    return GetMicroBlockTransactions200ResponseFromJSONTyped(json, false);
}

export function GetMicroBlockTransactions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMicroBlockTransactions200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(TxFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'prev': !exists(json, 'prev') ? undefined : json['prev'],
    };
}

export function GetMicroBlockTransactions200ResponseToJSON(value?: GetMicroBlockTransactions200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(TxToJSON)),
        'next': value.next,
        'prev': value.prev,
    };
}

