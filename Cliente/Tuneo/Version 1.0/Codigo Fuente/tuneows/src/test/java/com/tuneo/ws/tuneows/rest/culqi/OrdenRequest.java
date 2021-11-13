package com.tuneo.ws.tuneows.rest.culqi;

public class OrdenRequest {
	private Integer amount;
	private String currency_code; 
	private String description; 
	private String order_number; 
	private Integer expiration_date; 
	private ClienteDetalle client_details;
	private Boolean confirm;
	
	public Boolean getConfirm() {
		return confirm;
	}
	public void setConfirm(Boolean confirm) {
		this.confirm = confirm;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public String getCurrency_code() {
		return currency_code;
	}
	public void setCurrency_code(String currency_code) {
		this.currency_code = currency_code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getOrder_number() {
		return order_number;
	}
	public void setOrder_number(String order_number) {
		this.order_number = order_number;
	}
	public Integer getExpiration_date() {
		return expiration_date;
	}
	public void setExpiration_date(Integer expiration_date) {
		this.expiration_date = expiration_date;
	}
	public ClienteDetalle getClient_details() {
		return client_details;
	}
	public void setClient_details(ClienteDetalle client_details) {
		this.client_details = client_details;
	}
	  
}
