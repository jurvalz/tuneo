package com.tuneo.ws.tuneows.rest.usuario;

import com.tuneo.ws.tuneows.model.Favorito;

import java.util.List;

public class FavoritoResponse {

    private List<Favorito> listFavorito;

    public List<Favorito> getListFavorito() {
        return listFavorito;
    }

    public void setListFavorito(List<Favorito> listFavorito) {
        this.listFavorito = listFavorito;
    }
}
