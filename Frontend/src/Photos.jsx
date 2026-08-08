import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import './Photos';
import Navbar from "./Navbar.jsx";

function Photos() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/photos")
            .then((res) => res.json())
            .then((data) => setPhotos(data));
    }, []);

    return (
        <ImageList variant="standard" cols={3} gap={16} sx={{ padding: "1.5rem" }}>
            {photos.map((photo) => (
                <ImageListItem key={photo.id}>
                    <img
                        src={`http://localhost:8080/images/${photo.imagePath.split("/").pop()}`}
                        alt={photo.filename}
                        loading="lazy"
                        style={{ borderRadius: "8px" }}
                    />
                    <ImageListItemBar
                        title={photo.filename}
                        subtitle={
                            <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ pt: 0.5, pb: 0.5 , overflowX: 'auto'}} spacing={1}>
                                {photo.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{ height: "20px", fontSize: "16px", background: "#4169e1", color: "white"}}
                                    />
                                ))}
                            </Stack>
                        }
                        sx={{
                            "& .MuiImageListItemBar-subtitle": { overflow: "visible" },
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Photos;