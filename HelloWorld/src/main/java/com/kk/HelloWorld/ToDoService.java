package com.kk.HelloWorld;

import com.kk.HelloWorld.models.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//Bean
@Service
public class ToDoService {
    @Autowired
    private ToDoRepository toDoRepository;
//Autowiring


    public ToDo createToDo(ToDo todo) {
//        toDoRepository.save(todo);
//        return todo;
        return toDoRepository.save(todo);

    }

    public ToDo getToDoById(Long id) {
        return toDoRepository.getReferenceById(id);
    }


}
