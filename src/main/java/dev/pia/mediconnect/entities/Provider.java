package dev.pia.mediconnect.entities;

import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.*;

@Entity
@Table(name="Providers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Provider {

    //fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "provider_username", nullable = false, unique = true)
    private String providerUsername;

    @Column(name = "provider_password", nullable = false)
    private String providerPassword;

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;

    @Column(name = "specialty", length = 50, nullable = false)
    private String specialty;

    // relationship with patient - one to many
    @OneToMany(mappedBy = "provider", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonBackReference
    private Set<Patient> patientSet = new HashSet<>();

    /* relationship with messages - one to many */
    @OneToMany(mappedBy = "provider", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonBackReference
    private Set<Message> messageSet = new HashSet<>();

}
