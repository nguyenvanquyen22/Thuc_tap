package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.user.CustomerDto;

import java.util.List;

public interface CustomerService {
    CustomerDto addCustomer(CustomerDto customerDto);

    CustomerDto updateCustomer(CustomerDto customerDto, Long id);

    void deleteCustomer(Long id);

    List<CustomerDto> getAllCustomer();

    CustomerDto getCustomerById(Long id);
}
