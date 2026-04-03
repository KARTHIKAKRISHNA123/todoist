package com.kk.HelloWorld.controller;

import com.kk.HelloWorld.service.ToDoService;
import com.kk.HelloWorld.models.ToDo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/toDo")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    @GetMapping("/get")
    String getToDo() {
        return "ToDo";
    }

    @GetMapping
    ResponseEntity<List<ToDo>> getToDos() {
        return new ResponseEntity<>(toDoService.getToDos(), HttpStatus.OK);
    }

    @GetMapping("/page")
    ResponseEntity<Page<ToDo>> getToDosPaged(@RequestParam int page, @RequestParam int size) {
        return new ResponseEntity<>(toDoService.getAllToDosPages(page, size), HttpStatus.OK);
    }

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

    @PostMapping("/create")
    ResponseEntity<ToDo> createToDo(@Valid @RequestBody ToDo todo) {
        ToDo createdToDo = toDoService.createToDo(todo);
        return new ResponseEntity<>(createdToDo, HttpStatus.CREATED);
    }

    @PutMapping
    ResponseEntity<ToDo> updateToDoById(@RequestBody ToDo toDo) {
        return new ResponseEntity<>(toDoService.updateToDo(toDo), HttpStatus.OK);
    }

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