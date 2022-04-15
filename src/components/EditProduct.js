import React, {Component} from 'react';
import {Button, Card, Container, FormControl, InputGroup} from "react-bootstrap";
import {BACKEND_PATH} from "../utils/consts";

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id,
            title : this.props.product.title,
            description : this.props.product.description,
            price : this.props.product.price,
            discount : this.props.product.discount,
            category : this.props.product.category,
            categoryId: this.props.product.categoryId
        }
        this.discountHandle = this.discountHandle.bind(this)
        this.priceHandle = this.priceHandle.bind(this)
        this.descriptionHandle = this.descriptionHandle.bind(this)
        this.titleHandle = this.titleHandle.bind(this)
        this.send = this.send.bind(this)
    }
    render() {
        return (
            <Container
                className={"d-flex"}
            >
                <Card className={"flex-column"}>
                    <InputGroup className={"mb-3"}>
                        <InputGroup.Text id="inputGroup-sizing-default">Название</InputGroup.Text>
                        <FormControl
                            aria-label="Название"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.title}
                            onChange={this.titleHandle}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Описание</InputGroup.Text>
                        <FormControl
                            aria-label="Описание"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.description}
                            onChange={this.descriptionHandle}

                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Цена</InputGroup.Text>
                        <FormControl
                            aria-label="Цена"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.price}
                            onChange={this.priceHandle}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Скидка</InputGroup.Text>
                        <FormControl
                            aria-label="Скидка"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.discount}
                            onChange={this.discountHandle}
                        />
                    </InputGroup>
                </Card>
                <Button onClick={this.send}>Изменить</Button>
            </Container>

        );
    }

    discountHandle(e) {
        this.setState({discount: e.target.value})
    }

    priceHandle(e) {
        this.setState({price: e.target.value})
    }

    descriptionHandle(e) {
        this.setState({description: e.target.value})
    }

    titleHandle(e) {
       this.setState({title: e.target.value})
    }

    send() {
        fetch(BACKEND_PATH + 'products', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
    }
}

export default EditProduct;