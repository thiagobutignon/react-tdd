import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post: (params: T) => Promise<HttpResponse<R>>
}
