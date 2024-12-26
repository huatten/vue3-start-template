import qs from 'qs'

import serverErrorConfig from '@/config/serverConfig'
import router from '@/routers'
import { useUserStore } from '@/stores/modules/user'
import { clearAllStorage } from '@/utils/storage'

// 初始配置
const initialConfig = {
  method: 'GET',
  params: null,
  body: null,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
  },
  cache: 'no-cache',
  credentials: 'include',
  responseType: 'json',
}

// 处理请求参数
const handleParams = (url, method, params) => {
  if (params && /^(GET|POST|DELETE|HEAD|OPTIONS)$/i.test(method)) {
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}${qs.stringify(params)}`
  }
  return url
}

// 合并配置
const mergeConfig = (options) => {
  const { access_token } = storeToRefs(useUserStore())
  return {
    ...initialConfig,
    ...options,
    headers: {
      ...initialConfig.headers,
      Authorization: `Bearer ${access_token.value}`,
      ...options.headers,
    },
  }
}
// 主请求函数
const request = async (url, options = {}) => {
  // 合并配置
  const config = mergeConfig(options)

  // 处理GET请求参数
  // eslint-disable-next-line no-param-reassign
  url = handleParams(url, config.method, config.params)
  delete config.params

  // 处理请求体
  if (/^(POST|PUT|PATCH)$/i.test(config.method)) {
    const { headers, body } = config
    config.body =
      headers['Content-Type'] === 'application/x-www-form-urlencoded' ? qs.stringify(body) : JSON.stringify(body)
  }

  try {
    const response = await fetch(url, config)

    if (!/^(2|3)\d{2}$/.test(String(response.status))) {
      // 登录失效
      if (Number(response.status) === 424) {
        clearAllStorage()
        await router.replace('/home')
      }
      throw new Error(serverErrorConfig[response.status] || serverErrorConfig.default)
    }

    let result
    switch (config.responseType) {
      case 'text':
        result = await response.text()
        break
      case 'arraybuffer':
        result = await response.arrayBuffer()
        break
      case 'blob':
        result = await response.blob()
        break
      case 'json':
      default:
        result = await response.json()
    }
    if (result.code && result.code !== 0) {
      throw new Error(result?.msg || '服务端程序异常，请检查程序')
    }
    console.log('result', result)
    return result
  } catch (error) {
    console.error('error', error)
    if (!window.navigator.onLine) {
      throw new Error('您的网络似乎断开了~')
    }
    throw error // 返回其他错误
  }
}

export default request
