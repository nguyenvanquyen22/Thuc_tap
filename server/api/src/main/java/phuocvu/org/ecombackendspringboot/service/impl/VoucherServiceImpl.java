package phuocvu.org.ecombackendspringboot.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Voucher;
import phuocvu.org.ecombackendspringboot.payload.VoucherDto;
import phuocvu.org.ecombackendspringboot.repository.VoucherRepository;
import phuocvu.org.ecombackendspringboot.service.VoucherService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VoucherServiceImpl implements VoucherService {
    private final VoucherRepository voucherRepository;
    private final ModelMapper mapper;

    public VoucherServiceImpl(VoucherRepository voucherRepository, ModelMapper mapper) {
        this.voucherRepository = voucherRepository;
        this.mapper = mapper;
    }

    @Override
    public VoucherDto addVoucher(VoucherDto voucherDto) {
        Voucher voucher = mapper.map(voucherDto, Voucher.class);
        Voucher saveVoucher = voucherRepository.save(voucher);
        return mapper.map(saveVoucher, VoucherDto.class);
    }

    @Override
    public List<VoucherDto> getAllVouchers() {
        List<Voucher> vouchers = voucherRepository.findAll();
        return vouchers.stream().map(voucher -> mapper.map(voucher, VoucherDto.class)).collect(Collectors.toList());
    }

    @Override
    public VoucherDto getVoucherById(Long voucherId) {
        Voucher voucher = voucherRepository.findById(voucherId)
                .orElseThrow(() -> new ResourceNotFoundException("voucher", "id", voucherId));

        return mapper.map(voucher, VoucherDto.class);
    }

    @Override
    public VoucherDto updateProduct(VoucherDto voucherDto, long voucherId) {
        Voucher existVoucher = voucherRepository.findById(voucherId)
                .orElseThrow(() -> new ResourceNotFoundException("voucher", "id", voucherId));

        mapper.map(voucherDto, existVoucher);
        Voucher updateVoucher = voucherRepository.save(existVoucher);
        return mapper.map(updateVoucher, VoucherDto.class);
    }


    @Override
    public void deleteVoucherById(long id) {
        Voucher voucher = voucherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("voucher", "id", id));
        voucherRepository.delete(voucher);

    }


}
