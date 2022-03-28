package com.ana.studentsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ana.studentsystem.entities.Student;
import com.ana.studentsystem.repositories.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository repository;
	
	public Student insert(Student student) {
		return repository.save(student);
	}
	
	public List<Student> findAll() {
		return repository.findAll();
	}
}
