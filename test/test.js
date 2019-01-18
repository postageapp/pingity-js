// == Imports ===============================================
const chai = require('chai');
const Pingity = require('../pingity')

var expect = chai.expect;
var assert = chai.assert;

// == Tests =================================================

describe('Validate with Pingity', function() {
  it('should make a POST request to Pingity', async function() {
    let address = "test@example.com";
    let result = await Pingity.validate(address);
    // expect the response to be an object
    expect(result).to.be.a('object'); 
    expect(result.response).to.equal(200);
  });

  it('should return a pass message for a valid address', async function() {
    let address = "emily@mcminn.ca";
    let result = await Pingity.validate(address);
    // expect the function to return a pass message
    expect(result.result).to.be.a('string');
    expect(result.result).to.equal("Address valid, passing all tests")

  });

  it('should return a failure message for an invalid address', async function() {
    let address = "wrong@fake.whatever";
    let result = await Pingity.validate(address);
    // expect the function to return a failure message
    expect(result.result).to.be.a('string');
    expect(result.result).to.equal("Address not valid")

  });  

  it('should return a warning message for an address with warnings', async function() {
    let address = "markusstracke@little.name";
    let result = await Pingity.validate(address);
    // expect the function to return a warning message
    expect(result.result).to.be.a('string');
    expect(result.result).to.equal("Address valid, some tests failing.")

  });    
});

describe('Validate with Regex', function() {
  it('should return a pass message for a correctly formatted address', function() {
    let address = "address@domain.com"
    let result = Pingity.basic(address);

    expect(result).to.be.a('string');
    expect(result).to.equal('Format valid')
  });

  it('should return a failure message for a badly formatted address', function() {
    let address = "garbageaddress"
    let result = Pingity.basic(address);

    expect(result).to.be.a('string');
    expect(result).to.equal('You have entered an invalid email address!')
  });
});


