package dev.pia.mediconnect.dtos;

import java.io.Serializable;

import dev.pia.mediconnect.entities.Admin;

public class AdminDto implements Serializable{

    /* fields */
    private Long id;
    private String username;
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
            this.username = admin.getAdminUsername();
        }
    }
    public CharSequence getAdminPassword() {
        return null;
    }
    public CharSequence getPassword() {
        return null;
    }
    public String getAdminUsername() {
        return null;
    }
    
}
