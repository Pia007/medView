package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.*;

import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.PatientRecord;
// import dev.pia.mediconnect.entities.Provider;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto implements Serializable {

    // fields
    private Long id;
    private String username;
    private String password;
    // private PatientRecord patientInfo;
    private ProviderDto provider;
    private PatientRecordDto patientRecord;
    private Set<MessageDto> messageDtoSet = new HashSet<>();
    

    // public PatientDto(Provider provider) {
    //     if (provider.getFirstName() != null) {
    //         this.firstName = provider.getFirstName();
    //     }
    //     if (provider.getLastName() != null) {
    //         this.lastName = provider.getLastName();
    //     }
    // }

    public PatientDto(Patient patient) {
        if (patient.getId() != null) {
            this.id = patient.getId();
        }
        if (patient.getUsername() != null) {
            this.username = patient.getUsername();
        }
        if (patient.getPassword() != null) {
            this.password = patient.getPassword();
        }

    }

    // public PatientDto(PatientRecord patientRecord) {
    //     if (patientRecord.getId() != null) {
    //         this.id = patientRecord.getId();
    //     }
    //     if (patientRecord.getFirstName() != null) {
    //         this.firstName = patientRecord.getFirstName();
    //     }
    //     if (patientRecord.getLastName() != null) {
    //         this.lastName = patientRecord.getLastName();
    //     }
    //     if (patientRecord.getDateOfBirth() != null) {
    //         this.dateOfBirth = patientRecord.getDateOfBirth();
    //     }
    //     if (patientRecord.getEmail() != null) {
    //         this.email = patientRecord.getEmail();
    //     }
    //     if (patientRecord.getInsuranceProvider() != null) {
    //         this.insuranceProvider = patientRecord.getInsuranceProvider();
    //     }
    //     if (patientRecord.getAllergies() != null) {
    //         this.allergies = patientRecord.getAllergies();
    //     }
    //     if (patientRecord.getConditions() != null) {
    //         this.conditions = patientRecord.getConditions();
    //     }
        
    // }
}
