package dev.pia.mediconnect.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClientForwardController {
    @RequestMapping(value = "/**")
    public String forward() {
        return "forward:/";
    }
    
}

/*
 * APPLICATION FAILED TO START
 ***************************
 * 
 * Description:
 * 
 * Invalid mapping pattern detected: the regex pattern is the issue
 * 
 * No more pattern data allowed after {*...} or ** pattern element
 * 
 * Action:
 * 
 * Fix this pattern in your application or switch to the legacy parser
 * implementation with
 * 'spring.mvc.pathmatch.matching-strategy=ant_path_matcher'.
 * 
 * Fix: application.properties
 * Cut, paste and update spring.mvc.pathmatch.matching-strategy=ant_path_matcher
 * Restart the application
 * 
 */
