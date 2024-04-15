package phuocvu.org.ecombackendspringboot.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.user.UserDto;
import phuocvu.org.ecombackendspringboot.service.UserService;


import java.util.List;
@RestController
@RequestMapping("/api/user")
public class Usercontroller {
    private UserService userService;

    public Usercontroller(UserService userService) {
        this.userService = userService;
    }
    // add user
    @PostMapping
    public ResponseEntity<UserDto> addUser (@RequestBody UserDto userDto){
        UserDto saveUser = userService.addUser(userDto);
        return new ResponseEntity<>(saveUser,HttpStatus.CREATED);
    }

    //get all user
    @GetMapping
    public List<UserDto> getAllUser (){
        return userService.getAllUsers();
    }


    // get user by id
    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id){
        UserDto userDto = userService.getUserById(id);
        return ResponseEntity.ok(userDto);
    }


    // update user
    @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto, @PathVariable(name = "id") Long id){
        UserDto saveUser = userService.updateUser(userDto,id);
        return ResponseEntity.ok(saveUser);
    }

    //delete User
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable(name = "id") Long id){
        userService.deleteUserById(id);
        return ResponseEntity.ok("User deleted successfully!");
    }
}

