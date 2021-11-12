package com.tuneo.ws.tuneows.services.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tuneo.ws.tuneows.dao.TuneoDao;
import com.tuneo.ws.tuneows.model.Producto;
import com.tuneo.ws.tuneows.rest.usuario.DetallePedidoRequest;
import com.tuneo.ws.tuneows.rest.usuario.DetallePedidoResponse;
import com.tuneo.ws.tuneows.rest.usuario.FavoritoRequest;
import com.tuneo.ws.tuneows.rest.usuario.FavoritoResponse;
import com.tuneo.ws.tuneows.rest.usuario.MensajeRequest;
import com.tuneo.ws.tuneows.rest.usuario.MensajeResponse;
import com.tuneo.ws.tuneows.rest.usuario.Patron;
import com.tuneo.ws.tuneows.rest.usuario.PatronResponse;
import com.tuneo.ws.tuneows.rest.usuario.PedidoRequest;
import com.tuneo.ws.tuneows.rest.usuario.PedidoResponse;
import com.tuneo.ws.tuneows.rest.usuario.PresentacionProductoResponse;
import com.tuneo.ws.tuneows.rest.usuario.PresentacionRequest;
import com.tuneo.ws.tuneows.rest.usuario.PresentacionResponse;
import com.tuneo.ws.tuneows.rest.usuario.ProductoRequest;
import com.tuneo.ws.tuneows.rest.usuario.ProductoResponse;
import com.tuneo.ws.tuneows.rest.usuario.RegistroRequest;
import com.tuneo.ws.tuneows.rest.usuario.RegistroResponse;
import com.tuneo.ws.tuneows.rest.usuario.SegPedidoRequest;
import com.tuneo.ws.tuneows.rest.usuario.SegPedidoResponse;
import com.tuneo.ws.tuneows.rest.usuario.UsuarioRequest;
import com.tuneo.ws.tuneows.rest.usuario.UsuarioResponse;
import com.tuneo.ws.tuneows.rest.usuario.Valoracion;
import com.tuneo.ws.tuneows.services.TuneoService;

@Service
@Transactional
public class TuneoServiceImp implements TuneoService {

    private final TuneoDao tuneoDao;

    public TuneoServiceImp(TuneoDao tuneoDao) {
        this.tuneoDao = tuneoDao;
    }


    
    public UsuarioResponse obtenerUsuario(UsuarioRequest request) {
        return tuneoDao.obtenerUsuario(request);
    }

    
    public RegistroResponse registrarUsuario(RegistroRequest request) {
        return tuneoDao.registrarUsuario(request);
    }

    
    public MensajeResponse obtenerMensaje(MensajeRequest request) {
        return tuneoDao.obtenerMensaje(request);
    }

    
    public FavoritoResponse obtenerFavorito(FavoritoRequest request) {
        return tuneoDao.obtenerFavorito(request);
    }

    
    public ProductoResponse buscarProducto(ProductoRequest request) {
        return tuneoDao.buscarProducto(request);
    }

    
    public List<SegPedidoResponse> getSeguimiento(SegPedidoRequest request) {
        return  tuneoDao.getSeguimiento(request);
    }

    
    public List<PedidoResponse> getListaPedido(PedidoRequest request) {

        return tuneoDao.getListaPedido(request);
    }

	
	public List<DetallePedidoResponse> getListaDetallePedido(DetallePedidoRequest request) {
		return tuneoDao.getListaDetallePedido(request);
	}


	
	public PatronResponse buscarProductoPorTipo(ProductoRequest request) {
		PatronResponse r = new PatronResponse();
		List<Producto> lista = tuneoDao.buscarProductoPorTipo(request).getListProducto();
		
		if(lista != null&& lista.size()>0){
			List<Patron> patrones = new ArrayList<Patron>();
			Integer coPatron = 0;
			Patron patron = null;
			for (int i = 0; i < lista.size(); i++) {
				if(i==0) {
					patron = new Patron();
					patron.setCoProducto(lista.get(i).getCoProducto());
					patron.setImagenPatronGif(lista.get(i).getImagenPatronGif());
					patron.setImagenPatronJpg(lista.get(i).getImagenPatronJpg());
					patron.setNombre(lista.get(i).getNombre());
					patron.setPrecioEntre("S/. " + lista.get(i).getPrecioMin() + " - S/. " + lista.get(i).getPrecioMax());
					patron.setSenal("");
					patron.setCaracteristicas(lista.get(i).getCaracteristicas());
					coPatron = lista.get(i).getCoPatron();
				}
				else if(!coPatron.equals(lista.get(i).getCoPatron())){
					patrones.add(patron);
					patron = new Patron();
					patron.setCoProducto(lista.get(i).getCoProducto());
					patron.setImagenPatronGif(lista.get(i).getImagenPatronGif());
					patron.setImagenPatronJpg(lista.get(i).getImagenPatronJpg());
					patron.setNombre(lista.get(i).getNombre());
					patron.setPrecioEntre("S/. " + lista.get(i).getPrecioMin() + " - S/. " + lista.get(i).getPrecioMax());
					patron.setSenal("");
					patron.setCaracteristicas(lista.get(i).getCaracteristicas());
					coPatron = lista.get(i).getCoPatron();
				}
			}
			patrones.add(patron);
			r.setLista(patrones);
		}
		return r;
	}
	
	public ProductoResponse buscarProductoCod(ProductoRequest request) {
		return tuneoDao.buscarProductoCod(request);
	}
	
	public ProductoResponse buscarProductoCaraBorde(ProductoRequest request) {
		return tuneoDao.buscarProductoCaraBorde(request);
	}
	
	public ProductoResponse buscarProductoCaraBordePatron(ProductoRequest request) {
		return tuneoDao.buscarProductoCaraBordePatron(request);
	}
	public PresentacionResponse buscarPresentacion(PresentacionRequest request) {
		PresentacionResponse r = new PresentacionResponse();
		r.setLista(tuneoDao.buscarPresentacion(request));
		return r;
	}



	public Valoracion buscarValoracion(ProductoRequest request) {
		// TODO Auto-generated method stub
		return tuneoDao.buscarValoracion(request);
	}
	public ProductoResponse buscarProductoTallado(ProductoRequest request) {
		return tuneoDao.buscarProductoTallado(request);
	}
	public PresentacionProductoResponse buscarPresentacionProducto(PresentacionRequest request) {
		return tuneoDao.buscarPresentacionProducto(request);
	}


	
	public boolean enviarEmail(String origen, String cpass, String destino, String asunto, String mensaje) {

	    Properties props = System.getProperties();
	    props.put("mail.smtp.host", "smtp.gmail.com");  
	    props.put("mail.smtp.auth", "true");    
	    props.put("mail.smtp.starttls.enable", "true");
	    props.put("mail.smtp.port", "587");

	    Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(origen, cpass);
                    }
                });
	    MimeMessage message = new MimeMessage(session);
	    try {
	        message.setFrom(new InternetAddress(origen));
	        message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(destino)
            );
	        message.setSubject(asunto);
	        message.setText(mensaje);
	        Transport.send(message);
	    }
	    catch (MessagingException me) {
	        me.printStackTrace(); 
	        return false;
	    }
		return true;
	}

}
