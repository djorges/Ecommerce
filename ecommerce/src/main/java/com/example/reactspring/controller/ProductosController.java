package com.example.reactspring.controller;

import com.example.reactspring.entity.Producto;
import com.example.reactspring.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin
public class ProductosController {
    private static final String SAVE_MESSAGE_SUCCESS = "Agregado exitosamente.";
    private static final String SAVE_MESSAGE_ERROR = "No se pudo agregar.";
    private static final String UPDATE_MESSAGE_SUCCESS = "Modificado exitosamente";
    private static final String UPDATE_MESSAGE_ERROR = "No se pudo modificar.";
    private static final String DELETE_MESSAGE_SUCCESS = "Borrado exitosamente";
    private static final String DELETE_MESSAGE_ERROR = "No se pudo borrar.";

    @Autowired
    private IProductoService service;

    @GetMapping("/")
    public List<Producto> listar(){
        return service.getAll();
    }

    @PostMapping("/")
    public ResponseEntity<String> registrar(@RequestBody Producto producto){
        //Save entity
        if (service.save(producto) != null)
            return ResponseEntity.ok().body(SAVE_MESSAGE_SUCCESS);
        return ResponseEntity.badRequest().body(SAVE_MESSAGE_ERROR);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtener(@PathVariable("id") int id){
        try {
            //Get entity by id
            Producto prod = service.getById(id);
            return ResponseEntity.ok().body(prod);
        }catch(EntityNotFoundException e){
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PutMapping("/")
    public ResponseEntity<String> modificar(@RequestBody Producto producto){
        try {
            service.update(producto);
            return ResponseEntity.ok().body(UPDATE_MESSAGE_SUCCESS);
        }catch(EntityNotFoundException e){
            return ResponseEntity.badRequest().body(UPDATE_MESSAGE_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> borrar(@PathVariable("id") int id){
        try {
            service.delete(id);
            return ResponseEntity.ok().body(DELETE_MESSAGE_SUCCESS);
        }catch(EntityNotFoundException e){
            return ResponseEntity.badRequest().body(DELETE_MESSAGE_ERROR);
        }
    }
}
