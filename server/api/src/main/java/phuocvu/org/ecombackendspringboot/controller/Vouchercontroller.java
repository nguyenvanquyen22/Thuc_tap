package phuocvu.org.ecombackendspringboot.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.VoucherDto;
import phuocvu.org.ecombackendspringboot.service.VoucherService;


import java.util.List;
@RestController
@RequestMapping("/api/voucher")
public class Vouchercontroller {
    private VoucherService voucherService;

    public Vouchercontroller(VoucherService voucherService) {
        this.voucherService = voucherService;
    }
    //add voucher
    @PostMapping
    public ResponseEntity<VoucherDto> addVoucher (@RequestBody VoucherDto voucherDto){
        VoucherDto saveVoucher = voucherService.addVoucher(voucherDto);
        return new ResponseEntity<>(saveVoucher,HttpStatus.CREATED);
    }

    //get all voucher
    @GetMapping
    public List<VoucherDto> getAllVouchers (){
        return voucherService.getAllVouchers();
    }

    // get voucher by id
    @GetMapping("/{id}")
    public ResponseEntity<VoucherDto> getVoucherById(@PathVariable(name = "id") Long id){
        VoucherDto voucherDto = voucherService.getVoucherById(id);
        return ResponseEntity.ok(voucherDto);
    }

    // update voucher
    @PutMapping("/{id}")
    public ResponseEntity<VoucherDto> updateVoucher(@RequestBody VoucherDto voucherDto, @PathVariable(name = "id") Long id){
        VoucherDto saveVoucher = voucherService.updateProduct(voucherDto,id);
        return ResponseEntity.ok(saveVoucher);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVoucher(@PathVariable(name = "id") Long id){
        voucherService.deleteVoucherById(id);
        return ResponseEntity.ok("Voucher deleted successfully!");
    }
}
