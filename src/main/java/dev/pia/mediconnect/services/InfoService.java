package dev.pia.mediconnect.services;

import java.util.List;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.InfoDto;

public interface InfoService {

    /* add patient info */
    @Transactional
    public List<String> addInfo(InfoDto infoDto, Long patientId);

    /* update patient info */
    @Transactional
    public List<String> updateInfo(InfoDto infoDto, Long patientId);
    
}
