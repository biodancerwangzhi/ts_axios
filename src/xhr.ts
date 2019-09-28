import { configType } from './type'

export default function xmlRequest(config: configType): void {
  const { data = null, method = 'get', url } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
