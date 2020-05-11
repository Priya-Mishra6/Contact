package com.evolent.project.demo.contact.service;

import java.util.List;

import com.evolent.project.demo.contact.model.Contact;
import com.evolent.project.demo.contact.model.ContactDto;

public interface ContactService {

	Contact save(ContactDto contact);

	List<Contact> findAll();

	void delete(int id);

	Contact findById(int id);

	ContactDto update(ContactDto contactDto);

}
