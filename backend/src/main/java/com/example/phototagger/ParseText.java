package com.example.phototagger;

import java.util.*;
import java.util.stream.Collectors;

public class ParseText {
    public static List<String> parseText(String text) {
        String[] lines = text.split(",");
        List<String> tags = new ArrayList<>();
        for(String line : lines) {
            tags.add(line.trim());
        }
        List<String> words = List.of("sure", "here are", "here's", "the tags are", "tags:");
        tags.removeIf(t -> t.isBlank() || words.stream().anyMatch(w -> t.toLowerCase().startsWith(w)));

        tags = tags.stream()
                .map(t -> t.replaceAll("^[\"'\\-\\*\\d\\.\\)]+|[\"']+$", ""))
                .map(String::trim)
                .filter(t -> !t.isBlank())
                .collect(Collectors.toList());

        if(tags.size() > 5) {
            tags = tags.subList(0, 5);
        }
        if(tags.isEmpty()) {
            tags = List.of("No tags found");
        }

        return tags;
    }
}
