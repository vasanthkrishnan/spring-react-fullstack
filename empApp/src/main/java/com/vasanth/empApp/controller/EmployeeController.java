package com.vasanth.empApp.controller;

import com.vasanth.empApp.model.Employee;
import com.vasanth.empApp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emp")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/get")
    public ResponseEntity<List<Employee>> getAllEmployee() {
        return employeeService.getAllEmployee();
    }

    @GetMapping("/get/{department}")
    public ResponseEntity<List<Employee>> getEmployeeByDepartment(@PathVariable String department) {
        return employeeService.getEmployeeByDepartment(department);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateEmployee(@RequestBody Employee employee) {
        return employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
        return employeeService.deleteEmployee(id);
    }


}
