// 引入mockjs
import Mock from 'mockjs'

// 使用mock
//延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
})
Mock.mock('/hxy/project/getToken', {
  tk: 'hxy_project'
})