import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import cart from "../pages/Cart";

class CartPosition extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <div className={"cart-position"}>
                    <Row>
                        <Col md={10} className={""}>
                            <div className={"d-flex flex-column cart_position_description m-3"}>
                                <span>{this.props.position.title}</span>
                                <span>{this.props.position.description}</span>
                                <span>Количество {this.props.position.value} ед.</span>
                            </div>
                        </Col>
                        <Col md={2} className={"d-flex flex-column mt-3 mb-3  align-content-center"}>
                            <span>{this.props.position.price} руб</span>
                            <Button style={{width:"90%"}}>Удалить</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default CartPosition;