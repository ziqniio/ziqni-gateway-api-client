/**
 * Ziqni Gateway Services
 * These are the Gateway services to be used by customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Contest from './Contest';
import Error from './Error';
import ResponseMeta from './ResponseMeta';

/**
 * The ContestResponse model module.
 * @module model/ContestResponse
 * @version 0.0.1
 */
class ContestResponse {
    /**
     * Constructs a new <code>ContestResponse</code>.
     * @alias module:model/ContestResponse
     */
    constructor() { 
        
        ContestResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContestResponse} obj Optional instance to populate.
     * @return {module:model/ContestResponse} The populated <code>ContestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContestResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Contest]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseMeta} meta
 */
ContestResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Contest>} data
 */
ContestResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ContestResponse.prototype['errors'] = undefined;






export default ContestResponse;

