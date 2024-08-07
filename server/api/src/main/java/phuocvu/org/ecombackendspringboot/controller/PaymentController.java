package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.PaymentDto;
import phuocvu.org.ecombackendspringboot.service.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.List;


@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    //add payment
    @PostMapping
    public ResponseEntity<PaymentDto> addPayment(@RequestBody PaymentDto paymentDto) {
        PaymentDto savePayment = paymentService.addPayment(paymentDto);
        return new ResponseEntity<>(savePayment, HttpStatus.CREATED);
    }

    // get all payment
    @GetMapping
    public List<PaymentDto> getAllPayment() {
        return paymentService.getAllPayment();
    }

    //get payment by id
    @GetMapping("/{id}")
    public ResponseEntity<PaymentDto> getPaymentById(@PathVariable(name = "id") Long id) {
        PaymentDto paymentDto = paymentService.getPaymentById(id);
        return ResponseEntity.ok(paymentDto);
    }

    // update payment
    @PutMapping("/{id}")
    public ResponseEntity<PaymentDto> updatePayment(@RequestBody PaymentDto paymentDto, @PathVariable(name = "id") Long id) {
        PaymentDto savePayment = paymentService.updatePayment(paymentDto, id);
        return ResponseEntity.ok(savePayment);
    }

    // delete payment
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePayment(@PathVariable(name = "id") Long id) {
        paymentService.deletePayment(id);
        return ResponseEntity.ok("Payment deleted successfully!");
    }
}