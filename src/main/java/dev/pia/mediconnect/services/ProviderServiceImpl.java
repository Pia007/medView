package dev.pia.mediconnect.services;

import java.util.*;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.*;
// import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;
import dev.pia.mediconnect.entities.*;
// import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.Provider;
import dev.pia.mediconnect.repositories.*;
// import dev.pia.mediconnect.repositories.PatientRepository;
// import dev.pia.mediconnect.repositories.ProviderRepository;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private PatientRepository patientRepository;


    @Autowired
    private PasswordEncoder encoder;

    /* use providerDto to register a provider */
    @Override
    @Transactional
    public List<String> registerProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Provider provider = new Provider(providerDto);
        providerRepository.saveAndFlush(provider);
        response.add("Provider registered successfully");
        return response;
    }

    /* use providerDto to login provider */
    @Override
    @Transactional
    public List<String> loginProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findByProviderUsername(providerDto.getProviderUsername());


        if (optionalProvider.isPresent()) {
            if (encoder.matches(providerDto.getProviderPassword(), optionalProvider.get().getProviderPassword())) {
                response.add("Provider logged in successfully");
                response.add(String.valueOf(optionalProvider.get().getId()));
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Provider username or password");
        }
        return response;
    }

    /* get provider by Id */
    @Override
    public Optional<ProviderDto> getProviderById(Long providerId) {
        Optional<Provider> optionalProvider = providerRepository.findById(providerId);
        if (optionalProvider.isPresent()) {
            return Optional.of(new ProviderDto(optionalProvider.get()));
        }
        return Optional.empty();
    }

    /* Provider Upate */
    @Override
    @Transactional
    public List<String> updateProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findByProviderUsername(providerDto.getProviderUsername());

        if (optionalProvider.isPresent()) {
            if (encoder.matches(providerDto.getProviderPassword(), optionalProvider.get().getProviderPassword())) {
                Provider provider = optionalProvider.get();
                provider.setFirstName(providerDto.getFirstName());
                provider.setLastName(providerDto.getLastName());
                provider.setSpecialty(providerDto.getSpecialty());
                response.add("Provider updated successfully");
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Provider username or password");
        }
        return response;
    }

    /* get all partients will same providerId*/
    @Override
    @Transactional
    public List<PatientDto> getAllPatientsByProviderId(Long providerId) {
        List<Patient> patients = patientRepository.findAllByProviderId(providerId);
        return patients.stream().map(patient -> new PatientDto(patient)).collect(Collectors.toList());
    }
    // @Override
    // @Transactional
    // public List<PatientDto> getAllPatientsByProvider(Long providerId) {
    //     Optional<Patient> optionalPatient = patientRepository.findById(providerId);
    //     if (optionalPatient.isPresent()) {
    //         List<Patient> patientList = patientRepository.findByPatientEquals(optionalPatient.get());
    //         return patientList.stream().map(patient -> new PatientDto(patient)).collect(Collectors.toList());
    //     }
    //     return Collections.emptyList();
    // }

    /* provider updates patient allergies, conditions, medications*/
    @Override
    public List<String> updatePatient(PatientDto patientDto) {
        List<String> response = new ArrayList<>();
        Optional<Patient> optionalPatient = patientRepository.findById(patientDto.getId());
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            // patient.setFirstName(patientDto.getFirstName());
            // patient.setLastName(patientDto.getLastName());
            // patient.setAge(patientDto.getAge());
            // patient.setGender(patientDto.getGender());
            // patient.setAddress(patientDto.getAddress());
            // patient.setCity(patientDto.getCity());
            // patient.setState(patientDto.getState());
            // patient.setZip(patientDto.getZip());
            patient.setAllergies(patientDto.getAllergies());
            patient.setConditions(patientDto.getConditions());
            patient.setMedications(patientDto.getMedications());
            // patient.setPhone(patientDto.getPhone());
            // patient.setProviderId(patientDto.getProviderId());
            response.add("Patient updated successfully");
        } else {
            response.add("Invalid Patient Id");
        }
        return response;
    }

    @Override
    public List<ProviderDto> getAllProviders() {
        List<Provider> providers = providerRepository.findAll();
        return providers.stream().map(provider -> new ProviderDto(provider)).collect(Collectors.toList());
    }

}
