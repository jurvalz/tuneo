package com.tuneo.ws.tuneows.dao.imp;

import com.tuneo.ws.tuneows.dao.TuneoDao;
import com.tuneo.ws.tuneows.dao.datasource.MyDatasource;
import com.tuneo.ws.tuneows.model.*;
import com.tuneo.ws.tuneows.rest.usuario.*;
import org.springframework.data.relational.core.sql.In;
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.stereotype.Repository;
import org.springframework.util.LinkedCaseInsensitiveMap;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public class TuneoDaoImpl extends MyDatasource implements TuneoDao {

    @Override
    public UsuarioResponse obtenerUsuario(UsuarioRequest request) {
    	List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlParameter("p_credencial", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.obtener_usuario(?,?,?)}");
                callableStatement.setString(1, request.getCoUsuario());
                callableStatement.setString(2, request.getCredencial());
                callableStatement.registerOutParameter(3, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<UsuarioResponse> response = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    UsuarioResponse userDetail = new UsuarioResponse();
                    userDetail.setCoUsuario((String) p.get("co_usuario"));
                    userDetail.setCredencial((String) p.get("credencial"));
                    userDetail.setCorreo((String) p.get("correo"));
                    userDetail.setTelefono((String) p.get("telefono"));
                    userDetail.setNombres((String) p.get("nombre"));
                    userDetail.setApellidos((String) p.get("apellido"));

                    return userDetail;
                }).collect(Collectors.toList());
        return response.get(0);



    }

    @Override
    public RegistroResponse registrarUsuario(RegistroRequest request) {

        RegistroResponse response = new RegistroResponse();

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlParameter("p_nombres", Types.VARCHAR),
                new SqlParameter("p_apellido", Types.VARCHAR),
                new SqlParameter("p_credencial", Types.VARCHAR),
                new SqlParameter("p_correo", Types.VARCHAR),
                new SqlParameter("p_edad", Types.INTEGER),
                new SqlParameter("p_direccion", Types.VARCHAR),
                new SqlParameter("p_co_postal", Types.VARCHAR),
                new SqlParameter("p_telefono", Types.VARCHAR),
                new SqlParameter("p_dni", Types.VARCHAR),

                new SqlOutParameter("p_co_error", Types.BOOLEAN));



        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.registrar_usuario(?,?,?,?,?,?,?,?,?,?,?)}");
                callableStatement.setString(1, request.getCoUsuario());
                callableStatement.setString(2, request.getNombres());
                callableStatement.setString(3, request.getApellidos());
                callableStatement.setString(4, request.getCredencial());
                callableStatement.setString(5, request.getCorreo());
                callableStatement.setInt(6, request.getEdad());
                callableStatement.setString(7, request.getDireccion());
                callableStatement.setString(8, request.getCodPostal());
                callableStatement.setString(9, request.getTelefono());
                callableStatement.setString(10, request.getDni());

                callableStatement.registerOutParameter(11, Types.BOOLEAN);
                return callableStatement;
            }
        }, parameters);

        boolean coError = (boolean)t.get("p_co_error");

        response.setCodError(coError);

        return response;




    }

    @Override
    public MensajeResponse obtenerMensaje(MensajeRequest request) {
        MensajeResponse response = new MensajeResponse();
        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.obtener_mensaje(?,?)}");
                callableStatement.setString(1, request.getCoUsuario());
                callableStatement.registerOutParameter(2, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<Mensaje> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    Mensaje msg = new Mensaje();
                    msg.setAsunto((String) p.get("asunto"));
                    msg.setCuerpo((String) p.get("cuerpo"));
                    msg.setFecha((String) p.get("fecha"));
                    msg.setCoMensaje((Integer) p.get("co_mensaje"));

                    return msg;
                }).collect(Collectors.toList());

        response.setListMensaje(lista);


        return response;

    }

    @Override
    public FavoritoResponse obtenerFavorito(FavoritoRequest request) {

        FavoritoResponse response = new FavoritoResponse();

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.obtener_favorito(?,?)}");
                callableStatement.setString(1, request.getCoUsuario());
                callableStatement.registerOutParameter(2, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<Favorito> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    Favorito msg = new Favorito();
                    msg.setCoFavorito((Integer) p.get("co_favorito"));
                    msg.setCoProducto((Integer) p.get("co_producto"));
                    msg.setFecha((String) p.get("fecha"));


                    return msg;
                }).collect(Collectors.toList());

        response.setListFavorito(lista);
        return response;
    }

    @Override
    public ProductoResponse buscarProducto(ProductoRequest request) {

        ProductoResponse response = new ProductoResponse();

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_nom_producto", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.buscar_productos(?,?)}");
                callableStatement.setString(1, request.getNombre());
                callableStatement.registerOutParameter(2, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<Producto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    Producto producto = new Producto();
                    producto.setCoProducto((Integer) p.get("co_producto"));
                    producto.setTipo((String) p.get("tipo"));
                    producto.setClaseEdad((String) p.get("clase_edad"));
                    producto.setClaseUso((String) p.get("clase_uso"));
                    producto.setClaseForma((String) p.get("clase_forma"));
                    producto.setClaseTema((String) p.get("clase_tema"));
                    producto.setClaseCategoria((String) p.get("clase_categoria"));
                    producto.setNombre((String) p.get("nombre"));
                    producto.setVoto( p.get("voto")!=null?(Integer) p.get("voto"):null);
                    producto.setPuntuacion( p.get("puntuacion")!=null?((BigDecimal) p.get("puntuacion")).doubleValue():null);
                    producto.setTipoCara((String) p.get("tipo_cara"));
                    producto.setSubtipoCara((String) p.get("subtipo_cara"));
                    producto.setValorCara((String) p.get("valor_cara"));
                    producto.setTipoBorde((String) p.get("tipo_borde"));
                    producto.setValorBorde((String) p.get("valor_borde"));
                    producto.setMaterial((String) p.get("material"));
                    producto.setMedidas((String) p.get("medidas"));
                    producto.setPeso( p.get("peso")!=null?((BigDecimal) p.get("peso")).doubleValue():null);
                    producto.setPrecio(p.get("precio")!=null?((BigDecimal) p.get("precio")).doubleValue():null);
    				producto.setPrecioMin(p.get("precio_min")!=null?((BigDecimal) p.get("precio_min")).doubleValue():null);
    				producto.setPrecioMax(p.get("precio_max")!=null?((BigDecimal) p.get("precio_max")).doubleValue():null);
    				producto.setPrecioOferta(p.get("precio_oferta")!=null ?((BigDecimal) p.get("precio_oferta")).doubleValue():null);


                    return producto;
                }).collect(Collectors.toList());

        response.setListProducto(lista);

        return response;
    }

    @Override
    public List<SegPedidoResponse> getSeguimiento(SegPedidoRequest request) {
        //SegPedidoResponse response = new SegPedidoResponse();
        // int valPed = -1;

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_pedido", Types.NUMERIC),
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.listaSeguimientoPedido(?,?,?)}");
                callableStatement.setInt(1, request.getCoPedido());
                callableStatement.setString(2, request.getCoUsuario());
                callableStatement.registerOutParameter(3, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);

        List<SegPedidoResponse> response = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    SegPedidoResponse seg = new SegPedidoResponse();
                            seg.setCoPedido((Integer) p.get("co_pedido"));
                            seg.setEstado((Integer) p.get("estado"));
                            seg.setTipo((String) p.get("tipo"));
                            seg.setFecha((String) p.get("fechaSeg"));
                    return seg;

                }).collect(Collectors.toList());



        return response;
    }

    @Override
    public List<PedidoResponse> getListaPedido(PedidoRequest request) {

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.lista_pedido(?,?)}");
                callableStatement.setString(1, request.getCoUsuario());
                callableStatement.registerOutParameter(2, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<PedidoResponse> response = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {

                    PedidoResponse lista = new PedidoResponse();
                    lista.setCoPedido((Integer) p.get("co_pedido"));
                    lista.setFecha((String) p.get("fecha"));

                    return lista;
                }).collect(Collectors.toList());


        return response;

    }

    @Override
    public List<DetallePedidoResponse> getListaDetallePedido(DetallePedidoRequest request) {

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_co_pedido", Types.NUMERIC),
                new SqlParameter("p_co_usuario", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));


        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.lista_detalle_pedido(?,?,?)}");
                callableStatement.setInt(1, request.getCoPedido());
                callableStatement.setString(2, request.getCoUsuario());
                callableStatement.registerOutParameter(3, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<DetallePedidoResponse> response = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {

                    DetallePedidoResponse lista = new DetallePedidoResponse();

                    lista.setCoPedido((Integer) p.get("co_pedido"));
                    lista.setCoDetallePedido((Integer) p.get("co_detalle_pedido"));
                    lista.setCantidad((Integer) p.get("cantidad"));
                    lista.setCoProducto((Integer) p.get("co_producto"));


                    return lista;
                }).collect(Collectors.toList());


        return response;

    }

    public ProductoResponse buscarProductoPorTipo(ProductoRequest request) {

        ProductoResponse response = new ProductoResponse();

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_nom_producto", Types.VARCHAR),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.buscar_producto_tipo(?,?)}");
                callableStatement.setString(1, request.getNombre());
                callableStatement.registerOutParameter(2, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<Producto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    Producto producto = new Producto();
                    producto.setCoProducto((Integer) p.get("co_producto"));
                    producto.setTipo((String) p.get("tipo"));
                    producto.setClaseEdad((String) p.get("clase_edad"));
                    producto.setClaseUso((String) p.get("clase_uso"));
                    producto.setClaseForma((String) p.get("clase_forma"));
                    producto.setClaseTema((String) p.get("clase_tema"));
                    producto.setClaseCategoria((String) p.get("clase_categoria"));
                    producto.setNombre((String) p.get("nombre"));
                    producto.setVoto( p.get("voto")!=null?(Integer) p.get("voto"):null);
                    producto.setPuntuacion( p.get("puntuacion")!=null?((BigDecimal) p.get("puntuacion")).doubleValue():null);
                    producto.setTipoCara((String) p.get("tipo_cara"));
                    producto.setSubtipoCara((String) p.get("subtipo_cara"));
                    producto.setValorCara((String) p.get("valor_cara"));
                    producto.setTipoBorde((String) p.get("tipo_borde"));
                    producto.setValorBorde((String) p.get("valor_borde"));
                    producto.setMaterial((String) p.get("material"));
                    producto.setMedidas((String) p.get("medidas"));
                    producto.setPeso( p.get("peso")!=null?((BigDecimal) p.get("peso")).doubleValue():null);
                    producto.setPrecio(p.get("precio")!=null?((BigDecimal) p.get("precio")).doubleValue():null);
    				producto.setPrecioMin(p.get("precio_min")!=null?((BigDecimal) p.get("precio_min")).doubleValue():null);
    				producto.setPrecioMax(p.get("precio_max")!=null?((BigDecimal) p.get("precio_max")).doubleValue():null);
    				producto.setPrecioOferta(p.get("precio_oferta")!=null ?((BigDecimal) p.get("precio_oferta")).doubleValue():null);
                    producto.setImagenPatronGif((String) p.get("imagen_gif"));
                    producto.setImagenPatronJpg((String) p.get("imagen_patron"));
                    producto.setImagen((String) p.get("imagen"));
                    producto.setImagen3d((String) p.get("imagen_3d"));
                    producto.setCoPatron(p.get("co_patron")!=null?(Integer) p.get("co_patron"):null);
                    producto.setCaracteristicas((String) p.get("caracteristicas"));
                    return producto;
                }).collect(Collectors.toList());

        response.setListProducto(lista);

        return response;
    }
    public ProductoResponse buscarProductoCod(ProductoRequest request) {

        ProductoResponse response = new ProductoResponse();

        List<SqlParameter> parameters = Arrays.asList(
                new SqlParameter("p_cod_producto", Types.NUMERIC),
                new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));

        Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
            @Override
            public CallableStatement createCallableStatement(Connection con) throws SQLException {
                CallableStatement callableStatement = con.prepareCall("{call public.buscar_producto_cod(?,?)}");
                callableStatement.setInt(1, new Integer(request.getNombre()));
                callableStatement.registerOutParameter(2, Types.REF_CURSOR);
                return callableStatement;
            }
        }, parameters);
        List<Producto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
                .map(p -> {
                    Producto producto = new Producto();
                    producto.setCoProducto((Integer) p.get("co_producto"));
                    producto.setTipo((String) p.get("tipo"));
                    producto.setClaseEdad((String) p.get("clase_edad"));
                    producto.setClaseUso((String) p.get("clase_uso"));
                    producto.setClaseForma((String) p.get("clase_forma"));
                    producto.setClaseTema((String) p.get("clase_tema"));
                    producto.setClaseCategoria((String) p.get("clase_categoria"));
                    producto.setNombre((String) p.get("nombre"));
                    producto.setVoto( p.get("voto")!=null?(Integer) p.get("voto"):null);
                    producto.setPuntuacion( p.get("puntuacion")!=null?((BigDecimal) p.get("puntuacion")).doubleValue():null);
                    producto.setTipoCara((String) p.get("tipo_cara"));
                    producto.setSubtipoCara((String) p.get("subtipo_cara"));
                    producto.setValorCara((String) p.get("valor_cara"));
                    producto.setTipoBorde((String) p.get("tipo_borde"));
                    producto.setValorBorde((String) p.get("valor_borde"));
                    producto.setMaterial((String) p.get("material"));
                    producto.setMedidas((String) p.get("medidas"));
                    producto.setPeso( p.get("peso")!=null?((BigDecimal) p.get("peso")).doubleValue():null);
                    producto.setPrecio(p.get("precio")!=null?((BigDecimal) p.get("precio")).doubleValue():null);
    				producto.setPrecioMin(p.get("precio_min")!=null?((BigDecimal) p.get("precio_min")).doubleValue():null);
    				producto.setPrecioMax(p.get("precio_max")!=null?((BigDecimal) p.get("precio_max")).doubleValue():null);
    				producto.setPrecioOferta(p.get("precio_oferta")!=null ?((BigDecimal) p.get("precio_oferta")).doubleValue():null);
                    producto.setImagenPatronGif((String) p.get("imagen_gif"));
                    producto.setImagenPatronJpg((String) p.get("imagen_patron"));
                    producto.setImagen((String) p.get("imagen"));
                    producto.setImagen3d((String) p.get("imagen_3d"));
                    producto.setTextoBorde((String) p.get("texto_borde"));
                    producto.setTextoCara((String) p.get("texto_cara"));
                    producto.setCp_x(p.get("cp_x")!=null?((BigDecimal) p.get("cp_x")).intValue():null);
                    producto.setCp_y(p.get("cp_y")!=null?((BigDecimal) p.get("cp_y")).intValue():null);
                    producto.setCp_z(p.get("cp_z")!=null?((BigDecimal) p.get("cp_z")).intValue():null);
                    producto.setCt_x(p.get("ct_x")!=null?((BigDecimal) p.get("ct_x")).intValue():null);
                    producto.setCt_y(p.get("ct_y")!=null?((BigDecimal) p.get("ct_y")).intValue():null);
                    producto.setCt_z(p.get("ct_z")!=null?((BigDecimal) p.get("ct_z")).intValue():null);
                    producto.setHl_x(p.get("hl_x")!=null?((BigDecimal) p.get("hl_x")).intValue():null);
                    producto.setHl_y(p.get("hl_y")!=null?((BigDecimal) p.get("hl_y")).intValue():null);
                    producto.setHl_z(p.get("hl_z")!=null?((BigDecimal) p.get("hl_z")).intValue():null);
                    producto.setPerspectiva(p.get("perspectiva")!=null?((BigDecimal) p.get("perspectiva")).intValue():null);
                    producto.setWidth(p.get("width")!=null?((BigDecimal) p.get("width")).intValue():null);
                    producto.setHeight(p.get("height")!=null?((BigDecimal) p.get("height")).intValue():null);
                    producto.setTiempoEntrega((String) p.get("tiempo_entrega"));
                    return producto;
                }).collect(Collectors.toList());

        response.setListProducto(lista);

        return response;
    }
    public ProductoResponse buscarProductoCaraBorde(ProductoRequest request) {
    	
    	ProductoResponse response = new ProductoResponse();
    	
    	List<SqlParameter> parameters = Arrays.asList(
    			new SqlParameter("p_cod_producto", Types.NUMERIC),
    			new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));
    	
    	Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
    		@Override
    		public CallableStatement createCallableStatement(Connection con) throws SQLException {
    			CallableStatement callableStatement = con.prepareCall("{call public.buscar_producto_cara_borde(?,?)}");
    			callableStatement.setInt(1, new Integer(request.getNombre()));
    			callableStatement.registerOutParameter(2, Types.REF_CURSOR);
    			return callableStatement;
    		}
    	}, parameters);
    	List<Producto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
    			.map(p -> {
    				Producto producto = new Producto();
    				producto.setCoProducto((Integer) p.get("co_producto"));
    				producto.setTipo((String) p.get("tipo"));
    				producto.setClaseEdad((String) p.get("clase_edad"));
    				producto.setClaseUso((String) p.get("clase_uso"));
    				producto.setClaseForma((String) p.get("clase_forma"));
    				producto.setClaseTema((String) p.get("clase_tema"));
    				producto.setClaseCategoria((String) p.get("clase_categoria"));
    				producto.setNombre((String) p.get("nombre"));
    				producto.setVoto( p.get("voto")!=null?(Integer) p.get("voto"):null);
                    producto.setPuntuacion( p.get("puntuacion")!=null?((BigDecimal) p.get("puntuacion")).doubleValue():null);
    				producto.setTipoCara((String) p.get("tipo_cara"));
    				producto.setSubtipoCara((String) p.get("subtipo_cara"));
    				producto.setValorCara((String) p.get("valor_cara"));
    				producto.setTipoBorde((String) p.get("tipo_borde"));
    				producto.setValorBorde((String) p.get("valor_borde"));
    				producto.setMaterial((String) p.get("material"));
    				producto.setMedidas((String) p.get("medidas"));
    				producto.setPeso( p.get("peso")!=null?((BigDecimal) p.get("peso")).doubleValue():null);
    				producto.setPrecio(p.get("precio")!=null?((BigDecimal) p.get("precio")).doubleValue():null);
    				producto.setPrecioMin(p.get("precio_min")!=null?((BigDecimal) p.get("precio_min")).doubleValue():null);
    				producto.setPrecioMax(p.get("precio_max")!=null?((BigDecimal) p.get("precio_max")).doubleValue():null);
    				producto.setPrecioOferta(p.get("precio_oferta")!=null ?((BigDecimal) p.get("precio_oferta")).doubleValue():null);
    				producto.setImagenPatronGif((String) p.get("imagen_gif"));
    				producto.setImagenPatronJpg((String) p.get("imagen_patron"));
    				producto.setImagen((String) p.get("imagen"));
    				producto.setImagen3d((String) p.get("imagen_3d"));
    				
    				return producto;
    			}).collect(Collectors.toList());
    	
    	response.setListProducto(lista);
    	
    	return response;
    }
    public ProductoResponse buscarProductoCaraBordePatron(ProductoRequest request) {
    	
    	ProductoResponse response = new ProductoResponse();
    	
    	List<SqlParameter> parameters = Arrays.asList(
    			new SqlParameter("p_valor_cara", Types.NUMERIC),
    			new SqlParameter("p_valor_borde", Types.NUMERIC),
    			new SqlParameter("p_co_producto", Types.NUMERIC),
    			new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));
    	
    	Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
    		@Override
    		public CallableStatement createCallableStatement(Connection con) throws SQLException {
    			CallableStatement callableStatement = con.prepareCall("{call public.buscar_producto_cara_borde_patron(?,?,?,?)}");
    			callableStatement.setString(1, request.getValorCara());
    			callableStatement.setString(2, request.getValorBorde());
    			callableStatement.setInt(3, new Integer(request.getNombre()));
    			callableStatement.registerOutParameter(4, Types.REF_CURSOR);
    			return callableStatement;
    		}
    	}, parameters);
    	List<Producto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
    			.map(p -> {
    				Producto producto = new Producto();
    				producto.setCoProducto((Integer) p.get("co_producto"));
    				producto.setTipo((String) p.get("tipo"));
    				producto.setClaseEdad((String) p.get("clase_edad"));
    				producto.setClaseUso((String) p.get("clase_uso"));
    				producto.setClaseForma((String) p.get("clase_forma"));
    				producto.setClaseTema((String) p.get("clase_tema"));
    				producto.setClaseCategoria((String) p.get("clase_categoria"));
    				producto.setNombre((String) p.get("nombre"));
    				producto.setVoto( p.get("voto")!=null?(Integer) p.get("voto"):null);
                    producto.setPuntuacion( p.get("puntuacion")!=null?((BigDecimal) p.get("puntuacion")).doubleValue():null);
    				producto.setTipoCara((String) p.get("tipo_cara"));
    				producto.setSubtipoCara((String) p.get("subtipo_cara"));
    				producto.setValorCara((String) p.get("valor_cara"));
    				producto.setTipoBorde((String) p.get("tipo_borde"));
    				producto.setValorBorde((String) p.get("valor_borde"));
    				producto.setMaterial((String) p.get("material"));
    				producto.setMedidas((String) p.get("medidas"));
    				producto.setPeso( p.get("peso")!=null?((BigDecimal) p.get("peso")).doubleValue():null);
    				producto.setPrecio(p.get("precio")!=null?((BigDecimal) p.get("precio")).doubleValue():null);
    				producto.setPrecioMin(p.get("precio_min")!=null?((BigDecimal) p.get("precio_min")).doubleValue():null);
    				producto.setPrecioMax(p.get("precio_max")!=null?((BigDecimal) p.get("precio_max")).doubleValue():null);
    				producto.setPrecioOferta(p.get("precio_oferta")!=null ?((BigDecimal) p.get("precio_oferta")).doubleValue():null);
    				producto.setImagenPatronGif((String) p.get("imagen_gif"));
    				producto.setImagenPatronJpg((String) p.get("imagen_patron"));
    				producto.setImagen((String) p.get("imagen"));
    				producto.setImagen3d((String) p.get("imagen_3d"));
    				producto.setCp_x(p.get("cp_x")!=null?((BigDecimal) p.get("cp_x")).intValue():null);
                    producto.setCp_y(p.get("cp_y")!=null?((BigDecimal) p.get("cp_y")).intValue():null);
                    producto.setCp_z(p.get("cp_z")!=null?((BigDecimal) p.get("cp_z")).intValue():null);
                    producto.setCt_x(p.get("ct_x")!=null?((BigDecimal) p.get("ct_x")).intValue():null);
                    producto.setCt_y(p.get("ct_y")!=null?((BigDecimal) p.get("ct_y")).intValue():null);
                    producto.setCt_z(p.get("ct_z")!=null?((BigDecimal) p.get("ct_z")).intValue():null);
                    producto.setHl_x(p.get("hl_x")!=null?((BigDecimal) p.get("hl_x")).intValue():null);
                    producto.setHl_y(p.get("hl_y")!=null?((BigDecimal) p.get("hl_y")).intValue():null);
                    producto.setHl_z(p.get("hl_z")!=null?((BigDecimal) p.get("hl_z")).intValue():null);
                    producto.setPerspectiva(p.get("perspectiva")!=null?((BigDecimal) p.get("perspectiva")).intValue():null);
                    producto.setWidth(p.get("width")!=null?((BigDecimal) p.get("width")).intValue():null);
                    producto.setHeight(p.get("height")!=null?((BigDecimal) p.get("height")).intValue():null);
    				
    				return producto;
    			}).collect(Collectors.toList());
    	
    	response.setListProducto(lista);
    	
    	return response;
    }
    public List<Proyecto> buscarPresentacion(PresentacionRequest request){
    	
    	
    	List<SqlParameter> parameters = Arrays.asList(
    			new SqlParameter("p_co_tipo_proyecto", Types.VARCHAR),
    			new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));
    	
    	Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
    		@Override
    		public CallableStatement createCallableStatement(Connection con) throws SQLException {
    			CallableStatement callableStatement = con.prepareCall("{call public.buscar_presentacion(?,?)}");
    			callableStatement.setString(1, request.getCoTipoProyecto());
    			callableStatement.registerOutParameter(2, Types.REF_CURSOR);
    			return callableStatement;
    		}
    	}, parameters);
    	List<Proyecto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
    			.map(p -> {
    				Proyecto pr = new Proyecto();
    				pr.setCoProyecto((String) p.get("co_proyecto"));    				
    				pr.setNombre((String) p.get("nombre"));
    				pr.setLista(new ArrayList<Presentacion>());
    				
    				Presentacion presentacion = new Presentacion();
    				presentacion.setOrden(p.get("orden")!=null?(Integer) p.get("orden"):null);
    				presentacion.setPrincipal((Boolean)p.get("principal"));
    				presentacion.setImagen((String) p.get("imagen"));
    				pr.getLista().add(presentacion);
    				return pr;
    			}).collect(Collectors.toList());    	
    	if(lista!=null && lista.size()>0) {
    		List<Proyecto> listaTemporal = new ArrayList<Proyecto>();
    		Proyecto proyectoTemporal= null;
    		String coProyecto = "";
    		for (int i = 0; i < lista.size(); i++) {
				if(i==0) {
					proyectoTemporal = lista.get(i);
					coProyecto = lista.get(i).getCoProyecto();
				}
				else if(coProyecto.equals(lista.get(i).getCoProyecto())) {
					proyectoTemporal.getLista().add(lista.get(i).getLista().get(0));
				}
				else if(!coProyecto.equals(lista.get(i).getCoProyecto())) {
					listaTemporal.add(proyectoTemporal);
					proyectoTemporal = lista.get(i);
					coProyecto = lista.get(i).getCoProyecto();
				}				
			}
    		listaTemporal.add(proyectoTemporal);
    		for (int i = 0; i < listaTemporal.size(); i++) {
    			String imagen="";
				for (int j = 0; j < listaTemporal.get(i).getLista().size(); j++) {
					if(listaTemporal.get(i).getLista().get(j).getPrincipal()) {
						imagen = listaTemporal.get(i).getLista().get(j).getImagen();
					}
				}
				listaTemporal.get(i).setImagen(imagen);
			}   		
    		lista = listaTemporal;
    	}
    	return lista;
    }

	
	public Valoracion buscarValoracion(ProductoRequest request) {
		Valoracion response = null;
    	
    	List<SqlParameter> parameters = Arrays.asList(
    			new SqlParameter("p_co_producto", Types.NUMERIC),
    			new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));
    	
    	Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
    		@Override
    		public CallableStatement createCallableStatement(Connection con) throws SQLException {
    			CallableStatement callableStatement = con.prepareCall("{call public.buscar_valoracion(?,?)}");
    			callableStatement.setInt(1, new Integer(request.getNombre()));
    			callableStatement.registerOutParameter(2, Types.REF_CURSOR);
    			return callableStatement;
    		}
    	}, parameters);
    	List<Valoracion> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
    			.map(p -> {
    				Valoracion valoracion = new Valoracion();
    				valoracion.setCoProducto((Integer) p.get("co_producto"));
    				valoracion.setEstrella5((Integer) p.get("estrella_5"));
    				valoracion.setEstrella4((Integer) p.get("estrella_4"));
    				valoracion.setEstrella3((Integer) p.get("estrella_3"));
    				valoracion.setEstrella2((Integer) p.get("estrella_2"));
    				valoracion.setEstrella1((Integer) p.get("estrella_1"));
    				return valoracion;
    			}).collect(Collectors.toList());
    	
    	if(lista != null && lista.size()>0) {
    		response = lista.get(0);
    	}    	
    	
    	return response;
	}
	public ProductoResponse buscarProductoTallado(ProductoRequest request) {
    	
    	ProductoResponse response = new ProductoResponse();
    	
    	List<SqlParameter> parameters = Arrays.asList(
    			new SqlParameter("p_cod_producto", Types.NUMERIC),
    			new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));
    	
    	Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
    		@Override
    		public CallableStatement createCallableStatement(Connection con) throws SQLException {
    			CallableStatement callableStatement = con.prepareCall("{call public.buscar_producto_tallados(?,?)}");
    			callableStatement.setInt(1, new Integer(request.getNombre()));
    			callableStatement.registerOutParameter(2, Types.REF_CURSOR);
    			return callableStatement;
    		}
    	}, parameters);
    	List<Producto> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
    			.map(p -> {
    				Producto producto = new Producto();
    				producto.setCoProducto((Integer) p.get("co_producto"));
    				producto.setTipo((String) p.get("tipo"));
    				producto.setClaseEdad((String) p.get("clase_edad"));
    				producto.setClaseUso((String) p.get("clase_uso"));
    				producto.setClaseForma((String) p.get("clase_forma"));
    				producto.setClaseTema((String) p.get("clase_tema"));
    				producto.setClaseCategoria((String) p.get("clase_categoria"));
    				producto.setNombre((String) p.get("nombre"));
    				producto.setVoto( p.get("voto")!=null?(Integer) p.get("voto"):null);
                    producto.setPuntuacion( p.get("puntuacion")!=null?((BigDecimal) p.get("puntuacion")).doubleValue():null);
    				producto.setTipoCara((String) p.get("tipo_cara"));
    				producto.setSubtipoCara((String) p.get("subtipo_cara"));
    				producto.setValorCara((String) p.get("valor_cara"));
    				producto.setTipoBorde((String) p.get("tipo_borde"));
    				producto.setValorBorde((String) p.get("valor_borde"));
    				producto.setMaterial((String) p.get("material"));
    				producto.setMedidas((String) p.get("medidas"));
    				producto.setTextoCara((String) p.get("texto_cara"));
    				producto.setPeso( p.get("peso")!=null?((BigDecimal) p.get("peso")).doubleValue():null);
    				producto.setPrecio(p.get("precio")!=null?((BigDecimal) p.get("precio")).doubleValue():null);
    				producto.setPrecioMin(p.get("precio_min")!=null?((BigDecimal) p.get("precio_min")).doubleValue():null);
    				producto.setPrecioMax(p.get("precio_max")!=null?((BigDecimal) p.get("precio_max")).doubleValue():null);
    				producto.setPrecioOferta(p.get("precio_oferta")!=null ?((BigDecimal) p.get("precio_oferta")).doubleValue():null);
    				producto.setImagenPatronGif((String) p.get("imagen_gif"));
    				producto.setImagenPatronJpg((String) p.get("imagen_patron"));
    				producto.setImagen((String) p.get("imagen"));
    				producto.setImagen3d((String) p.get("imagen_3d"));
    				
    				return producto;
    			}).collect(Collectors.toList());
    	
    	response.setListProducto(lista);
    	
    	return response;
    }
	
	public PresentacionProductoResponse buscarPresentacionProducto(PresentacionRequest request) {
		List<SqlParameter> parameters = Arrays.asList(
    			new SqlParameter("p_co_proyecto", Types.VARCHAR),
    			new SqlOutParameter("p_cCURSOR", Types.REF_CURSOR));
    	
    	Map<String, Object> t = jdbcTemplate.call(new CallableStatementCreator() {
    		@Override
    		public CallableStatement createCallableStatement(Connection con) throws SQLException {
    			CallableStatement callableStatement = con.prepareCall("{call public.buscar_presentacion_proyecto(?,?)}");
    			callableStatement.setString(1, request.getCoTipoProyecto());
    			callableStatement.registerOutParameter(2, Types.REF_CURSOR);
    			return callableStatement;
    		}
    	}, parameters);
    	PresentacionProductoResponse retorno = new PresentacionProductoResponse();
    	List<Presentacion> lista = ((ArrayList<LinkedCaseInsensitiveMap>) t.get("p_cCURSOR")).stream()
    			.map(p -> {
    				Presentacion presentacion = new Presentacion();
    				presentacion.setOrden(p.get("orden")!=null?(Integer) p.get("orden"):null);
    				presentacion.setPrincipal((Boolean)p.get("principal"));
    				presentacion.setImagen((String) p.get("imagen"));
    				return presentacion;
    			}).collect(Collectors.toList());    	
    	retorno.setLista(lista);
    	return retorno;
	}
    
}
