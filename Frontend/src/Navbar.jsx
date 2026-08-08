import { useState } from 'react';
import './Navbar.css';

function Navbar({ onNavigate }){
    return(
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", background: "#222", color: "#fff" }}>
            <div style={{fontWeight: "bold", fontSize: "1.25rem"}} >
                <button
                    onClick={() => onNavigate("home")}
                    style={{fontWeight: "bold", fontSize: "1.25rem", background: "none", border: "none", cursor: "pointer"}}
                >
                    PhotoTag
                </button>
            </div>

            <ul style={{display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0}}>
                <li>
                    <button
                        onClick={() => onNavigate("upload")}
                        style={{background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "1rem"}}
                    >
                        Upload
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => onNavigate("photos")}
                        style={{background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "1rem"}}
                    >
                        Gallery
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;