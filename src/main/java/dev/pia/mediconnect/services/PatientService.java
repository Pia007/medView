package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.*;


public interface PatientService {

    @Transactional
    public List<String> addPatient(PatientDto patientDto, Long providerId);

    @Transactional
    public List<PatientDto> getAllPatientsByProviderId(Long providerId);

    @Transactional
    public PatientDto getPatientById(Long patientId);

    @Transactional
    public List<String> updatePatient(Long patientId, PatientDto patientDto);
    
    @Transactional
    public List<PatientDto> getAllPatients();

}
