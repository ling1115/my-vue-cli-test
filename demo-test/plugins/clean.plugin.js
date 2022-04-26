module.exports = (arg) => (api)=>{
    api.registerCommands('clean', ()=>{
        console.log("执行了clean命令逻辑", arg);
    })
}
/** 理解
function xx ( arg = 'ss'){
    function dd( obj={dd:'2'}){
        obj.dd = arg;
        console.log(obj.dd);
    }
    dd()
}
xx()  // ===> 'ss'
 */