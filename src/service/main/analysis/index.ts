import { jlRequest } from "../../index";
import { ResultType } from "../../types";

enum ChartsUrl {
  GOODS_CATEGORY_COUNT = "/goods/category/count",
  GOODS_CATEGORY_SALE = "/goods/category/sale",
  GOODS_CATEGORY_FAVOR = "/goods/category/favor",
  GOODS_ADDRESS_SALE = "/goods/address/sale",
  GOODS_AMOUNT_LIST = "/goods/amount/list",
  GOODS_SALE_TOP10 = "/goods/sale/top10"
}

export function getGoodsCategoryCount() {
  return jlRequest.get<ResultType>({
    url: ChartsUrl.GOODS_CATEGORY_COUNT
  });
}
export function getGoodsCategorySale() {
  return jlRequest.get<ResultType>({
    url: ChartsUrl.GOODS_CATEGORY_SALE
  });
}
export function getGoodsCategoryFavor() {
  return jlRequest.get<ResultType>({
    url: ChartsUrl.GOODS_CATEGORY_FAVOR
  });
}
export function getGoodsAddressSale() {
  return jlRequest.get<ResultType>({
    url: ChartsUrl.GOODS_ADDRESS_SALE
  });
}

export function getGoodsAmountList() {
  return jlRequest.get<ResultType>({
    url: ChartsUrl.GOODS_AMOUNT_LIST
  });
}

export function getGoodsSaleTop10() {
  return jlRequest.get<ResultType>({
    url: ChartsUrl.GOODS_SALE_TOP10
  });
}
