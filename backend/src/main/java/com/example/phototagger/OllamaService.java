package com.example.phototagger;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

import static com.example.phototagger.ParseText.parseText;

@Service
public class OllamaService {
    private final RestClient restClient = RestClient.create("http://localhost:11434");

    public List<String> tagPhoto(String photoId, String prompt) {
        OllamaRequest request = new OllamaRequest("llava", prompt, List.of(photoId), false);

        OllamaResponse response = restClient.post()
                .uri("/api/generate")
                .contentType(org.springframework.http.MediaType.APPLICATION_JSON)
                .body(request)
                .retrieve()
                .body(OllamaResponse.class);

        return parseText(response.response());
    }
}
