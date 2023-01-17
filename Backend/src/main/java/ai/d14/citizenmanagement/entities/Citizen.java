package ai.d14.citizenmanagement.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Table(name = "citizen")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Citizen {

    @Id
    @Column(name = "citizen_id", unique = true, updatable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "citizen_id_seq")
    @SequenceGenerator(name = "citizen_id_seq", allocationSize = 1, initialValue = 123456)
    private Long id;

    @Column(name = "is_citizen")
    private boolean isCitizen;

    public boolean getIsCitizen() {
        return isCitizen;
    }

    public void setIsCitizen(boolean citizen) {
        isCitizen = citizen;
    }

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Citizen> children;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    @JsonBackReference
    private Citizen parent;

    @Column(name = "has_driving_license")
    private boolean hasDrivingLicense;

}


