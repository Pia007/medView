package dev.pia.mediconnect.entities;

import javax.persistence.*;

@Entity
@Table(name="Providers")
public class Provider {

    /*fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    // specialty
    @Column(name = "specialty")
    private String specialty;

}
