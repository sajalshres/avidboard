from fastapi import FastAPI

app = FastAPI()


@app.get("/api/kanban/status")
def get_status():
    return {"status": "OK"}
