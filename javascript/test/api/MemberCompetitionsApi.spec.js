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
    instance = new @ZiqniTechGatewayApiClient.MemberCompetitionsApi();
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

  describe('MemberCompetitionsApi', function() {
    describe('checkMemberOptinStatus', function() {
      it('should call checkMemberOptinStatus successfully', function(done) {
        //uncomment below and update the code to test checkMemberOptinStatus
        //instance.checkMemberOptinStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkMemberOptinStatusByRefId', function() {
      it('should call checkMemberOptinStatusByRefId successfully', function(done) {
        //uncomment below and update the code to test checkMemberOptinStatusByRefId
        //instance.checkMemberOptinStatusByRefId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompetitionsByMemberRefId', function() {
      it('should call getCompetitionsByMemberRefId successfully', function(done) {
        //uncomment below and update the code to test getCompetitionsByMemberRefId
        //instance.getCompetitionsByMemberRefId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMemberCompetitions', function() {
      it('should call getMemberCompetitions successfully', function(done) {
        //uncomment below and update the code to test getMemberCompetitions
        //instance.getMemberCompetitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('optinMemberToCompetition', function() {
      it('should call optinMemberToCompetition successfully', function(done) {
        //uncomment below and update the code to test optinMemberToCompetition
        //instance.optinMemberToCompetition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('optinMemberToCompetitionByRefId', function() {
      it('should call optinMemberToCompetitionByRefId successfully', function(done) {
        //uncomment below and update the code to test optinMemberToCompetitionByRefId
        //instance.optinMemberToCompetitionByRefId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
