package dev.pia.mediconnect.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dev.pia.mediconnect.dtos.MedicalRecordDto;
import lombok.*;

@Entity
@Table(name="Medical_Record")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalRecord {


    //fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "insurance")
    private String insurance;

    @Column(name = "conditions")
    private String conditions;

    @Column(name = "medications")
    private String medications;

    @Column(name = "allergies")
    private String allergies;

    /* relationship to patient CHECK THIS */
    @OneToOne(fetch = FetchType.LAZY, cascade = { CascadeType.MERGE, CascadeType.PERSIST })
    @JoinColumn(name = "medical_record_id")
    @JsonBackReference
    private Patient patient;


    /* custom constructor */
    public MedicalRecord(MedicalRecordDto medicalRecordDto) {
        if (medicalRecordDto.getId() != null) {
            this.id = medicalRecordDto.getId();
        }
        if (medicalRecordDto.getInsurance() != null) {
            this.insurance = medicalRecordDto.getInsurance();
        }
        if (medicalRecordDto.getConditions() != null) {
            this.conditions = medicalRecordDto.getConditions();
        }
        if (medicalRecordDto.getMedications() != null) {
            this.medications = medicalRecordDto.getMedications();
        }
        if (medicalRecordDto.getAllergies() != null) {
            this.allergies = medicalRecordDto.getAllergies();
        }
    }
    
}
