package com.example.reactspring.controller;

import com.example.reactspring.entity.Producto;
import com.example.reactspring.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin
public class ProductosController {

    @Autowired
    private IProductoService service;

    @GetMapping("/")
    public List<Producto> listar(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Producto obtenerPorId(@PathVariable("id") int id){
        return service.getById(id);
    }

    @PostMapping("/")
    public Producto registrar(Producto producto){
        return service.save(producto);
    }

    @PutMapping("/")
    public String modificar(@RequestBody Producto producto){
        return service.update(producto);
    }

    @DeleteMapping("/{id}")
    public String borrar(@PathVariable("id") int id){
        return service.delete(id);
    }
}
