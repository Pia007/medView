package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.*;

public interface PatientNoteService {

    // provider adds a note to a patient
    @Transactional
    public List<String> addPatientNote(PatientNoteDto patientNoteDto, Long patientId);

    /* get all notes */
    @Transactional
    public List<PatientNoteDto> getAllNotes();

    /* get all notes for a patient */
    public List<PatientNoteDto> getAllNotesByPatientId(Long patientId);
    
    
    // get patient note by id
    @Transactional
    public PatientNoteDto getPatientNoteById(Long patientNoteId);

    /* delete a note */
    @Transactional 
    public List<String> deletePatientNoteById(Long patientNoteId);

}
