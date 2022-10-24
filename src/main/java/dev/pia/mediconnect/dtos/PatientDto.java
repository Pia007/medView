package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.*;

import dev.pia.mediconnect.entities.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PatientDto implements Serializable {

    /*fields */
    private Long id;
    private String username;
    // private String password;
    private String firstName;
    private String lastName;
    private LocalDate dob;
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
    private Provider provider;
    // private Set<MessageDto> messageDtoSet = new HashSet<>();



    // public Set<MessageDto> getMessageDtoSet() {
    //     return this.messageDtoSet;
    // }

    // public void setMessageDtoSet(Set<MessageDto> messageDtoSet) {
    //     this.messageDtoSet = messageDtoSet;
    // }
    
    
    /* custom constructor */
    public PatientDto(Patient patient) {
        // CHECK HERE IF IT DOESN'T WORK
        // if (patient.getProvider() != null) {
        //     this.provider = patient.getProvider();
        // }
        
        if (patient.getId() != null) {
            this.id = patient.getId();
        }
        if (patient.getUsername() != null) {
            this.username = patient.getUsername();
        }
        // if (patient.getPassword() != null) {
        //     this.password = patient.getPassword();
        // }
        if (patient.getFirstName() != null) {
            this.firstName = patient.getFirstName();
        }
        if (patient.getLastName() != null) {
            this.lastName = patient.getLastName();
        }
        if (patient.getDob() != null) {
            this.dob = patient.getDob();
        }
        if (patient.getAge() != 0) {
            this.age = patient.getAge();
        }
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
        if (patient.getProvider() != null) {
            this.provider = patient.getProvider();
        }
    }



    // public Object getProviderId() {
    //     return null;
    // }

    //patientDtoSet
    // private Set<PatientDto> patientDtoSet = new HashSet<>();

    // public Long getProviderId() {
    //     return null;
    // }

    // public String getInsuranceProvider() {
    //     return null;
    // }

}
