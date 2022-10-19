package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.MessageDto;


public interface MessageService {

    // add a message 
    // @Transactional
    // void addMessage(MessageDto messageDto, Long id);

    // delete a message
    @Transactional
    void deleteMessage(Long messageId);

    // get message by id
    @Transactional
    Optional<MessageDto> getMessageById(Long messageId);

    // get all messages 
    @Transactional
    List<MessageDto> getAllMessages();

    // get all messages
    // @Transactional
    // List<MessageDto> getAllMessagesByProvider(Long providerId);


}
