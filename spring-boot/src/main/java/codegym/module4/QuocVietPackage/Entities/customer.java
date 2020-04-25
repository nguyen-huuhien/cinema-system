package codegym.module4.QuocVietPackage.Entities;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "customers")
public class customer implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "customer_id")
    private int id;

    @Column(name = "fullName")
    private String fullName;

    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "data_of_birth")
    private Date birthday;

    @Column(name = "gender")
    private String gender;

    @Column(name = "idCard")
    private String idCard;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @OneToMany(targetEntity = point.class)
    private List<point> points;


    @OneToOne
    @JoinColumn(name = "user_id")
    private user idUser;



//    @OneToMany(targetEntity = ticket.class)
//    private List<ticket> ticket;


    public customer(int id, String userName, String password,user idUser,
                    String fullName, Date birthday, String gender, String idCard, String email, String phone, String address) {
        this.id = id;
this.idUser=idUser;

        this.fullName = fullName;
        this.birthday = birthday;
        this.gender = gender;
        this.idCard = idCard;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public user getIdUser() {
        return idUser;
    }

    public void setIdUser(user idUser) {
        this.idUser = idUser;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public customer() {
    }
}
