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
/**
 * The AchievementIssuedCount model module.
 * @module model/AchievementIssuedCount
 * @version 0.0.1
 */

class AchievementIssuedCount {
  /**
   * Constructs a new <code>AchievementIssuedCount</code>.
   * @alias module:model/AchievementIssuedCount
   */
  constructor() {
    AchievementIssuedCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>AchievementIssuedCount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AchievementIssuedCount} obj Optional instance to populate.
   * @return {module:model/AchievementIssuedCount} The populated <code>AchievementIssuedCount</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AchievementIssuedCount();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * @member {String} value
 */


AchievementIssuedCount.prototype['value'] = undefined;
/**
 * @member {Number} count
 */

AchievementIssuedCount.prototype['count'] = undefined;
export default AchievementIssuedCount;