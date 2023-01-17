package ai.d14.citizenmanagement.service;


import ai.d14.citizenmanagement.dto.request.CreateChildRequest;
import ai.d14.citizenmanagement.dto.request.CreateCitizenRequest;
import ai.d14.citizenmanagement.dto.request.UpdateCitizenRequest;
import ai.d14.citizenmanagement.entities.Citizen;
import ai.d14.citizenmanagement.repository.ICitizenRepository;
import ai.d14.citizenmanagement.utils.ServiceManager;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CitizenService extends ServiceManager<Citizen, Long> {

    private final ICitizenRepository citizenRepository;

    public CitizenService(ICitizenRepository citizenRepository) {
        super(citizenRepository);
        this.citizenRepository = citizenRepository;
    }

    public Citizen createCitizen(CreateCitizenRequest dto) {
        return citizenRepository.save(Citizen.builder()
                .name(dto.getName())
                .isCitizen(dto.getIsCitizen())
                .hasDrivingLicense(dto.isHasDrivingLicense())
                .build());
    }

    public List<Citizen> findAll() {
        return citizenRepository.findAll();
    }

    public List<Citizen> findChildrenByParentId(Long id) {
        return citizenRepository.findChildrenByParentId(id);
    }

    public Citizen findById(Long id) {
        return citizenRepository.findById(id).orElse(null);
    }

    public List<Citizen> getCitizensByName(String name) {
        return citizenRepository.findAllByNameIsContainingIgnoreCase(name);
    }

    public List<Citizen> findAllByIsCitizen(boolean isCitizen) {
        return citizenRepository.findAllByIsCitizen(isCitizen);
    }

    public List<Citizen> getCitizensByHasDrivingLicense(boolean hasDrivingLicense) {
        return citizenRepository.findAllByHasDrivingLicense(hasDrivingLicense);
    }

    public Citizen updateCitizen(Long id, UpdateCitizenRequest dto) {
        Citizen citizen = findById(id);
        if (citizen != null) {
            citizen.setName(dto.getName());
            citizen.setIsCitizen(dto.getIsCitizen());
            citizen.setHasDrivingLicense(dto.isHasDrivingLicense());
            return citizenRepository.save(citizen);
        } else throw new RuntimeException("Citizen not found");

    }

    public void deleteCitizen(Long id) {
        citizenRepository.deleteById(id);
    }

    public Citizen createChild(CreateChildRequest dto) {
        Optional<Citizen> optionalParent = citizenRepository.findById(dto.getParentId());
        if (!optionalParent.isPresent()) {
            throw new IllegalArgumentException("Parent with id " + dto.getParentId() + " not found");
        }
        Citizen parent = optionalParent.get();
        for (Citizen child : parent.getChildren()) {
            if (child.getName().equalsIgnoreCase(dto.getName())) {
                return child;
            }
        }
        Citizen child = Citizen.builder()
                .name(dto.getName())
                .isCitizen(true)
                .parent(parent)
                .build();
        parent.getChildren().add(child);
        return citizenRepository.save(child);
    }

    public void createCitizen(Citizen citizen) {
        citizenRepository.save(citizen);
    }

    public void deleteAll() {
        citizenRepository.deleteAll();
    }
}
