from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from .base import Base

engine = create_engine("sqlite:///../storage.db")

class Memory(Base):
    __tablename__ = 'memory'
    id = Column(Integer, primary_key=True, index=True)
    slideshow_id = Column(Integer, ForeignKey('slideshow.id'))
    link = Column(String)
    desc = Column(String)
    date = Column(DateTime, nullable=True)

    slideshow = relationship('SlideShow', back_populates='memories')

Base.metadata.create_all(engine)