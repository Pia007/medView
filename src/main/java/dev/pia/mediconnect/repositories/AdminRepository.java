package dev.pia.mediconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findByAdminUsername(String adminUsername);

    // Admin findByUsername(String username);

    // Admin findByUsernameAndPassword(String username, String password);

}
    
