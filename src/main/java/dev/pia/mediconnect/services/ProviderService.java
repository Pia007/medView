package dev.pia.mediconnect.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.dtos.PatientDto;
import dev.pia.mediconnect.dtos.ProviderDto;

public interface ProviderService {

    @Transactional
    List<String> registerProvider(ProviderDto providerDto);

    @Transactional
    List<String> loginProvider(ProviderDto providerDto);

    /*   get provider by id */
    @Transactional
    Optional<ProviderDto> getProviderById(Long providerId);

    /* Provider Upate */
    // @Transactional
    // List<String> updateProvider(ProviderDto providerDto);

    // get all patients by provider
    @Transactional
    List<PatientDto> getAllPatientsByProvider(Long providerId);

    // update patient allergies, conditions, or medications
    @Transactional 
    void updatePatient(Long patientId, String allergies, String conditions, String medications);

    // get all messages by provider     
    @Transactional
    List<MessageDto> getAllMessagesByProviderId(Long providerId);

    // send message to a patient
    @Transactional
    void sendMessageToPatient(MessageDto messageDto, Long patientId);

    // reply to messages
    @Transactional
    void replyToMessage(MessageDto messageDto, Long messageId);

    
}
