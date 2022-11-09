package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.*;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

     Optional<Patient> findByPatientCode(String patientCode);

     Optional<Patient> findById(Long id);

     Optional<Provider> findByProvider(Long id);

     List<Patient> findAllByProvider(Provider provider);

     List<Patient> findAllByProviderEquals(Provider provider);

} 
