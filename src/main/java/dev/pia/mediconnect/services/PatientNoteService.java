package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.PatientNoteDto;


public interface PatientNoteService {

    // get patient note by id
    @Transactional
    Optional<PatientNoteDto> getPatientNoteById(Long patientNoteId);

    

}
