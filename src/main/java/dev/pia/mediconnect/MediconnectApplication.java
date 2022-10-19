package dev.pia.mediconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MediconnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediconnectApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello() {
		return "Hello! From My WORLD!";
	}

}
