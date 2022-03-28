package com.ana.studentsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ana.studentsystem.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
