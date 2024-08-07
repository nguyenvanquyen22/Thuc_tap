package phuocvu.org.ecombackendspringboot.service.impl.user;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.user.CustomerInfo;
import phuocvu.org.ecombackendspringboot.payload.user.CustomerInfoDto;
import phuocvu.org.ecombackendspringboot.repository.user.CustomerInfoRepository;
import phuocvu.org.ecombackendspringboot.service.CustomerInfoService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerInfoImpl implements CustomerInfoService {

    private CustomerInfoRepository customerInfoRepository;
    private ModelMapper mapper;

    public CustomerInfoImpl(CustomerInfoRepository customerInfoRepository, ModelMapper mapper) {
        this.customerInfoRepository = customerInfoRepository;
        this.mapper = mapper;
    }

    @Override
    public CustomerInfoDto addCustomerInfo(CustomerInfoDto customerInfoDto) {
        CustomerInfo customerInfo = mapper.map(customerInfoDto, CustomerInfo.class);
        CustomerInfo saveCustomerInfo = customerInfoRepository.save(customerInfo);

        return mapper.map(saveCustomerInfo, CustomerInfoDto.class);
    }

    @Override
    public CustomerInfoDto updateCustomerInfo(CustomerInfoDto customerInfoDto, Long customerInfoId) {
        CustomerInfo existCustomerInfo = customerInfoRepository.findById(customerInfoId)
                .orElseThrow(()-> new ResourceNotFoundException("customerInfo","id",customerInfoId));
        mapper.map(existCustomerInfo,customerInfoDto);
        CustomerInfo saveCustomerInfo = customerInfoRepository.save(existCustomerInfo);
        return mapper.map(saveCustomerInfo,CustomerInfoDto.class);
    }

    @Override
    public void deleteCustomerInfo(Long customerInfoId) {
        CustomerInfo customerInfo = customerInfoRepository.findById(customerInfoId)
                .orElseThrow(()-> new ResourceNotFoundException("customerInfo","id",customerInfoId));
        customerInfoRepository.delete(customerInfo);
    }

    @Override
    public List<CustomerInfoDto> getAllCustomerInfo() {
        List<CustomerInfo> customerInfos = customerInfoRepository.findAll();
        return customerInfos.stream().map((customerInfo) -> mapper.map(customerInfo, CustomerInfoDto.class)).collect(Collectors.toList());
    }

    @Override
    public CustomerInfoDto getCustomerInfoById(Long customerInfoId) {
        CustomerInfo customerInfo = customerInfoRepository.findById(customerInfoId)
                .orElseThrow(()-> new ResourceNotFoundException("customerInfo","id",customerInfoId));
        return mapper.map(customerInfo,CustomerInfoDto.class);
    }
}
