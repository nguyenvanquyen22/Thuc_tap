package phuocvu.org.ecombackendspringboot.service.impl.user;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Customer;
import phuocvu.org.ecombackendspringboot.payload.user.CustomerDto;
import phuocvu.org.ecombackendspringboot.repository.user.CustomerRepository;
import phuocvu.org.ecombackendspringboot.service.CustomerService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper mapper;

    public CustomerServiceImpl(CustomerRepository customerRepository, ModelMapper mapper) {
        this.customerRepository = customerRepository;
        this.mapper = mapper;
    }

    @Override
    public CustomerDto addCustomer(CustomerDto customerDto) {
        Customer customer = mapper.map(customerDto, Customer.class);
        Customer saveCustomer = customerRepository.save(customer);

        return mapper.map(saveCustomer, CustomerDto.class);
    }

    @Override
    public CustomerDto updateCustomer(CustomerDto customerDto, Long customerId) {
        Customer existCustomer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("customer", "id", customerId));
        mapper.map(existCustomer, customerDto);
        Customer saveCustomer = customerRepository.save(existCustomer);
        return mapper.map(saveCustomer, CustomerDto.class);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("customer", "id", customerId));
        customerRepository.delete(customer);
    }

    @Override
    public List<CustomerDto> getAllCustomer() {
        List<Customer> List = customerRepository.findAll();
        return List.stream().map((customer) -> mapper.map(customer, CustomerDto.class)).collect(Collectors.toList());
    }

    @Override
    public CustomerDto getCustomerById(Long customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("customer", "id", customerId));
        return mapper.map(customer, CustomerDto.class);
    }
}
