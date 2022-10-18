package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.PatientDto;

/* create Patient Service interface */
public interface PatientService {

    /* use patientDto to register a patient */
    @Transactional
    public List<String> registerPatient(PatientDto patientDto);

    /* use patientDto to login patient */
    @Transactional
    public List<String> loginPatient(PatientDto patientDto);


    /* use patientDto to update patient */
    @Transactional
    void updatePatient(PatientDto patientDto);

}
