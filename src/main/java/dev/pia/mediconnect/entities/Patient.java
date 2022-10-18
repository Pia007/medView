package dev.pia.mediconnect.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;
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

    @Column
    private String password;

    /* provider relationship */
    @OneToOne   // check this
    // @JoinColumn(name = "provider_id", referencedColumnName = "id")
    @JsonBackReference
    private Provider provider;

    /* patient info relationship */
    @OneToOne
    // @JoinColumn(name = "patient_info_id", referencedColumnName = "id")
    @JsonBackReference
    private PatientRecord patientInfo;

    
    /* message relationship - patient can have many messages */
    @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonBackReference
    private Set<Message> messageSet = new HashSet<>();


    // custom constructor
    // public Patient(ProviderDto providerDto) {
    //     if (provider.getFirstName() != null) {
    //         this.firstName = provider.getFirstName();
    //     }
    //     if (provider.getLastName() != null) {
    //         this.lastName = provider.getLastName();
    //     }
    // }


    public Patient(PatientDto patientDto) {
        if (patientDto.getUsername() != null) {
            this.username = patientDto.getUsername();
        }
        if (patientDto.getPassword() != null) {
            this.password = patientDto.getPassword();
        }
    }



    // public Patient() {
    // }

    // public Patient(int id, String username, String password, PatientInfo patientInfo, Provider provider) {
    //     this.id = id;
    //     this.username = username;
    //     this.password = password;
    //     this.patientInfo = patientInfo;
    //     this.provider = provider;
    // }

    // getters and setters

    // public int getId() {
    //     return this.id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public String getUsername() {
    //     return this.username;
    // }

    // public void setUsername(String username) {
    //     this.username = username;
    // }

    // public String getPassword() {
    //     return this.password;
    // }

    // public void setPassword(String password) {
    //     this.password = password;
    // }

    // public Provider getProvider() {
    //     return this.provider;
    // }

    // public void setProvider(Provider provider) {
    //     this.provider = provider;
    // }

    // public PatientInfo getPatientInfo() {
    //     return this.patientInfo;
    // }

    // public void setPatientInfo(PatientInfo patientInfo) {
    //     this.patientInfo = patientInfo;
    // }

    // public Set<Message> getMessageSet() {
    //     return this.messageSet;
    // }

    // public void setMessageSet(Set<Message> messageSet) {
    //     this.messageSet = messageSet;
    // }
    
    
}
