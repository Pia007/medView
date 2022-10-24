package dev.pia.mediconnect.services;

import java.util.*;
// import java.util.Optional;

import javax.transaction.Transactional;

// import dev.pia.mediconnect.dtos.PatientDto;
import dev.pia.mediconnect.dtos.*;

public interface ProviderService {

    @Transactional
    List<String> registerProvider(ProviderDto providerDto);

    @Transactional
    List<String> loginProvider(ProviderDto providerDto);

    /* get provider by provider id */
    @Transactional
    ProviderDto getProviderById(Long providerId);

    /* update provider */
    @Transactional
    List<String> updateProvider(ProviderDto providerDto);

    /* get all providers */
    List<ProviderDto> getAllProviders();

    // /* get all provider patient's */
    // @Transactional
    // List<ProviderDto> getAllProviderPatients(Long providerId);

}
