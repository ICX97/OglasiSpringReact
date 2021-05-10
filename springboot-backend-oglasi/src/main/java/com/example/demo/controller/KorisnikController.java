package com.example.demo.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Korisnik;
import com.example.demo.repository.KorisnikRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class KorisnikController {
	
	@Autowired
	private KorisnikRepository korisnikRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	//getAll
	@GetMapping("/korisnik")
	public Collection<Korisnik> getAllKorisnik(){
		return korisnikRepository.findAll();
	}
	
	//getById
	@GetMapping("/korisnik/{korisnik_id}")
	public Korisnik getAllKorisnik(@PathVariable ("korisnik_id") Integer korisnik_id) {
		return korisnikRepository.findById(korisnik_id).get();
	}
	
	//getByNaziv
	@GetMapping("/korisnikIme/{ime}")
	public Collection<Korisnik> getAllKorisnik(@PathVariable ("ime") String ime) {
		return korisnikRepository.findByImeContainingIgnoreCase(ime);
	}
	//delete
	@DeleteMapping("/korisnik/{korisnik_id}")
	public ResponseEntity<Korisnik> deleteKorisnik(@PathVariable ("korisnik_id") Integer korisnik_id){
		if(!korisnikRepository.existsById(korisnik_id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		jdbcTemplate.execute("delete from oglas where korisnik_id = "+korisnik_id);
		korisnikRepository.deleteById(korisnik_id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	//post
	@PostMapping("/korisnik")
	public ResponseEntity<Korisnik> insertKorisnik(@RequestBody Korisnik korisnik){
		if(!korisnikRepository.existsById(korisnik.getKorisnik_id())) {
			korisnikRepository.save(korisnik);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	//update
	@PutMapping("/korisnik/{korisnik_id}")
	public ResponseEntity<Korisnik> updateKorisnik(@PathVariable int korisnik_id, @RequestBody Korisnik korisnikInfo){
		Korisnik korisnik = korisnikRepository.findById(korisnik_id).orElseThrow(() -> new ResourceNotFoundException("Korisnik not exist with id: " + korisnik_id));
		korisnik.setIme(korisnikInfo.getIme());
		korisnik.setSifra(korisnikInfo.getSifra());
		korisnik.setBr_telefona(korisnik.getBr_telefona());
		Korisnik updatedKorisnik = korisnikRepository.save(korisnik);
		return ResponseEntity.ok(updatedKorisnik);
	 }
}
