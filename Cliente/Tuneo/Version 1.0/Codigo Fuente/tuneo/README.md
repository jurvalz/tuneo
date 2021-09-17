# Tuneo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



select *
from ido_carga_horaria_general.course c 
--where c."name" like '%ADMINISTRAC%';
where c.codecourse='GP205';


DELETE from  ido_carga_horaria_general.course c 
where C.codecourse = 'CB101';

select *
from ido_carga_horaria_general.prerequisit p 
where codecourse = 'FB-101';

DELETE
from ido_carga_horaria_general.prerequisit p 
where codecourse = 'FB-101';

insert into ido_carga_horaria_general.course(codecourse,codearea,"name","credit",theorichour,practicehour  ) values('TEMP','CB','',0,0,0);


--

select *
from ido_carga_horaria_general.course c 
where c.codecourse='GP203';

update ido_carga_horaria_general.coursecurriculumspeciality 
set codecourse = 'TEMP'
where codecourse = 'GP203';

update ido_carga_horaria_general.courseuser 
set codecourse = 'TEMP'
where codecourse = 'GP203';

update ido_carga_horaria_general.prerequisit 
set codecourse = 'TEMP'
where codecourse = 'GP203';


update ido_carga_horaria_general.course
set codecourse = 'GP-203'
where codecourse = 'GP203';

update ido_carga_horaria_general.coursecurriculumspeciality 
set codecourse = 'GP-203'
where codecourse = 'TEMP';

update ido_carga_horaria_general.courseuser 
set codecourse = 'GP-203'
where codecourse = 'TEMP';

update ido_carga_horaria_general.prerequisit 
set codecourse = 'GP-203'
where codecourse = 'TEMP';

commit;

select * from ido_carga_horaria_general."user" u 
where U.codeuser ='17943927';


--------------------------------


select C.codecourse, C."name" ,CU."section" , c.systemevaluation, u.surname, u.name, 
a.typesesionclass, a.codeclassroom, a.codeday, to_number(a.codehourbegin,'99')+7,to_number(a.codehourend,'99')+7, u.codeuser 
from ido_carga_horaria_general.availability a 
inner join ido_carga_horaria_general.courseuser cu on a.codecourseuser = cu.codecourseuser 
inner join ido_carga_horaria_general."user" u on u.codeuser = cu.codeuser 
inner join ido_carga_horaria_general.course c on  c.codecourse = cu.codecourse 
where c.codecourse ='GP-203'
order by cu."section", a.typesesionclass desc, a.codeday, a.codehourbegin ,a.codehourend ;



--
Servidor nuevo donde esta desplegado tanto tuneows y tuneo [frontend]

https://www.tuneo.pe

Reunion[29-11-2020]
--ayudar a Ronny a actualizar comonentes 


-->inicio de sesion[corregido]
-->registro corregir [corregido]
-->flechas mas grandes--enlaces a productos
--> buscador [ingresoProducto]--> en lugar de Ingrese producto, debe ser cambiado por Buscar [corregido]
[
    mientras escribes, que se vaya autocompletando de acuerdo al nombre cargado en la seeccion de productos
]

--actualizacion de gif [pendiente_solicitar_gif]
--habilitacion de titulos [Adultos -Niños Replicas y Libreros] [pendiente-correccion diseño base de datos/serrvicios]
-- en el filto de ordenar por..agregar mas criterios
--Tipo madera--al dar click --> que PVC aparezca en PINTADO
--> solo existe una combinacion de color
OVEJAS : agregar descripcion de cara / borde
-->
--> Revision Icono e Encaja
--> Responsive[
    iconos de redes sociales, que escalen de igual forma que los iconos de la izaquierda [armables, etc )]
]
-->Aprietas en favoritos/ carrito--> debe aparecer mensaje de confirmacion
-->Boton de fotos que aparezca eb armables/ igual a tallados
--Silla Jirafa--> lo valida Rony
TUNEO ARQ   
-- buscador-- solo por nombres y autocompletado

--.correccciones en encaja
--> quitar imagenes
--scar gif /  sera cambiado [proporcionados por Juan Carlos ]
--> corregir iconos 

--> iconos



