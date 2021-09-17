package com.tuneo.ws.tuneows.services;

import com.tuneo.ws.tuneows.rest.usuario.*;

import java.util.List;

public interface TuneoService {

    public UsuarioResponse obtenerUsuario(UsuarioRequest request);
    public RegistroResponse registrarUsuario(RegistroRequest request);
    public MensajeResponse obtenerMensaje(MensajeRequest request);
    public FavoritoResponse obtenerFavorito(FavoritoRequest request);
    public ProductoResponse buscarProducto(ProductoRequest request);
    public List<SegPedidoResponse> getSeguimiento(SegPedidoRequest request);
    public List<PedidoResponse> getListaPedido(PedidoRequest request);
    public List<DetallePedidoResponse> getListaDetallePedido(DetallePedidoRequest request);
    public PatronResponse buscarProductoPorTipo(ProductoRequest request);
    public ProductoResponse buscarProductoCod(ProductoRequest request);
    public ProductoResponse buscarProductoCaraBorde(ProductoRequest request);
    public ProductoResponse buscarProductoCaraBordePatron(ProductoRequest request);
    public PresentacionResponse buscarPresentacion(PresentacionRequest request);
    public Valoracion buscarValoracion(ProductoRequest request);
    public ProductoResponse buscarProductoTallado(ProductoRequest request);
    public PresentacionProductoResponse buscarPresentacionProducto(PresentacionRequest request);
    public boolean enviarEmail(String origen,String cpass, String destino, String asunto, String mensaje);
}
