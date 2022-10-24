package dev.pia.mediconnect.entities;

import java.time.*;
// import java.time.Period;
import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.*;
import dev.pia.mediconnect.dtos.*;
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

    @Column(unique = true)
    private String username;

    // @Column
    // private String password;

    @Column(name = "first_name", length = 25)
    private String firstName;

    @Column(name = "last_name", length = 25)
    private String lastName;

    @Column(name = "dob")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dob;

    @Transient /* not stored in the database */
    private int age;

    @Column(name = "email", length = 30)
    private String email;

    @Column(name = "phone_number", length = 15)
    private String phone;

    @Column(name = "address", length = 100)
    private String address;

    @Column(name = "city", length = 25)
    private String city;

    @Column(name = "state", length = 2)
    private String state;

    @Column(name = "zip_code", length = 5)
    private String zip;

    @Column(name = "insurance_provider", length = 500)
    private String insurance;

    @Column(name = "allergies", length = 500)
    private String allergies;

    @Column(name = "conditions", length = 2000)
    private String conditions;

    @Column(name = "medications", length = 2000)
    private String medications;


    /* provider relationship - many patients to one provider */
    // lazy loading - only load does causes issues when getting patients
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "provider_id")
    @JsonBackReference
    private Provider provider;

   

    // getter and setter for age
    public int getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }

    /* message relationship - patient can have many messages */
    // @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    // @JsonBackReference
    // private Set<Message> messageSet = new HashSet<>();

    /* custom constructor */
    public Patient(PatientDto patientDto) {
        
        if (patientDto.getUsername() != null) {
            this.username = patientDto.getUsername();
        }
        // if (patientDto.getPassword() != null) {
        //     this.password = patientDto.getPassword();
        // }
        if (patientDto.getFirstName() != null) {
            this.firstName = patientDto.getFirstName();
        }
        if (patientDto.getLastName() != null) {
            this.lastName = patientDto.getLastName();
        }
        if (patientDto.getDob() != null) {
            this.dob = patientDto.getDob();
        }
        if (patientDto.getEmail() != null) {
            this.email = patientDto.getEmail();
        }
        if (patientDto.getPhone() != null) {
            this.phone = patientDto.getPhone();
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
        if (patientDto.getZip() != null) {
            this.zip = patientDto.getZip();
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
        if (patientDto.getProvider() != null) {
            this.provider = patientDto.getProvider();
        }
        // if (patientDto.getProviderId() != null) {
        //     Provider provider = new Provider();
        //     provider.setId(patientDto.getProviderId());
        //     this.provider = provider;
        // }
    }

    /*  toString */
    @Override
    public String toString() {
        return "Patient [id=" + id + ", username=" + username + ", +  firstName=" + firstName
                + ", lastName=" + lastName + ", dob=" + dob + ", age=" + age + ", email=" + email
                + ", phone=" + phone + ", address=" + address + ", city=" + city + ", state=" + state + ", zip=" + zip
                + ", insurance=" + insurance + ", allergies=" + allergies + ", conditions=" + conditions
                + ", medications=" + medications + "]";
    }

    public Provider getProvider() {
        return provider;
    }

	// public void addMedicalRecord(MedicalRecord medicalRecord) {
	// }

    // public void setProviderId(int providerIdInt) {
    // }


}
