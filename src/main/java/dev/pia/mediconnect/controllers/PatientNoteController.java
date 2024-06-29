package dev.pia.mediconnect.controllers;

import java.util.*;

import org.springframework.web.bind.annotation.*;

import dev.pia.mediconnect.dtos.*;
import dev.pia.mediconnect.services.*;

@RestController
@RequestMapping("api/v1/notes")
@CrossOrigin(origins = "*")
public class PatientNoteController {

    private PatientNoteService patientNoteService;

    public PatientNoteController(PatientNoteService patientNoteService) {
        this.patientNoteService = patientNoteService;
    }

    /* provider adds a patient note to a patient*/
    @PostMapping("/patient/{patientId}")
    public List<String> addPatientNote(@RequestBody PatientNoteDto patientNoteDto, @PathVariable Long patientId) {
        return patientNoteService.addPatientNote(patientNoteDto, patientId);
    }

    /* get all notes*/
    @GetMapping
    public List<PatientNoteDto> getAllNotes() {
        return patientNoteService.getAllNotes();
    }

    /* all notes of a patient */
    @GetMapping("/patient/{patientId}")
    public List<PatientNoteDto> getAllNotesByPatientId(@PathVariable Long patientId) {
        return patientNoteService.getAllNotesByPatientId(patientId);
    }

    /* get patient note by id */
    @GetMapping("patientNote/{patientNoteId}")
    public PatientNoteDto getPatientNoteById(@PathVariable Long patientNoteId) {
        return patientNoteService.getPatientNoteById(patientNoteId);
    }

    /* delete note */
    @DeleteMapping("/{patientNoteId}")
    public List<String> deletePatientNoteById(@PathVariable Long patientNoteId) {
        return patientNoteService.deletePatientNoteById(patientNoteId);
    }
}
