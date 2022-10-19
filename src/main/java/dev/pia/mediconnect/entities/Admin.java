package dev.pia.mediconnect.entities;

import javax.persistence.*;

import dev.pia.mediconnect.dtos.AdminDto;
import lombok.*;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {
    
    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String adminUsername;

    @Column(name = "password", nullable = false)
    private String adminPassword;

    /* custom constructor */
    public Admin(AdminDto adminDto) {
        if (adminDto.getId() != null) {
            this.id = adminDto.getId();
        }
        if (adminDto.getUsername() != null) {
            this.adminUsername = adminDto.getAdminUsername();
        }
    }
}
