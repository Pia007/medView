package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.*;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientRecordDto implements Serializable {
    private int id;
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private String email;
    private String insuranceProvider;
    private String allergies;
    private String conditions;
    private ProviderDto provider;
    private Set<MessageDto> messageDtoSet = new HashSet<>();
}
