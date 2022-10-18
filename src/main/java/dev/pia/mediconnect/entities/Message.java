package dev.pia.mediconnect.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.*;

@Entity
@Table(name="Messages")
@Data
@NoArgsConstructor
@AllArgsConstructor 
public class Message {

    // fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT", length = 1000)
    private String body;

    @Column(columnDefinition = "TEXT", length = 1000)
    private String reply;

    /* relationship to patient */
    @ManyToOne
    @JsonBackReference
    private Patient patient;


    // constructors
    // public Message() {
    // }

    // public Message(int id, String body, String reply, Patient patient) {
    //     this.id = id;
    //     this.body = body;
    //     this.reply = reply;
    //     this.patient = patient;
    // }

    // getters and setters

    // public int getId() {
    //     return this.id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public String getBody() {
    //     return this.body;
    // }

    // public void setBody(String body) {
    //     this.body = body;
    // }

    // public String getReply() {
    //     return this.reply;
    // }

    // public void setReply(String reply) {
    //     this.reply = reply;
    // }

    // public Patient getPatient() {
    //     return this.patient;
    // }

    // public void setPatient(Patient patient) {
    //     this.patient = patient;
    // }

}
