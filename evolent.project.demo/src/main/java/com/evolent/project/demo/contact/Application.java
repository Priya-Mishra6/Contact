package com.evolent.project.demo.contact;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.evolent.project.demo.contact.dao.ContactDao;
import com.evolent.project.demo.contact.model.Contact;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public CommandLineRunner init(ContactDao contactDao) {
		return args -> {
			Contact contact1 = new Contact();
			contact1.setFirstName("Anand");
			contact1.setLastName("Ahuja");
			contact1.setPhoneNo("1234567856");
			contact1.setEmail("anand@abc.com");
			contact1.setStatus("inactive");
			contactDao.save(contact1);
			
			Contact contact2 = new Contact();
			contact2.setFirstName("Rajat");
			contact2.setLastName("Sharma");
			contact2.setPhoneNo("8756432567");
			contact2.setEmail("rajat@abc.com");
			contact2.setStatus("active");
			contactDao.save(contact2);
		};
	}

}
