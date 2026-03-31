package com.kk.HelloWorld.models;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull; // <-- Make sure to import this!
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDo {

    @Id
    @GeneratedValue
    Long id;

    // @NotBlank already protects against nulls, empty strings, and spaces!
    @Schema(name = "title", example = "Complete SpringBoot")
    @NotBlank(message = "Title is required")
    String title;


    // @NotNull is perfect here because @NotBlank only works on Strings!
    @NotNull(message = "Completion status must be provided (true or false)")
    Boolean isCompleted;







}