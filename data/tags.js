const connection = require('./config');
//返回标签列表
exports.tags = function() {
   
    return new Promise(function(resolve, reject) {
       
        connection.query(
            "SELECT * FROM tags",
            function selectCb(err, results) {
                
                if (results) {
                    resolve(results);
                }
                if (err) {
                    reject(err)
                    console.log(err);
                }
               // connection.end();
            }
        );
    });


};