# from fastapi import APIRouter, Depends, Query
# from sqlalchemy.orm import Session

# from app.db.session import get_db
# from app.services.employee_service import (
#     search_employee_service,
#     get_all_employees_service
# )

# router = APIRouter()


# @router.get("/search")
# def search_employees(
#     search: str = Query(..., min_length=1),
#     db: Session = Depends(get_db)
# ):
#     return search_employee_service(db, search)


# @router.get("/all")
# def get_all_employees(db: Session = Depends(get_db)):
#     return get_all_employees_service(db)

# from fastapi import APIRouter, Depends, Query
# from sqlalchemy.orm import Session

# from app.db.session import get_db
# from app.services.employee_service import (
#     search_employee_service,
#     get_all_employees_service
# )

# router = APIRouter()

# @router.get("/search")
# def search_employees(
#     search: str = Query(..., min_length=1),
#     db: Session = Depends(get_db)
# ):
#     return search_employee_service(db, search)


# @router.get("/all")
# def get_all_employees(db: Session = Depends(get_db)):
#     return get_all_employees_service(db)

# from sqlalchemy.orm import Session
# from sqlalchemy import or_
# from app.models.employee import Employee

# def search_employees_repo(db: Session, keyword: str):
#     return db.query(Employee).filter(
#         or_(
#             Employee.name.ilike(f"%{keyword}%"),
#             Employee.department.ilike(f"%{keyword}%"),
#             Employee.designation.ilike(f"%{keyword}%")
#         )
#     ).all()

# def get_all_employees_repo(db: Session):
#     return db.query(Employee).all()


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
