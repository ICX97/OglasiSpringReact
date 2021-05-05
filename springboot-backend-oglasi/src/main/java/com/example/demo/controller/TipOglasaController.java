package com.example.demo.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.TipOglasa;
import com.example.demo.repository.TipOglasaRepository;

@RestController
@RequestMapping("/api/v1/")
public class TipOglasaController {
	
	@Autowired
	private TipOglasaRepository tipOglasaRepository;
	
	//getAll
	@GetMapping("/tipOglasa")
	public Collection<TipOglasa> getAllTipOglasa(){
		return tipOglasaRepository.findAll();
	}
	
	//getById
	@GetMapping("/tipOglasa/{tip_id}")
	public TipOglasa getAllTipOglasa(@PathVariable ("tip_id") Integer tip_id) {
		return tipOglasaRepository.findById(tip_id).get();
	}
	
	//getByNaziv
	@GetMapping("/poNazivuTipa/{naziv}")
	public Collection<TipOglasa> getAllTipOglasa(@PathVariable ("naziv") String naziv){
		return tipOglasaRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	//delete
	@DeleteMapping("/tipOglasa/{tip_id}")
	public ResponseEntity<TipOglasa> deleteTipOglasa(@PathVariable ("tip_id") Integer tip_id) {
		if(!tipOglasaRepository.existsById(tip_id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		tipOglasaRepository.deleteById(tip_id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	//post
	@PostMapping("/tipOglasa")
	public ResponseEntity<TipOglasa> insertTipOglasa(@RequestBody TipOglasa tipOglasa){
		if(!tipOglasaRepository.existsById(tipOglasa.getTip_id())) {
			tipOglasaRepository.save(tipOglasa);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	//update
	@PutMapping("/tipOglasa")
	public ResponseEntity<TipOglasa> updateTipOglasa(@RequestBody TipOglasa tipOglasa){
		if(!tipOglasaRepository.existsById(tipOglasa.getTip_id()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		tipOglasaRepository.save(tipOglasa);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
