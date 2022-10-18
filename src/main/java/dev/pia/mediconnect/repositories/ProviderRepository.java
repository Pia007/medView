package dev.pia.mediconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.pia.mediconnect.entities.Provider;

public interface ProviderRepository extends JpaRepository<Provider, Long> {

    Optional<Provider> findByProviderUsername(String providerUsername);

}
    
