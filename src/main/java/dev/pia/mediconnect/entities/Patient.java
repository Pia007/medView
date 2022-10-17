package dev.pia.mediconnect.entities;

import javax.persistence.*;

@Entity
@Table(name="Patients")
public class Patient {

    // fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;
    
}
