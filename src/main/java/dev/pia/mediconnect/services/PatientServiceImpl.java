package dev.pia.mediconnect.services;

import java.util.*;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.*;
import dev.pia.mediconnect.entities.*;
import dev.pia.mediconnect.repositories.*;


@Service
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientRepository;
    private ProviderRepository providerRepository;

    /* constructor injection */
    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository, ProviderRepository providerRepository) {
        this.patientRepository = patientRepository;
        this.providerRepository = providerRepository;
    }


    /* provider adds a patient with patientCode */
    @Override
    @Transactional
    public List<String> addPatient(PatientDto patientDto, Long providerId) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findById(providerId);
        // if provider exists get provider id
        if (optionalProvider.isPresent()) {

            Provider provider = optionalProvider.get();
            Optional<Patient> optionalPatient = patientRepository.findByPatientCode(patientDto.getPatientCode());
        
            if (optionalPatient.isPresent()) {
                return Arrays.asList("Patient already exists");
            } else {
                Patient patient = new Patient(patientDto);
                patient.setProvider(provider);
                patientRepository.saveAndFlush(patient);
                response.add("Patient added");
                return response;
            }
        } else {
            response.add("Invalid provider");
        }

        return response;
    }

    /* get all patients by provider id */
    @Override
    @Transactional
    public List<PatientDto> getAllPatientsByProviderId(Long providerId) { 
        Optional<Provider> optionalProvider = providerRepository.findById(providerId);
        if (optionalProvider.isPresent()) {
            List<Patient> patientList = patientRepository.findAllByProviderEquals(optionalProvider.get());
            // :: is a method reference operator - calls the method by referring to it with the help of its class directly
            return patientList.stream().map(PatientDto::new).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    /* get patient by patient id */
    @Override
    @Transactional
    public PatientDto getPatientById(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            //print optional patient
            System.out.println(optionalPatient);
            return new PatientDto(optionalPatient.get());
        }
        return null;
    }

    /* update patient by id */
    @Override
    @Transactional
    public List<String> updatePatient(Long patientId, PatientDto patientDto) {
        List<String> response = new ArrayList<>();
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            patient.setFirstName(patientDto.getFirstName());
            patient.setLastName(patientDto.getLastName());
            patient.setAddress(patientDto.getAddress());
            patient.setCity(patientDto.getCity());
            patient.setState(patientDto.getState());
            patient.setZip(patientDto.getZip());
            patient.setPhone(patientDto.getPhone());
            patient.setEmail(patientDto.getEmail());
            patient.setConditions(patientDto.getConditions());
            patient.setAllergies(patientDto.getAllergies());
            patient.setInsurance(patientDto.getInsurance());
            patient.setMedications(patientDto.getMedications());
            patient.setDob(patientDto.getDob());
            patient.setGender(patientDto.getGender());
            patient.setEthnicity(patientDto.getEthnicity());
            patient.setSocialSecurity(patientDto.getSocialSecurity());
            patient.setBloodType(patientDto.getBloodType());
            patient.setPatientCode(patientDto.getPatientCode());
            patient.setContactFirstname(patientDto.getContactFirstname());
            patient.setContactLastname(patientDto.getContactLastname());
            patient.setContactPhone(patientDto.getContactPhone());
            patient.setContactRelationship(patientDto.getContactRelationship());
            patientRepository.saveAndFlush(patient);
            response.add("Patient updated successfully");
        } else {
            response.add("Invalid patient");
        }
        return response;
    }

    /* get all patients */
    @Override
    @Transactional
    public List<PatientDto> getAllPatients() {
        List<Patient> patients = patientRepository.findAll();
        List<PatientDto> patientDtos = new ArrayList<>();
        for (Patient patient : patients) {
            patientDtos.add(new PatientDto(patient));
        }
        return patientDtos;
    }
}
