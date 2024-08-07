package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.user.CustomerDto;
import phuocvu.org.ecombackendspringboot.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    //add customer
    @PostMapping
    public ResponseEntity<CustomerDto> addCustomer(@RequestBody CustomerDto customerDto) {
        CustomerDto saveCustomer = customerService.addCustomer(customerDto);
        return new ResponseEntity<>(saveCustomer, HttpStatus.CREATED);
    }

    // update customer
    @PutMapping("/{id}")
    public ResponseEntity<CustomerDto> updateCustomer(@RequestBody CustomerDto customerDto, @PathVariable(name = "id") Long id) {
        CustomerDto updatedCustomer = customerService.updateCustomer(customerDto, id);
        return ResponseEntity.ok(updatedCustomer);
    }

    // delete customer
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable(name = "id") Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.ok("customer deleted successfully!");
    }

    // get all customer
    @GetMapping
    public List<CustomerDto> getAllCustomer() {
        return customerService.getAllCustomer();
    }

    // get customer by id
    @GetMapping("/{id}")
    public ResponseEntity<CustomerDto> getCustomerById(@PathVariable(name = "id") Long id) {
        CustomerDto customerDto = customerService.getCustomerById(id);
        return ResponseEntity.ok(customerDto);
    }
}
