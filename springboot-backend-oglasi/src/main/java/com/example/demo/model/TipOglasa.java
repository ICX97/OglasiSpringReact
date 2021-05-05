package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="tipoglasa")
public @Data class TipOglasa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tip_id;
	
	@Column(name="naziv")
	private String naziv;
}
