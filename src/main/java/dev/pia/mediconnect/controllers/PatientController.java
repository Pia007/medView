package dev.pia.mediconnect.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.pia.mediconnect.dtos.PatientDto;
import dev.pia.mediconnect.services.PatientService;

@RestController
@RequestMapping("api/v1/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public List<String> registerPatient(@RequestBody PatientDto patientDto) {
        patientDto.setPassword(passwordEncoder.encode(patientDto.getPassword()));
        return patientService.registerPatient(patientDto);
    }

    @PostMapping("/login")
    public List<String> loginPatient(@RequestBody PatientDto patientDto) {
        return patientService.loginPatient(patientDto);
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

    
}
