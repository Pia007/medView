package dev.pia.mediconnect.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import dev.pia.mediconnect.dtos.*;
import dev.pia.mediconnect.services.*;

@RestController
@RequestMapping("api/v1/patients")
public class PatientController {

    
    private PatientService patientService;
    // private PasswordEncoder passwordEncoder;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
        // this.passwordEncoder = passwordEncoder;
    }

    /* provider registers patient */

    @PostMapping("/provider/{providerId}")
    public List<String> registerPatient(@RequestBody PatientDto patientDto, @PathVariable Long providerId) {
        // patientDto.setPassword(passwordEncoder.encode(patientDto.getPassword()));
        return patientService.addPatient(patientDto, providerId);
    }
    

    // get patient by id
    @GetMapping("/{patientId}")
    public PatientDto getPatientById(@PathVariable Long patientId) {
        return patientService.getPatientById(patientId);
    }

    /* update patient */
    @PutMapping("/update")
    public List<String> updatePatient(@RequestBody PatientDto patientDto) {
        return patientService.updatePatient(patientDto);
    }

    /*  update patient name */
    @PutMapping("/update/name")
    public List<String> updatePatientName(@RequestBody PatientDto patientDto) {
        return patientService.updatePatientName(patientDto);
    }

    /* get all patients */
    @GetMapping
    public List<PatientDto> getAllPatients() {
        return patientService.getAllPatients();
    }


    /* get all patients by provider id */
    @GetMapping("/provider/{providerId}")
    public List<PatientDto> getAllPatientsByProviderId(@PathVariable Long providerId) {
        return patientService.getAllPatientsByProviderId(providerId);
    }

    /* get all patients with last name */
    @GetMapping("/patient/lastName/{lastName}")
    public List<PatientDto> getAllPatientsByLastName(@PathVariable String lastName) {
        return patientService.getAllPatientsByLastName(lastName);
    }

    /* get all patients with first name */
    @GetMapping("/patient/firstName/{firstName}")
    public List<PatientDto> getAllPatientsByFirstName(@PathVariable String firstName) {
        return patientService.getAllPatientsByFirstName(firstName);
    }

    /* get all patients with same insurance */

    @GetMapping("/patient/insurance/{insurance}")
    public List<PatientDto> getAllPatientsByInsurance(@PathVariable String insurance) {
        return patientService.getAllPatientsByInsurance(insurance);
    } /* research how to add space in pathvariable on frontend */

    
}
