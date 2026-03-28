package com.kk.HelloWorld.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class ToDo {
    @Id
    @GeneratedValue
    Long id;
    String title;
    String description;
    Boolean isCompleted;



}
