package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.MedicalRecordDto;
import dev.pia.mediconnect.entities.MedicalRecord;
import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.repositories.MedicalRecordRepository;
import dev.pia.mediconnect.repositories.PatientRepository;

@Service
public class MedicalRecordServiceImpl implements MedicalRecordService {

    private PatientRepository patientRepository;

    private MedicalRecordRepository medicalRecordRepository;

    @Autowired
    public MedicalRecordServiceImpl(PatientRepository patientRepository, MedicalRecordRepository medicalRecordRepository) {
        this.patientRepository = patientRepository;
        this.medicalRecordRepository = medicalRecordRepository;
    }

    @Override
    @Transactional
    public List<String> addMedicalRecord(MedicalRecordDto medicalRecordDto, Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            // Patient patient = optionalPatient.get();
            MedicalRecord medicalRecord = new MedicalRecord(medicalRecordDto);
            optionalPatient.get().addMedicalRecord(medicalRecord);
            medicalRecordRepository.saveAndFlush(medicalRecord);
            return Arrays.asList("Medical record added successfully");
        } else {
            return Arrays.asList("Patient not found");
        }
    }
        

}
    

