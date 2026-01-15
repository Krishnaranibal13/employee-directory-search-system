from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.services.employee_service import (
    search_employee_service,
    get_all_employees_service
)

router = APIRouter()

@router.get("/search")
def search_employees(search: str = "", db: Session = Depends(get_db)):
    return search_employee_service(db, search)

@router.get("/all")
def get_all_employees(db: Session = Depends(get_db)):
    return get_all_employees_service(db)
