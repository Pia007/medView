package dev.pia.mediconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.*;

@Repository
public interface PatientNoteRepository extends JpaRepository<PatientNote, Long> {

    // List<Message> findAllByPatientEquals(Patient patient);

    // List<Message> findAllByProviderEquals(Provider provider);

}
