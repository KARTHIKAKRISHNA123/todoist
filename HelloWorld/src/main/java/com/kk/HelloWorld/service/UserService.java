package com.kk.HelloWorld.service;

import com.kk.HelloWorld.models.User;
import com.kk.HelloWorld.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository UserRepository;

    public User createUser(User User) {
        return UserRepository.save(User);
    }

    public User getUserById(Long id) {
        return UserRepository.findById(id).orElseThrow(() -> new RuntimeException("To Do Not Found!"));
    }

}