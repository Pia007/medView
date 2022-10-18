package dev.pia.mediconnect.dtos;

import java.io.Serializable;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProviderDto implements Serializable {

    //fields
    private int id;
    private String firstName;
    private String lastName;

    
}
