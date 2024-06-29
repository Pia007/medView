package dev.pia.mediconnect.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClientForwardController {

    /* 
    
        fowarding any request to the spring boot app to the react application \
        using regex to parse the path coming in from the browser and looking at 
        everything except for things that start with the dot (.) character.

        For pages that you want to be handled by spring boot, you can add (.)

    */
    
    @RequestMapping(value = "/**/{path:[^\\.]*}")
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
