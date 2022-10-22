package dev.pia.mediconnect.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.pia.mediconnect.dtos.InfoDto;
import dev.pia.mediconnect.services.InfoService;

@RestController
@RequestMapping("api/v1/info")
public class InfoController {

    private InfoService infoService;
    
    // constructor injection
    public InfoController(InfoService infoService) {
        this.infoService = infoService;
    }

    @PostMapping("/patient/{patientId}")
    public List<String> addInfo(@RequestBody InfoDto infoDto, @PathVariable Long patientId) {
        return infoService.addInfo(infoDto, patientId);
    }

    /* update patient info */
    @PutMapping("/patient/{patientId}")
    public List<String> updateInfo(@RequestBody InfoDto infoDto, @PathVariable Long patientId) {
        return infoService.updateInfo(infoDto, patientId);
    }
    
}
