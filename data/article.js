const pool = require('./config');
//返回文章列表
exports.article = function() {

    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            connection.query(
                "SELECT id,title,date,count,scan,overview,type,tag  FROM article ORDER BY date DESC;",
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


};
//查询文章详情
exports.articleHtml = function(id) {
    let _sql =  `SELECT title,date,type,tag,text FROM article WHERE id ="${id}";`
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            connection.query(
                _sql,
                function selectCb(err, results) {
                    if (results) {
                        resolve(results);
                    }
                    if (err) {
                        console.log('err'+err);
                    }
                    connection.release();
                }
            );
        })
    });
};


//查询文章时间节点
exports.articleTime = function(id) {
    let _sql =  `SELECT title,date FROM article ORDER BY date DESC;`
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            connection.query(
                _sql,
                function selectCb(err, results) {
                    if (results) {
                        resolve(results);
                    }
                    if (err) {
                        console.log('err'+err);
                    }
                    connection.release();
                }
            );
        })
    });
};


//查询文章类别

