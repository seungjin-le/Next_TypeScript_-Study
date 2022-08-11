import axios from 'axios'

type Datas = {
  url: string
  params: object
}

export const get = ({params, url} : Datas) => {
  return axios.get(url, {
    params,
    headers: {
      "Authorization": `KakaoAK c632ee2baf4d5a2bbfa3277ea498e550`
    },
  });
}
