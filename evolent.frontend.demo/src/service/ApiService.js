import axios from 'axios';

const CONTACT_API_BASE_URL = 'http://localhost:8080/contacts';

class ApiService {

    fetchContacts() {
        return axios.get(CONTACT_API_BASE_URL);
    }

    fetchContactById(contactId) {
        return axios.get(CONTACT_API_BASE_URL + '/' + contactId);
    }

    deleteContact(contactId) {
        return axios.delete(CONTACT_API_BASE_URL + '/' + contactId);
    }

    addContact(contact) {
        return axios.post(""+CONTACT_API_BASE_URL, contact);
    }

    editContact(contact) {
        return axios.put(CONTACT_API_BASE_URL + '/' + contact.id, contact);
    }

}

export default new ApiService();
