package dev.pia.mediconnect.services;

import java.util.List;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.ProviderDto;

public interface ProviderService {

    @Transactional
    List<String> registerProvider(ProviderDto providerDto);

    @Transactional
    List<String> loginProvider(ProviderDto providerDto);

    /* Provider Upate */
    @Transactional
    List<String> updateProvider(ProviderDto providerDto);

    
}
