package com.example.demo.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Korisnik;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik,Integer>{
	Collection<Korisnik>findByImeContainingIgnoreCase(String ime);
}
