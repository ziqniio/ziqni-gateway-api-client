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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@ZiqniTechGatewayApiClient);
  }
}(this, function(expect, @ZiqniTechGatewayApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @ZiqniTechGatewayApiClient.WidgetByIdResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WidgetByIdResponse', function() {
    it('should create an instance of WidgetByIdResponse', function() {
      // uncomment below and update the code to test WidgetByIdResponse
      //var instance = new @ZiqniTechGatewayApiClient.WidgetByIdResponse();
      //expect(instance).to.be.a(@ZiqniTechGatewayApiClient.WidgetByIdResponse);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new @ZiqniTechGatewayApiClient.WidgetByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new @ZiqniTechGatewayApiClient.WidgetByIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new @ZiqniTechGatewayApiClient.WidgetByIdResponse();
      //expect(instance).to.be();
    });

  });

}));
