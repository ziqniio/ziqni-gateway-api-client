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
    instance = new @ZiqniTechGatewayApiClient.Contest();
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

  describe('Contest', function() {
    it('should create an instance of Contest', function() {
      // uncomment below and update the code to test Contest
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be.a(@ZiqniTechGatewayApiClient.Contest);
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property actualStart (base name: "actualStart")', function() {
      // uncomment below and update the code to test the property actualStart
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property actualEnd (base name: "actualEnd")', function() {
      // uncomment below and update the code to test the property actualEnd
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property entransFromContest (base name: "entransFromContest")', function() {
      // uncomment below and update the code to test the property entransFromContest
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property jsonClass (base name: "jsonClass")', function() {
      // uncomment below and update the code to test the property jsonClass
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStart (base name: "scheduledStart")', function() {
      // uncomment below and update the code to test the property scheduledStart
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property termsConditions (base name: "termsConditions")', function() {
      // uncomment below and update the code to test the property termsConditions
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEnd (base name: "scheduledEnd")', function() {
      // uncomment below and update the code to test the property scheduledEnd
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property round (base name: "round")', function() {
      // uncomment below and update the code to test the property round
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property competitionId (base name: "competitionId")', function() {
      // uncomment below and update the code to test the property competitionId
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

    it('should have the property roundType (base name: "roundType")', function() {
      // uncomment below and update the code to test the property roundType
      //var instance = new @ZiqniTechGatewayApiClient.Contest();
      //expect(instance).to.be();
    });

  });

}));
