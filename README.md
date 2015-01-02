# sqlpromise
==========

An SQL Server access library with Q promises!

## What's new in 0.0.2 (stable, npm)

- Added a StoreProcedure Function


USAGE
=====

First, edit the locally included config.json file to your sql server settings. The configuration is the same as if you were using the mssql module available on NPM.

Now you have three functions:

doQuery()

### doInputProcedure({Option}, StoreProcedure)

This function will resolve with Q promise.  doInputProcedure() will resolve with an array of JSON records.

**{Option}** - takes the following Propeties

** StoreProcedure = Name of the storeprocedure as a String

__Example__

```javascript
{
  "Param" : "",
  "Type"  : "",
  "Value" : ""
}

```


## Quick Example

```javascript

var sqlpromise = require('sqlpromise');

var Option = {
               "Param" : "@username", //without the @
               "Type"  : sql.VarChar(), //see the mssql documentation for types
               "Value" : "xenlias" //value of the query
             }

sqlpromise.doInputProcedure(Option, 'getUsers').then (
  function (records) {
    //your logic here
  }
);

```


doUpdateQuery()

This function will resolve with Q promise.  doQuery() will resolve with an array of records, like so:

var sqlpromise = require('sqlpromise');

sqlpromise.doQuery('select *  from users').then (
  function (records) {
    //your logic here
  }
);

doUpdateQuery() works the same, but the promise resolves with the string "success" or a rejection reason. This is to use when doing UPDATEs or DELETEs or INSERTs.

Enjoy!

