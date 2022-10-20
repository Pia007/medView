package dev.pia.mediconnect.dtos;

import java.io.Serializable;

import dev.pia.mediconnect.entities.Admin;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminDto implements Serializable{

    /* fields */
    private Long id;
    private String adminUsername;
    private String adminPassword;

    public Long getId() {
        return null;
    }
    public String getUsername() {
        return null;
    }

    /* custom constructor  */
    public AdminDto(Admin admin) {
        if (admin.getId() != null) {
            this.id = admin.getId();
        }
        if (admin.getAdminUsername() != null) {
            this.adminUsername = admin.getAdminUsername();
        }
        if (admin.getAdminPassword() != null) {
            this.adminPassword = admin.getAdminPassword();
        }
    }
    
}
