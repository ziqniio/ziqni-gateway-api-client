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
    instance = new @ZiqniTechGatewayApiClient.Reward();
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

  describe('Reward', function() {
    it('should create an instance of Reward', function() {
      // uncomment below and update the code to test Reward
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be.a(@ZiqniTechGatewayApiClient.Reward);
    });

    it('should have the property jsonClass (base name: "jsonClass")', function() {
      // uncomment below and update the code to test the property jsonClass
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property rewardRank (base name: "rewardRank")', function() {
      // uncomment below and update the code to test the property rewardRank
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property rewardName (base name: "rewardName")', function() {
      // uncomment below and update the code to test the property rewardName
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property rewardType (base name: "rewardType")', function() {
      // uncomment below and update the code to test the property rewardType
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property memberAcknowledgmentRequired (base name: "memberAcknowledgmentRequired")', function() {
      // uncomment below and update the code to test the property memberAcknowledgmentRequired
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

    it('should have the property rewardTypeObject (base name: "rewardTypeObject")', function() {
      // uncomment below and update the code to test the property rewardTypeObject
      //var instance = new @ZiqniTechGatewayApiClient.Reward();
      //expect(instance).to.be();
    });

  });

}));
