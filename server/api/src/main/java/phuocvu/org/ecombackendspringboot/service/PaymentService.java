package phuocvu.org.ecombackendspringboot.service;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.payload.PaymentDto;

import java.util.List;

public interface PaymentService {
    PaymentDto addPayment(PaymentDto paymentDto);
    List<PaymentDto> getAllPayment();
    PaymentDto getPaymentById(Long id);
    PaymentDto updatePayment(PaymentDto paymentDto, Long id);
    void deletePayment(Long id);

}
