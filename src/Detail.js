import React from 'react';

function Detail(props){
    return(
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={props.product.image} width="100%" alt="" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품 설명</p>
              <p>12,000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
    );
}

export default Detail;