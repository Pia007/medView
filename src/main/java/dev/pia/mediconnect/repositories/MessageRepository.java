package dev.pia.mediconnect.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Message;
import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.Provider;
import dev.pia.mediconnect.entities.Provider;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findAllByPatientEquals(Patient patient);
//     List<Message> findAllByProviderEquals(Provider provider);
//     // List<Message> findAllByPatientId(Long patientId);
//     List<Message> findAllByPatientEquals(Long patientId);

    List<Message> findAllByProviderEquals(Provider provider);

}
