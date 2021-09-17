package com.tuneo.ws.tuneows.dao;

import com.tuneo.ws.tuneows.model.DetallePedido;
import com.tuneo.ws.tuneows.rest.usuario.*;

import java.util.List;

public interface TuneoDao {

    public UsuarioResponse obtenerUsuario(UsuarioRequest request);
    public RegistroResponse registrarUsuario(RegistroRequest request);
    public MensajeResponse obtenerMensaje(MensajeRequest request);
    public FavoritoResponse obtenerFavorito(FavoritoRequest request);
    public ProductoResponse buscarProducto(ProductoRequest request);
    public List<SegPedidoResponse> getSeguimiento(SegPedidoRequest request);
    public List<PedidoResponse> getListaPedido(PedidoRequest request);
    public List<DetallePedidoResponse> getListaDetallePedido(DetallePedidoRequest request);
    public ProductoResponse buscarProductoPorTipo(ProductoRequest request);
    public ProductoResponse buscarProductoCod(ProductoRequest request);
    public ProductoResponse buscarProductoCaraBorde(ProductoRequest request);
    public ProductoResponse buscarProductoCaraBordePatron(ProductoRequest request);
    public List<Proyecto> buscarPresentacion(PresentacionRequest request);
    public Valoracion buscarValoracion(ProductoRequest request);
    public ProductoResponse buscarProductoTallado(ProductoRequest request);
    public PresentacionProductoResponse buscarPresentacionProducto(PresentacionRequest request);
}
