package dev.pia.mediconnect.dtos;

import java.io.Serializable;

import dev.pia.mediconnect.entities.Message;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDto implements Serializable {

    //fields
    private Long id;
    private String body;
    private String reply;
    private PatientDto patient;

    //custom constructor
    public MessageDto(Message message) {
        if(message.getId() != null) {
            this.id = message.getId();
        }
        if (message.getBody() != null) {
            this.body = message.getBody();
        }
    }
    
    
}
