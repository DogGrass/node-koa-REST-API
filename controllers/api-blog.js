const APIError = require('../rest').APIError;   //错误请求处理

const getTags=require('../data/tags');
const getArticle=require('../data/article');
const getSite = require('../data/visitCount');
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
    },
    //文章详情
    'GET /api/articleHtml:id':async(ctx,next)=>{
        ctx.rest({
            articles:await getArticle.articleHtml(ctx.params.id)
        })
    },
    //访问加一
    'GET /api/visitAdd':async(ctx,next)=>{
        ctx.rest({
            site:await getSite.visitAdd()
        })
    },
    //获取访问数目
    'GET /api/visitCount':async(ctx,next)=>{
        ctx.rest({
            site:await getSite.visitTotal()
        })
    },

}