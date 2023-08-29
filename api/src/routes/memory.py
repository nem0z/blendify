from fastapi import APIRouter, status, HTTPException, Depends
from sqlalchemy.orm import Session
from src.database import get_db

from datetime import datetime

from src.models.memory import Memory

router = APIRouter()

@router.get("/{id}", tags=["Memory"])
def read_memory(id: int, db: Session = Depends(get_db)):
    memory = db.query(Memory).get(id)
    
    if not memory:
        raise HTTPException(status_code=404, detail=f"Slideshow with id {id} not found")

    return memory

@router.post("/{slideshow_id}", tags=["Memory"], status_code=status.HTTP_201_CREATED)
def create_memory(link: str, desc: str, slideshow_id: int, db: Session = Depends(get_db)):
    memory = Memory(link=link, desc=desc, slideshow_id=slideshow_id)
    db.add(memory)
    db.commit()
    db.refresh(memory)
    return memory


@router.put("/{id}", tags=["Memory"])
def update_memory(desc: str, date: datetime, id: int, db: Session = Depends(get_db)):
    memory = db.query(Memory).get(id)

    if memory:
        memory.desc = desc
        memory.date = date
        db.commit()
        db.refresh(memory)
        
    if not memory:
        raise HTTPException(status_code=404, detail=f"Memory with id {id} not found")
        
    return db.query(Memory).get(id)

@router.delete("/{id}", tags=["Memory"])
def delete_memory(id: int, db: Session = Depends(get_db)):
    memory = db.query(Memory).get(id)

    if memory:
        db.delete(memory)
        db.commit()
    else:
        raise HTTPException(status_code=404, detail=f"Memory with id {id} not found")
    
    return None