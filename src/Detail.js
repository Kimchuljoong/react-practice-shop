import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
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

    let [alert, setAlert] = useState(true);
    let [tabNum, setTabNum] = useState(0);

    let { id } = useParams();
    let history = useHistory();
    
    useEffect( () => {
      let timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, [alert]);

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
              <Info remains={props.remains} id={id}/>
              <button className="btn btn-danger" onClick={ () => {
                let cpRemains = [...props.remains];
                cpRemains[id]--;
                props.setRemains(cpRemains);
              }}>주문하기</button>
              <button className="btn btn-danger" onClick={ ()=> {
                  history.goBack();
                //   history.push("/"); // push는 특정 경로로 이동 시킨다
              }}>뒤로가기</button>
            </div>
          </div>

          <Nav variant="tabs" defaultActiveKey="link-0" >
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={ () => setTabNum(0) }>상품설명</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={ () => setTabNum(1) }>리뷰</Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent style={{display: "inline-block"} } tabNum={ tabNum } />

        </div>
    );
}

function Info(props){
  return (
    <p>재고 : {props.remains[props.id]}</p>
  )
}

function TabContent(props){

  if (props.tabNum === 0){
    return <div>상품설명입니다.<br/>코카콜라는 맛있습니다. </div>
  } else if (props.tabNum === 1){
    return <div>리뷰칸</div>
  }
}

export default Detail;