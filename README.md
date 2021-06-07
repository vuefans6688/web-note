## 前端笔记

## 根据版本号来安装sass
    npm i node-sass@4.13.1
    npm i sass-loader@8.0.2

## uni-app操作流程
    1.全局安装
      npm install -g @vue/cli
    2.创建项目
      vue create -p dcloudio/uni-preset-vue 项目名称
    3.启动项目(微信小程序)
      npm run dev:mp-weixin
    4.微信小程序开发者工具导入项目

## uni-ui操作流程
    1.安装uni-ui
      npm install @dcloudio/uni-ui
    2.使用uni-ui
      (1)import { uniBadge } from '@dcloudio/uni-ui'
      (2)export default {
        components: {
          uniBadge
        }
      }
      (3)<uni-badge text="1"></uni-badge>
