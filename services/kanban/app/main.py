from fastapi import FastAPI

app = FastAPI()


@app.get("/avidboard/api/kanban/status")
def get_status():
    return {"status": "OK"}
