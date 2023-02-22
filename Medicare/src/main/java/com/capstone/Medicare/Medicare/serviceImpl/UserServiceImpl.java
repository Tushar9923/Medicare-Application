package com.capstone.Medicare.Medicare.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.Medicare.Medicare.model.User;
import com.capstone.Medicare.Medicare.repo.UserRepo;
import com.capstone.Medicare.Medicare.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}
	
}
