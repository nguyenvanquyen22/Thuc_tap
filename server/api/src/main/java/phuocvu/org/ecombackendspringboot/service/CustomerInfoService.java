package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.CustomerInfoDto;

import java.util.List;

public interface CustomerInfoService {
    CustomerInfoDto addCustomerInfo(CustomerInfoDto customerInfoDto);
    CustomerInfoDto updateCustomerInfo (CustomerInfoDto customerInfoDto, Long id);
    void  deleteCustomerInfo(Long id);
    List<CustomerInfoDto> getAllCustomerInfo();
    CustomerInfoDto getCustomerInfoById(Long id);
}
