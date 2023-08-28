import axios, { AxiosResponse } from 'axios'

const backend = (): string => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000/'
  } else {
    return 'https://api.nullchemy.com/'
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
    // Handle error response
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
      return {
        ...error.response,
        data: { type: 'error', message: 'Something Wrong Happened' },
      }
    } else if (error.request) {
      console.log(error.request)
      return {
        ...error.response,
        data: { type: 'error', message: 'Something Wrong Happened' },
      }
    } else {
      console.log('Error', error.message)
    }
    console.log(error.config)
    return {
      ...error.response,
      data: { type: 'error', message: 'Something Wrong Happened' },
    }
  }
}

export default api
