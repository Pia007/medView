package dev.pia.mediconnect.services;

import java.util.*;
// import java.util.Optional;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.*;

public interface ProviderService {

    @Transactional
    List<String> registerProvider(ProviderDto providerDto);

    @Transactional
    List<String> loginProvider(ProviderDto providerDto);

    @Transactional
    ProviderDto getProviderById(Long providerId);

    @Transactional
    List<String> updateProvider(Long providerId, ProviderDto providerDto);

    /* get all providers */
    @Transactional
    List<ProviderDto> getAllProviders();

}
