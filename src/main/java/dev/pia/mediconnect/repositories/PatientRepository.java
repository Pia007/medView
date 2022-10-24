package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.*;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

     // Optional<Patient> findByUsername(String username);
     Optional<Patient> findByUsername(String username);

     // get patient by patient id
     Optional<Patient> findById(Long id);

     // find all patients who  have the same provider id as the provider id
     Optional<Provider> findByProvider(Long id);

     List<Patient> findAllByProvider(Provider provider);

     List<Patient> findAllByProviderEquals(Provider provider);

     List<Patient> findAllByLastName(String lastName);

    List<Patient> findAllByInsurance(String insurance);

    List<Patient> findAllByFirstName(String firstName);
     
     // provider edits patient
     // @Modifying
     // @Query("UPDATE Patient p SET p.firstName = ?1, p.lastName = ?2, p.dob = ?3, p.email = ?4, p.phone = ?5, p.address = ?6, p.city = ?7, p.state = ?8, p.zip = ?9 WHERE p.id = ?10")
     // void updatePatient(String firstName, String lastName, LocalDate dob, String email, String phone, String address, String city, String state, String zip, Long id);
     


     


//     List<Patient> findAllByProviderId(Long providerId);

//     List<Patient> findAllByProviderEquals(Provider provider);

     // List<Patient> findByPatientEquals(Patient patient);

//     // Optional<Patient> findAllByPatientId(Long patientId);

//     Optional<Patient> findAllById(Long patientId);

}
    
