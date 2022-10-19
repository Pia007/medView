package dev.pia.mediconnect.services;

import java.util.*;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.*;
// import dev.pia.mediconnect.dtos.PatientDto;
// import dev.pia.mediconnect.dtos.ProviderDto;
import dev.pia.mediconnect.entities.*;
// import dev.pia.mediconnect.entities.Patient;
// import dev.pia.mediconnect.entities.Provider;
import dev.pia.mediconnect.repositories.*;
// import dev.pia.mediconnect.repositories.PatientRepository;
// import dev.pia.mediconnect.repositories.ProviderRepository;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private PatientRepository patientRepository;


    @Autowired
    private PasswordEncoder encoder;

    /* use providerDto to register a provider */
    @Override
    @Transactional
    public List<String> registerProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Provider provider = new Provider(providerDto);
        providerRepository.saveAndFlush(provider);
        response.add("Provider registered successfully");
        return response;
    }

    /* use providerDto to login provider */
    @Override
    @Transactional
    public List<String> loginProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findByProviderUsername(providerDto.getProviderUsername());


        if (optionalProvider.isPresent()) {
            if (encoder.matches(providerDto.getProviderPassword(), optionalProvider.get().getProviderPassword())) {
                response.add("Provider logged in successfully");
                response.add(String.valueOf(optionalProvider.get().getId()));
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Provider username or password");
        }
        return response;
    }

    /* get provider by Id */
    @Override
    public Optional<ProviderDto> getProviderById(Long providerId) {
        Optional<Provider> optionalProvider = providerRepository.findById(providerId);
        if (optionalProvider.isPresent()) {
            return Optional.of(new ProviderDto(optionalProvider.get()));
        }
        return Optional.empty();
    }

    /* Provider Upate */
    @Override
    @Transactional
    public List<String> updateProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findByProviderUsername(providerDto.getProviderUsername());

        if (optionalProvider.isPresent()) {
            if (encoder.matches(providerDto.getProviderPassword(), optionalProvider.get().getProviderPassword())) {
                Provider provider = optionalProvider.get();
                provider.setFirstName(providerDto.getFirstName());
                provider.setLastName(providerDto.getLastName());
                provider.setSpecialty(providerDto.getSpecialty());
                response.add("Provider updated successfully");
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Provider username or password");
        }
        return response;
    }

    /* get all partients will same providerId*/
    @Override
    @Transactional
    public List<PatientDto> getAllPatientsByProviderId(Long providerId) {
        List<Patient> patients = patientRepository.findAllByProviderId(providerId);
        return patients.stream().map(patient -> new PatientDto(patient)).collect(Collectors.toList());
    }
    // @Override
    // @Transactional
    // public List<PatientDto> getAllPatientsByProvider(Long providerId) {
    //     Optional<Patient> optionalPatient = patientRepository.findById(providerId);
    //     if (optionalPatient.isPresent()) {
    //         List<Patient> patientList = patientRepository.findByPatientEquals(optionalPatient.get());
    //         return patientList.stream().map(patient -> new PatientDto(patient)).collect(Collectors.toList());
    //     }
    //     return Collections.emptyList();
    // }

//     /* get all message based on provider */
//     @Override
//     @Transactional
//     public List<MessageDto> getAllMessagesByProviderId(Long providerId) {
//         Optional<Provider> optionalProvider = providerRepository.findById(providerId);
//         if(optionalProvider.isPresent()) {
//             List<Message> messageList = messageRepository.findAllByProviderEquals(optionalProvider.get());
//             return messageList.stream().map(message -> new MessageDto(message)).collect(Collectors.toList());

//         }
//         return Collections.emptyList();
//     }

//     /* update patients allergies, conditions, medications */
//     @Override
//     @Transactional
//     public void updatePatient(Long patientId, String allergies, String conditions, String medications) {
//         Optional<Patient> optionalPatient = patientRepository.findById(patientId);
//         if(optionalPatient.isPresent()) {
//             Patient patient = optionalPatient.get();
//             patient.setAllergies(allergies);
//             patient.setConditions(conditions);
//             patient.setMedications(medications);
//         }        
//     }




//     /* Reply to a message */
//     @Override
//     @Transactional
//     public void replyToMessage(MessageDto messageDto, Long messageId) {
//         Optional<Message> optionalMessage = messageRepository.findById(messageId);
//         optionalMessage.ifPresent(message -> {
//             message.setReply(messageDto.getReply());
//             message.setReplyDate(new Date());
//             messageRepository.saveAndFlush(message);
//         });
        
//     }

//     /* send a new message to patient */
//     @Override
//     @Transactional
//     public void sendMessageToPatient(MessageDto messageDto, Long patientId) {
//         Optional<Patient> optionalPatient = patientRepository.findById(patientId);
//         optionalPatient.ifPresent(patient -> {
//             Message message = new Message(messageDto);
//             message.setPatient(patient);
//             message.setPostDate(new Date());
//             messageRepository.saveAndFlush(message);
//         });
//     }



//     // @Override
//     // public List<String> updateProvider(ProviderDto providerDto) {
//     //     // TODO Auto-generated method stub
//     //     return null;
//     // }
}
