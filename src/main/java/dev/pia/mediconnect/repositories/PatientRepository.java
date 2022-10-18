package dev.pia.mediconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.pia.mediconnect.entities.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findByUsername(String username);

}
    
