// 计算服务器消耗时长
module.exports = async (ctx,next) =>{
    // 记录开始时间
    const start = Date.now()
    // 让内层中间件执行
    await next()
    // 记录结束时间
    const end = Date.now()
    // 设置X-Response-Time
    const duration = end - start
    ctx.set('X-Response-Time', duration + 'ms')
}                                  
