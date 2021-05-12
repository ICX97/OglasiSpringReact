create database if not exists oglasi_inviggo;
create schema if not exists db;
/*CREATE TABLE if not exists db.auth_role (
  auth_role_id int auto_increment primary key,
  role_name varchar(255) DEFAULT NULL,
  role_desc varchar(255) DEFAULT NULL
);
INSERT INTO db.auth_role VALUES (1,'SUPER_USER','This user has ultimate rights for everything');
INSERT INTO db.auth_role VALUES (2,'ADMIN_USER','This user has admin rights for administrative work');
INSERT INTO db.auth_role VALUES (3,'SITE_USER','This user has access to site, after login - normal user');
*/
/*CREATE TABLE if not exists db.korisnik (
  korisnik_id int auto_increment primary key,
  ime varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  sifra varchar(255) NOT NULL,
  datum_registracije date not null,
  br_telefona varchar(250) not null,
  status varchar(255)
);*/

/*CREATE TABLE if not exists db.auth_korisnik_role (
  korisnik_id int ,
  auth_role_id int NOT NULL,
  PRIMARY KEY (korisnik_id,auth_role_id),
  KEY FK_korisnik_role (auth_role_id),
  CONSTRAINT FK_auth_korisnik FOREIGN KEY (korisnik_id) REFERENCES db.korisnik (korisnik_id),
  CONSTRAINT FK_auth_korisnik_role FOREIGN KEY (auth_role_id) REFERENCES db.auth_role (auth_role_id)
) ;*/

 CREATE TABLE if not exists db.korisnik (
  korisnik_id int auto_increment primary key,
  ime varchar(255) NOT NULL,
  sifra varchar(255) NOT NULL,
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

select * from db.korisnik;
insert into db.korisnik values (1,"Petar","petar123","2020/1/1","062224558");
insert into db.korisnik values (2,"Marko","marko123","2020/1/1","062224578");
insert into db.korisnik values (3,"Luka","luka123","2020/1/1","062224577");
insert into db.korisnik values (4,"Bosko","bosko123","2020/1/1","062224578");
insert into db.korisnik values (5,"Vlada","vlada123","2020/1/1","062224978");
insert into db.korisnik values (6,"Ana","ana123","2020/1/1","062224570");
insert into db.korisnik values (7,"Marija","marija123","2020/1/1","062274578");
insert into db.korisnik values (8,"Aleksandra","aleksanra123","2020/1/1","062524578");
insert into db.korisnik values (9,"Milica","milica123","2020/1/1","062224538");
insert into db.korisnik values (10,"Anja","anja123","2020/1/1","062224518");




insert into db.oglas values (1,"Oglas1","Opis1","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (2,"Ogla2","Opis2","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (3,"Oglas3","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (4,"Oglas4","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (5,"Oglas5","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (6,"Oglas6","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (7,"Oglas7","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (8,"Oglas8","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (9,"Oglas9","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (10,"Oglas10","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (11,"Oglas11","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (12,"Oglas12","Opis3","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (13,"Oglas13","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (14,"Oglas14","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (15,"Oglas15","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (16,"Oglas16","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (17,"Oglas17","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (18,"Oglas18","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (19,"Oglas19","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (20,"Oglas20","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (21,"Oglas21","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (22,"Oglas22","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (23,"Oglas23","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (24,"Oglas24","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (25,"Oglas25","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (26,"Oglas26","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (27,"Oglas27","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (28,"Oglas28","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (29,"Oglas29","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (30,"Oglas30","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (31,"Oglas31","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (32,"Oglas32","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (33,"Oglas33","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (34,"Oglas34","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (35,"Oglas35","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (36,"Oglas36","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (37,"Oglas37","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (38,"Oglas38","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (39,"Oglas39","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (40,"Oglas40","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (41,"Oglas41","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (42,"Oglas42","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (43,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (43,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (44,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (45,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (46,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (47,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (48,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (49,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (50,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (51,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (52,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (53,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (54,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (55,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (56,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (57,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (58,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (59,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (60,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (61,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (62,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (63,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (64,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (65,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (66,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (67,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (68,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (69,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (70,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (71,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (72,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (73,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (74,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (75,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (76,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (77,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (78,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (79,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (80,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (81,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (82,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (83,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (84,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (85,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (86,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (87,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (88,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (89,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (90,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (91,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (92,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (93,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (94,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (95,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (96,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (97,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (98,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (99,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);
insert into db.oglas values (100,"Oglas43","Opis","2020/1/1","urlneki","300","Novi Sad",1,1);


select * from db.oglas;

