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

Mock.mock('/hxy/project/getTableDataF', {
  'list|1-10': [{
    'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
    'depName': '@name', // 随机生成姓名
    'peopleNum|30-40': 35, // 随机生成30-40之间的数字
    'proNum|1-10': 5, // 随机生成1-10之间的数字
    'depMaster': '@name',
    'fuMaster': '@name',
  }]
})

Mock.mock('/hxy/project/getTableDataS', {
  'list|1-10': [{
    'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
    'depName': '@name', // 随机生成姓名
    'peopleNum|30-40': 35, // 随机生成30-40之间的数字
    'proNum|1-10': 5, // 随机生成1-10之间的数字
    'depMaster': '@name',
    'fuMaster': '@name',
  }]
})