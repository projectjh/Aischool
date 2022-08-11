import ShopListItem from "./ShopListItem";
const ShopList = ({ data }) => {
  //{data} :  api에서 받아온 데이터(data.items)
  return <div>{data && data.map((d) => <ShopListItem data={d} key={d.productId} />)}</div>;
};
export default ShopList;
