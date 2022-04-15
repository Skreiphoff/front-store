import React, {Component} from 'react';
import {Button, Card, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import {BACKEND_PATH} from "../utils/consts";

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            price: null,
            discount: null,
            categoryId: null,
            items: []
        }
        this.discountHandle = this.discountHandle.bind(this)
        this.priceHandle = this.priceHandle.bind(this)
        this.descriptionHandle = this.descriptionHandle.bind(this)
        this.titleHandle = this.titleHandle.bind(this)
        this.send = this.send.bind(this)
        this.selectHandle = this.selectHandle.bind(this)
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
            <Container
                style={{padding: 0}}
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
                    <InputGroup className={"mb-3"}>
                        <InputGroup.Text id="inputGroup-sizing-default">Скидка</InputGroup.Text>
                        <FormControl
                            aria-label="Скидка"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.discount}
                            onChange={this.discountHandle}
                        />
                    </InputGroup>
                    <Form.Select aria-label="Default select example" onChange={this.selectHandle}>
                        {
                            this.state.items.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                    </Form.Select>
                </Card>
                <Button onClick={this.send}>Создать</Button>
            </Container>

        );
    }

    selectHandle(e) {
        this.setState({categoryId: e.target.value})
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
        let position = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            discount: this.state.discount,
            categoryId: this.state.categoryId ?? this.state.items[0].id,
        }
        fetch(BACKEND_PATH + 'products', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(position)
        }).then(res => res.json())
    }
}

export default EditProduct;