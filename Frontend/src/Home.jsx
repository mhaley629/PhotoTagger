function Home({ onNavigate }) {
    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "3rem 1.5rem",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
            }}
        >
            <p
                style={{
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#a8785c",
                    margin: "0 0 1.25rem",
                    fontWeight: 600,
                }}
            >
                Photo Tagger
            </p>

            <h1
                style={{
                    fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                    fontWeight: 700,
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    margin: "0 0 1.25rem",
                    color: "#1c1917",
                }}
            >
                Every photo,
                <br />
                described automatically.
            </h1>

            <p
                style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "#6b6560",
                    margin: "0 0 2.75rem",
                    maxWidth: "440px",
                }}
            >
                Drop in a photo and a vision model reads it, tags it, and files it away —
                so your whole collection stays searchable without you lifting a finger.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "4rem" }}>
                <button
                    onClick={() => onNavigate("upload")}
                    style={{
                        background: "#c2673f",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0.8rem 1.65rem",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    Upload a photo
                </button>

                <button
                    onClick={() => onNavigate("photos")}
                    style={{
                        background: "transparent",
                        color: "#1c1917",
                        border: "1px solid #ddd6cf",
                        borderRadius: "8px",
                        padding: "0.8rem 1.65rem",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    View gallery
                </button>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    borderTop: "1px solid #e7e2db",
                    paddingTop: "1.75rem",
                }}
            >
                {[
                    ["Upload", "Choose any photo from your device."],
                    ["Tag", "A vision model describes what it sees."],
                    ["Browse", "Every tag lands in your gallery, searchable."],
                ].map(([title, desc]) => (
                    <div key={title} style={{ flex: 1 }}>
                        <p
                            style={{
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                color: "#1c1917",
                                margin: "0 0 0.35rem",
                            }}
                        >
                            {title}
                        </p>
                        <p
                            style={{
                                fontSize: "0.85rem",
                                lineHeight: 1.5,
                                color: "#8a8377",
                                margin: 0,
                            }}
                        >
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;