本地创建一个目录&执行初始化命令：
```
mkdir vue-component
cd vue-component
npm init
```

安装依赖：
```
npm i rollup
npm i rollup-plugin-commonjs
npm i rollup-plugin-vue
npm i vue-template-compiler
```
在项目目录下面创建 src 目录并添加 index.js 文件和 vue-component.vue

vue-component.vue:
```
  <template>
      <div>
        {{message}}
      </div>
  </template>
  <script>
  export default {
      name: 'vue-component',
      data() {
          return {
            message:'hello vue component & rollup!'
          }
      },
  }
  </script>
  <style lang="less" scoped>

  </style>
```

index.js:
```
  import VueComponent from "./vue-component.vue"

  export default {
    install(Vue,options){
      Vue.component("vue-component",VueComponent)
    }
  }
```

注：
  
1. 这里注册的组件名字最好和项目名一致，以免别人或自己使用的时候混淆。

测试组件：

    vue serve ./src/vue-component.vue

注意上面的命令需要安装：
    
    npm install -g @vue/cli-service-global




创建rollup.config.js文件：
```  
  import vue from 'rollup-plugin-vue'
  import commonjs from 'rollup-plugin-commonjs';

  export default {
    input :"./src/index.js",
    output:{
      file:"./dist/index.cjs.js",
      format:"cjs",
    },
    // ...
    plugins: [
      // ...
      commonjs(),
      vue(/* options */),
    ],
  } 
```

package.json添加到scripts：
    
    "build": "rollup -c"

并且把main的字段值改为：
  
    "main": "./dist/index.cjs.js"

构建：
    
    npm run build

在项目目录会多一个dist文件夹，里面包含index.cjs.js文件。

发布到https://npmjs.com:

    npm login
    npm publish

注：

  1. 确保有npmjs的账户，没有去注册一个
  2. 发布的项目名有可能被占用，修改后的项目名记得同步更改注册的组件名
