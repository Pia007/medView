package dev.pia.mediconnect.entities;

import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dev.pia.mediconnect.dtos.ProviderDto;
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

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @Column(name = "first_name", length = 50)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;

    @Column(name = "specialty", length = 50)
    private String specialty;

    // relationship with patient - one to many
    @OneToMany(mappedBy = "provider", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonBackReference
    private Set<Patient> patientSet = new HashSet<>();

    // /* relationship with messages - one to many */
    // @OneToMany(mappedBy = "provider", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    // @JsonBackReference
    // private Set<Message> messageSet = new HashSet<>();


    /* custom constructor */
    public Provider(ProviderDto providerDto) {
        if (providerDto.getId() != null) {
            this.id = providerDto.getId();
        }
        if (providerDto.getUsername() != null) {
            this.username = providerDto.getUsername();
        }
        if (providerDto.getPassword() != null) {
            this.password = providerDto.getPassword();
        }
        if (providerDto.getFirstName() != null) {
            this.firstName = providerDto.getFirstName();
        }
        if (providerDto.getLastName() != null) {
            this.lastName = providerDto.getLastName();
        }
        if (providerDto.getSpecialty() != null) {
            this.specialty = providerDto.getSpecialty();
        }
    }


    /* toString */
    @Override
    public String toString() {
        return "Provider [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
                + ", lastName=" + lastName + ", specialty=" + specialty + "]";
    }


    public Object getProviderId() {
        return this.id;
    }


    public void setId(Object providerId) {
    }

}
