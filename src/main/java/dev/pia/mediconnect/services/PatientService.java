package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

// import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;
import dev.pia.mediconnect.dtos.ProviderDto;

/* create Patient Service interface */
public interface PatientService {

    /* use patientDto to register a patient and add the provider id  */
    @Transactional
    // public List<String> registerPatient(PatientDto patientDto);
    public List<String> registerPatient(PatientDto patientDto, Long providerId);

    // get all patients by provider id
    @Transactional
    public List<PatientDto> getAllPatientsByProviderId(Long providerId);

    // /* patient register */
    // @Transactional
    // public List<String> register(PatientDto patientDto);

    /* use patientDto to login patient */
    @Transactional
    public List<String> loginPatient(PatientDto patientDto);

    /* patient by patient id */
    @Transactional
    public PatientDto getPatientById(Long patientId);

    /* update patient */
    @Transactional
    public List<String> updatePatient(PatientDto patientDto);
   
    /* update patient name only */
    @Transactional
    public List<String> updatePatientName(PatientDto patientDto);
        
    /* get all patients */
    @Transactional
    public List<PatientDto> getAllPatients();


    /* provider adds a patient*/
    @Transactional
    public List<String> addPatient(PatientDto patientDto, Long providerId);
    
    /*  get patient's provider name*/
    // @Transactional
    // public String getPatientProviderName(Long patientId);

    /* get patient's provider */
    // @Transactional
    // public Long getPatientProviderId(Long patientId);

    /* get all patients */
    // @Transactional
    // public List<PatientDto> getAllPatients();
    
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
