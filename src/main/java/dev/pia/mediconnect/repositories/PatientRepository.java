package dev.pia.mediconnect.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.entities.Provider;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findByPatientMRN(String patientMRN);

    Optional<Patient> findById(Long id);

    Optional<Provider> findByProvider(Long id);

    List<Patient> findAllByProvider(Provider provider);

    List<Patient> findAllByProviderEquals(Provider provider);

}
