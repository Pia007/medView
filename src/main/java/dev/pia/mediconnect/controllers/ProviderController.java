package dev.pia.mediconnect.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.pia.mediconnect.dtos.ProviderDto;
import dev.pia.mediconnect.services.ProviderService;

@RestController
@RequestMapping("api/v1/providers")
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


    @GetMapping("/test")
    public String test() {
        return "test";
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

    /* update provider */
    @PutMapping("/update")
    public List<String> updateProvider(@RequestBody ProviderDto providerDto) {
        return providerService.updateProvider(providerDto);
    }
    
}
