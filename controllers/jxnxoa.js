// //江西农信 测试
// const APIError = require('../rest').APIError;   //错误请求处理

// //server
// const jx=require('../server/jxnx');

// module.exports = {
//     //登录接口
//     'POST /api/jxnx/signin': async (ctx, next) => {
//         console.log(ctx);
//         console.log("----1---");
//         console.log(ctx.request);
//         console.log("----2---");
//         console.log(ctx.request.header);
//         console.log("----3---");
//         console.log(ctx.request.body);
//         ctx.rest({
//             data:jx.login(ctx.request.body)
//         })
//     },
//     //获取新闻列表
//     'POST /api/jxnx/news': async (ctx, next) => {
//         ctx.rest({
//             data:jx.news(ctx.request.body)
//         })
//     },
//     //获取新闻列表
//     'POST /api/jxnx/getDocList': async (ctx, next) => {
//         ctx.rest({
//             data:jx.docs(ctx.request.body)
//         })
//     }

// }
