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
/**
 * Name Update
 * @export
 * @interface NameUpdate
 */
export interface NameUpdate {
    /**
     * 
     * @type {string}
     * @memberof NameUpdate
     */
    blockHash?: string;
    /**
     * 
     * @type {number}
     * @memberof NameUpdate
     */
    height?: number;
    /**
     * 
     * @type {object}
     * @memberof NameUpdate
     */
    tx?: object;
}

/**
 * Check if a given object implements the NameUpdate interface.
 */
export function instanceOfNameUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NameUpdateFromJSON(json: any): NameUpdate {
    return NameUpdateFromJSONTyped(json, false);
}

export function NameUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockHash': !exists(json, 'block_hash') ? undefined : json['block_hash'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'tx': !exists(json, 'tx') ? undefined : json['tx'],
    };
}

export function NameUpdateToJSON(value?: NameUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'block_hash': value.blockHash,
        'height': value.height,
        'tx': value.tx,
    };
}

