import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import User from "../components/User";
import AdminComponent from "../components/Admin";
import AddProduct from "../components/AddProduct";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.user.admin === 1 ? <AdminComponent/> : <User/>}
            </div>
        );
    }
}

export default Admin;