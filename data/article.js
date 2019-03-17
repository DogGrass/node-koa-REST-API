const connection = require('./config');
//返回标签列表
exports.article = function() {

    return new Promise(function(resolve, reject) {
        connection.query(
            "SELECT id,title,date,count,scan,overview,type,tag  FROM article",
            function selectCb(err, results) {
                if (results) {
                    resolve(results);
                }
                if (err) {
                    console.log(err);
                }
            }
        );
    });


};