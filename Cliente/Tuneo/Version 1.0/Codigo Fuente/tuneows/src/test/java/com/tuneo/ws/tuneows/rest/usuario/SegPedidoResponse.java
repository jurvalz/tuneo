package com.tuneo.ws.tuneows.rest.usuario;

import com.tuneo.ws.tuneows.model.SeguimientoPedido;

import java.util.List;

public class SegPedidoResponse {

    private Integer estado;
    private Integer coPedido;
    private String fecha;
    private String tipo;

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getCoPedido() {
        return coPedido;
    }

    public void setCoPedido(Integer coPedido) {
        this.coPedido = coPedido;
    }

}
