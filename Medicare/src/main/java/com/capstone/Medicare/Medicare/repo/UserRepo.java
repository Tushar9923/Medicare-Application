package com.capstone.Medicare.Medicare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.Medicare.Medicare.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

}
