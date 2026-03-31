package com.kk.HelloWorld.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {
    @PostMapping("/login")

    public String loginUser(@RequestBody Map<String, String> body, ) {

    }

}
