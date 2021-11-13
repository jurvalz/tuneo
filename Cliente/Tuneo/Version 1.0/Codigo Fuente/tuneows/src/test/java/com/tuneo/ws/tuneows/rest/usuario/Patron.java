package com.tuneo.ws.tuneows.rest.usuario;

public class Patron {
	private String imagenPatronGif;
	private String imagenPatronJpg;
	private Integer coProducto;
	private String nombre;
	private String precioEntre;
	private String senal;
	private String caracteristicas;
	
	
	public String getCaracteristicas() {
		return caracteristicas;
	}
	public void setCaracteristicas(String caracteristicas) {
		this.caracteristicas = caracteristicas;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getPrecioEntre() {
		return precioEntre;
	}
	public void setPrecioEntre(String precioEntre) {
		this.precioEntre = precioEntre;
	}
	public String getSenal() {
		return senal;
	}
	public void setSenal(String senal) {
		this.senal = senal;
	}
	public String getImagenPatronGif() {
		return imagenPatronGif;
	}
	public void setImagenPatronGif(String imagenPatronGif) {
		this.imagenPatronGif = imagenPatronGif;
	}
	public String getImagenPatronJpg() {
		return imagenPatronJpg;
	}
	public void setImagenPatronJpg(String imagenPatronJpg) {
		this.imagenPatronJpg = imagenPatronJpg;
	}
	public Integer getCoProducto() {
		return coProducto;
	}
	public void setCoProducto(Integer coProducto) {
		this.coProducto = coProducto;
	}
	
}
