package dev.pia.mediconnect.services;

import java.util.*;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.*;
import dev.pia.mediconnect.entities.*;
import dev.pia.mediconnect.repositories.*;

@Service
public class ProviderServiceImpl implements ProviderService {

    private ProviderRepository providerRepository;
    private PasswordEncoder passwordEncoder;

    /* constructor injection */
    @Autowired
    public ProviderServiceImpl(ProviderRepository providerRepository, PasswordEncoder passwordEncoder) {
        this.providerRepository = providerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /* use providerDto to register a provider */
    @Override
    @Transactional
    public List<String> registerProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findByUsername(providerDto.getUsername());

        if (!optionalProvider.isPresent()) {
            Provider provider = new Provider(providerDto);
            providerRepository.saveAndFlush(provider);
            response.add("Provider registered successfully");
            
        } else {
            response.add("Username already exists");
        };
        return response;
    }

    /* use providerDto to login provider only if provider exists*/
    @Override
    @Transactional
    public List<String> loginProvider(ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findByUsername(providerDto.getUsername());

        if (optionalProvider.isPresent()) {
            if (passwordEncoder.matches(providerDto.getPassword(), optionalProvider.get().getPassword())) {

                String id = optionalProvider.get().getId().toString();
                String username = optionalProvider.get().getUsername();
                
                response.add(id);
                response.add("Provider logged in successfully");
                response.add(username);
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid Provider username or password");
        }
        return  response;
    }

    /* get provider by provider Id */
    @Override
    @Transactional
    public ProviderDto getProviderById(Long id) {
        Optional<Provider> optionalProvider = providerRepository.findById(id);
        if (optionalProvider.isPresent()) {
            return new ProviderDto(optionalProvider.get());
        }
        return null;
    }

    /* update provider by */
    @Override
    @Transactional
    public List<String> updateProvider(Long id, ProviderDto providerDto) {
        List<String> response = new ArrayList<>();
        Optional<Provider> optionalProvider = providerRepository.findById(id);

        if (optionalProvider.isPresent()) {
            Provider provider = optionalProvider.get();
            provider.setFirstName(providerDto.getFirstName());
            provider.setLastName(providerDto.getLastName());
            provider.setSpecialty(providerDto.getSpecialty());
            provider.setSuffix(providerDto.getSuffix());
        }
        response.add("Provider updated successfully");
        return response;
    }

    /* get all providers */
    @Override
    @Transactional
    public List<ProviderDto> getAllProviders() {
        List<Provider> providers = providerRepository.findAll();
        return providers.stream().map(provider -> new ProviderDto(provider)).collect(Collectors.toList());
    }
}
