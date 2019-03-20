//查询数据
module.exports=function(sql){
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            connection.query(
                sql,
                function selectCb(err, results) {
                    if (results) {
                        resolve(results);
                    }
                    if (err) {
                        console.log(err);
                    }
                    connection.release();
                }
            );
        })
    });
}