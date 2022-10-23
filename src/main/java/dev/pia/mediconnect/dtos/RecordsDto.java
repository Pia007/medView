package dev.pia.mediconnect.dtos;

import java.io.Serializable;

import dev.pia.mediconnect.entities.Records;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecordsDto implements Serializable {

    private Long id;
    private String insurance;
    private String conditions;
    private String medications;
    private String allergies;


    /* custom constructor */
    public RecordsDto(Records records) {
        if (records.getId() != null) {
            this.id = records.getId();
        }
        if (records.getInsurance() != null) {
            this.insurance = records.getInsurance();
        }
        if (records.getConditions() != null) {
            this.conditions = records.getConditions();
        }
        if (records.getMedications() != null) {
            this.medications = records.getMedications();
        }
        if (records.getAllergies() != null) {
            this.allergies = records.getAllergies();
        }
    }
}
    

