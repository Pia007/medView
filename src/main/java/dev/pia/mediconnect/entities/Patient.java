package dev.pia.mediconnect.entities;

import java.time.LocalDate;
import java.time.Period;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import dev.pia.mediconnect.dtos.PatientDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Patients")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    // fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String patientMRN;

    @Column(name = "first_name", length = 25)
    private String firstName;

    @Column(name = "last_name", length = 25)
    private String lastName;

    @Column(name = "dob")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    private LocalDate dob;

    @Column(name = "gender")
    private String gender;

    @Column(name = "ethnicity")
    private String ethnicity;

    @Column(name = " social_security")
    private String socialSecurity;

    @Column(name = "blood_type")
    private String bloodType;

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

    @Column(name = "emergency_contact_firstname", length = 25)
    private String contactFirstname;

    @Column(name = "emergency_contact_lastname", length = 25)
    private String contactLastname;

    @Column(name = "emergency_contact_phone", length = 15)
    private String contactPhone;

    @Column(name = "emergency_contact_relationship", length = 25)
    private String contactRelationship;

    @Column(name = "insurance_provider", length = 500)
    private String insurance;

    @Column(name = "allergies", length = 500)
    private String allergies;

    @Column(name = "conditions", length = 2000)
    private String conditions;

    @Column(name = "medications", length = 2000)
    private String medications;

    @ManyToOne
    private Provider provider;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonBackReference
    private Set<PatientNote> patientNoteSet = new HashSet<>();

    /* dynamically generate age */
    public int getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }
    /* custom constructor */
    public Patient(PatientDto patientDto) {

        if (patientDto.getPatientMRN() != null) {
            this.patientMRN = patientDto.getPatientMRN();
        }
        if (patientDto.getFirstName() != null) {
            this.firstName = patientDto.getFirstName();
        }
        if (patientDto.getLastName() != null) {
            this.lastName = patientDto.getLastName();
        }
        if (patientDto.getDob() != null) {
            this.dob = patientDto.getDob();
        }
        // gender
        if (patientDto.getGender() != null) {
            this.gender = patientDto.getGender();
        }
        // ethnicity
        if (patientDto.getEthnicity() != null) {
            this.ethnicity = patientDto.getEthnicity();
        }
        if (patientDto.getSocialSecurity() != null) {
            this.socialSecurity = patientDto.getSocialSecurity();
        }
        if (patientDto.getBloodType() != null) {
            this.bloodType = patientDto.getBloodType();
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
        if (patientDto.getContactFirstname() != null) {
            this.contactFirstname = patientDto.getContactFirstname();
        }
        if (patientDto.getContactLastname() != null) {
            this.contactLastname = patientDto.getContactLastname();
        }
        if (patientDto.getContactPhone() != null) {
            this.contactPhone = patientDto.getContactPhone();
        }
        if (patientDto.getContactRelationship() != null) {
            this.contactRelationship = patientDto.getContactRelationship();
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
    }

    /* toString */
    @Override
    public String toString() {
        /* return all patient data */
        return "Patient [id=" + id + ", patientMRN=" + patientMRN + ", +  firstName=" + firstName
                + ", lastName=" + lastName + ", dob=" + dob + ", age=" + age + ", email=" + email
                + ", phone=" + phone + ", address=" + address + ", city=" + city + ", state=" + state + ", zip=" + zip
                + ", contact firstname=" + contactFirstname + ", contact lastname=" + contactLastname + ", Phone="
                + contactPhone + ", contact relationship=" + contactRelationship + ", insurance=" + insurance
                + ", allergies=" + allergies + ", conditions=" + conditions
                + ", medications=" + medications
                + ", gender=" + gender + ", race/ethnicity=" + ethnicity + ", social security=" + socialSecurity
                + ", blood type=" + bloodType + "]";
    }

    public Provider getProvider() {
        return provider;
    }
}
