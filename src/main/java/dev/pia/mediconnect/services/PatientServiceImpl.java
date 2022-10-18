package dev.pia.mediconnect.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.repositories.PatientRepository;

@Service
public class PatientServiceImpl {

    @Autowired
    private PatientRepository patientRepo;
    
    
}
