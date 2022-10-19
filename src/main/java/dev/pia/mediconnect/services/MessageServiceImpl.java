package dev.pia.mediconnect.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.MessageDto;
import dev.pia.mediconnect.repositories.MessageRepository;
import dev.pia.mediconnect.repositories.PatientRepository;
import dev.pia.mediconnect.repositories.ProviderRepository;

@Service
public class MessageServiceImpl implements MessageService {

    // @Autowired
    // private ProviderRepository providerRepository;

    // @Autowired
    // private PatientRepository patientRepository;

    @Autowired
    private MessageRepository messageRepo;


    @Override
    public void deleteMessage(Long messageId) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public Optional<MessageDto> getMessageById(Long messageId) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

    @Override
    public List<MessageDto> getAllMessages() {
        // TODO Auto-generated method stub
        return null;
    }

    // @Override
    // public void addMessage(MessageDto messageDto, Long id) {
    //     if (Optional<Provider> optionalProvider = providerRepository.findById(id)) {
    //         Message message = new Message(messageDto);
    //         message.setProvider(provider);
    //         messageRepo.saveAndFlush(message);
    //     }
        
    // }    
}
