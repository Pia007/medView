package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import dev.pia.mediconnect.dtos.AdminDto;

public interface AdminService {

    /* register admin */
    @Transactional
    public List<String> registerAdmin(AdminDto adminDto);

    /* login admin */
    @Transactional
    public List<String> loginAdmin(AdminDto adminDto);  

    /* get all patients  from patient dto*/
    


    
}
