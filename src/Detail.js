import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

//css
import './Detail.scss';

let TitleBox = styled.div`
  padding : 20px;
`;

let Title = styled.h4`
  font-size : 25px;
`;

function Detail(props){
    
    useEffect( () => {
      let timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, [alert]);

    let [alert, setAlert] = useState(true);

    let { id } = useParams();
    let history = useHistory();

    // 대상 상품을 찾음
    // let product = props.shoes.find(function(e){
    //     return e.id === id; // 해당 아이디와 일치하는 대상을 찾음 경우 return true 인 경우 해당 객체 반환
    //   });
    
    let product = props.products.find( (e) => parseInt(e.id) === parseInt(id)); // 해당 아이디와 일치하는 대상을 찾음 경우 return true 인 경우 해당 객체 반환
    
    return(
        <div className="container">

          <TitleBox>
            <Title>상세페이지</Title>
          </TitleBox>

          {alert
            ? (<div className="saleAlert">
                <p>재고가 얼마 남지 않았습니다!</p>
               </div>)
            : null
          }

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