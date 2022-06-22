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
import DependantOn from './DependantOn';
import Product from './Product';
import Reward from './Reward';
import RuleSet from './RuleSet';
import Scheduling from './Scheduling';
/**
 * The Achievement model module.
 * @module model/Achievement
 * @version 0.0.1
 */

class Achievement {
  /**
   * Constructs a new <code>Achievement</code>.
   * @alias module:model/Achievement
   */
  constructor() {
    Achievement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Achievement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Achievement} obj Optional instance to populate.
   * @return {module:model/Achievement} The populated <code>Achievement</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Achievement();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('scheduling')) {
        obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
      }

      if (data.hasOwnProperty('dependantOn')) {
        obj['dependantOn'] = ApiClient.convertToType(data['dependantOn'], [DependantOn]);
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }

      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }

      if (data.hasOwnProperty('rewards')) {
        obj['rewards'] = ApiClient.convertToType(data['rewards'], [Reward]);
      }

      if (data.hasOwnProperty('deprecated')) {
        obj['deprecated'] = ApiClient.convertToType(data['deprecated'], 'Boolean');
      }

      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }

      if (data.hasOwnProperty('ruleSets')) {
        obj['ruleSets'] = ApiClient.convertToType(data['ruleSets'], [RuleSet]);
      }

      if (data.hasOwnProperty('achievementLiveStatus')) {
        obj['achievementLiveStatus'] = ApiClient.convertToType(data['achievementLiveStatus'], 'String');
      }

      if (data.hasOwnProperty('initialState')) {
        obj['initialState'] = ApiClient.convertToType(data['initialState'], 'Number');
      }

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], ['String']);
      }

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], [Object]);
      }
    }

    return obj;
  }

}
/**
 * @member {String} name
 */


Achievement.prototype['name'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */

Achievement.prototype['scheduling'] = undefined;
/**
 * @member {Array.<module:model/DependantOn>} dependantOn
 */

Achievement.prototype['dependantOn'] = undefined;
/**
 * @member {String} description
 */

Achievement.prototype['description'] = undefined;
/**
 * @member {String} icon
 */

Achievement.prototype['icon'] = undefined;
/**
 * @member {Array.<module:model/Reward>} rewards
 */

Achievement.prototype['rewards'] = undefined;
/**
 * @member {Boolean} deprecated
 */

Achievement.prototype['deprecated'] = undefined;
/**
 * @member {Array.<module:model/Product>} products
 */

Achievement.prototype['products'] = undefined;
/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */

Achievement.prototype['ruleSets'] = undefined;
/**
 * @member {String} achievementLiveStatus
 */

Achievement.prototype['achievementLiveStatus'] = undefined;
/**
 * @member {Number} initialState
 */

Achievement.prototype['initialState'] = undefined;
/**
 * @member {String} id
 */

Achievement.prototype['id'] = undefined;
/**
 * @member {Array.<String>} category
 */

Achievement.prototype['category'] = undefined;
/**
 * @member {Array.<Object>} metadata
 */

Achievement.prototype['metadata'] = undefined;
export default Achievement;