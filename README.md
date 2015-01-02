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

__Example__

```javascript
{
  "Param" : "",
  "Type"  : "",
  "Value" : ""
}

```


### connect([callback])

Create connection to the server.

__Arguments__

- **callback(err)** - A callback which is called after connection has established, or an error has occurred. Optional.


## Quick Example

```javascript

var sql = require('mssql');

var config = {
    user: '...',
    password: '...',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: '...',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

```

var sqlpromise = require('sqlpromise');

sqlpromise.doQuery('select *  from users').then (
  function (records) {
    //your logic here
  }
);


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

