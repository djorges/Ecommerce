package com.example.reactspring.exception;

public class ProductoNotSavedException extends RuntimeException {
    public ProductoNotSavedException(String message) {
        super(message);
    }
}