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
import ApiClient from "../ApiClient";
import AchievementResponse from '../model/AchievementResponse';
import ApiErrorResponse from '../model/ApiErrorResponse';
import Error from '../model/Error';
import WidgetByIdResponse from '../model/WidgetByIdResponse';
import WidgetResponse from '../model/WidgetResponse';
/**
* Widgets service.
* @module api/WidgetsApi
* @version 0.0.1
*/

export default class WidgetsApi {
  /**
  * Constructs a new WidgetsApi. 
  * @alias module:api/WidgetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the getWidgetById operation.
   * @callback module:api/WidgetsApi~getWidgetByIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/WidgetByIdResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a widget information for specific id
   * Returns the information for a specific widget
   * @param {String} X_API_KEY Your unique API key
   * @param {String} spaceName This is the space name which is linked to the account
   * @param {String} id Unique identifier of the resource
   * @param {module:api/WidgetsApi~getWidgetByIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/WidgetByIdResponse}
   */


  getWidgetById(X_API_KEY, spaceName, id, callback) {
    let postBody = null; // verify the required parameter 'X_API_KEY' is set

    if (X_API_KEY === undefined || X_API_KEY === null) {
      throw new Error("Missing the required parameter 'X_API_KEY' when calling getWidgetById");
    } // verify the required parameter 'spaceName' is set


    if (spaceName === undefined || spaceName === null) {
      throw new Error("Missing the required parameter 'spaceName' when calling getWidgetById");
    } // verify the required parameter 'id' is set


    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getWidgetById");
    }

    let pathParams = {
      'spaceName': spaceName,
      'id': id
    };
    let queryParams = {};
    let headerParams = {
      'X-API-KEY': X_API_KEY
    };
    let formParams = {};
    let authNames = ['apiKey'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = WidgetByIdResponse;
    return this.apiClient.callApi('/api/v1/{spaceName}/widget/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the getWidgetPreviewById operation.
   * @callback module:api/WidgetsApi~getWidgetPreviewByIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AchievementResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the information of live achievements for a given Widget ID
   * Returns the information of live achievements for a given Widget ID  `Achievements that are in the widget but are deprecated/archived will not be shown in the response`
   * @param {String} X_API_KEY Your unique API key
   * @param {String} spaceName This is the space name which is linked to the account
   * @param {String} widgetId Id of the widget
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Used for pagination. Setting the limit value will cause the system to limit the number of records returned to the specified number.
   * @param {Number} opts.skip Used for pagination. Setting the skip value will cause the system to return records from the specified position onwards.  EXAMPLE below returns the results for requested resource without skipping any records  <url>?_limit=5&_skip=0  EXAMPLE below returns the results for requested resource after skipping the first 10 records  `<url>?_limit=5&_skip=10`
   * @param {module:api/WidgetsApi~getWidgetPreviewByIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AchievementResponse}
   */


  getWidgetPreviewById(X_API_KEY, spaceName, widgetId, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'X_API_KEY' is set

    if (X_API_KEY === undefined || X_API_KEY === null) {
      throw new Error("Missing the required parameter 'X_API_KEY' when calling getWidgetPreviewById");
    } // verify the required parameter 'spaceName' is set


    if (spaceName === undefined || spaceName === null) {
      throw new Error("Missing the required parameter 'spaceName' when calling getWidgetPreviewById");
    } // verify the required parameter 'widgetId' is set


    if (widgetId === undefined || widgetId === null) {
      throw new Error("Missing the required parameter 'widgetId' when calling getWidgetPreviewById");
    }

    let pathParams = {
      'spaceName': spaceName,
      'widgetId': widgetId
    };
    let queryParams = {
      '_limit': opts['limit'],
      '_skip': opts['skip']
    };
    let headerParams = {
      'X-API-KEY': X_API_KEY
    };
    let formParams = {};
    let authNames = ['apiKey'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = AchievementResponse;
    return this.apiClient.callApi('/api/v1/{spaceName}/widget/preview/{widgetId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the getWidgets operation.
   * @callback module:api/WidgetsApi~getWidgetsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/WidgetResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of widgets
   * Returns the information for all the widgets.
   * @param {String} X_API_KEY Your unique API key
   * @param {String} spaceName This is the space name which is linked to the account
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.id The unique identifiers of the resources
   * @param {Number} opts.limit Used for pagination. Setting the limit value will cause the system to limit the number of records returned to the specified number.
   * @param {Number} opts.skip Used for pagination. Setting the skip value will cause the system to return records from the specified position onwards.  EXAMPLE below returns the results for requested resource without skipping any records  <url>?_limit=5&_skip=0  EXAMPLE below returns the results for requested resource after skipping the first 10 records  `<url>?_limit=5&_skip=10`
   * @param {String} opts.sortByFields Enables sorting of results based on fields and order specified.  Supported ordering  `asc, desc`   Usage syntax  `_sortByFields=<field-to-sort-on>:<order>`   EXAMPLE The query will return data sorted by transactionTimestamp in descending order  `<url>?_sortByFields=transactionTimestamp:desc,created:asc`
   * @param {String} opts.include Allows you to add the products and metadata objects to the response. Case sensitive
   * @param {String} opts.lang Allows you to preview the label, description and terms and conditions of the competition in a requested language. Case sensitive
   * @param {String} opts. Single `=` sign usage will work as a `should/OR` action and `==` will work as a `must/AND` action  Single equals sign usage has two types of applications in formulating API queries - * assigning values to predefined/reserved parameters like _skip, _limit, _lang, _sortByFields, _uomKey, _include * assigning values to model based parameters (Example name, transactionTimestamp, options.limitEntrantsTo etc.)  EXAMPLE below returns all competitions in \"Ready\" or \"Active\" state that have either a group1 or group2 entrant limitation  `<url>/competitions?_skip=0&_limit=100&status=Ready,Active&options.limitEntrantsTo=group1,group2`
   * @param {String} opts.2 Single `=` sign usage will work as a `should/OR` action and `==` will work as a `must/AND` action  Single equals sign usage has two types of applications in formulating API queries - * assigning values to predefined/reserved parameters like _skip, _limit, _lang, _sortByFields, _uomKey, _include * assigning values to model based parameters (Example name, transactionTimestamp, options.limitEntrantsTo etc.)  EXAMPLE below returns all competitions in \"Ready\" state only that have either a group1 or group2 entrant limitation  `<url>/competitions?_skip=0&_limit=100&status==Ready&options.limitEntrantsTo=group1,group2`
   * @param {String} opts.3 Single `=` sign usage will work as a `should/OR` action and `==` will work as a `must/AND` action  The less than equal filter can be used on fields with a data type of integer, long, double, float, date, time or date-time. The filter will return all matching records that are equal to or less than the specified field value.  EXAMPLE below returns all the data which was uploaded before 17:38 9th of February 2021 (defaults to 20 results).  `<url>events?transactionTimestamp<=2021-02-09T17:38:08.328`
   * @param {String} opts.4 Single `=` sign usage will work as a `should/OR` action and `==` will work as a `must/AND` action  The less than equal filter can be used on fields with a data type of integer, long, double, float, date, time or date-time. The filter will return all matching records that are equal to or less than the specified field value.  EXAMPLE below returns all the data which were uploaded before 17:38 9th of February 2021 (defaults to 20 results).  `<url>events?transactionTimestamp<==2021-02-09T17:38:08.328`
   * @param {String} opts.5 Single `=` sign usage will work as a `should/OR` action and `==` will work as a `must/AND` action  The greater than equal filter can be used on fields with a data type of integer, long, double, float, date, time or date-time. The filter will return all matching records that are equal to or greater than the specified field value.  EXAMPLE below returns all the data which were uploaded after 17:38 9th of February 2021 (defaults to 20 results).  `<url>events?transactionTimestamp=>2021-02-09T17:38:08.328`
   * @param {String} opts.6 Single `=` sign usage will work as a `should/OR` action and `==` will work as a `must/AND` action  The greater than equal filter can be used on fields with a data type of integer, long, double, float, date, time or date-time. The filter will return all matching records that are equal to or greater than the specified field value.  EXAMPLE below returns all the data which were uploaded after 17:38 9th of February 2021 (defaults to 20 results).  `<url>events?transactionTimestamp==>2021-02-09T17:38:08.328`
   * @param {module:api/WidgetsApi~getWidgetsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/WidgetResponse}
   */


  getWidgets(X_API_KEY, spaceName, opts, callback) {
    opts = opts || {};
    let postBody = null; // verify the required parameter 'X_API_KEY' is set

    if (X_API_KEY === undefined || X_API_KEY === null) {
      throw new Error("Missing the required parameter 'X_API_KEY' when calling getWidgets");
    } // verify the required parameter 'spaceName' is set


    if (spaceName === undefined || spaceName === null) {
      throw new Error("Missing the required parameter 'spaceName' when calling getWidgets");
    }

    let pathParams = {
      'spaceName': spaceName
    };
    let queryParams = {
      'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
      '_limit': opts['limit'],
      '_skip': opts['skip'],
      '_sortByFields': opts['sortByFields'],
      '_include': opts['include'],
      '_lang': opts['lang'],
      '&#x3D;': opts[''],
      '&#x3D;&#x3D;': opts['2'],
      '&lt;&#x3D;': opts['3'],
      '&lt;&#x3D;&#x3D;': opts['4'],
      '&#x3D;&gt;': opts['5'],
      '&#x3D;&#x3D;&gt;': opts['6']
    };
    let headerParams = {
      'X-API-KEY': X_API_KEY
    };
    let formParams = {};
    let authNames = ['apiKey'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = WidgetResponse;
    return this.apiClient.callApi('/api/v1/{spaceName}/widget', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

}