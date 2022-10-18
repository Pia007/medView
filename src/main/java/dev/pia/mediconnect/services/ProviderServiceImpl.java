package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.ProviderDto;
import dev.pia.mediconnect.entities.Provider;
import dev.pia.mediconnect.repositories.ProviderRepository;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

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
    
}
