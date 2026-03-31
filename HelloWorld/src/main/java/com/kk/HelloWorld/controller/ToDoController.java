package com.kk.HelloWorld.controller;

import com.kk.HelloWorld.service.ToDoService;
import com.kk.HelloWorld.models.ToDo;
// ✅ Correct Spring Data Page import!
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid; // Add this import!

import java.util.List;


@Slf4j
@RestController
@RequestMapping("/api/v1/toDo")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    // Simple test endpoint
    @GetMapping("/get")
    String getToDo() {
        return "ToDo";
    }

    // Get All ToDos
    // URL: GET /api/v1/toDo
    @GetMapping
    ResponseEntity<List<ToDo>> getToDos() {
        return new ResponseEntity<>(toDoService.getToDos(), HttpStatus.OK);
    }

    // ✅ Added "/paged" to prevent Ambiguous Mapping!
    // URL: GET /api/v1/toDo/paged?page=0&size=5
    @GetMapping("/page")
    ResponseEntity<Page<ToDo>> getToDosPaged(@RequestParam int page, @RequestParam int size) {
        return new ResponseEntity<>(toDoService.getAllToDosPages(page, size), HttpStatus.OK);
    }

    // Get a specific ToDo by ID (Returns 404 if not found)
    // URL: GET /api/v1/toDo/1
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "ToDo retrieved Successfully!"),
            @ApiResponse(responseCode = "404", description = "ToDo was not found!")
    })

    @GetMapping("/{id}")
    ResponseEntity<ToDo> getToDoById(@PathVariable long id) {
        try {
            ToDo foundToDo = toDoService.getToDoById(id);
            if (foundToDo == null) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(foundToDo, HttpStatus.OK);
        } catch (RuntimeException exception) {
            log.info("Error");
            log.warn("Runtime Exception is created!");
            log.error("Error", exception);
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Create a new ToDo
    // URL: POST /api/v1/toDo/create
    @PostMapping("/create")
    ResponseEntity<ToDo> createToDo(@Valid @RequestBody ToDo todo) {
        ToDo createdToDo = toDoService.createToDo(todo);
        return new ResponseEntity<>(createdToDo, HttpStatus.CREATED);
    }

    // Update an existing ToDo
    // URL: PUT /api/v1/toDo
    @PutMapping
    ResponseEntity<ToDo> updateToDoById(@RequestBody ToDo toDo) {
        return new ResponseEntity<>(toDoService.updateToDo(toDo), HttpStatus.OK);
    }

    // Delete a ToDo by ID
    // URL: DELETE /api/v1/toDo/1
    @DeleteMapping("/{id}")
    ResponseEntity<String> deleteToDoById(@PathVariable long id) {
        try {
            toDoService.deleteToDoById(id);
            return new ResponseEntity<>("ToDo deleted successfully!", HttpStatus.OK);
        } catch (RuntimeException exception) {
            return new ResponseEntity<>("ToDo not found!", HttpStatus.NOT_FOUND);
        }
    }
}