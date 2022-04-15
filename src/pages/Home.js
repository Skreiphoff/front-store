import React, {Component} from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import ProductList from "../components/ProductList";
import {BACKEND_PATH} from "../utils/consts";
import NavBar from "../components/NavBar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            activeCategory: 0
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
            <div>
                <NavBar/>
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
                        </Col>
                        <Col md={9}>
                            <ProductList category={this.state.activeCategory}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;