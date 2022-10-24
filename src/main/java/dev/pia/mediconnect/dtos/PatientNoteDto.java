package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.Date;

import dev.pia.mediconnect.entities.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientNoteDto implements Serializable {

    //fields
    private Long id;
    private String body;
    private String createdBy;
    private Date createdAt;
    // private PatientDto patient;

    //custom constructor
    public PatientNoteDto(PatientNote patientNote) {
        if(patientNote.getId() != null) {
            this.id = patientNote.getId();
        }
        if (patientNote.getBody() != null) {
            this.body = patientNote.getBody();
        }
        if (patientNote.getCreatedBy() != null) {
            this.createdBy = patientNote.getCreatedBy();
        }
    }

    // public PatientDto getProvider() {
    //     this.patient = new PatientDto();
    //     return this.patient;

    // }

    // public String getBody() {
    //     return null;
    // }

    // public Patient getPatient() {
    //     return null;
    // }

    // public Long getId() {
    //     return null;
    // }
    
}
