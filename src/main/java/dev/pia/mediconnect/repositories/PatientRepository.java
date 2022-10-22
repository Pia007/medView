package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Modifying;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.entities.Provider;

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
     
     // provider registers a patient


     


//     List<Patient> findAllByProviderId(Long providerId);

//     List<Patient> findAllByProviderEquals(Provider provider);

     // List<Patient> findByPatientEquals(Patient patient);

//     // Optional<Patient> findAllByPatientId(Long patientId);

//     Optional<Patient> findAllById(Long patientId);

}
    
