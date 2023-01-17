package ai.d14.citizenmanagement.utils;


import ai.d14.citizenmanagement.entities.Citizen;


import ai.d14.citizenmanagement.service.CitizenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DemoData implements CommandLineRunner {

    private final CitizenService citizenService;

    @Autowired
    public DemoData(CitizenService citizenService) {
        this.citizenService = citizenService;
    }

    @Override
    public void run(String... args) throws Exception {
        citizenService.deleteAll();
        Citizen john = Citizen.builder()
                .name("John Smith")
                .isCitizen(true)
                .hasDrivingLicense(true).build();
        john = citizenService.save(john);

        citizenService.save(Citizen.builder()
                .name("Mike Smith")
                .parent(john).build());

        citizenService.save(Citizen.builder()
                .name("Jessica Smith")
                .parent(john).build());

        citizenService.save(Citizen.builder()
                .name("Sarah Smith")
                .parent(john).build());

        citizenService.save(Citizen.builder()
                .name("Michael Tall")
                .isCitizen(false)
                .hasDrivingLicense(false).build());

        Citizen joe = Citizen.builder()
                .name("Joe Bloggs")
                .isCitizen(false)
                .hasDrivingLicense(true).build();
        joe = citizenService.save(joe);

        citizenService.save(Citizen.builder()
                .name("Sarah Bloggs")
                .parent(joe).build());
    }
}


