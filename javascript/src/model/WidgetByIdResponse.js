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
import Error from './Error';
import Widget from './Widget';

/**
 * The WidgetByIdResponse model module.
 * @module model/WidgetByIdResponse
 * @version 0.0.1
 */
class WidgetByIdResponse {
    /**
     * Constructs a new <code>WidgetByIdResponse</code>.
     * @alias module:model/WidgetByIdResponse
     */
    constructor() { 
        
        WidgetByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WidgetByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WidgetByIdResponse} obj Optional instance to populate.
     * @return {module:model/WidgetByIdResponse} The populated <code>WidgetByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WidgetByIdResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Widget.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Widget} data
 */
WidgetByIdResponse.prototype['data'] = undefined;

/**
 * @member {Date} time
 */
WidgetByIdResponse.prototype['time'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
WidgetByIdResponse.prototype['errors'] = undefined;






export default WidgetByIdResponse;

