package com.example.reactspring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ProductoExceptionHandler extends ResponseEntityExceptionHandler {
    @ResponseBody
    @ExceptionHandler(ProductoNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String productoNotFoundHandler(ProductoNotFoundException e){
        return e.getMessage();
    }

    @ResponseBody
    @ExceptionHandler(ProductoNotSavedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String productoNotSavedHandler(ProductoNotSavedException e){
        return e.getMessage();
    }
}
