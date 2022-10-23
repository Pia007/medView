package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.MedicalRecord;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long > {

    // get medical record by medical record id
    Optional<MedicalRecord> findById(Long id);
    // Optional <MedicalRecord> findByPatientEquals(Long id);
    
}
