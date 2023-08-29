from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from .base import Base

engine = create_engine("sqlite:///../storage.db")

class SlideShow(Base):
    __tablename__ = 'slideshow'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    # owner = Column(Integer, ForeignKey('user.id'))
    hash = Column(String)
    
    memories = relationship('Memory', back_populates='slideshow')

Base.metadata.create_all(engine)