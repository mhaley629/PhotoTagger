import { useState } from "react";

function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
        }
    }

    async function handleUpload() {
        if (!selectedFile) return;
        setLoading(true);

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("http://localhost:8080/test-vision", {
                method: "POST",
                body: formData,
            });
            const tags = await response.json();
            setResult(tags);
        } catch (err) {
            console.error(err);
            setResult(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1.5rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
        >
            <div style={{ width: "100%", maxWidth: "420px" }}>
                <p
                    style={{
                        fontSize: "12px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#a8785c",
                        margin: "0 0 0.5rem",
                        fontWeight: 600,
                        textAlign: "center",
                    }}
                >
                    Photo Tagger
                </p>

                <h1
                    style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        color: "#1c1917",
                        margin: "0 0 2rem",
                        textAlign: "center",
                    }}
                >
                    Upload a photo
                </h1>

                {/* Upload area */}
                <label
                    htmlFor="file-input"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        border: preview ? "1px solid #e7e2db" : "1.5px dashed #ddd6cf",
                        borderRadius: "12px",
                        padding: preview ? "1rem" : "2.5rem 1.5rem",
                        background: "#fbfaf8",
                        cursor: "pointer",
                        transition: "border-color 0.15s ease",
                    }}
                >
                    {preview ? (
                        <img
                            src={preview}
                            alt="preview"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "260px",
                                borderRadius: "8px",
                                objectFit: "cover",
                            }}
                        />
                    ) : (
                        <>
                            <span style={{ fontSize: "1.75rem" }}>📷</span>
                            <span style={{ fontSize: "0.9rem", color: "#6b6560", fontWeight: 500 }}>
                Click to choose a photo
              </span>
                            <span style={{ fontSize: "0.8rem", color: "#a39c90" }}>
                JPG, PNG, or GIF
              </span>
                        </>
                    )}
                    <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </label>

                {preview && (
                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "#a39c90",
                            textAlign: "center",
                            margin: "0.6rem 0 0",
                        }}
                    >
                        Choose a different file above to replace it
                    </p>
                )}

                <button
                    type="button"
                    onClick={handleUpload}
                    disabled={!selectedFile || loading}
                    style={{
                        width: "100%",
                        marginTop: "1.25rem",
                        background: !selectedFile || loading ? "#e7e2db" : "#c2673f",
                        color: !selectedFile || loading ? "#a39c90" : "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0.85rem",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        cursor: !selectedFile || loading ? "default" : "pointer",
                        transition: "background 0.15s ease",
                    }}
                >
                    {loading ? "Uploading…" : "Upload & Tag"}
                </button>

                {/* Results */}
                {result && (
                    <div
                        style={{
                            marginTop: "2rem",
                            borderTop: "1px solid #e7e2db",
                            paddingTop: "1.5rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                color: "#1c1917",
                                margin: "0 0 0.75rem",
                            }}
                        >
                            Tags
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {result.map((tag, index) => (
                                <span
                                    key={index}
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 500,
                                        background: "#f3ede4",
                                        color: "#8a5636",
                                        borderRadius: "999px",
                                        padding: "0.3rem 0.8rem",
                                    }}
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageUploader;
