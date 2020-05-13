import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class EditContactComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            phoneNo: '',
            email: '',
            status: ''
        }
        this.saveContact = this.saveContact.bind(this);
        this.loadContact = this.loadContact.bind(this);
    }

    componentDidMount() {
        this.loadContact();
    }

    loadContact() {
        ApiService.fetchContactById(window.localStorage.getItem("contactId"))
            .then((res) => {
                let contact = res.data.result;
                this.setState({
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                phoneNo: contact.phoneNo,
                email: contact.email,
                status: contact.status,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveContact = (e) => {
        e.preventDefault();
        let contact = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, phoneNo: this.state.phoneNo, email: this.state.email, status: this.state.status};
        ApiService.editContact(contact)
            .then(res => {
                this.setState({message : 'Contact added successfully.'});
                this.props.history.push('/contacts');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Contact</h2>
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

export default EditContactComponent;