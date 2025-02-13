package com.vasanth.empApp.service;

import com.vasanth.empApp.model.Employee;
import com.vasanth.empApp.repository.EmpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmpRepo empRepo;
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> employees = empRepo.findAll();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    public ResponseEntity<String> addEmployee(Employee employee) {
        empRepo.save(employee);
        return new ResponseEntity<>("Success", HttpStatus.CREATED);
    }

    public ResponseEntity<String> updateEmployee(Employee employee) {
        empRepo.save(employee);
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    public ResponseEntity<String> deleteEmployee(int id) {
        empRepo.deleteById(id);
        return new ResponseEntity<>("Deleted", HttpStatus.OK);
    }

    public ResponseEntity<List<Employee>> getEmployeeByDepartment(String department) {
        List<Employee> employees = empRepo.findByDepartment(department);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
}
