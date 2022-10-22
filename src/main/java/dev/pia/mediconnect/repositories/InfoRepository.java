package dev.pia.mediconnect.repositories;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.pia.mediconnect.entities.Info;
import dev.pia.mediconnect.entities.Patient;

@Repository
public interface InfoRepository  extends JpaRepository <Info, Long> {

    List<Info> findAllByPatientEquals(Patient patient);
}
    

