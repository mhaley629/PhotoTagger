package com.example.phototagger;

import java.util.List;

public record OllamaRequest(String model, String prompt, List<String> images, boolean stream) {

}
