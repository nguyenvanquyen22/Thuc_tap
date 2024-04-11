package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.UserDto;

import java.util.List;

public interface UserService {
    UserDto addUser(UserDto userDto);
    List<UserDto> getAllUsers();
    UserDto getUserById(Long id);
    UserDto updateUser(UserDto userDto, long id);
    void deleteUserById(long id);
}
