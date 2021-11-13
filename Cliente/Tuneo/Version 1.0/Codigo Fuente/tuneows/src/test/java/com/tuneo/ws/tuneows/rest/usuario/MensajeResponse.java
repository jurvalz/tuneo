package com.tuneo.ws.tuneows.rest.usuario;

import com.tuneo.ws.tuneows.model.Mensaje;

import java.util.List;

public class MensajeResponse {
   private Boolean ok;
   
   public Boolean getOk() {
	return ok;
	}
	
	public void setOk(Boolean ok) {
		this.ok = ok;
	}

private List<Mensaje> listMensaje;

    public List<Mensaje> getListMensaje() {
        return listMensaje;
    }

    public void setListMensaje(List<Mensaje> listMensaje) {
        this.listMensaje = listMensaje;
    }
}
