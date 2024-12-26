/**
 * 服务端错误码配置
 * @type {{default: string, 400: string, 401: string, 423: string, 500: string, 424: string, 479: string, 501: string, 403: string, 502: string, 404: string, 426: string, 503: string, 504: string, 417: string, 428: string, 505: string, 429: string}}
 */
const serverErrorConfig = {
  400: '参数名或参数类型不正确',
  401: '登录状态已失效，请重新登录',
  403: '当前操作没有权限',
  404: '请求地址不存在',
  417: '未绑定登录账号，请使用密码登录后绑定',
  423: '演示环境不能操作，如需了解联系我们',
  424: '登录状态已失效，请重新登录',
  426: '用户名或密码错误',
  428: '验证码错误,请重新输入',
  429: '请求过频繁',
  479: '演示环境，没有权限操作',
  500: '服务端请求错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
  505: 'HTTP版本不支持',
  default: '系统未知错误,请反馈给管理员',
}

export default serverErrorConfig
