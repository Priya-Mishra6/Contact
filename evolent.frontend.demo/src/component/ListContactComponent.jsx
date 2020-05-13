import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class ListContactComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            message: null
        }
        this.deleteContact = this.deleteContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.addContact = this.addContact.bind(this);
        this.reloadContactList = this.reloadContactList.bind(this);
    }

    componentDidMount() {
        this.reloadContactList();
    }

    reloadContactList() {
        ApiService.fetchContacts()
            .then((res) => {
                this.setState({contacts: res.data.result})
            });
    }

    deleteContact(contactId) {
        ApiService.deleteContact(contactId)
           .then(res => {
               this.setState({message : 'Contact deleted successfully.'});
               this.setState({contacts: this.state.contacts.filter(contact => contact.id !== contactId)});
           })

    }

    editContact(id) {
        window.localStorage.setItem("contactId", id);
        this.props.history.push('/edit-contact');
    }

    addContact() {
        window.localStorage.removeItem("contactId");
        this.props.history.push('/add-contact');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Contact Details</h2>
                <button className="btn btn-danger" onClick={() => this.addContact()}> Add Contact</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>PhoneNo.</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map(
                                contact =>
                                    <tr key={contact.id}>
                                        <td>{contact.firstName}</td>
                                        <td>{contact.lastName}</td>
                                        <td>{contact.phoneNo}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.status}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteContact(contact.id)}> Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editContact(contact.id)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListContactComponent;