package dev.pia.mediconnect.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.InfoDto;
import dev.pia.mediconnect.entities.Info;
import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.repositories.InfoRepository;
import dev.pia.mediconnect.repositories.PatientRepository;

@Service
public class InfoServiceImpl implements InfoService {

    private InfoRepository infoRepository;
    private PatientRepository patientRepository;

    /* constructor injection */
    public InfoServiceImpl(InfoRepository infoRepository, PatientRepository patientRepository) {
        this.infoRepository = infoRepository;
        this.patientRepository = patientRepository;
    }

    // public InfoServiceImpl(PatientRepository patientRepo) {
    //     this.patientRepository = patientRepository;
    // }

    /* add patient info  and patient Id*/
    @Override
    @Transactional
    public List<String> addInfo(InfoDto infoDto, Long patientId) {
        List<String> response = new ArrayList<>();
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        Info info = new Info(infoDto);
        if (optionalPatient.isPresent()) {
            info.setPatient(optionalPatient.get());
            infoRepository.saveAndFlush(info);
            response.add("Info added successfully");
        } else {
            response.add("Patient not found");
        }
        return response;
    }

    /* update patient info */
    @Override
    @Transactional
    public List<String> updateInfo(InfoDto infoDto, Long patientId) {
        List<String> response = new ArrayList<>();
        // use patient id to add info to infos table
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        Info info = new Info(infoDto);
        if (optionalPatient.isPresent()) {
            info.setPatient(optionalPatient.get());
            info.setAddress(infoDto.getAddress());
            info.setFirstName(infoDto.getFirstName());
            info.setLastName(infoDto.getLastName());
            info.setCity(infoDto.getCity());
            info.setZip(infoDto.getZip());
            info.setPhone(infoDto.getPhone());
            info.setEmail(infoDto.getEmail());
            info.setConditions(infoDto.getConditions());
            info.setAllergies(infoDto.getAllergies());
            info.setInsurance(infoDto.getInsurance());
            info.setMedications(infoDto.getMedications());
            info.setDateOfBirth(infoDto.getDateOfBirth());
            infoRepository.saveAndFlush(info);
            response.add("Info updated successfully");
        } else {
            response.add("Patient not found");
        }
        // Optional<Info> optionalInfo = infoRepository.findById(infoDto.getId().valueOf(patientId));

        // // use patientId to set info

        // // Info info = new Info(infoDto);
        // if (optionalInfo.isPresent()) {
        //     Info info = optionalInfo.get();
        //     info.setAddress(infoDto.getAddress());
        //     info.setFirstName(infoDto.getFirstName());
        //     info.setLastName(infoDto.getLastName());
        //     info.setCity(infoDto.getCity());
        //     info.setZip(infoDto.getZip());
        //     info.setPhone(infoDto.getPhone());
        //     info.setEmail(infoDto.getEmail());
        //     info.setConditions(infoDto.getConditions());
        //     info.setAllergies(infoDto.getAllergies());
        //     info.setInsurance(infoDto.getInsurance());
        //     info.setMedications(infoDto.getMedications());
        //     info.setDateOfBirth(infoDto.getDateOfBirth());
        //     infoRepository.saveAndFlush(info);
        //     response.add("Info updated successfully");
        // } else {
        //     response.add("Patient not found");
        // }
        return response;
    }



}
    

