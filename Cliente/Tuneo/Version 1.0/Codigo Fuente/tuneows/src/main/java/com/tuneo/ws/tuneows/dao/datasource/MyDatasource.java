package com.tuneo.ws.tuneows.dao.datasource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class MyDatasource {
    @Autowired
    protected JdbcTemplate jdbcTemplate;
}
