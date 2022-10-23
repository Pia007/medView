package dev.pia.mediconnect.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.pia.mediconnect.dtos.MedicalRecordDto;
import dev.pia.mediconnect.services.MedicalRecordService;

@RestController
@RequestMapping("api/v1/medicalrecords")
public class MedicalRecordController {

    private MedicalRecordService medicalRecordService;
    

    @Autowired
    public MedicalRecordController(MedicalRecordService medicalRecordService) {
        this.medicalRecordService = medicalRecordService;
    }

    /* add medical record */
    @PostMapping("/patient/{patientId}")
    public List<String> addMedicalRecord(@RequestBody MedicalRecordDto medicalRecordDto, @PathVariable Long patientId) {
        return medicalRecordService.addMedicalRecord(medicalRecordDto, patientId);
    }
    
}
