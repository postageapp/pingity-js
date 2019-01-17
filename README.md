# Pingity-js

Includes functions to validate an email address through the Pingity API,
as well as through a basic regex validation.

`var Pingity = require('pingity');`

To make an Ajax call to the Pingity API:

`Pingity.validate("address@example.com")`

To bypass Pingity and run basic regex verification:

`Pingity.basic("address@example.com")`