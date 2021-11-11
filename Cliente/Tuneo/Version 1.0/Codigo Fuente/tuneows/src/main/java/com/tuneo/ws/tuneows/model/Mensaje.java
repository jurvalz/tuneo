package com.tuneo.ws.tuneows.model;

public class Mensaje {

    private Integer coMensaje;
    private String asunto;
    private String cuerpo;
    private String fecha;

    public Integer getCoMensaje() {
        return coMensaje;
    }

    public void setCoMensaje(Integer coMensaje) {
        this.coMensaje = coMensaje;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getCuerpo() {
        return cuerpo;
    }

    public void setCuerpo(String cuerpo) {
        this.cuerpo = cuerpo;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

}
