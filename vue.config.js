// vue.config.js
module.exports = {
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
    // 如果这个值是一个函数，则会接收被解析的配置作为参数。
    // 该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: {
        entry: './examples/main.js'
    }
    // 在 multi-page 模式下构建应用
    // pages: {
    //     index: {
    //         entry: 'examples/main.js'
    //     }
    // }
}