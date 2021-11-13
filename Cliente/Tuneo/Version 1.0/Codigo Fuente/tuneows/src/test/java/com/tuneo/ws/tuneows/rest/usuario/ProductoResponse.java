package com.tuneo.ws.tuneows.rest.usuario;

import com.tuneo.ws.tuneows.model.Producto;

import java.util.List;

public class ProductoResponse {

    private List<Producto> listProducto;

    public List<Producto> getListProducto() {
        return listProducto;
    }

    public void setListProducto(List<Producto> listProducto) {
        this.listProducto = listProducto;
    }
}
