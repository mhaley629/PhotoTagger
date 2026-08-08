package com.example.phototagger;

import org.springframework.stereotype.Service;
import com.example.phototagger.FileRepository;
import com.example.phototagger.OllamaService;
import java.util.List;
import java.util.Base64;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import java.io.IOException;

@Service
public class PhotoService{
    private final OllamaService ollamaService;
    private final FileRepository fileRepository;

    public PhotoService(OllamaService ollamaService, FileRepository fileRepository){
        this.ollamaService = ollamaService;
        this.fileRepository = fileRepository;
    }

    public List<String> tagPhoto(String filename, byte[] imageBytes) throws IOException {
        String imagePath = saveImageToDisk(imageBytes, filename);
        String base64Image = Base64.getEncoder().encodeToString(imageBytes);
        List<String> tags = ollamaService.tagPhoto(base64Image, "Reply with exactly 5 short descriptive tags for this image, seperated by commas. No sentence, no numbering, no extra text.");

        Photo entry = new Photo(filename, tags, imagePath);
        fileRepository.save(entry);

        return tags;
    }
    private String saveImageToDisk(byte[] imageBytes, String originalFilename) throws IOException {
        String uniqueFilename = UUID.randomUUID() + "_" + originalFilename;
        Path uploadPath = Paths.get("uploads", uniqueFilename);
        Files.createDirectories(uploadPath.getParent());
        Files.write(uploadPath, imageBytes);
        return uploadPath.toString();
    }
}