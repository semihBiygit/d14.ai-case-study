package ai.d14.citizenmanagement.dto.response;

import ai.d14.citizenmanagement.entities.Citizen;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CitizenResponse {
    private Long id;
    private String name;
    private boolean isCitizen;
    private boolean hasDrivingLicense;

    public static CitizenResponse fromModel(Citizen citizen) {

        return CitizenResponse.builder()
                .id(citizen.getId())
                .name(citizen.getName())
                .isCitizen(citizen.getIsCitizen())
                .hasDrivingLicense(citizen.isHasDrivingLicense())
                .build();
    }

}
