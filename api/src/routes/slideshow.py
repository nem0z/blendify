from fastapi import APIRouter, status, HTTPException, Depends
from sqlalchemy.orm import Session
from src.database import get_db

import uuid

from src.models.slideshow import SlideShow
from src.models.memory import Memory

router = APIRouter()

@router.get("/", tags=["Slideshow"])
def read_slideshow_list(db: Session = Depends(get_db)):
    return db.query(SlideShow).all()

@router.get("/{id}", tags=["Slideshow"])
def read_slideshow(id: int, db: Session = Depends(get_db)):
    slideshow = db.query(SlideShow).get(id)
    if not slideshow:
        raise HTTPException(status_code=404, detail=f"Slideshow with id {id} not found")

    return slideshow

@router.get("/{id}/memories", tags=["Slideshow"])
def read_slideshow(id: int, db: Session = Depends(get_db)):
    return db.query(Memory).filter(Memory.slideshow_id == id).all()

@router.post("", tags=["Slideshow"], status_code=status.HTTP_201_CREATED)
def create_slideshow(title: str, db: Session = Depends(get_db)):
    hash = str(uuid.uuid4())
    slideshow = SlideShow(title=title, hash=hash)
    db.add(slideshow)
    db.commit()
    db.refresh(slideshow)
    return slideshow

@router.put("/{id}", tags=["Slideshow"])
def update_slideshow(id: int, title: str, db: Session = Depends(get_db)):
    slideshow = db.query(SlideShow).get(id)

    if slideshow:
        slideshow.title = title
        db.commit()
        db.refresh(slideshow)
        
    if not slideshow:
        raise HTTPException(status_code=404, detail=f"Slideshow with id {id} not found")
        
    return db.query(SlideShow).get(id)

@router.delete("/{id}", tags=["Slideshow"])
def delete_slideshow(id: int, db: Session = Depends(get_db)):
    slideshow = db.query(SlideShow).get(id)

    if slideshow:
        db.delete(slideshow)
        db.commit()
    else:
        raise HTTPException(status_code=404, detail=f"Slideshow with id {id} not found")
    
    return None