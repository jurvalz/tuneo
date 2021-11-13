package com.tuneo.ws.tuneows.rest.usuario;

public class SegPedidoRequest {

    private Integer coPedido;
    private String coUsuario;

    public Integer getCoPedido() {
        return coPedido;
    }

    public void setCoPedido(Integer coPedido) {
        this.coPedido = coPedido;
    }

    public String getCoUsuario() {
        return coUsuario;
    }

    public void setCoUsuario(String coUsuario) {
        this.coUsuario = coUsuario;
    }
}
