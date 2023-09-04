// mock 分页列表
import Mock from 'mockjs'

// 生成随机数据
const generateRandomData = (count = 0) => {
  const data = []
  for (let i = 1; i <= count; i++) {
    data.push({
      id: Mock.Random.id(),
      title: Mock.Random.ctitle(5, 30),
      createTime: Mock.Random.datetime(),
      updateTime: Mock.Random.datetime(),
    })
  }
  return data
}

// 分页模拟数据
export default [
  {
    url: '/news/page',
    method: 'post',
    timeout: 500,
    response: (options) => {
      const { page = 1, pageSize = 10 } = options.body
      const total = 50 // 总数据条数
      const start = (page - 1) * pageSize
      const end = start + pageSize
      const pages = Math.ceil(total / pageSize)
      const data = generateRandomData(total).slice(start, end)
      return {
        code: 0,
        msg: 'success',
        data: {
          page: page,
          size: pageSize,
          records: data,
          pages,
          total,
        },
      }
    },
  },
]
