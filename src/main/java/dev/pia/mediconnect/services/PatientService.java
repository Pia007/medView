package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

// import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;

/* create Patient Service interface */
public interface PatientService {

    /* use patientDto to register a patient */
    @Transactional
    public List<String> registerPatient(PatientDto patientDto);

    /* use patientDto to login patient */
    @Transactional
    public List<String> loginPatient(PatientDto patientDto);

    /* patient by id */
    @Transactional
    public Optional<PatientDto> getPatientById(Long patientId);

    /* use patientDto to update patient email, address, phone number, or insurance */
    @Transactional
    public List<String> updatePatient(PatientDto patientDto);

//     /*  get patient's provider */
//     @Transactional
//     List<ProviderDto> getAllProvidersByPatient(Long patientId);

//     /* get all messages by patient */
//     @Transactional
//     public List<MessageDto> getAllMessagesByPatientId(Long patientId);

//     /* add/ send message to provider */
//     @Transactional
//     void sendMessageToProvider(MessageDto messageDto, Long providerId);

//     /* reply to message */
//     @Transactional 
//     void replyToMessage(MessageDto messageDto, Long messageId);


}
