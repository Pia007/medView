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
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto implements Serializable {

    /*fields */
    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    // private int age;
    private String email;
    private String phoneNumber;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String allergies;
    private String insurance;
    private String conditions;
    private String medications;
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
        if (patient.getPhoneNumber() != null) {
            this.phoneNumber = patient.getPhoneNumber();
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
        if (patient.getZipCode() != null) {
            this.zipCode = patient.getZipCode();
        }
        if (patient.getProvider() != null) {
            this.provider = patient.getProvider();
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
    }

    public String getInsuranceProvider() {
        return null;
    }

}
