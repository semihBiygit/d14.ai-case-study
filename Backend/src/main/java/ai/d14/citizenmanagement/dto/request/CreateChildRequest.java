package ai.d14.citizenmanagement.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateChildRequest {
    private Long parentId;
    private String name;

}
