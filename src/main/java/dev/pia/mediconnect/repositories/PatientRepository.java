package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.*;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

     // Optional<Patient> findByUsername(String username);
     Optional<Patient> findByUsername(String username);



     // us a Query to find patient by first name and last name

     List<Patient> findByFirstNameAndLastName(String firstName, String lastName);

     // get patient by patient id
     Optional<Patient> findById(Long id);

     // find all patients who  have the same provider id as the provider id
     Optional<Provider> findByProvider(Long id);

     List<Patient> findAllByProvider(Provider provider);

     List<Patient> findAllByProviderEquals(Provider provider);

     List<Patient> findAllByLastNameIgnoreCase(String lastName);

     List<Patient> findAllByInsuranceIgnoreCase(String insurance);

     List<Patient> findAllByFirstNameIgnoreCase(String firstName);

} 
