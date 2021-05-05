create database if not exists oglasi_inviggo;
create schema if not exists db;
create table if not exists db.korisnik (
	korisnik_id int auto_increment primary key,
    ime varchar(250) not null,
    sifra varchar(250) not null,
    datum_registracije date not null,
    br_telefona varchar(250) not null
);
create table if not exists db.tipOglasa (
	tip_id int auto_increment primary key,
    naziv varchar(250) not null
);
create table if not exists db.oglas (
	oglas_id int auto_increment primary key,
    ime_oglasa varchar(250) not null,
    opis varchar(550) not null,
    datum_postavljanja date not null,
	url varchar(550),
    cena varchar(50) not null,
    grad varchar(100) not null,
    tip_id int,
    korisnik_id int,
    foreign key(tip_id) references db.tipOglasa(tip_id),
    foreign key(korisnik_id) references db.korisnik(korisnik_id)
);

insert into db.tipOglasa values (1,"clothing");
insert into db.tipOglasa values (2,"tools");
insert into db.tipOglasa values (3,"sports");
insert into db.tipOglasa values (4,"accessories");
insert into db.tipOglasa values (5,"furniture");
insert into db.tipOglasa values (6,"pets");
insert into db.tipOglasa values (7,"games");
insert into db.tipOglasa values (8,"books");
insert into db.tipOglasa values (9,"technology");

insert into db.korisnik values (1,"Petar","petar123","2020/1/1","0265465");