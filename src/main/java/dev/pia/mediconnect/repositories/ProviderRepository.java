package dev.pia.mediconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {

    Optional<Provider> findByUsername(String username);

    // get provider by provider id
    Optional<Provider> findById(Long id);

    // update provider
    
    // List<Provider> findAllByProviderEquals(Provider provider);

}
    
