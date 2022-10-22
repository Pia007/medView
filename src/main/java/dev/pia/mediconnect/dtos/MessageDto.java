package dev.pia.mediconnect.dtos;

import java.io.Serializable;
import java.util.Date;

import dev.pia.mediconnect.entities.Message;
import dev.pia.mediconnect.entities.Patient;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDto implements Serializable {

    //fields
    private Long id;
    private String body;
    private Date datePosted;
    private String reply;
    private Date dateReplied;
    // private PatientDto patient;

    //custom constructor
    public MessageDto(Message message) {
        if(message.getId() != null) {
            this.id = message.getId();
        }
        if (message.getBody() != null) {
            this.body = message.getBody();
        }
    }

    // public PatientDto getProvider() {
    //     this.patient = new PatientDto();
    //     return this.patient;

    // }

    // public String getBody() {
    //     return null;
    // }

    // public Patient getPatient() {
    //     return null;
    // }

    // public Long getId() {
    //     return null;
    // }
    
}
