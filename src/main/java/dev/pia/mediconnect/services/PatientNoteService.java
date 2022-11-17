package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.*;

public interface PatientNoteService {

    @Transactional
    public List<String> addPatientNote(PatientNoteDto patientNoteDto, Long patientId);

    @Transactional
    public List<PatientNoteDto> getAllNotes();

    @Transactional
    public List<PatientNoteDto> getAllNotesByPatientId(Long patientId);
    
    @Transactional
    public PatientNoteDto getPatientNoteById(Long patientNoteId);

    @Transactional 
    public List<String> deletePatientNoteById(Long patientNoteId);

}
