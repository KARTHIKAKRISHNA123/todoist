package com.kk.HelloWorld.service;

import com.kk.HelloWorld.models.ToDo;
// ✅ The correct Spring Data Page import!
import com.kk.HelloWorld.repository.ToDoRepository;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {

    @Autowired
    private ToDoRepository toDoRepository;

    public ToDo createToDo(ToDo todo) {
        return toDoRepository.save(todo);
    }

    public ToDo getToDoById(Long id) {
        return toDoRepository.findById(id).orElseThrow(() -> new RuntimeException("To Do Not Found!"));
    }

    public Page<ToDo> getAllToDosPages(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return toDoRepository.findAll(pageable);
    }

    public List<ToDo> getToDos() {
        return toDoRepository.findAll();
    }

    public ToDo updateToDo(ToDo todo) {
        return toDoRepository.save(todo);
    }

    public void deleteToDoById(Long id) {
        toDoRepository.delete(getToDoById(id));
    }

    public void deleteToDo(ToDo toDo) {
        toDoRepository.delete(toDo);
    }
}