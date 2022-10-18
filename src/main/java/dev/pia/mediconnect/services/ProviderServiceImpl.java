package dev.pia.mediconnect.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.repositories.ProviderRepository;

@Service
public class ProviderServiceImpl {

    @Autowired
    private ProviderRepository providerRepo;
    
}
