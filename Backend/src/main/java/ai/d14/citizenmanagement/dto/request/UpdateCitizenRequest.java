package ai.d14.citizenmanagement.dto.request;

public class UpdateCitizenRequest {
    private String name;
    private boolean isCitizen;
    private boolean hasDrivingLicense;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean getIsCitizen() {
        return isCitizen;
    }

    public void setIsCitizen(boolean isCitizen) {
        this.isCitizen = isCitizen;
    }

    public boolean isHasDrivingLicense() {
        return hasDrivingLicense;
    }

    public void setHasDrivingLicense(boolean hasDrivingLicense) {
        this.hasDrivingLicense = hasDrivingLicense;
    }
}
