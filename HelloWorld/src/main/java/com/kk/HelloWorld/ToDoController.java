package com.kk.HelloWorld;


import com.kk.HelloWorld.models.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/toDo")
public class ToDoController {
    @Autowired
    private ToDoService toDoService;
    @GetMapping("/get")
    String getToDo() {

        return "ToDo";
    }


    //Path Variable
    @GetMapping("/{id}")
    ResponseEntity<ToDo> getToDoById(@PathVariable long id) {
        try {
            ToDo foundToDo = toDoService.getToDoById(id);
            return new ResponseEntity<>(foundToDo, HttpStatus.OK);

        }
        catch (RuntimeException exception) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }    }

    @GetMapping("")
    String getToDoByIdParam(@RequestParam("toDoId") long id) {
        return "ToDo with ID " + id;
    }

    @PostMapping("/create")
    ResponseEntity<ToDo> createUser(@RequestBody ToDo todo) {

            ToDo createdToDo = toDoService.createToDo(todo);
            return new ResponseEntity<>(createdToDo, HttpStatus.CREATED);



    }

//    @GetMapping("/{id}")
//    ResponseEntity<ToDo>  getToDoById(@PathVariable Long id) {
//        return new ResponseEntity<>(toDoService.getToDoById(id), HttpStatus.OK);
//    }

    @PutMapping("/{id}")
    String updateToDoById(@PathVariable long id) {
        return "Update ToDo with Id " + id;
    }

    @DeleteMapping("/{id}")
    String deleteToDoById(@PathVariable long id) {
        return "Delete ToDo with Id " + id;
    }



}
