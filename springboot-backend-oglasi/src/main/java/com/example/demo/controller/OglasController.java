package com.example.demo.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Korisnik;
import com.example.demo.model.Oglas;
import com.example.demo.repository.OglasRepository;

@RestController
@RequestMapping("/api/v1/")
public class OglasController {

	@Autowired
	private OglasRepository oglasRepository;
	
	private JdbcTemplate jdbcTemplate;
	
	//get all
	@GetMapping("/oglas")
	public Collection<Oglas> getAllOglas(){
		return oglasRepository.findAll();
	}
	//getById
	@GetMapping("/oglas/{oglas_id}")
	public Oglas getAllOglas(@PathVariable ("oglas_id") Integer oglas_id) {
		return oglasRepository.findById(oglas_id).get();
	}
	//delete
	@DeleteMapping("/oglas/{oglas_id}")
	public ResponseEntity<Oglas> deleteOglas(@PathVariable ("oglas_id") Integer oglas_id){
		if(!oglasRepository.existsById(oglas_id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		//jdbcTemplate.execute("delete from oglas where korisnik_id = "+korisnik_id);
		oglasRepository.deleteById(oglas_id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	//post
	@PostMapping("/oglas")
	public ResponseEntity<Oglas> insertOglas(@RequestBody Oglas oglas){
		if(!oglasRepository.existsById(oglas.getOglas_id())) {
			oglasRepository.save(oglas);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	//update
	@PutMapping("/oglas")
	public ResponseEntity<Oglas> updateOglas(@RequestBody Oglas oglas){
		if(!oglasRepository.existsById(oglas.getOglas_id()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		oglasRepository.save(oglas);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}