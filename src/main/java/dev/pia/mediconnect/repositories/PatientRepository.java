package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.Provider;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

     Optional<Patient> findByUsername(String username);

    List<Patient> findAllByProviderId(Long providerId);

//     List<Patient> findAllByProviderEquals(Provider provider);

     // List<Patient> findByPatientEquals(Patient patient);

//     // Optional<Patient> findAllByPatientId(Long patientId);

//     Optional<Patient> findAllById(Long patientId);



}
    
