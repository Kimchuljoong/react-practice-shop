import React from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {

    let state = useSelector( (state) => state );
    let dispatch = useDispatch();

    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>

                    { state.reducer.map( (e, i) => (
                        <tr key={i}>
                        <td>{ e.id }</td>
                        <td>{ e.name }</td>
                        <td>
                            <button onClick={ () => {
                                dispatch({type: "addQuan", payload: {index: i}});
                            } }>+</button>
                            &nbsp;&nbsp;{ e.quan }&nbsp;&nbsp;
                            <button onClick={ () => {
                                dispatch({type: "subQuan", payload: {index: i}});
                            } }>-</button>
                        </td>
                        </tr>
                     )
                    )}

                </tbody>
            </Table>
        </div>
    );
}

// function getOrder(state) {
//     return {
//         state : state
//     }
// }

// export default connect(getOrder)(Cart);
export default Cart;