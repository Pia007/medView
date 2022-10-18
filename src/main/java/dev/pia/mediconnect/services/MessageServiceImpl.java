package dev.pia.mediconnect.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.repositories.MessageRepository;

@Service
public class MessageServiceImpl {

    @Autowired
    private MessageRepository messageRepo;
    
}
