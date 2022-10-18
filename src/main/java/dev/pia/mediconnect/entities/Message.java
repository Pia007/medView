package dev.pia.mediconnect.entities;

import java.sql.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dev.pia.mediconnect.dtos.MessageDto;
import lombok.*;

@Entity
@Table(name="Messages")
@Data
@NoArgsConstructor
@AllArgsConstructor 
public class Message {

    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT", length = 1000)
    private String body;

    // date posted
    @Column(name = "date_posted")
    private Date datePosted;

    @Column(columnDefinition = "TEXT", length = 1000)
    private String reply;

    // date replied
    @Column(name = "date_replied")
    private Date dateReplied;

    /* relationship to patient */
    @ManyToOne
    @JsonBackReference
    private Patient patient;

    /* relationship to provider */ 
    @ManyToOne
    @JsonBackReference
    private Provider provider;

    /* custom constructor */
    public Message(MessageDto messageDto) {
        if (messageDto.getId() != null) {
            this.id = messageDto.getId();
        }
    }

}
