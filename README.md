sqlpromise
==========

An SQL Server access library with Q promises!


USAGE
=====

First, edit the locally included config.json file to your sql server settings. The configuration is the same as if you were using the mssql module available on NPM.

Now you have two functions:

doQuery()

doUpdateQuery()

These functions will resolve with Q promises.  doQuery() will resolve with an array of records, like so:

var sqlpromise = require('sqlpromise');

sqlpromise.doQuery('select *  from users').then (
  function (records) {
    //your logic here
  }
);

doUpdateQuery() works the same, but the promise resolves with the string "success" or a rejection reason. This is to use when doing UPDATEs or DELETEs or INSERTs.

Enjoy!

