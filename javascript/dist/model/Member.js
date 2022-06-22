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
 * The Member model module.
 * @module model/Member
 * @version 0.0.1
 */

class Member {
  /**
   * Constructs a new <code>Member</code>.
   * @alias module:model/Member
   */
  constructor() {
    Member.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Member} obj Optional instance to populate.
   * @return {module:model/Member} The populated <code>Member</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Member();

      if (data.hasOwnProperty('jsonClass')) {
        obj['jsonClass'] = ApiClient.convertToType(data['jsonClass'], 'String');
      }

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }

      if (data.hasOwnProperty('memberType')) {
        obj['memberType'] = ApiClient.convertToType(data['memberType'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('memberRefId')) {
        obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
      }

      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
      }

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }

    return obj;
  }

}
/**
 * @member {String} jsonClass
 */


Member.prototype['jsonClass'] = undefined;
/**
 * @member {String} accountId
 */

Member.prototype['accountId'] = undefined;
/**
 * @member {String} memberType
 */

Member.prototype['memberType'] = undefined;
/**
 * @member {String} name
 */

Member.prototype['name'] = undefined;
/**
 * @member {String} memberRefId
 */

Member.prototype['memberRefId'] = undefined;
/**
 * @member {Array.<String>} groups
 */

Member.prototype['groups'] = undefined;
/**
 * @member {String} created
 */

Member.prototype['created'] = undefined;
/**
 * @member {String} id
 */

Member.prototype['id'] = undefined;
export default Member;