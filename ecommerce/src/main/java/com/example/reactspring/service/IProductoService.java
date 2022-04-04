package com.example.reactspring.service;

import com.example.reactspring.entity.Producto;

import javax.persistence.EntityNotFoundException;
import java.util.List;

public interface IProductoService {
    Producto save(Producto producto);
    List<Producto> getAll();
    Producto getById(int id) throws EntityNotFoundException;
    void update(Producto producto) throws EntityNotFoundException;
    void delete(int id) throws EntityNotFoundException;
}
