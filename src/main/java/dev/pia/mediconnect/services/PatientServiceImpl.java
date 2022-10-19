package dev.pia.mediconnect.services;

import java.util.*;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


// import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;
// import dev.pia.mediconnect.entities.Message;
import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.Provider;
// import dev.pia.mediconnect.repositories.MessageRepository;
import dev.pia.mediconnect.repositories.PatientRepository;
// import dev.pia.mediconnect.repositories.ProviderRepository;


@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

//     @Autowired
//     private MessageRepository messageRepository;

//     @Autowired
//     private ProviderRepository providerRepository;

    @Autowired
    private PasswordEncoder encoder;


    /* use patientDto to register a patient */
    @Override
    @Transactional
    public List<String> registerPatient(PatientDto patientDto) {
        List<String> response = new ArrayList<>();
        Patient patient = new Patient(patientDto);
        patientRepository.saveAndFlush(patient);
        response.add("Patient registered successfully");
        return response;
    }

    /* use patientDto to login patient */

    @Override
    @Transactional
    public List<String> loginPatient(PatientDto patientDto) {
        List<String> response = new ArrayList<>();
        Optional<Patient> optionalPatient = patientRepository.findByUsername(patientDto.getUsername());

        if (optionalPatient.isPresent()) {
            if (encoder.matches(patientDto.getPassword(), optionalPatient.get().getPassword())) {
                response.add("Patient logged in successfully");
                response.add(String.valueOf(optionalPatient.get().getId()));
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Patient username or password");
        }
        return response;
    }

    /* get patient by id */
    @Override
    @Transactional
    public Optional<PatientDto> getPatientById(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            PatientDto patientDto = new PatientDto(patient);
            return Optional.of(patientDto);
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public List<String> updatePatient(PatientDto patientDto) {
        
        Optional<Patient> optionalPatient = patientRepository.findById(patientDto.getId());
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            patient.setFirstName(patientDto.getFirstName());
            patient.setLastName(patientDto.getLastName());
            patient.setAddress(patientDto.getAddress());
            patient.setCity(patientDto.getCity());
            patient.setState(patientDto.getState());
            patient.setZipCode(patientDto.getZipCode());
            patient.setPhoneNumber(patientDto.getPhoneNumber());
            // patient.setDateOfBirth(patientDto.getDateOfBirth());
            patient.setInsurance(patientDto.getInsurance());
            // patient.setUsername(patientDto.getUsername());
            // patient.setPassword(encoder.encode(patientDto.getPassword()));
            patientRepository.saveAndFlush(patient);
        }
        return null;
    }

    /* get patient's provider name */
    @Override
    @Transactional
    public String getPatientProviderName(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            return patient.getProvider().getFirstName() + " " + patient.getProvider().getLastName();
        }
        return null;
    }

    /* get patient's provider id */
    @Override
    public Long getPatientProviderId(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            return patient.getProvider().getId();
        }
        return null;
    }

    /* get all patients */
    @Override
    public List<PatientDto> getAllPatients() {
        List<Patient> patients = patientRepository.findAll();
        List<PatientDto> patientDtos = patients.stream().map(patient -> new PatientDto(patient))
                .collect(Collectors.toList());
        return patientDtos;
    }

}
