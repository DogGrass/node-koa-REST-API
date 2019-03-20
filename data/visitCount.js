const pool = require('./config');
//访问量加1
exports.visitAdd = function() {
   
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            connection.query(
                "UPDATE site SET count = count+1 WHERE id = 1",
                function selectCb(err, results) {
                    
                    if (results) {
                        resolve(results);
                    }
                    if (err) {
                        reject(err)
                        console.log(err);
                    }
                    connection.release();
                }
            );
        })
    });

};
//获取访问量
exports.visitTotal = function(){
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            connection.query(
                "SELECT count FROM site WHERE id = 1",
                function selectCb(err, results) {
                    
                    if (results) {
                        resolve(results);
                    }
                    if (err) {
                        reject(err)
                        console.log(err);
                    }
                    connection.release();
                }
            );
        })
    });
}