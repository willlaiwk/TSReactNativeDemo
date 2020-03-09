import axios from 'axios'
import { Article } from '../types/Models'
import { NEWS_API_KEY } from '../config'

type BaseResponse = {
  status: string
}

export type FetchTopHeadlinesResp = BaseResponse & {
  totalResults: number
  articles: Article[]
}

export function fetchTopHeadlines(): Promise<FetchTopHeadlinesResp> {
  const country = 'us'
  const url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`

  return axios.get(url).then(resp => resp.data)
}
