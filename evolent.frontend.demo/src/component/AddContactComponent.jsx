import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class AddContactComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            phoneNo: '',
            email: '',
            status: '',
            message: null
        }
        this.saveContact = this.saveContact.bind(this);
    }

    saveContact = (e) => {
        e.preventDefault();
        let contact = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, phoneNo: this.state.phoneNo, email: this.state.email, status: this.state.status};
        ApiService.addContact(contact)
            .then(res => {
                this.setState({message : 'Contact added successfully.'});
                this.props.history.push('/contacts');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Contact</h2>
                <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Phone No.:</label>
                    <input placeholder="Phone No." name="phoneNo" className="form-control" value={this.state.phoneNo} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Status:</label>
                    <input placeholder="Status" name="status" className="form-control" value={this.state.status} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveContact}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddContactComponent;