package com.kk.HelloWorld.controller;

import com.kk.HelloWorld.models.User;
import com.kk.HelloWorld.repository.UserRepository;
import com.kk.HelloWorld.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final UserRepository userRepository;
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Map<String, String> body ) {
        String email = body.get("email");
        String password = body.get("password");

        if (userRepository.findByEmail(email).isPresent()) {
            return new ResponseEntity<>("Email Already Exists!", HttpStatus.CONFLICT);
        }

        userService.createUser(User.builder().email(email).password(password).build());
        return new ResponseEntity<>("Successfully Registered!", HttpStatus.CREATED);



    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Map<String, String> body ) {

        String email = body.get("email");
        String password = body.get("password");

        var userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>("User Not Registered!", HttpStatus.UNAUTHORIZED);

        }

        User user = userOptional.get();


    }


}
