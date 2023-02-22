package com.capstone.Medicare.Medicare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.Medicare.Medicare.model.User;
import com.capstone.Medicare.Medicare.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@PostMapping("/addUser")
	public User adduser(@RequestBody User user) {
		return userservice.addUser(user);
	}
	
	

}
