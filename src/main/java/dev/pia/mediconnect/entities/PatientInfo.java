package dev.pia.mediconnect.entities;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="PatientInfo")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientInfo {

    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "email")
    private String email;

    @Column(name = "insurance_provider")
    private String insuranceProvider;

    @Column(name = "allergies")
    private String allergies;

    @Column(name = "conditions")
    private String conditions;

    @Column(name = "medications")
    private String medications;

    /* relationship: owning side*/
    @OneToOne(mappedBy = "patientInfo")
    private Patient patient;

    /* constructors */

    // public PatientInfo() {
    // }

    // public PatientInfo(int id, String firstName, String lastName, String dateOfBirth, String email,
    //         String insuranceProvider, String allergies, String conditions, String medications) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.dateOfBirth = dateOfBirth;
    //     this.email = email;
    //     this.insuranceProvider = insuranceProvider;
    //     this.allergies = allergies;
    //     this.conditions = conditions;
    //     this.medications = medications;
    // }

    /* getters and setters */

    // public int getId() {
    //     return this.id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public String getFirstName() {
    //     return this.firstName;
    // }

    // public void setFirstName(String firstName) {
    //     this.firstName = firstName;
    // }

    // public String getLastName() {
    //     return this.lastName;
    // }

    // public void setLastName(String lastName) {
    //     this.lastName = lastName;
    // }

    // public String getDateOfBirth() {
    //     return this.dateOfBirth;
    // }

    // public void setDateOfBirth(String dateOfBirth) {
    //     this.dateOfBirth = dateOfBirth;
    // }

    // public String getEmail() {
    //     return this.email;
    // }

    // public void setEmail(String email) {
    //     this.email = email;
    // }

    // public String getInsuranceProvider() {
    //     return this.insuranceProvider;
    // }

    // public void setInsuranceProvider(String insuranceProvider) {
    //     this.insuranceProvider = insuranceProvider;
    // }

    // public String getAllergies() {
    //     return this.allergies;
    // }

    // public void setAllergies(String allergies) {
    //     this.allergies = allergies;
    // }

    // public String getConditions() {
    //     return this.conditions;
    // }

    // public void setConditions(String conditions) {
    //     this.conditions = conditions;
    // }

    // public String getMedications() {
    //     return this.medications;
    // }

    // public void setMedications(String medications) {
    //     this.medications = medications;
    // }

    // public Patient getPatient() {
    //     return this.patient;
    // }

    // public void setPatient(Patient patient) {
    //     this.patient = patient;
    // }

    
}
