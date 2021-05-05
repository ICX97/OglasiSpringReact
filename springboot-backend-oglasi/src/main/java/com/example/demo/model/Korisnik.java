package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="korisnik")
public @Data class Korisnik {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int korisnik_id;
	
	@Column(name="ime")
	private String ime;
	
	@Column(name="sifra")
	private String sifra;
	
	@Column(name="datum_registracije")
	private Date datum_registracije;
	
	@Column(name="br_telefona")
	private String br_telefona;

}
