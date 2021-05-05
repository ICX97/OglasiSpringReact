package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;

@Entity
@Table(name="oglas")
public @Data class Oglas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oglas_id;
	
	@Column(name="ime_oglasa")
	private String ime_oglasa;
	
	@Column(name="opis")
	private String opis;
	
	@Column(name="datum_postavljanja")
	private Date datum_postavljanja;
	
	@Column(name="url")
	private String url;
	
	@Column(name="cena")
	private String cena;
	
	@Column(name="grad")
	private String grad;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="tip_id")
	private TipOglasa tipOglasa;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="korisnik_id")
	private Korisnik korisnik;
}
