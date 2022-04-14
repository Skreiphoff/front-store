import React, {Component} from 'react';
import {Card, Container, FormControl, InputGroup} from "react-bootstrap";

class EditProduct extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container
                className={"d-flex"}
            >
                <Card className={"p-5"}>
                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                        <FormControl
                            aria-label="Название"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </Card>
            </Container>

        );
    }
}

export default EditProduct;