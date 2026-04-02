package com.kk.HelloWorld.controller;

import com.kk.HelloWorld.models.User;
import com.kk.HelloWorld.repository.UserRepository;
import com.kk.HelloWorld.service.UserService;
import com.kk.HelloWorld.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        // ✅ Check FIRST before encoding
        if (userRepository.findByEmail(email).isPresent()) {
            return new ResponseEntity<>("Email Already Exists!", HttpStatus.CONFLICT);
        }

        // Then encode and save
        String encodedPassword = passwordEncoder.encode(password);
        userService.createUser(User.builder().email(email).password(encodedPassword).build());
        return new ResponseEntity<>("Successfully Registered!", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> body ) {

        String email = body.get("email");
        String password = body.get("password");

        var userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>("User Not Registered!", HttpStatus.UNAUTHORIZED);

        }

        User user = userOptional.get();
        if (!passwordEncoder.matches(password, user.getPassword())){
            return new ResponseEntity<>("Invalid Password!", HttpStatus.UNAUTHORIZED);

        }
        String token = jwtUtil.generateToken(email);
        return ResponseEntity.ok(Map.of("token", token));


    }


}
