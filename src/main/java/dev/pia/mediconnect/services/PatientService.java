package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.*;

/* create Patient Service interface */
public interface PatientService {

    /* add patient to provider id  */
    @Transactional
    public List<String> addPatient(PatientDto patientDto, Long providerId);

    // get all patients by provider id
    @Transactional
    public List<PatientDto> getAllPatientsByProviderId(Long providerId);

    /* patient by patient id */
    @Transactional
    public PatientDto getPatientById(Long patientId);

    /* update patient by id*/
    @Transactional
    public List<String> updatePatient(Long patientId, PatientDto patientDto);
    // public List<String> updatePatient(PatientDto patientDto);
        
    /* get all patients */
    @Transactional
    public List<PatientDto> getAllPatients();

}
