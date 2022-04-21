package com.example.reactspring.service;

import com.example.reactspring.entity.Producto;
import com.example.reactspring.exception.ProductoNotFoundException;
import com.example.reactspring.exception.ProductoNotSavedException;
import com.example.reactspring.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements IProductoService {
    @Autowired
    private ProductoRepository repository;

    @Override
    public Producto save(Producto producto) {
        Producto newProducto = repository.save(producto);
        if(newProducto==null){
            throw new ProductoNotSavedException(SAVE_ERROR_MESSAGE);
        }
        return newProducto;
    }

    @Override
    public List<Producto> getAll(){
        return repository.findAll();
    }

    @Override
    public Producto getById(int id) {
        return repository.findById(id).orElseThrow(()-> new ProductoNotFoundException(ENTITY_NOT_FOUND_MESSAGE));
    }

    @Override
    public String update(Producto producto){
        getById(producto.getId());

        save(producto);

        return UPDATE_SUCCESS_MESSAGE;
    }

    @Override
    public String delete(int id){
        Producto producto = getById(id);

        repository.delete(producto);

        return DELETE_SUCCESS_MESSAGE;
    }

    private static final String ENTITY_NOT_FOUND_MESSAGE = "Producto no encontrado";
    private static final String SAVE_ERROR_MESSAGE= "No se pudo agregar";
    private static final String UPDATE_SUCCESS_MESSAGE = "Modificado exitosamente";
    private static final String DELETE_SUCCESS_MESSAGE = "Borrado exitosamente";
}
