# API
from fastapi import FastAPI, status

# DB
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Models
from src.models.base import Base
from src.models.slideshow import SlideShow
from src.models.memory import Memory

# Routes
import src.routes.slideshow as slideshow
import src.routes.memory as memory

# Setup DB
from .database import engine, SessionLocal

# Setup API
app = FastAPI()
app.include_router(slideshow.router, prefix="/slideshow")
app.include_router(memory.router, prefix="/memory")

@app.get("/")
def root():
    return "Blendify"
