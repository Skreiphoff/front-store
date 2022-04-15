import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import {BACKEND_PATH} from "../utils/consts";

class TypeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            activeItem: 0
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
                <ListGroup>
                    {
                        this.state.items.map((item) => (
                            <ListGroup.Item
                                style={{cursor: "pointer"}}
                                key={item.id}
                                active={item.id === this.state.activeItem}
                                onClick={() => this.setState({activeItem: item.id})}
                            >{item.name}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}

export default TypeBar;