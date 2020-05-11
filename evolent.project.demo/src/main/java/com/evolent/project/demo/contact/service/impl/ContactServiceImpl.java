package com.evolent.project.demo.contact.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evolent.project.demo.contact.dao.ContactDao;
import com.evolent.project.demo.contact.model.Contact;
import com.evolent.project.demo.contact.model.ContactDto;
import com.evolent.project.demo.contact.service.ContactService;

@Transactional
@Service(value = "contactService")
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactDao contactDao;

	public List<Contact> findAll() {
		List<Contact> list = new ArrayList<>();
		contactDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		contactDao.deleteById(id);
	}

	@Override
	public Contact findById(int id) {
		Optional<Contact> optionalContact = contactDao.findById(id);
		return optionalContact.isPresent() ? optionalContact.get() : null;
	}

	@Override
	public ContactDto update(ContactDto contactDto) {
		Contact contact = findById(contactDto.getId());
		if (contact != null) {
			BeanUtils.copyProperties(contactDto, contact, "id");
			contactDao.save(contact);
		}
		return contactDto;
	}

	@Override
	public Contact save(ContactDto contact) {
		Contact newContact = new Contact();
		newContact.setFirstName(contact.getFirstName());
		newContact.setLastName(contact.getLastName());
		newContact.setPhoneNo(contact.getPhoneNo());
		newContact.setEmail(contact.getEmail());
		newContact.setStatus(contact.getStatus());
		return contactDao.save(newContact);
	}

}
