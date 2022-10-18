package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.*;

import dev.pia.mediconnect.entities.Provider;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProviderDto implements Serializable {

    // fields
    private Long id;
    private String providerUsername;
    private String providerPassword;
    private String firstName;
    private String lastName;
    private String specialty;
    private Set<PatientDto> patientDtoSet = new HashSet<>();
    private Set<MessageDto> messageDtoSet = new HashSet<>();

    public ProviderDto(Provider provider) {
        if (provider.getId() != null) {
            this.id = provider.getId();
        }
        if (provider.getProviderUsername() != null) {
            this.providerUsername = provider.getProviderUsername();
        }
        if (provider.getProviderPassword() != null) {
            this.providerPassword = provider.getProviderPassword();
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
    }   
}
