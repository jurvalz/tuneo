package com.tuneo.ws.tuneows.model;

public class DetallePedido {

    private Integer co_detalle_pedido;
    private Integer cantidad;
    private ProductoPedido producto;

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getCo_detalle_pedido() {
        return co_detalle_pedido;
    }

    public void setCo_detalle_pedido(Integer co_detalle_pedido) {
        this.co_detalle_pedido = co_detalle_pedido;
    }

    public ProductoPedido getProducto() {
        return producto;
    }

    public void setProducto(ProductoPedido producto) {
        this.producto = producto;
    }
}
