package com.ana.studentsystem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ana.studentsystem.entities.Student;
import com.ana.studentsystem.services.StudentService;

@RestController
@RequestMapping(value = "/student")
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	@GetMapping
	public List<Student> findAll() {
		return service.findAll();
	}
	
	@PostMapping
	public String insert(@RequestBody Student student) {
		service.insert(student);
		return "New student added";
	}
}
