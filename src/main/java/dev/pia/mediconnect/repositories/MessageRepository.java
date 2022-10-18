package dev.pia.mediconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.pia.mediconnect.entities.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
