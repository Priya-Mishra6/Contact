package com.evolent.project.demo.contact.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.evolent.project.demo.contact.model.Contact;

@Repository
public interface ContactDao extends CrudRepository<Contact, Integer> {

}