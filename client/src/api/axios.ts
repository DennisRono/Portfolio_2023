import axios, { AxiosResponse } from 'axios'

const backend = (): string => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'https://server.nullchemy.com/'
  } else {
    return 'https://server.nullchemy.com/'
  }
}

const api = async (
  method: string = 'GET',
  slug: string,
  data: object = {},
  headers: object = {}
): Promise<AxiosResponse> => {
  try {
    const config = {
      method: method,
      maxBodyLength: Infinity,
      url: backend() + 'api/v1/' + slug,
      headers: {
        ...headers,
      },
      data: data,
    }
    const res = await axios(config)
    return res
  } catch (error: any) {
    return {
      ...error.response,
      data: { type: 'error', message: 'Something Wrong Happened' },
    }
  }
}

export default api
