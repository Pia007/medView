package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.time.LocalDate;

import dev.pia.mediconnect.entities.Info;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InfoDto implements Serializable{

    /*fields */
    private Long id;

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


    /* custom constructor */
    public InfoDto(Info info) {
        
        if (info.getId() != null) {
            this.id = info.getId();
        }
        if (info.getFirstName() != null) {
            this.firstName = info.getFirstName();
        }
        if (info.getLastName() != null) {
            this.lastName = info.getLastName();
        }
        if (info.getDateOfBirth() != null) {
            this.dateOfBirth = info.getDateOfBirth();
        }
        if (info.getAge() != 0) {
            this.age = info.getAge();
        }
        if (info.getEmail() != null) {
            this.email = info.getEmail();
        }
        if (info.getPhone() != null) {
            this.phone = info.getPhone();
        }
        if (info.getAddress() != null) {
            this.address = info.getAddress();
        }
        if (info.getCity() != null) {
            this.city = info.getCity();
        }
        if (info.getState() != null) {
            this.state = info.getState();
        }
        if (info.getZip() != null) {
            this.zip = info.getZip();
        }
        if (info.getAllergies() != null) {
            this.allergies = info.getAllergies();
        }
        if (info.getInsurance() != null) {
            this.insurance = info.getInsurance();
        }
        if (info.getConditions() != null) {
            this.conditions = info.getConditions();
        }
        if (info.getMedications() != null) {
            this.medications = info.getMedications();
        }
    }
    
}
