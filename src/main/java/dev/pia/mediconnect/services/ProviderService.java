package dev.pia.mediconnect.services;

import java.util.List;
// import java.util.Optional;

import javax.transaction.Transactional;

// import dev.pia.mediconnect.dtos.PatientDto;
import dev.pia.mediconnect.dtos.ProviderDto;

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

    // /* get all patients where provider id is the same as the provider id */
    // @Transactional
    // List<PatientDto> getAllPatientsByProviderId(Long providerId);

    // /* provider updates patient */
    // @Transactional
    // List<String> updatePatient(PatientDto patientDto);

    // /* get all providers */
    // @Transactional
    // List<ProviderDto> getAllProviders();
}
