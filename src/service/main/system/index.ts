import { jlRequest } from "../../index";
import { ResultType } from "../../types";
export function getDataList(url: string, query: any = {}) {
  return jlRequest.post<ResultType>({
    url,
    data: query
  });
}

export function deleteDataList(url: string) {
  return jlRequest.delete<Request>({
    url
  });
}

export function editorPageData(url: string, query: any) {
  return jlRequest.patch({
    url,
    data: query
  });
}

export function createPageData(url: string, query: any) {
  return jlRequest.post({
    url,
    data: query
  });
}
