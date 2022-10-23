package dev.pia.mediconnect.dtos;

import java.io.Serializable;

import dev.pia.mediconnect.entities.MedicalRecord;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalRecordDto implements Serializable {

    private Long id;
    private String insurance;
    private String conditions;
    private String medications;
    private String allergies;


    /* custom constructor */
    public MedicalRecordDto(MedicalRecord medicalRecord) {
        if (medicalRecord.getId() != null) {
            this.id = medicalRecord.getId();
        }
        if (medicalRecord.getInsurance() != null) {
            this.insurance = medicalRecord.getInsurance();
        }
        if (medicalRecord.getConditions() != null) {
            this.conditions = medicalRecord.getConditions();
        }
        if (medicalRecord.getMedications() != null) {
            this.medications = medicalRecord.getMedications();
        }
        if (medicalRecord.getAllergies() != null) {
            this.allergies = medicalRecord.getAllergies();
        }
    }
}
    

