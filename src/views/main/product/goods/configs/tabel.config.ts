const tableConfigList = {
  title: "商品列表",
  propList: [
    { prop: "name", label: "商品名", minWidth: "100" },
    { prop: "oldPrice", label: "原价", minWidth: "45" },
    { prop: "newPrice", label: "现价", minWidth: "45" },
    { prop: "imgUrl", label: "商品展示", minWidth: "80", slotName: "imgUrl" },
    { prop: "inventoryCount", label: "剩余库存", minWidth: "50" },
    { prop: "saleCount", label: "已售", minWidth: "50" },
    { prop: "favorCount", label: "优惠件数", minWidth: "50" },
    { prop: "address", label: "地址", minWidth: "45" },
    { prop: "status", label: "状态", minWidth: "60", slotName: "status" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "100",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "100",
      slotName: "updateAt"
    },
    {
      label: "操作",
      minWidth: "110",
      slotName: "operation"
    }
  ],
  showTabelIndex: true,
  showTabelSelect: true
};
export default tableConfigList;
