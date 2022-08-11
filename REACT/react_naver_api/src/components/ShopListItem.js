import "../css/ShopListItem.scss";

const ShopListItem = ({ data }) => {
  // {data} :  ShopList로부터 넘겨받은 각 상품별 데이터
  const g_title = data.title; // 상품명
  const l_price = parseInt(data.lprice).toLocaleString(); //최저가
  const category1 = data.category1; //상품 분류 카테고리 1
  const category2 = data.category2; //상품 분류 카테고리 2
  const category3 = data.category3; //상품 분류 카테고리 3
  const category4 = data.category4; //상품 분류 카테고리 4
  const g_link = data.link; //상품 구매 링크
  const img_link = data.image; //상품 이미지 링크

  return (
    <div className="wrap">
      <div className="g_wrapper">
        {/* 이미지 */}
        <div className="g_img_wrapper">
          <a href={g_link}>
            <img className="g_img" src={img_link} alt="" />
          </a>
        </div>
        <div className="g_info ">
          {/* 상품명 */}
          <div className="g_title">
            {/* 문자열에 html태그가 포함되는 상황을 해결하기 위한 코드 */}
            <a href={g_link} dangerouslySetInnerHTML={{ __html: g_title }}></a>
          </div>
          {/* 가격 */}
          <div className="l_price">
            최저가 <b>{l_price}</b>원
          </div>
          {/* 카테고리 */}
          <div className="category">
            {category1 && <span>{category1}&nbsp;&nbsp;</span>}
            {category2 && <span>&gt;&nbsp;&nbsp;{category2}&nbsp;&nbsp;</span>}
            {category3 && <span>&gt;&nbsp;&nbsp;{category3}&nbsp;&nbsp;</span>}
            {category4 && <span>&gt;&nbsp;&nbsp;{category4}&nbsp;&nbsp;</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopListItem;
