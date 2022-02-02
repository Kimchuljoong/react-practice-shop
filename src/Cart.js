import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
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

                    { props.state.map( (e, i) => (
                        <tr key={i}>
                        <td>{ e.id }</td>
                        <td>{ e.name }</td>
                        <td>{ e.quan }</td>
                        <td> </td>
                        </tr>
                     )
                    )}

                </tbody>
            </Table>
        </div>
    );
}

function getOrder(state) {
    return {
        state : state
    }
}

export default connect(getOrder)(Cart);