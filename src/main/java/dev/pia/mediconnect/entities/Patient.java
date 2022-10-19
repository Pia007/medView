package dev.pia.mediconnect.entities;

import java.time.LocalDate;
// import java.time.Period;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dev.pia.mediconnect.dtos.PatientDto;
import lombok.*;

@Entity
@Table(name="Patients")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    // fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "first_name", length = 25, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 25, nullable = false)
    private String lastName;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    // @Transient /* not stored in the database */
    // private int age;

    @Column(name = "email", length = 30)
    private String email;

    @Column(name = "phone_number", length = 15, nullable = false)
    private String phoneNumber;

    @Column(name = "address", length = 100, nullable = false)
    private String address;

    @Column(name = "city", length = 25, nullable = false)
    private String city;

    @Column(name = "state", length = 2, nullable = false)
    private String state;

    @Column(name = "zip_code", length = 5, nullable = false)
    private String zipCode;

    @Column(name = "insurance_provider", length = 500, nullable = false)
    private String insurance;

    @Column(name = "allergies", length = 2000)
    private String allergies;

    @Column(name = "conditions", length = 2000)
    private String conditions;

    @Column(name = "medications", length = 2000)
    private String medications;


    // getter and setter for age
    // public int getAge() {
    //     return Period.between(this.dateOfBirth, LocalDate.now()).getYears();
    // }

    // public void setAge(int age) {
    //     this.age = age;
    // }

    /* provider relationship - many patients to one provider */
    @ManyToOne
    @JsonBackReference
    private Provider provider;

    
    /* message relationship - patient can have many messages */
    @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonBackReference
    private Set<Message> messageSet = new HashSet<>();

    /* custom constructor */
    public Patient(PatientDto patientDto) {
        if (patientDto.getUsername() != null) {
            this.username = patientDto.getUsername();
        }
        if (patientDto.getPassword() != null) {
            this.password = patientDto.getPassword();
        }
        if (patientDto.getFirstName() != null) {
            this.firstName = patientDto.getFirstName();
        }
        if (patientDto.getLastName() != null) {
            this.lastName = patientDto.getLastName();
        }
        if (patientDto.getDateOfBirth() != null) {
            this.dateOfBirth = patientDto.getDateOfBirth();
        }
        if (patientDto.getEmail() != null) {
            this.email = patientDto.getEmail();
        }
        if (patientDto.getPhoneNumber() != null) {
            this.phoneNumber = patientDto.getPhoneNumber();
        }
        if (patientDto.getAddress() != null) {
            this.address = patientDto.getAddress();
        }
        if (patientDto.getCity() != null) {
            this.city = patientDto.getCity();
        }
        if (patientDto.getState() != null) {
            this.state = patientDto.getState();
        }
        if (patientDto.getZipCode() != null) {
            this.zipCode = patientDto.getZipCode();
        }
        if (patientDto.getInsurance() != null) {
            this.insurance = patientDto.getInsurance();
        }
        if (patientDto.getAllergies() != null) {
            this.allergies = patientDto.getAllergies();
        }
        if (patientDto.getConditions() != null) {
            this.conditions = patientDto.getConditions();
        }
        if (patientDto.getMedications() != null) {
            this.medications = patientDto.getMedications();
        }
    }

}
