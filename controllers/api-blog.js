const APIError = require('../rest').APIError;   //错误请求处理

const getTags=require('../data/tags');
const getArticle=require('../data/article');
//请求接口配置...
module.exports = {

    //userlist全部
    'GET /api/tags':async(ctx,next)=>{
        ctx.rest({
            tags:await getTags.tags()
        })
    },

    //文章列表
    'GET /api/article':async(ctx,next)=>{
        ctx.rest({
            articles:await getArticle.article()
        })
    }

}