package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.time.LocalDate;

import dev.pia.mediconnect.entities.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientNoteDto implements Serializable {

    //fields
    private Long id;
    private String body;
    private LocalDate dateCreated;
    private PatientDto patientDto;

    /* custom constructor */
    
    public PatientNoteDto(PatientNote patientNote) {
        if(patientNote.getId() != null) {
            this.id = patientNote.getId();
        }
        if (patientNote.getBody() != null) {
            this.body = patientNote.getBody();
        }
        if (patientNote.getDateCreated() != null) {
            this.dateCreated = patientNote.getDateCreated();
        }
        if (patientNote.getPatient() != null) {
            this.patientDto = new PatientDto(patientNote.getPatient());
        }
    }

    /* set dateCreate */
    // public void setDateCreated(LocalDate dateCreated) {
    //     this.dateCreated = dateCreated;
    // }

    // /* get dateCreated */
    // public LocalDate getDateCreated() {
    //     return this.dateCreated;
    // }
    
}
