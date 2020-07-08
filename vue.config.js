//    此文件是 node。js 文件    使用webpack  配置文件
 //   使用 conmmon.js 孤帆

 const path = require('path')

 module.exports = {
     // 项目的服务器配置
     devServer :{
         open:true,
         proxy:{
             // 标识符  反向代理配置
             './index.php':{
                 target:'http://www.qinqin.net',
                 changeOrigin:true  // 表示用我们的源 代理 目标源
             }
         }
     },
     // 路径别名
     chainWebpack :config =>{
         config.resolve.alias
         .set('@',path.join(__dirname,'./src'))
         .set('com',path.join(__dirname,'./src/components'))
         .set('js',path.join(__dirname,'./src/assets/js'))
         .set('@utilt',path.join(__dirname,'./src/utilt'))
         .set('router',path.join(__dirname,'./src/router'))
         .set('assets',path.join(__dirname,'./src/assets'))
         .set('@index',path.join(__dirname,'./src/components/index'))
         .set('@Api',path.join(__dirname,'./src/Api'))
     },
     //  多页面配置
     pages:{
         details:{
             entry:'src/pages/details.js',
             template:'public/details.html',
             filename:'details.html'
         },
         table:{
            entry:'src/pages/table.js',
            template:'public/table.html',
            filename:'table.html'
        },
        personal:{
            entry:'src/pages/personal.js',
            template:'public/personal.html',
            filename:'personal.html'
        },
         index:{
            entry:'src/main.js',
            template:'public/index.html',
            filename:'index.html'
        }
     }
 }