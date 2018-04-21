package net.codeforgood.restfulapi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Member {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int memberId;
    private String memberFname;
    private String memberLname;
    private String memberEmail;
    private Date memberJoinDate;

    public Member() {

    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public String getMemberFname() {
        return memberFname;
    }

    public void setMemberFname(String memberFname) {
        this.memberFname = memberFname;
    }

    public String getMemberLname() {
        return memberLname;
    }

    public void setMemberLname(String memberLname) {
        this.memberLname = memberLname;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public Date getMemberJoinDate() {
        return memberJoinDate;
    }

    public void setMemberJoinDate(Date memberJoinDate) {
        this.memberJoinDate = memberJoinDate;
    }
}
