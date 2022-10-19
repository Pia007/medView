package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.MessageDto;


public interface MessageService {

//     // add a message 
//     // @Transactional
//     // void addMessage(MessageDto messageDto, Long id);

//     // delete a message
//     @Transactional
//     void deleteMessage(Long messageId);

    // get message by id
    @Transactional
    Optional<MessageDto> getMessageById(Long messageId);

    /* get all messages by certain patient id*/
    @Transactional
    List<MessageDto> getAllMessagesByPatientId(Long patientId);


    /* get all messages by certain provider id */
    @Transactional
    List<MessageDto> getAllMessagesByProviderId(Long providerId);

    /* patient post a message to a provider */
    @Transactional
    void postMessageToProvider(MessageDto messageDto, Long providerId);


    /* provider replies to message from patient by updating reply column*/
    @Transactional
    void replyToMessage(MessageDto messageDto, Long messageId);

    /* provider post message to a patient */
    @Transactional
    void postMessageToPatient(MessageDto messageDto, Long patientId);

    /* patient replies to message from provider by updating reply column*/
    @Transactional
    void replyToMessageFromProvider(MessageDto messageDto, Long messageId);

//     // get all messages 
//     @Transactional
//     List<MessageDto> getAllMessages();

//     // get all messages
//     // @Transactional
//     // List<MessageDto> getAllMessagesByProvider(Long providerId);


}
