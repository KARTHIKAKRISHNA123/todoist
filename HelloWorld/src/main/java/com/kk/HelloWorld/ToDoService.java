package com.kk.HelloWorld;

import com.kk.HelloWorld.models.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
