# from sqlalchemy import Column, Integer, String, Date
# from app.db.session import Base

# class Employee(Base):
#     __tablename__ = "employees"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String(100), nullable=False, index=True)
#     email = Column(String(120), unique=True, nullable=False)
#     department = Column(String(100), nullable=False, index=True)
#     designation = Column(String(100), nullable=False)
#     date_of_joining = Column(Date, nullable=False)

from sqlalchemy import Column, Integer, String, Date
from app.db.session import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False, index=True)
    email = Column(String(120), unique=True, nullable=False)
    department = Column(String(100), nullable=False, index=True)
    designation = Column(String(100), nullable=False)
    date_of_joining = Column(Date, nullable=False)
