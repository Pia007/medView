package dev.pia.mediconnect.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import dev.pia.mediconnect.dtos.*;
import dev.pia.mediconnect.services.*;

@RestController
@RequestMapping("api/v1/providers")
@CrossOrigin(origins = "*")
public class ProviderController {

    private ProviderService providerService;
    
    // constructor injection
    @Autowired
    public ProviderController(ProviderService providerService) {
        this.providerService = providerService;
    }   

    @Autowired
    private PasswordEncoder passwordEncoder;


    @PostMapping("/register")
    public List<String> registerProvider(@RequestBody ProviderDto providerDto) {
        providerDto.setPassword(passwordEncoder.encode(providerDto.getPassword()));
        return providerService.registerProvider(providerDto);
    }

    @PostMapping("/login")
    public List<String> loginProvider(@RequestBody ProviderDto providerDto) {
        return providerService.loginProvider(providerDto);
    }

    @GetMapping
    public List<ProviderDto> getAllProviders() {
        return providerService.getAllProviders();
    }

    /* get provider by id */
    @GetMapping("/{providerId}")
    public ProviderDto getProviderById(@PathVariable Long providerId) {
        return providerService.getProviderById(providerId);
    }

    /* update provider  by id*/
    @PutMapping("/{providerId}")
    public List<String> updateProvider(@PathVariable Long providerId, @RequestBody ProviderDto providerDto) {
        return providerService.updateProvider(providerId, providerDto);
    }
}
