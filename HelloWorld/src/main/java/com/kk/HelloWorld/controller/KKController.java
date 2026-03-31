package com.kk.HelloWorld.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController


public class KKController{
        @GetMapping("/kk")
        String sayKK() {
                return "Hello KK!";
        }
    
    
        }
