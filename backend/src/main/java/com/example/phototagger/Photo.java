package com.example.phototagger;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.*;
import java.util.Base64;
import java.nio.file.Files;
import java.nio.file.Path;

import java.util.List;

@Entity
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;

    @ElementCollection
    private List<String> tags;

    private String imagePath;

    public Photo(){}

    public Photo(String fileName, List<String> tags, String imagePath){
        this.fileName = fileName;
        this.tags = tags;
        this.imagePath = imagePath;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getFileName() {
        return fileName;
    }
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    public List<String> getTags() {
        return tags;
    }
    public String getImagePath() {
        return imagePath;
    }
}