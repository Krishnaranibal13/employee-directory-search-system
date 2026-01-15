from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.employee import Employee

def search_employees_repo(db: Session, keyword: str):
    return db.query(Employee).filter(
        or_(
            Employee.name.ilike(f"%{keyword}%"),
            Employee.department.ilike(f"%{keyword}%"),
            Employee.designation.ilike(f"%{keyword}%")
        )
    ).all()


def get_all_employees_repo(db: Session):
    return db.query(Employee).all()
