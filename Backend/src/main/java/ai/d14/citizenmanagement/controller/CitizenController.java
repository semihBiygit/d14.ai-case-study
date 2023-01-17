package ai.d14.citizenmanagement.controller;


import ai.d14.citizenmanagement.dto.request.CreateChildRequest;
import ai.d14.citizenmanagement.dto.request.CreateCitizenRequest;
import ai.d14.citizenmanagement.dto.request.UpdateCitizenRequest;
import ai.d14.citizenmanagement.dto.response.CitizenResponse;
import ai.d14.citizenmanagement.entities.Citizen;
import ai.d14.citizenmanagement.service.CitizenService;
import ai.d14.citizenmanagement.utils.DemoData;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/citizen")
@RequiredArgsConstructor
public class CitizenController {
    private final CitizenService citizenService;

    @PostMapping("/create-citizen")
    public ResponseEntity<String> createCitizen(@RequestBody CreateCitizenRequest dto) {
        citizenService.createCitizen(dto);
        return ResponseEntity.ok("success");
    }

    @PostMapping("create-child")
    public ResponseEntity<String> createChild(@RequestBody CreateChildRequest dto) {
        citizenService.createChild(dto);
        return ResponseEntity.ok("Children Created.");
    }

    @GetMapping("/get-citizens")
    public ResponseEntity<List<Citizen>> getCitizens() {

        return ResponseEntity.ok(citizenService.findAll());
    }

    @GetMapping("/get-children-by-parent-id/{id}")
    public ResponseEntity<List<Citizen>> getChildrenByParentId(@PathVariable Long id) {
        return ResponseEntity.ok(citizenService.findChildrenByParentId(id));
    }

    @GetMapping("/get-citizen/{id}")
    public ResponseEntity<Citizen> getCitizenById(@PathVariable Long id) {
        return ResponseEntity.ok(citizenService.findById(id));
    }

    @GetMapping("/get-citizens-by-name/{name}")
    public ResponseEntity<List<Citizen>> getCitizensByName(@PathVariable String name) {
        return ResponseEntity.ok(citizenService.getCitizensByName(name));
    }

    @GetMapping("/get-citizens-by-is-citizen/{isCitizen}")
    public ResponseEntity<List<Citizen>> getCitizensByIsCitizen(@PathVariable boolean isCitizen) {
        return ResponseEntity.ok(citizenService.findAllByIsCitizen(isCitizen));
    }

    @GetMapping("/get-citizens-by-has-driving-license/{hasDrivingLicense}")
    public List<CitizenResponse> getCitizensByHasDrivingLicense(@PathVariable boolean hasDrivingLicense) {
        List<Citizen> citizens = citizenService.getCitizensByHasDrivingLicense(hasDrivingLicense);
        return citizens.stream().map(CitizenResponse::fromModel).toList();
    }

    @PutMapping("/update-citizen/{id}")
    public ResponseEntity<String> updateCitizen(@PathVariable Long id, @RequestBody UpdateCitizenRequest dto) {
        citizenService.updateCitizen(id, dto);
        return ResponseEntity.ok("Citizen Updated.");
    }
    @DeleteMapping("/delete-citizen/{id}")
    public ResponseEntity<String> deleteCitizen(@PathVariable Long id) {
        citizenService.deleteCitizen(id);
        return ResponseEntity.ok("Citizen Deleted.");
    }

}
