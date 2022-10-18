package dev.pia.mediconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.pia.mediconnect.entities.PatientRecord;

public interface PatientRecordRespository extends JpaRepository<PatientRecord, Long> {

}
    

