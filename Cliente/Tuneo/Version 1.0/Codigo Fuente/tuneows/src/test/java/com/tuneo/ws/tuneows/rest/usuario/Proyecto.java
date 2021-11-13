package com.tuneo.ws.tuneows.rest.usuario;

import java.util.List;

public class Proyecto {
	private String coProyecto;
	private String nombre;
	private String imagen;
	private List<Presentacion> lista;
	
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getCoProyecto() {
		return coProyecto;
	}
	public void setCoProyecto(String coProyecto) {
		this.coProyecto = coProyecto;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public List<Presentacion> getLista() {
		return lista;
	}
	public void setLista(List<Presentacion> lista) {
		this.lista = lista;
	}
	
}
