# **Plan de Gestión de la Configuración**

**Integrantes Grupo :**

Contenido

[1.](#_heading=h.30j0zll)Introducción 3

[1.1.](#_heading=h.o18go9k07l6w)Situación de la empresa 3

[1.2.](#_heading=h.hxu3601f976a)Problemática 3

[1.3.](#_heading=h.sc1j7qcz5ik1)El objetivo del plan 3

[2.](#_heading=h.j2so7luvl3sq)Gestión de Configuración de Software 4

[2.1.](#_heading=h.rv3jpuf79gd6)Organización (Organigrama) 4

[2.2.](#_heading=h.4plrzur9e2kq)Roles y responsabilidades 4

[2.3.](#_heading=h.58ar2tnqxaar)Políticas, Directrices y Procedimientos (Listar) 5

[2.4.](#_heading=h.pvqn0mpajslj)Herramientas, entorno e Infraestructura 5

[2.5.](#_heading=h.4mc9ebnyyto3)Calendario 6

[3.](#_heading=h.vqj2lq65s61c)Actividades de la GCS 6

[3.1.](#_heading=h.3eov427wtj6y)Identificación 6

[3.1.1.](#_heading=h.onkw5ig6gxhj)Lista de clasificación de CI 6

[3.1.2.](#_heading=h.u40b6jzfa17b)Definición de la Nomenclatura de ítem 7

[3.1.3.](#_heading=h.xv2jok25wtu4)Lista de ítem con la nomenclatura 8

[3.2.](#_heading=h.lwpy5a8v00ds)Control 8

[3.2.1.](#_heading=h.5gfgah8rqxg)Definición de la estructura de las librerías 8

[3.2.2.](#_heading=h.je429ipzf5s)Definición de Líneas Base 9

[3.2.3.](#_heading=h.irpkjqn7081c)Proceso de Control de Cambios 10

[3.3.](#_heading=h.tkv0am288u1n)Estado de la GCS 20

[3.3.1.](#_heading=h.2wy3dau8ollx)Definición de Reportes para el Estado 20

[3.3.2.](#_heading=h.kjjxvwu5zv6d)Estadísticas de Github 25

[3.4.](#_heading=h.yxdwawnjr45u)Auditoría de la GCS 28

[3.4.1.](#_heading=h.ug0loimq4be2)Reportes de Auditoría Física y Funcional 28

[3.5.](#_heading=h.v3kf64xmvgm1)Entrega y Gestión de Release 31

[3.5.1.](#_heading=h.571nc38z585k)Entrega 31

[3.5.2.](#_heading=h.qtxmwitde02z)Diseño del repositorio 32

1.
## Introducción

  1.
## Situación de la empresa

La empresa Inleggo SAC es una empresa de desarrollo de software, tiene como clientes empresas logísticas, consultoras del sector salud, entre otros.

En los últimos meses tuvo diferentes clientes para implementación de E-Commerce 



La empresa TUNEO SAC es una empresa especializada en productos en material de madera para el consumo personal de muebles recreativos y productos hechos a medida dedicados a publicidad.

Las ventas regulares se vieron desfavorecidas por la pandemia razón por la cual se estuvo acumulando la producción mensual sin ventas regulares.

La empresa decide implementar un canal adicional de ventas al tradicional que lo realizaban en su local principal de Puente Piedra.

El gerente de la empresa solicita los servicios de creación de una plataforma de ventas en Línea que le permita vender los productos y para mantener su rentabilidad anual.

| **Productos** | **Armables** | **Modulares** | **Tallados** | **Premium** |
| --- | --- | --- | --- | --- |
| Producción mensual | 60 | 10 | 50 | 20 |
| --- | --- | --- | --- | --- |
| Ventas esperadas en línea | 30 | 8 | 20 | 10 |

Figura 1: Tipos de productos.

  1.
## Problemática

La empresa Tuneo SAC requiere un sistema de venta en línea de sus productos y servicios.

Tuneo ofrece cuatro tipos de productos:

- Armables: Productos que se puede desglosar forman figuras de animales y árboles.

![](RackMultipart20210924-4-n9od4d_html_7aa67c7992ccf6c5.png)

- Modulares que son bloques en tercera dimensión que pueden apilarse.

- Tallados que son productos hechos a media con representaciones a alto relieve en base de madera.

![](RackMultipart20210924-4-n9od4d_html_3ecf8474c6c672b2.jpg)

- Premium que son productos a media para clientes empresariales que pueden repartirse en eventos.

La empresa sufre una caída de las ventas producto del efecto de la pandemia y decide agregar un canal de venta adicional que es una plataforma en línea dado que están realizando ventas vía Redes Sociales pero el pago se realiza por depósito a cuenta de la empresa y el proceso de venta es manual.

Los pagos deben realizarse de dos formas: depósito a cuenta y pago con tarjeta.

Las ventas esperadas por la empresa son $3000 dólares mensuales para generar rentabilidad.

Existe una gran importancia en mostrar los productos en 3D y un configurador de material y texturas para lo cual se requiere el uso de renderizado en la plataforma web de Ventas en línea.

La empresa no cuenta con la tecnología propia para desplegar una solución de ventas por lo cual la gerencia estableció adquirir los servicios de una empresa de tecnología y se cree la solución en la nube pública.

El sistema de venta permitirá controlar el pago realizados de los clientes y la generación de la programación de envío de productos semanal.

  1.
## El objetivo del plan

El objetivo de la gestión de la configuración es mantener la integridad de la aplicación de venta Tuneo que se obtienen a lo largo del desarrollo de los sistemas de información, garantizando que no se realizan cambios incontrolados y que todos los participantes en el desarrollo del sistema disponen de la versión adecuada de los elementos que manejan.

Así, entre los elementos de configuración software, se encuentran no únicamente ejecutables y código fuente, sino también los modelos de datos, modelos de procesos, especificaciones de requisitos, pruebas.

1.
## Gestión de Configuración de Software

  1.
## Organización (Organigrama)

En este organigrama se presenta la jerarquización de nuestra empresa:

_ **Gráfico 1.** _ _Organigrama de la empresa._

  1.
## Roles y responsabilidades

A continuación, se presentan los roles de cada integrante del equipo:

_ **Tabla 1.** _ _Roles de los integrantes del equipo._

  1.
## Políticas, Directrices y Procedimientos (Listar)

  1.
## Herramientas, entorno e Infraestructura

Herramientas que se usarán para la gestión de configuración y el desarrollo del proyecto DEALER:

| **Herramienta** | **Descripción** |
| --- | --- |
| **Clickup** | Esta herramienta se usará para el manejo del proyecto y la gestión de cambios ya que es muy completa en términos de usabilidad. Permite escribir la documentación, comentar y también llevar una trazabilidad sobre las HU dentro de cada sprint. |
| **Flutter** | Framework de google que es usado para escribir el aplicativo móvil. |
| **PHP** | Lenguaje de programación usado para escribir el backend del aplicativo móvil. |

_ **Tabla 2.** _ _Listado de herramientas utilizadas en el desarrollo del proyecto._

  1.
## Calendario

Presentamos el calendario desarrollado por nuestro equipo de trabajo en el proyecto DEALER:

_ **Gráfico 2.** _ _Calendario del desarrollo del proyecto DEALER._

1.
## Actividades de la GCS

  1.
## Identificación

    1.
### Lista de clasificación de CI

En esta tabla definimos los ítems del proyecto DEALER:

| **Tipo**
(E=EvoluciónF=FuenteS=Soporte) | **Nombre del Item** | **Origen**
(E=EmpresaP=ProyectoC=ClienteP=Proveedor) | **Extensión** | **Proyecto** |
| --- | --- | --- | --- | --- |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |

_ **Tabla 3.** _ _Lista de clasificación de CI._

    1.
### Definición de la Nomenclatura de ítem

A continuación, se define la estructura de la nomenclatura para los nombres de los elementos de la configuración:

**Caso 1** : Items que no son específicos de un proyecto.

| **Nomenclatura** |
| --- |
| Nomenclatura: Acrónimo del ítem |

_ **Tabla 4.** _ _Nomenclatura Caso 1_

**Caso 2** : Ítems que pertenecen a un proyecto en específico.

| **Nomenclatura** |
| --- |
| Nomenclatura: Acrónimo del proyecto + &quot;-&quot; + Acrónimo del ítem |

_ **Tabla 5.** _ _Nomenclatura Caso 2_

**Caso 3:** ítems que presentan la misma nomenclatura

| **Nomenclatura** |
| --- |
| Nomenclatura: Nomenclatura del ítem + &quot;\_&quot; + Acrónimo del ítem considerando las dos primeras letras.
Ejemplo: Ítem de diagrama de clases y de componentes en el proyecto XYZ.XYZ-DC\_DICLXYZ-DC\_DICO |

_ **Tabla 6.** _ _Nomenclatura Caso 3_

    1.
### Lista de ítem con la nomenclatura

Inventario de los elementos presentes en el proyecto DEALER:

| **Tipo** | **Ítem** | **Proyecto** |
| --- | --- | --- |
|
 |
 |
 |
|
 |
 |
 |
|
 |
 |
 |
|
 |
 |
 |

_ **Tabla 7.** _ _Lista de ítems con la nomenclatura._

  1.
## Control

    1.
### Definición de la estructura de las librerías

_ **Gráfico 3.** _ _Diagrama del repositorio de la empresa DEALER - G1 en github._

    1.
### Definición de Líneas Base

| **Línea Base** | **Evento/Hito** | **Ítems de configuración** |
| --- | --- | --- |
|
 |
 |
-
 |
|
 |
 |
-
 |
|
 |
 |
-
 |
|
 |
 |
-
 |
|
 |
 |
-
 |

_ **Tabla 8.** _ _Línea Base del proyecto DEALER._

    1.
### Proceso de Control de Cambios

En este gráfico podemos ver las fases del Proceso de Gestión de Cambios:

![](RackMultipart20210924-4-n9od4d_html_412ad995012d388c.png)

_ **Gráfico 4.** _ _Fases del proceso de Gestión de Cambios_

      1.
#### Formato de solicitud de cambios

      1.
#### Lista de estados de la solicitud de cambios

| **ID** | **Estado** | **Descripción** | **Fase** | **Alumno** |
| --- | --- | --- | --- | --- |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
|
 |
 |
 |
 |
 |
| 20 | Cerrada | Se genera el reporte de cierre formalizado correctamente y la solicitud de cambio culmina su ciclo de vida | 8 |
 |

_ **Tabla 10.** _ _Lista de estados de la solicitud de Cambios_

      1.
#### Lista de Clasificación de Solicitud de Cambio

En este apartado se define los nombres y su descripción para las clasificaciones que van a interactuar en la Solicitud de Cambio:

| **ID** | **Nombre** | **Descripción** |
| --- | --- | --- |
| **1** |
 |
 |
| **2** |
 |
 |
| **3** |
 |
 |

_ **Tabla 11** _ _Clasificación de solicitud de cambios_

      1.
#### Lista de tipos de riesgos

En este apartado se define los tipos de riesgos del proyecto DEALER el cual se viene desarrollando para nuestro proyecto, así como una breve descripción de cada uno de ellos:

| **ID** | **Nombre** | **Descripción** |
| --- | --- | --- |
| 1 |
 |
 |
| 2 |
 |
 |
| 3 |
 |
 |
| 4 |
 |
 |
| 5 |
 |
 |

_ **Tabla 12.** _ _Lista de tipos de riesgos_

      1.
#### Lista de Categorías de Impacto

En este apartado se define las categorías de impacto del proyecto LEADER el cual se viene desarrollando en nuestro proyecto, así como una breve descripción de cada uno de ellos:

| **ID** | **Nombre** | **Descripción** |
| --- | --- | --- |
|
 |
 |
 |
|
 |
 |
 |
|
 |
 |
 |

_ **Tabla 13.** _ _Categorías de impacto_

      1.
#### Ejemplos de Formatos de solicitudes de Cambio

Nombre del Proyecto: Dealer

En este apartado se detallan los ejemplos de Formatos de solicitud de cambio

Nombre del alumno:

| **ID** |
 |
| --- | --- |
| **Empresa:** |
 |
| **Fecha** |
 |
| **Sistema** |
 |
| **Fuente (Dueño del proceso)** |
 |
| **Autor (Stakeholder)** |
 |
| **Descripción:** |
 |
| **Justificación:** |
 |

_ **Tabla 14.** _ _Solicitud de Cambio N°1_

Nombre del alumno:

| **ID** |
 |
| --- | --- |
| **Empresa:** |
 |
| **Fecha** |
 |
| **Sistema** |
 |
| **Fuente (Dueño del proceso)** |
 |
| **Autor (Stakeholder)** |
 |
| **Descripción:** |
 |
| **Justificación:** |
 |

_ **Tabla 15.** _ _Solicitud de Cambio N°2_

  1.
## Estado de la GCS

    1.
### Definición de Reportes para el Estado

En este apartado se proporcionan ejemplos de reporte de Estado para el Gestor de la Configuración

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |
-
 |

_ **Tabla 24.** _ _Reportes para el estado para el Gestor de la Configuración N°1_

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
 |
| **Salidas** |

  -
 |

_ **Tabla 25.** _ _Reportes para el estado para el Gestor de la Configuración N°2_

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |

  -
 |

_ **Tabla 26.** _ _Reportes para el estado para el Gestor de la Configuración N°3_

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |
-
 |

_ **Tabla 27.** _ _Reportes para el estado para el Gestor de la Configuración N°4_

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |
-
 |

_ **Tabla 28.** _ _Reportes para el estado para el Gestor de la Configuración N°5_

En este apartado se proporcionan ejemplos de reporte de Estado para el jefe del Proyecto:

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |
-
 |

_ **Tabla 29.** _ _Reportes para el estado para el Jefe de Proyecto N°6_

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |
-
 |

_ **Tabla 30.** _ _Reportes para el estado para el Jefe de Proyecto N°7_

| **ID** |
 |
| --- | --- |
| **Alumno:** |
 |
| **Título del reporte** |
 |
| **Propósito del reporte** |
 |
| **Entradas** |
-
 |
| **Salidas** |
-
 |

_ **Tabla 31.** _ _Reportes para el estado para el Jefe de Proyecto N°8_

    1.
### Estadísticas

En este apartado se muestran los reportes y estadísticas recogidas por github:

  1.
## Auditoría de la GCS

    1.
### Reportes de Auditoría Física y Funcional

Hemos definido reportes, tanto para la Auditoría Física como para la Auditoría Funcional:

| **Código de reporte** |
 |
| --- | --- |
| **Alumno** |
 |
| **TIpo de reporte** |
 |
| **Nombre del reporte** |
 |
| **Propósito** |
 |
| **Parámetros de entrada** |
-
 |
| **Parámetros de salida** |
-
 |

_ **Tabla 35.** _ _Reportes de Auditoría N°1_

| **Código de reporte** |
 |
| --- | --- |
| **Alumno** |
 |
| **TIpo de reporte** |
 |
| **Nombre del reporte** |
 |
| **Propósito** |
 |
| **Parámetros de entrada** |
-
 |
| **Parámetros de salida** |
-
 |

_ **Tabla 36.** _ _Reportes de Auditoría N°2_

| **Código de reporte** |
 |
| --- | --- |
| **Alumno** |
 |
| **TIpo de reporte** |
 |
| **Nombre del reporte** |
 |
| **Propósito** |
 |
| **Parámetros de entrada** |
-
 |
| **Parámetros de salida** |
-
 |

_ **Tabla 37.** _ _Reportes de Auditoría N°3_

| **Código de reporte** |
 |
| --- | --- |
| **Alumno** |
 |
| **TIpo de reporte** |
 |
| **Nombre del reporte** |
 |
| **Propósito** |
 |
| **Parámetros de entrada** |
-
 |
| **Parámetros de salida** |
-
 |

_ **Tabla 38.** _ _Reportes de Auditoría N°4_

_ **Tabla 39.** _ _Reportes de Auditoría N°5_

_ **Tabla 40.** _ _Reportes de Auditoría N°5_

  1.
## Entrega y Gestión de Release

    1.
### Entrega

En este apartado estaremos mostrando un modelo con toda la información que se necesita para el pase a producción de un proyecto, en donde se muestran los datos sobre el control de revisión, etc.

    1.
### Diseño del repositorio

Se presenta el diagrama del repositorio a presentar para el cliente:

_ **Gráfico 12.** _ _Estructura del repositorio DEALER con despliegue en la entrega al cliente_


