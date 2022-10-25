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
public class PatientNoteServiceImpl implements PatientNoteService {

    private PatientRepository patientRepository;
    private PatientNoteRepository patientNoteRepository;

    @Autowired
    public PatientNoteServiceImpl(PatientRepository patientRepository, PatientNoteRepository patientNoteRepository) {
        this.patientRepository = patientRepository;
        this.patientNoteRepository = patientNoteRepository;
    }


    /* provider adds a patient note to a patient*/
    @Override
    @Transactional
    public List<String> addPatientNote(PatientNoteDto patientNoteDto, Long patientId) {
        List<String> response = new ArrayList<>();
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        
        PatientNote patientNote = new PatientNote();
        optionalPatient.ifPresent(patient -> {
            patientNote.setPatient(patient);
            patientNote.setBody(patientNoteDto.getBody());
            patientNote.setDateCreated(patientNoteDto.getDateCreated());
            patientNoteRepository.saveAndFlush(patientNote);
            response.add("Patient note added successfully");
        });
        return response;
    }

    /* get all notes */
    @Override
    @Transactional
    public List<PatientNoteDto> getAllNotes() {
        List<PatientNote> patientNotes = patientNoteRepository.findAll();
        List<PatientNoteDto> patientNoteDtos = new ArrayList<>();
        for (PatientNote patientNote : patientNotes) {
            patientNoteDtos.add(new PatientNoteDto(patientNote));
        }  
        return patientNoteDtos; 
    }

    /* provider gets all patient notes for a patient*/
    @Override
    @Transactional
    public List<PatientNoteDto> getAllNotesByPatientId(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            List<PatientNote> patientNoteList = patientNoteRepository.findAllByPatientEquals(optionalPatient.get());
            return patientNoteList.stream().map(patientNote -> (new PatientNoteDto(patientNote))).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    /* get patient note by id */
    @Override
    @Transactional
    public PatientNoteDto getPatientNoteById(Long patientNoteId) {
        Optional<PatientNote> optionalPatientNote = patientNoteRepository.findById(patientNoteId);
        if (optionalPatientNote.isPresent()) {
            return new PatientNoteDto(optionalPatientNote.get());
        }
        return null;
    }

    /* delete patient note by id */
    @Override
    @Transactional
    public List<String> deletePatientNoteById(Long patientNoteId) {
        List<String> response = new ArrayList<>();
        Optional<PatientNote> optionalPatientNote = patientNoteRepository.findById(patientNoteId);
        optionalPatientNote.ifPresent(patientNote -> {
            patientNoteRepository.delete(patientNote);
            response.add("Patient note deleted successfully");
        });
        return response;
    }
}
