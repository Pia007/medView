package dev.pia.mediconnect.services;

import java.util.*;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


// import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;
// import dev.pia.mediconnect.entities.Message;
import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.Provider;
// import dev.pia.mediconnect.repositories.MessageRepository;
import dev.pia.mediconnect.repositories.PatientRepository;
// import dev.pia.mediconnect.repositories.ProviderRepository;


@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

//     @Autowired
//     private MessageRepository messageRepository;

//     @Autowired
//     private ProviderRepository providerRepository;

    @Autowired
    private PasswordEncoder encoder;


    /* use patientDto to register a patient */
    @Override
    @Transactional
    public List<String> registerPatient(PatientDto patientDto) {
        List<String> response = new ArrayList<>();
        Patient patient = new Patient(patientDto);
        patientRepository.saveAndFlush(patient);
        response.add("Patient registered successfully");
        return response;
    }

    /* use patientDto to login patient */

    @Override
    @Transactional
    public List<String> loginPatient(PatientDto patientDto) {
        List<String> response = new ArrayList<>();
        Optional<Patient> optionalPatient = patientRepository.findByUsername(patientDto.getUsername());

        if (optionalPatient.isPresent()) {
            if (encoder.matches(patientDto.getPassword(), optionalPatient.get().getPassword())) {
                response.add("Patient logged in successfully");
                response.add(String.valueOf(optionalPatient.get().getId()));
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Patient username or password");
        }
        return response;
    }

    /* get patient by id */
    @Override
    @Transactional
    public Optional<PatientDto> getPatientById(Long patientId) {
        Optional<Patient> optionalPatient = patientRepository.findById(patientId);
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            PatientDto patientDto = new PatientDto(patient);
            return Optional.of(patientDto);
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public List<String> updatePatient(PatientDto patientDto) {
        
        Optional<Patient> optionalPatient = patientRepository.findById(patientDto.getId());
        if (optionalPatient.isPresent()) {
            Patient patient = optionalPatient.get();
            patient.setFirstName(patientDto.getFirstName());
            patient.setLastName(patientDto.getLastName());
            patient.setAddress(patientDto.getAddress());
            patient.setCity(patientDto.getCity());
            patient.setState(patientDto.getState());
            patient.setZipCode(patientDto.getZipCode());
            patient.setPhoneNumber(patientDto.getPhoneNumber());
            // patient.setDateOfBirth(patientDto.getDateOfBirth());
            patient.setInsurance(patientDto.getInsurance());
            // patient.setUsername(patientDto.getUsername());
            // patient.setPassword(encoder.encode(patientDto.getPassword()));
            patientRepository.saveAndFlush(patient);
        }
        return null;
    }

//     // add/send message to provider
//     @Override
//     @Transactional
//     public void sendMessageToProvider(MessageDto messageDto, Long providerId) {
//         Optional<Provider> optionalProvider = providerRepository.findById(providerId);
//         optionalProvider.ifPresent(provider -> {
//             Message message = new Message(messageDto);
//             message.setProvider(provider);
//             message.setPostDate(new Date());
//             messageRepository.saveAndFlush(message);
//         });
//     }



//     /* get patient's provider */
//     @Override
//     @Transactional
//     public List<ProviderDto> getAllProvidersByPatient(Long patientId) {
//         Optional<Provider> optionalProvider = providerRepository.findById(patientId);
//         if (optionalProvider.isPresent()) {
//             List<Provider> providerList = providerRepository.findAllByProviderEquals(optionalProvider.get());
//             return providerList.stream().map(provider -> new ProviderDto(provider)).collect(Collectors.toList());
//         }
//         return Collections.emptyList();
//     }

//     /* get patient's messages */
//     // @Override
//     // public List<MessageDto> getAllMessagesByPatientId(Long patientId) {
//     //     Optional<Patient> optionalPatient = patientRepository.findById(patientId);
//     //     if(optionalPatient.isPresent()){
//     //         List<Message> messageList = messageRepository.findAllByPatientEquals(optionalPatient.get());
//     //         return messageList.stream().map(MessageDto::new).collect(Collectors.toList());
//     //     }
//     //     return Collections.emptyList();
//     // }


//     /* reply to message*/
//     @Override
//     public void replyToMessage(MessageDto messageDto, Long messageId) {
//         Optional<Message> optionalMessage = messageRepository.findById(messageId);
//         optionalMessage.ifPresent(message -> {
//             message.setReply(messageDto.getReply());
//             message.setReplyDate(new Date());
//             messageRepository.saveAndFlush(message);
//         });
//     }

//     @Override
//     public List<MessageDto> getAllMessagesByPatientId(Long patientId) {
//         // TODO Auto-generated method stub
//         return null;
//     }

}
