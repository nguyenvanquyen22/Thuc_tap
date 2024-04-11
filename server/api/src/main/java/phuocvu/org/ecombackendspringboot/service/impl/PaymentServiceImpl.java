package phuocvu.org.ecombackendspringboot.service.impl;

import phuocvu.org.ecombackendspringboot.model.Payment;
import phuocvu.org.ecombackendspringboot.payload.PaymentDto;
import phuocvu.org.ecombackendspringboot.repository.PaymentRepository;
import phuocvu.org.ecombackendspringboot.service.PaymentService;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentServiceImpl implements PaymentService {

    private PaymentRepository paymentRepository;
    private ModelMapper mapper;

    public PaymentServiceImpl(PaymentRepository paymentRepository, ModelMapper mapper) {
        this.paymentRepository = paymentRepository;
        this.mapper = mapper;
    }

    @Override
    public PaymentDto addPayment(PaymentDto paymentDto) {
        Payment payment = mapper.map(paymentDto,Payment.class);
        Payment savePayment = paymentRepository.save(payment);

        return mapper.map(savePayment,PaymentDto.class);
    }

    @Override
    public List<PaymentDto> getAllPayment() {
        List<Payment> payments = paymentRepository.findAll();
        return payments.stream().map((payment) -> mapper.map(payment, PaymentDto.class)).collect(Collectors.toList());
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(()-> new ResourceNotFoundException("payment","id",paymentId));
        return mapper.map(payment,PaymentDto.class);
    }

    @Override
    public PaymentDto updatePayment(PaymentDto paymentDto, Long paymentId) {
        Payment existPayment = paymentRepository.findById(paymentId)
                .orElseThrow(()-> new ResourceNotFoundException("payment","id",paymentId));
        mapper.map(paymentDto,existPayment);
        Payment updatePayment = paymentRepository.save(existPayment);

        return mapper.map(updatePayment,PaymentDto.class);
    }

    @Override
    public void deletePayment(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(()-> new ResourceNotFoundException("payment","id",paymentId));
        paymentRepository.delete(payment);
    }
}
