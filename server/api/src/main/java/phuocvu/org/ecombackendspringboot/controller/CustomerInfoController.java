package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.CustomerInfoDto;
import phuocvu.org.ecombackendspringboot.service.CustomerInfoService;

import java.util.List;

@RestController
@RequestMapping("/api/customerInfo")
public class CustomerInfoController {
    private CustomerInfoService customerInfoService;

    public CustomerInfoController(CustomerInfoService customerInfoService) {
        this.customerInfoService = customerInfoService;
    }

    //add customerInfo
    @PostMapping
    public ResponseEntity<CustomerInfoDto> addCustomerInfo(@RequestBody CustomerInfoDto customerInfoDto){
        CustomerInfoDto saveCustomerInfo = customerInfoService.addCustomerInfo(customerInfoDto);
        return new ResponseEntity<>(saveCustomerInfo, HttpStatus.CREATED);
    }

    // update customerInfo
    @PutMapping("/{id}")
    public ResponseEntity<CustomerInfoDto> updateCustomerInfo(@RequestBody CustomerInfoDto customerInfoDto, @PathVariable(name = "id") Long id){
        CustomerInfoDto saveCustomerInfo = customerInfoService.updateCustomerInfo(customerInfoDto,id);
        return ResponseEntity.ok(saveCustomerInfo);
    }

    // delete customerInfo
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomerInfo(@PathVariable(name = "id") Long id){
        customerInfoService.deleteCustomerInfo(id);
        return ResponseEntity.ok("customerInfo deleted successfully!");
    }

    // get all customerInfo
    @GetMapping
    public List<CustomerInfoDto> getAllCustomerInfo(){
        return customerInfoService.getAllCustomerInfo();
    }

    // get customerInfo by id
    @GetMapping("/{id}")
    public ResponseEntity<CustomerInfoDto> getCustomerInfoById(@PathVariable(name = "id") Long id){
        CustomerInfoDto customerInfoDto = customerInfoService.getCustomerInfoById(id);
        return ResponseEntity.ok(customerInfoDto);
    }
}
