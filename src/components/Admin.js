import React, {Component} from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {BACKEND_PATH} from "../utils/consts";
import ProductList from "./ProductList";
import AdminProductList from "./AdminProductList";
import AddProduct from "./AddProduct";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        fetch(BACKEND_PATH + 'categories')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({items: result});
                }
            )
    }

    render() {
        return (
            <Container>
                <Row className={"mt-2"}>
                    <Col md={3}>
                        <ListGroup>
                            {
                                this.state.items.map((item) => (
                                    <ListGroup.Item
                                        style={{cursor: "pointer"}}
                                        key={item.id}
                                        active={item.id === this.state.activeCategory}
                                        onClick={() => this.setState({activeCategory: item.id})}
                                    >{item.name}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                        <AddProduct/>
                    </Col>
                    <Col md={9}>
                        <AdminProductList category={this.state.activeCategory}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin;