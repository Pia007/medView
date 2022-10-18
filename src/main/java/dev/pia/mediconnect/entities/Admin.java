package dev.pia.mediconnect.entities;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="Admins")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    //fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "admin_username")
    private String adminUsername;

    @Column(name = "admin_password")
    private String adminPassword;





    //constructors
    // public Admin() {
    // }

    // public Admin(int id, String adminUsername, String adminPassword) {
    //     this.id = id;
    //     this.adminUsername = adminUsername;
    //     this.adminPassword = adminPassword;
    // }

    //getters and setters

    // public int getId() {
    //     return this.id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public String getAdminUsername() {
    //     return this.adminUsername;
    // }

    // public void setAdminUsername(String adminUsername) {
    //     this.adminUsername = adminUsername;
    // }

    // public String getAdminPassword() {
    //     return this.adminPassword;
    // }

    // public void setAdminPassword(String adminPassword) {
    //     this.adminPassword = adminPassword;
    // }

    
}
