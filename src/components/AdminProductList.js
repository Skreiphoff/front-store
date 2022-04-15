import React, {Component} from 'react';
import {BACKEND_PATH} from "../utils/consts";
import {Row} from "react-bootstrap";
import ProductItem from "./ProductItem";
import AdminProductItem from "./AdminProductItem";

class AdminProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.category !== this.props.category) {
            this.fetchProducts(this.props.category)
        }
    }

    componentDidMount() {
        this.fetchProducts(this.props.category)
    }

    fetchProducts(category_id) {
        let url = ''
        category_id > 0 ? url = BACKEND_PATH + "products?categoryId="+category_id : url = BACKEND_PATH + "products"
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({products: result});
                }
            )
    }

    render() {
        return (
            <Row className={"d-flex"}>
                {
                    this.state.products.map((product) =>
                        <AdminProductItem key={product.id} product={product} />
                    )
                }
            </Row>
        );
    }
}

export default AdminProductList;