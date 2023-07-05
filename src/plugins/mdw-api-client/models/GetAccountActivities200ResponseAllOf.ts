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
import type { Activity } from './Activity';
import {
    ActivityFromJSON,
    ActivityFromJSONTyped,
    ActivityToJSON,
} from './Activity';

/**
 * 
 * @export
 * @interface GetAccountActivities200ResponseAllOf
 */
export interface GetAccountActivities200ResponseAllOf {
    /**
     * 
     * @type {Array<Activity>}
     * @memberof GetAccountActivities200ResponseAllOf
     */
    data?: Array<Activity>;
}

/**
 * Check if a given object implements the GetAccountActivities200ResponseAllOf interface.
 */
export function instanceOfGetAccountActivities200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAccountActivities200ResponseAllOfFromJSON(json: any): GetAccountActivities200ResponseAllOf {
    return GetAccountActivities200ResponseAllOfFromJSONTyped(json, false);
}

export function GetAccountActivities200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAccountActivities200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ActivityFromJSON)),
    };
}

export function GetAccountActivities200ResponseAllOfToJSON(value?: GetAccountActivities200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ActivityToJSON)),
    };
}
