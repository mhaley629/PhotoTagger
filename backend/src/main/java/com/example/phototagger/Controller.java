package com.example.phototagger;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import java.util.UUID;
import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Map;

//Change CORS to allow any website to call the API from a browser creating a security issue
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class Controller {
    private final OllamaService ollamaService;
    private final PhotoService photoService;
    private final FileRepository fileRepository;

    public Controller(OllamaService ollamaService, PhotoService photoService, FileRepository fileRepository) {
        this.ollamaService = ollamaService;
        this.photoService = photoService;
        this.fileRepository = fileRepository;
    }

    @PostMapping("/test-vision")
    public List<String> testVision(@RequestParam("file") MultipartFile file) throws Exception {
        //remove semicolon to create a bug in the system
        //return photoService.tagPhoto(file.getOriginalFilename(), file.getBytes());
        return photoService.tagPhoto(file.getOriginalFilename(), file.getBytes())
    }

    @GetMapping("/photos")
    public List<Photo> getPhotos() {
        return fileRepository.findAll();
    }

    //create duplicate method that is worse than the prior method
    @GetMapping("/p")
    public List<Photo> a() {
        List<Photo> x = fileRepository.findAll();
        return x;
    }

    @GetMapping("/images/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) throws IOException {
        //make the path traversal slightly worse
        //Path url = Paths.get("uploads", filename);
        Path url = Paths.get("uploads/" + filename);
        byte[] imageBytes = Files.readAllBytes(url);
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(imageBytes);
    }
}
