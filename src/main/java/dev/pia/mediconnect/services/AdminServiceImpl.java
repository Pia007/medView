package dev.pia.mediconnect.services;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.pia.mediconnect.dtos.AdminDto;
import dev.pia.mediconnect.entities.Admin;
import dev.pia.mediconnect.repositories.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    @Transactional
    public List<String> registerAdmin(AdminDto adminDto) {
        List<String> response = new ArrayList<>();
        Admin admin = new Admin(adminDto);
        adminRepository.saveAndFlush(admin);
        response.add("Admin registered successfully");
        return response;
        
    }

    @Override
    public List<String> loginAdmin(AdminDto adminDto) {
        List<String> response = new ArrayList<>();
        Optional<Admin> optionalAdmin = adminRepository.findByAdminUsername(adminDto.getAdminUsername());

        if (optionalAdmin.isPresent()) {
            if (encoder.matches(adminDto.getPassword(), optionalAdmin.get().getAdminPassword())) {
                response.add("Admin logged in successfully");
                response.add(String.valueOf(optionalAdmin.get().getId()));
            } else {
                response.add("Invalid password");
            }
        } else {
            response.add("Invalid username");
        }
        return response;
    }

}
