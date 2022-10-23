package dev.pia.mediconnect.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dev.pia.mediconnect.dtos.RecordsDto;
import lombok.*;

@Entity
@Table(name="Records")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Records {


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
    @OneToOne(mappedBy = "records")
    @JsonBackReference
    private Patient patient;


    /* custom constructor */
    public Records(RecordsDto recordsDto) {
        if (recordsDto.getId() != null) {
            this.id = recordsDto.getId();
        }
        if (recordsDto.getInsurance() != null) {
            this.insurance = recordsDto.getInsurance();
        }
        if (recordsDto.getConditions() != null) {
            this.conditions = recordsDto.getConditions();
        }
        if (recordsDto.getMedications() != null) {
            this.medications = recordsDto.getMedications();
        }
        if (recordsDto.getAllergies() != null) {
            this.allergies = recordsDto.getAllergies();
        }
    }
    
}
