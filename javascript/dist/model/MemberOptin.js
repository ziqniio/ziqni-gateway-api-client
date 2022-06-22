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
 * The MemberOptin model module.
 * @module model/MemberOptin
 * @version 0.0.1
 */

class MemberOptin {
  /**
   * Constructs a new <code>MemberOptin</code>.
   * @alias module:model/MemberOptin
   */
  constructor() {
    MemberOptin.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>MemberOptin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberOptin} obj Optional instance to populate.
   * @return {module:model/MemberOptin} The populated <code>MemberOptin</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MemberOptin();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }

      if (data.hasOwnProperty('memberId')) {
        obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
      }

      if (data.hasOwnProperty('participationId')) {
        obj['participationId'] = ApiClient.convertToType(data['participationId'], 'String');
      }

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }

      if (data.hasOwnProperty('bestScores')) {
        obj['bestScores'] = ApiClient.convertToType(data['bestScores'], ['Number']);
      }

      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }

      if (data.hasOwnProperty('updateCount')) {
        obj['updateCount'] = ApiClient.convertToType(data['updateCount'], 'Number');
      }

      if (data.hasOwnProperty('markerTimeStamp')) {
        obj['markerTimeStamp'] = ApiClient.convertToType(data['markerTimeStamp'], 'Number');
      }

      if (data.hasOwnProperty('goalReached')) {
        obj['goalReached'] = ApiClient.convertToType(data['goalReached'], 'Boolean');
      }

      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * @member {String} accountId
 */


MemberOptin.prototype['accountId'] = undefined;
/**
 * @member {String} memberId
 */

MemberOptin.prototype['memberId'] = undefined;
/**
 * @member {String} participationId
 */

MemberOptin.prototype['participationId'] = undefined;
/**
 * @member {Number} value
 */

MemberOptin.prototype['value'] = undefined;
/**
 * @member {Array.<Number>} bestScores
 */

MemberOptin.prototype['bestScores'] = undefined;
/**
 * @member {Number} timestamp
 */

MemberOptin.prototype['timestamp'] = undefined;
/**
 * @member {Number} updateCount
 */

MemberOptin.prototype['updateCount'] = undefined;
/**
 * @member {Number} markerTimeStamp
 */

MemberOptin.prototype['markerTimeStamp'] = undefined;
/**
 * @member {Boolean} goalReached
 */

MemberOptin.prototype['goalReached'] = undefined;
/**
 * @member {Number} statusCode
 */

MemberOptin.prototype['statusCode'] = undefined;
export default MemberOptin;