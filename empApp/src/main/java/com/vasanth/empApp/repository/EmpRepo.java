package com.vasanth.empApp.repository;

import com.vasanth.empApp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpRepo extends JpaRepository<Employee, Integer> {

    List<Employee> findByDepartment(String department);
}
