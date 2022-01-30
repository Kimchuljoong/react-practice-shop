import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){

    let { id } = useParams();
    let history = useHistory();

    // 대상 상품을 찾음
    let product = props.shoes.find(function(e){
        return e.id === id; // 해당 아이디와 일치하는 대상을 찾음 경우 return true 인 경우 해당 객체 반환
      });

    return(
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={ product.image } width="100%" alt="" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{ product.title }</h4>
              <p>{ product.content }</p>
              <p>{ product.price }원</p>
              <button className="btn btn-danger">주문하기</button>
              <button className="btn btn-danger" onClick={ ()=> {
                  history.goBack();
                //   history.push("/"); // push는 특정 경로로 이동 시킨다
              }}>뒤로가기</button>
            </div>
          </div>
        </div>
    );
}

export default Detail;