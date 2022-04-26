const cleanPluginForCommand = require('./plugins/clean.plugin');

module.exports = {
    plugins : {
        commands: [cleanPluginForCommand('hello clean.')],
        // 也指出监听webpack, babel 的插件
        webpack:{},
        babel:{}
    }
}