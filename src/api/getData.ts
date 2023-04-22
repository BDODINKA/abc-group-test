import type { responseApi } from '@/interface/iApi'

export const getData = async (): Promise<responseApi> => {
  try {
    const response = await fetch('https://swapi.dev/api/people/1/', { method: 'GET' })
    return await response.json()
  } catch (e) {
    return e as responseApi
  }
}
