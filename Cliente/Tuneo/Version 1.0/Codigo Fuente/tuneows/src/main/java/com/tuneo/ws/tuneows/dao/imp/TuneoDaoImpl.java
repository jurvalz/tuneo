package com.tuneo.ws.tuneows.dao.imp;

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
    
    
}
