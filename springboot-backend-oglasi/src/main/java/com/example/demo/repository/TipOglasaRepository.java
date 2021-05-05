package com.example.demo.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.model.TipOglasa;


@Repository
public interface TipOglasaRepository extends JpaRepository<TipOglasa, Integer>{
	Collection<TipOglasa>findByNazivContainingIgnoreCase(String naziv);
}
