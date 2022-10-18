package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.*;

import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.entities.Provider;
// import dev.pia.mediconnect.entities.PatientRecord;
// import dev.pia.mediconnect.entities.Provider;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto implements Serializable {

    /*fields */
    private Long id;
    private String username;
    private String password;
    private Provider provider;
    private Set<MessageDto> messageDtoSet = new HashSet<>();
    
    /* custom constructor */
    public PatientDto(Patient patient) {
        if (patient.getId() != null) {
            this.id = patient.getId();
        }
        if (patient.getUsername() != null) {
            this.username = patient.getUsername();
        }
        if (patient.getPassword() != null) {
            this.password = patient.getPassword();
        }

    }

}
