package dev.pia.mediconnect.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.*;

@Entity
@Table(name="Providers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Provider {

    /*fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name", length = 50)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;

    // specialty
    @Column(name = "specialty", length = 50)
    private String specialty;

    // relationships
    @OneToOne  // check this
    @JsonBackReference
    private Patient patient;

    // constructors
    // public Provider() {
    // }

    // public Provider(int id, String firstName, String lastName, String specialty) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.specialty = specialty;
    // }

    // getters and setters

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

    // public String getSpecialty() {
    //     return this.specialty;
    // }

    // public void setSpecialty(String specialty) {
    //     this.specialty = specialty;
    // }

    // public Patient getPatient() {
    //     return this.patient;
    // }

    // public void setPatient(Patient patient) {
    //     this.patient = patient;
    // }


}
