
var Q = require('q');
var sql = require('mssql');

var readFileWithPromise = Q.denodeify(require('fs').readFile);

//funcion para conseguir config
var getConfig = function()
{
  console.log("Reading config file...");
  var defer = Q.defer();
  readFileWithPromise(__dirname+'/config.json').then (function(config){
    config = config.toString('utf8');
    config = JSON.parse(config);

    defer.resolve(config);
  }).fail(function(err){
     defer.reject(err);
  });
  return defer.promise;
};


exports.doQuery = function (query)
{
  console.log("doing query...");
  var defer = Q.defer();
  var sql = require('mssql');
  getConfig().then(function(config){
    var con = new sql.Connection(config,function conCB(err){
      console.log(err);
      var req =new sql.Request(con);
      req.query(query,function queryCB(err,recordset) {
        if (err) {
          console.log(err);
          defer.reject('Query failed:' + err);
          con.close();
          return defer.promise;
        }
        console.dir("Recordset is: ",recordset);
        defer.resolve(recordset);
        con.close();
      });
    });
  });
  return defer.promise;
};


exports.doUpdateQuery = function (query)
{
  console.log("doing query...");
  var defer = Q.defer();
  var sql = require('mssql');
  getConfig().then(function(config){
    var con = new sql.Connection(config,function conCB(err){
      console.log(err);
      var req =new sql.Request(con);
      req.query(query,function queryCB(err,recordset) {
        if (err) {
          defer.reject('Query failed:' + err);
          con.close();
          return defer.promise;
        }
        defer.resolve("success");
        con.close();
      });
    });
  });
  return defer.promise;
};