package net.codeforgood.restfulapi.model;

import javax.persistence.*;

@Entity
public class Member {
    private int locationId;


    public Member() {

    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }


}
