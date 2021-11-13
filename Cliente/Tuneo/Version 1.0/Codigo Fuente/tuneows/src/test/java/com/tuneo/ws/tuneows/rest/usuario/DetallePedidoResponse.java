package com.tuneo.ws.tuneows.rest.usuario;

import com.tuneo.ws.tuneows.model.Producto;
import com.tuneo.ws.tuneows.model.ProductoPedido;

import java.util.List;

public class DetallePedidoResponse {
    private int coDetallePedido;
    private int coPedido;
    private int coProducto;
    private int cantidad;
   // private ProductoPedido producto;

    public int getCoDetallePedido() {
        return coDetallePedido;
    }

    public void setCoDetallePedido(int coDetallePedido) {
        this.coDetallePedido = coDetallePedido;
    }

    public int getCoPedido() {
        return coPedido;
    }

    public void setCoPedido(int coPedido) {
        this.coPedido = coPedido;
    }

    public int getCoProducto() {
        return coProducto;
    }

    public void setCoProducto(int coProducto) {
        this.coProducto = coProducto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

  /*  public ProductoPedido getProducto() {
        return producto;
    }

    public void setProducto(ProductoPedido producto) {
        this.producto = producto;
    }*/
}
