package phuocvu.org.ecombackendspringboot.service.impl;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.User;
import phuocvu.org.ecombackendspringboot.payload.UserDto;
import phuocvu.org.ecombackendspringboot.repository.UserRepository;
import phuocvu.org.ecombackendspringboot.service.UserService;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService  {
    private UserRepository userRepository;
    private ModelMapper mapper;

    public UserServiceImpl(UserRepository userRepository, ModelMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    @Override
    public UserDto addUser(UserDto userDto) {
        User user = mapper.map(userDto, User.class);
        User savedUser = userRepository.save(user);
        return mapper.map(savedUser, UserDto.class);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> mapper.map(user, UserDto.class)).collect(Collectors.toList());
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("user","id",userId));
        return mapper.map(user,UserDto.class);
    }

    @Override
    public UserDto updateUser(UserDto userDto, long userId) {
        User existUser = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("user","id",userId));
        mapper.map(userDto,existUser);
        User updateUser = userRepository.save(existUser);

        return mapper.map(updateUser,UserDto.class);
    }

    @Override
    public void deleteUserById(long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("user","id",userId));
        userRepository.delete(user);
    }


}
