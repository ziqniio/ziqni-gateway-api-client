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
import Leaderboard from './Leaderboard';
import ResponseMeta from './ResponseMeta';

/**
 * The LeaderboardResponse model module.
 * @module model/LeaderboardResponse
 * @version 0.0.1
 */
class LeaderboardResponse {
    /**
     * Constructs a new <code>LeaderboardResponse</code>.
     * @alias module:model/LeaderboardResponse
     */
    constructor() { 
        
        LeaderboardResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeaderboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardResponse} obj Optional instance to populate.
     * @return {module:model/LeaderboardResponse} The populated <code>LeaderboardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Leaderboard]);
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
LeaderboardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Leaderboard>} data
 */
LeaderboardResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
LeaderboardResponse.prototype['errors'] = undefined;






export default LeaderboardResponse;

