package dev.pia.mediconnect.entities;

import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.*;

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

    @Column(name = "created_by")
    private String createdBy;

    // date posted
    @Column(name = "created_at")
    private Date createdAt;


    /* relationship to patient */
    // @ManyToOne
    // @JsonBackReference
    // private Patient patient;

    /* relationship to provider */ 
    // @ManyToOne
    // @JsonBackReference
    // private Provider provider;

    /* custom constructor */
    // public PatientNote(PatientNoteDto patientNoteDto) {
    //     if (patientNoteDto.getId() != null) {
    //         this.id = patientNoteDto.getId();
    //     }
    //     if (patientNoteDto.getBody() != null) {
    //         this.body = patientNoteDto.getBody();
    //     }

    // }

    public void setCreatedAt(java.util.Date date) {
    }

    // public void setProvider(PatientDto patientDto) {
    // }

    // public void setProvider(com.fasterxml.jackson.databind.introspect.AccessorNamingStrategy.Provider provider2) {
    // }

    // public void setProvider(Provider provider2) {
    // }

    public void setPatient(Patient patient2) {
    }

    public void setPatient(PatientDto patient2) {
    }

}
