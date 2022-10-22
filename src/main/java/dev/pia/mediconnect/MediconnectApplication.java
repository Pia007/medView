package dev.pia.mediconnect;

import javax.annotation.Resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("api/v1")
public class MediconnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediconnectApplication.class, args);
		
	}

	@GetMapping("/hello")
	public String test() {
		return "Hello";
	}

}
