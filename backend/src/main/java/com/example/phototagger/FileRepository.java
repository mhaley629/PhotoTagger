package com.example.phototagger;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FileRepository extends JpaRepository<Photo, Long>{
    List<Photo> findByTagsContaining(String tag);
}