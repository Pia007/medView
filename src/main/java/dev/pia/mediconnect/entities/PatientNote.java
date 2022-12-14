package dev.pia.mediconnect.entities;


import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import dev.pia.mediconnect.dtos.*;
import lombok.*;

@Entity
@Table(name="Patient_Note")
@Data
@NoArgsConstructor
@AllArgsConstructor 
public class PatientNote {

    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String body;

    @Column(name = "date_created")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateCreated;

   
    @ManyToOne
    private Patient patient;

    /* custom constructor */
    public PatientNote(PatientNoteDto patientNoteDto) {
        if (patientNoteDto.getId() != null) {
            this.id = patientNoteDto.getId();
        }
        if (patientNoteDto.getBody() != null) {
            this.body = patientNoteDto.getBody();
        }
        if (patientNoteDto.getDateCreated() != null) {
            this.dateCreated = patientNoteDto.getDateCreated();
        }
        if (patientNoteDto.getPatientDto() != null) {
            this.patient = new Patient(patientNoteDto.getPatientDto());
        }
    }

    /* set getDate */
    public LocalDate getDateCreated() {
        return dateCreated;
    }

}
