package ai.d14.citizenmanagement.repository;


import ai.d14.citizenmanagement.dto.request.UpdateCitizenRequest;
import ai.d14.citizenmanagement.entities.Citizen;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ICitizenRepository extends JpaRepository<Citizen, Long> {
    Optional<Citizen> findById(Long id);

    Citizen save(UpdateCitizenRequest dto);

    List<Citizen> findAll();

    List<Citizen> findAllByIsCitizen(boolean isCitizen);

    List<Citizen> findAllByNameIsContainingIgnoreCase(String name);

    List<Citizen> findAllByHasDrivingLicense(boolean hasDrivingLicense);

    void deleteById(Long id);

    List<Citizen> findChildrenByParentId(Long id);

}

