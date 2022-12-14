package dev.pia.mediconnect.entities;

import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.*;

import dev.pia.mediconnect.dtos.*;
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
    
    @Column(name = "suffix", length = 10)
    private String suffix;

    @OneToMany(mappedBy="provider",  fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonBackReference
    private Set<Patient> patientSet = new HashSet<>();

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
        if (providerDto.getSuffix() != null) {
            this.suffix = providerDto.getSuffix();
        }
    }

    @Override
    public String toString() {
        return "Provider [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
                + ", lastName=" + lastName + ", specialty=" + specialty + ", suffix=" + suffix + "]";
    }

    public Object getProviderId() {
        return this.id;
    }

    public void setId(Object providerId) {
    }

}
