package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.*;

import dev.pia.mediconnect.entities.Provider;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

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
    // private Set<PatientDto> patientDtoSet = new HashSet<>();
    // private Set<MessageDto> messageDtoSet = new HashSet<>();

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
    } 
    

    // public ProviderDto(Long id, String providerUsername, String providerPassword, String firstName, String lastName, String specialty, Set<PatientDto> patientDtoSet, Set<MessageDto> messageDtoSet) {
    //     this.id = id;
    //     this.providerUsername = providerUsername;
    //     this.providerPassword = providerPassword;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.specialty = specialty;
    //     this.patientDtoSet = patientDtoSet;
    //     this.messageDtoSet = messageDtoSet;
    // }
    

    // public Long getId() {
    //     return this.id;
    // }

    // public void setId(Long id) {
    //     this.id = id;
    // }

    // public String getProviderUsername() {
    //     return providerUsername;
    // }

    // public void setProviderUsername(String providerUsername) {
    //     this.providerUsername = providerUsername;
    // }

    // public String getProviderPassword() {
    //     return providerPassword;
    // }

    // public void setProviderPassword(String providerPassword) {
    //     this.providerPassword = providerPassword;
    // }

    // public String getFirstName() {
    //     return firstName;
    // }

    // public void setFirstName(String firstName) {
    //     this.firstName = firstName;
    // }

    // public String getLastName() {
    //     return lastName;
    // }

    // public void setLastName(String lastName) {
    //     this.lastName = lastName;
    // }

    // public String getSpecialty() {
    //     return specialty;
    // }

    // public void setSpecialty(String specialty) {
    //     this.specialty = specialty;
    // }

    // public Set<PatientDto> getPatientDtoSet() {
    //     return patientDtoSet;
    // }

    // public void setPatientDtoSet(Set<PatientDto> patientDtoSet) {
    //     this.patientDtoSet = patientDtoSet;
    // }

    // public Set<MessageDto> getMessageDtoSet() {
    //     return messageDtoSet;
    // }

    // public void setMessageDtoSet(Set<MessageDto> messageDtoSet) {
    //     this.messageDtoSet = messageDtoSet;
    // }

}
