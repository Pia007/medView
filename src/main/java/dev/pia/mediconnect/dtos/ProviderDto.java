package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.*;

import dev.pia.mediconnect.entities.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProviderDto implements Serializable {

    // fields
    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String specialty;
    private String suffix;
    private Set<PatientDto> patientDtoSet = new HashSet<>();

    public ProviderDto(Provider provider) {
        if (provider.getId() != null) {
            this.id = provider.getId();
        }
        if (provider.getUsername() != null) {
            this.username = provider.getUsername();
        }
        if (provider.getPassword() != null) {
            this.password = provider.getPassword();
        }
        if (provider.getFirstName() != null) {
            this.firstName = provider.getFirstName();
        }
        if (provider.getLastName() != null) {
            this.lastName = provider.getLastName();
        }
        if (provider.getSpecialty() != null) {
            this.specialty = provider.getSpecialty();
        }
        if (provider.getSuffix() != null) {
            this.suffix = provider.getSuffix();
        }
    } 
    
    public Set<PatientDto> getPatientDtoSet() {
        return this.patientDtoSet;
    }

    public void setPatientDtoSet(Set<PatientDto> patientDtoSet) {
        this.patientDtoSet = patientDtoSet;
    }
}
