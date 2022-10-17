package dev.pia.mediconnect.entities;

import javax.persistence.*;

@Entity
@Table(name="PatientInfo")
public class PatientInfo {

    // fields
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

    // insurance info
    @Column(name = "insurance_provider")
    private String insuranceProvider;

    // allergies
    @Column(name = "allergies")
    private String allergies;

    // conditions
    @Column(name = "conditions")
    private String conditions;
    
    // medications
    @Column(name = "medications")
    private String medications;
    
}
