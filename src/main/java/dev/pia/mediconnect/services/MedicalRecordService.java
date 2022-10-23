package dev.pia.mediconnect.services;

import java.util.*;

import dev.pia.mediconnect.dtos.MedicalRecordDto;

public interface MedicalRecordService {

    // patient adds medical record
    List<String> addMedicalRecord(MedicalRecordDto medicalRecordDto, Long patientId);
    
}
