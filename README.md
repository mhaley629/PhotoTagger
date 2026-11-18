# Photo Tagger

Upload a photo, and a local vision model automatically tags it — no manual labeling required. Every photo and its tags are saved so you can browse them later in a gallery.

## How it works

1. **Upload** — pick a photo from your device
2. **Tag** — the photo is sent to a locally running vision model ([Ollama](https://ollama.com) + LLaVA), which describes what it sees
3. **Save** — the photo is written to disk and its tags are saved to a local database
4. **Browse** — every tagged photo shows up in the gallery, tags and all

## Stack

| Layer | Tech |
|---|---|
| Frontend | React (Vite) |
| Backend | Spring Boot (Java 26) |
| Vision model | Ollama, running `llava` locally |
| Database | H2 (file-based, persists to disk) |
| Image storage | Local filesystem (`backend/uploads/`) |

## Running it

**1. Start Ollama** (if it isn't already running)

**2. Start the backend**
```bash
cd backend
./mvnw spring-boot:run
```
Runs on `http://localhost:8080`.

**3. Start the frontend**
```bash
cd Frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`.

Open `http://localhost:5173` in your browser.

## API endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/test-vision` | Upload a photo, get back a list of tags |
| `GET` | `/photos` | List all saved photos |
| `GET` | `/images/{filename}` | Fetch a saved image's raw bytes |

Test
