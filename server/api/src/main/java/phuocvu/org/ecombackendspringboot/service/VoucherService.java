package phuocvu.org.ecombackendspringboot.service;


import phuocvu.org.ecombackendspringboot.payload.VoucherDto;

import java.util.List;

public interface VoucherService {
    VoucherDto addVoucher(VoucherDto voucherDto);

    List<VoucherDto> getAllVouchers();

    VoucherDto getVoucherById(Long id);

    VoucherDto updateProduct(VoucherDto voucherDto, long id);

    void deleteVoucherById(long id);

}
