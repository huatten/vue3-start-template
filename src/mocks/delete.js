// 模拟删除会话
export default [
  {
    url: '/news/delete/:id',
    method: 'delete',
    timeout: 1200,
    response: (options) => {
      const id = options.url.slice(options.url.lastIndexOf('/') + 1) // 提取 id
      return {
        code: 0,
        msg: 'success',
        data: id,
      }
    },
  },
]
