package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.*;

import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.entities.Provider;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PatientDto implements Serializable {

    /*fields */
    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private int age;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String allergies;
    private String insurance;
    private String conditions;
    private String medications;
    // private Provider provider;
    // private Set<MessageDto> messageDtoSet = new HashSet<>();



    // public Set<MessageDto> getMessageDtoSet() {
    //     return this.messageDtoSet;
    // }

    // public void setMessageDtoSet(Set<MessageDto> messageDtoSet) {
    //     this.messageDtoSet = messageDtoSet;
    // }
    
    
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
        if (patient.getFirstName() != null) {
            this.firstName = patient.getFirstName();
        }
        if (patient.getLastName() != null) {
            this.lastName = patient.getLastName();
        }
        if (patient.getDateOfBirth() != null) {
            this.dateOfBirth = patient.getDateOfBirth();
        }
        // if (patient.getAge() != 0) {
        //     this.age = patient.getAge();
        // }
        if (patient.getEmail() != null) {
            this.email = patient.getEmail();
        }
        if (patient.getPhone() != null) {
            this.phone = patient.getPhone();
        }
        if (patient.getAddress() != null) {
            this.address = patient.getAddress();
        }
        if (patient.getCity() != null) {
            this.city = patient.getCity();
        }
        if (patient.getState() != null) {
            this.state = patient.getState();
        }
        if (patient.getZip() != null) {
            this.zip = patient.getZip();
        }
        // if (patient.getProvider() != null) {
        //     this.provider = patient.getProvider();
        // }
        if (patient.getInsurance() != null) {
            this.insurance = patient.getInsurance();
        }
        if (patient.getAllergies() != null) {
            this.allergies = patient.getAllergies();
        }
        if (patient.getConditions() != null) {
            this.conditions = patient.getConditions();
        }
        if (patient.getMedications() != null) {
            this.medications = patient.getMedications();
        }
    }

    // public String getInsuranceProvider() {
    //     return null;
    // }

}
