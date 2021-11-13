package com.tuneo.ws.tuneows.rest.usuario;

public class ProductoRequest {

    private String nombre;
    private String valorCara;
    private String valorBorde;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

	public String getValorCara() {
		return valorCara;
	}

	public void setValorCara(String valorCara) {
		this.valorCara = valorCara;
	}

	public String getValorBorde() {
		return valorBorde;
	}

	public void setValorBorde(String valorBorde) {
		this.valorBorde = valorBorde;
	}
    
}
