from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.repositories.employee_repository import (
    search_employees_repo,
    get_all_employees_repo
)

def search_employee_service(db: Session, keyword: str):
    if not keyword.strip():
        raise HTTPException(status_code=400, detail="Search query cannot be empty")
    return search_employees_repo(db, keyword)

def get_all_employees_service(db: Session):
    return get_all_employees_repo(db)
