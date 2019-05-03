# Pingity-js

Includes functions to validate an email address through the Pingity API,
as well as through a basic regex validation.

    const Pingity = require('pingity');

To make an Ajax call to the Pingity API:

    Pingity.validate("address@example.com");

This will return pass, fail or warning messages based on the test results from Pingity.

To bypass Pingity and run basic regex verification:

    Pingity.basic("address@example.com");

This will return either "Format Valid" or "Invalid email address".

### Notes

Recently updated with a small Mocha/Chai test suite.
