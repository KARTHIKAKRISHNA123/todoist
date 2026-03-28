package com.kk.HelloWorld;

import com.kk.HelloWorld.models.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {

}
