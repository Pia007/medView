package dev.pia.mediconnect.services;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.entities.Message;
import dev.pia.mediconnect.entities.Patient;
import dev.pia.mediconnect.entities.Provider;
import dev.pia.mediconnect.repositories.MessageRepository;
import dev.pia.mediconnect.repositories.PatientRepository;
import dev.pia.mediconnect.repositories.ProviderRepository;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private MessageRepository messageRepository;

    /* get message by id */
    @Override
    public Optional<MessageDto> getMessageById(Long messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        if (optionalMessage.isPresent()) {
            return Optional.of(new MessageDto(optionalMessage.get()));
        }
        return Optional.empty();
    }


    /* get all messages by certain patient id*/
    @Override
    public List<MessageDto> getAllMessagesByPatientId(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            List<Message> messageList = messageRepository.findAllByPatientEquals(optionalPatient.get());
            return messageList.stream().map(MessageDto::new).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    /* get all messages by certain provider id */
    @Override
    public List<MessageDto> getAllMessagesByProviderId(Long providerId) {
        Optional<Provider> optionalProvider = providerRepository.findById(providerId);
        if (optionalProvider.isPresent()) {
            List<Message> messageList = messageRepository.findAllByProviderEquals(optionalProvider.get());
            return messageList.stream().map(MessageDto::new).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }
    
    /* patient post message to provider, reply is null */
    @Override
    public void postMessageToProvider(MessageDto messageDto, Long providerId) {
        Optional<Provider> optionalProvider = providerRepository.findById(providerId);
        if (optionalProvider.isPresent()) {
            Message message = new Message();
            message.setProvider(optionalProvider.get());
            message.setPatient(messageDto.getPatient());
            message.setBody(messageDto.getBody());
            message.setReply(null);
            messageRepository.saveAndFlush(message);
        }
        
    }

    /* provider replies to message from patient by updating reply column*/
    @Override
    public void replyToMessage(MessageDto messageDto, Long messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        if (optionalMessage.isPresent()) {
            Message message = optionalMessage.get();
            message.setReply(messageDto.getReply());
            messageRepository.saveAndFlush(message);
        }    
    }


    /* provider post message to a patient */
    @Override
    public void postMessageToPatient(MessageDto messageDto, Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Message message = new Message();
            message.setPatient(optionalPatient.get());
            message.setProvider(messageDto.getProvider());
            message.setBody(messageDto.getBody());
            message.setReply(null);
            messageRepository.saveAndFlush(message);
        } 
    }

    /* patient replies to message from provider by updating reply column*/
    @Override
    public void replyToMessageFromProvider(MessageDto messageDto, Long messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        if (optionalMessage.isPresent()) {
            Message message = optionalMessage.get();
            message.setReply(messageDto.getReply());
            messageRepository.saveAndFlush(message);
        }    
    }

    /* get all messages */
    @Override
    public List<MessageDto> getAllMessages() {
        List<Message> messageList = messageRepository.findAll();
        return messageList.stream().map(MessageDto::new).collect(Collectors.toList());
    }


    @Override
    public void deleteMessage(Long messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        optionalMessage.ifPresent(message -> messageRepository.delete(message));
    }

}
