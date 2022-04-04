package com.example.reactspring.service;

import com.example.reactspring.entity.Producto;
import com.example.reactspring.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ProductoServiceImpl implements IProductoService {
    @Autowired
    private ProductoRepository repository;

    @Override
    public Producto save(Producto producto) {
        return repository.save(producto);
    }

    @Override
    public List<Producto> getAll(){
        return repository.findAll();
    }

    @Override
    public Producto getById(int id) throws EntityNotFoundException{
        return repository.findById(id).orElseThrow(()-> new EntityNotFoundException());
    }

    @Override
    public void update(Producto producto) throws EntityNotFoundException {
        getById(producto.getId());

        save(producto);
    }

    @Override
    public void delete(int id) throws EntityNotFoundException {
        Producto producto = getById(id);

        repository.delete(producto);
    }
}
