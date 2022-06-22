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
import Metadata from './Metadata';
import RewardType from './RewardType';

/**
 * The Reward model module.
 * @module model/Reward
 * @version 0.0.1
 */
class Reward {
    /**
     * Constructs a new <code>Reward</code>.
     * @alias module:model/Reward
     */
    constructor() { 
        
        Reward.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Reward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Reward} obj Optional instance to populate.
     * @return {module:model/Reward} The populated <code>Reward</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reward();

            if (data.hasOwnProperty('jsonClass')) {
                obj['jsonClass'] = ApiClient.convertToType(data['jsonClass'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], ['Number']);
            }
            if (data.hasOwnProperty('rewardName')) {
                obj['rewardName'] = ApiClient.convertToType(data['rewardName'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = ApiClient.convertToType(data['rewardType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('memberAcknowledgmentRequired')) {
                obj['memberAcknowledgmentRequired'] = ApiClient.convertToType(data['memberAcknowledgmentRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeObject')) {
                obj['rewardTypeObject'] = RewardType.constructFromObject(data['rewardTypeObject']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} jsonClass
 */
Reward.prototype['jsonClass'] = undefined;

/**
 * @member {String} entityType
 */
Reward.prototype['entityType'] = undefined;

/**
 * @member {String} entityId
 */
Reward.prototype['entityId'] = undefined;

/**
 * @member {Array.<Number>} rewardRank
 */
Reward.prototype['rewardRank'] = undefined;

/**
 * @member {String} rewardName
 */
Reward.prototype['rewardName'] = undefined;

/**
 * @member {Number} value
 */
Reward.prototype['value'] = undefined;

/**
 * @member {String} rewardType
 */
Reward.prototype['rewardType'] = undefined;

/**
 * @member {String} description
 */
Reward.prototype['description'] = undefined;

/**
 * @member {Number} delay
 */
Reward.prototype['delay'] = undefined;

/**
 * @member {Boolean} memberAcknowledgmentRequired
 */
Reward.prototype['memberAcknowledgmentRequired'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Reward.prototype['metadata'] = undefined;

/**
 * @member {String} accountId
 */
Reward.prototype['accountId'] = undefined;

/**
 * @member {Number} period
 */
Reward.prototype['period'] = undefined;

/**
 * @member {Date} created
 */
Reward.prototype['created'] = undefined;

/**
 * @member {String} id
 */
Reward.prototype['id'] = undefined;

/**
 * @member {String} translations
 */
Reward.prototype['translations'] = undefined;

/**
 * @member {module:model/RewardType} rewardTypeObject
 */
Reward.prototype['rewardTypeObject'] = undefined;






export default Reward;

