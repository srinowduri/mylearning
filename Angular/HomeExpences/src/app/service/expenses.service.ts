import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../model/expense.model';
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  getExpenses() {
    const url = "http://localhost:2000/api/expenses"
    return this.http.get<Expense[]>(url, {});
  }

  getExpenseById(id: string) {
    const url = "http://localhost:2000/api/expenses/" + id;
    return this.http.get<Expense>(url);
  }

  addNewExpence(expence: Expense) {
    const headers ={
      "content-type": "application/json"
    }

    const url = "http://localhost:2000/api/expenses";
    return this.http.post(url, expence, {headers});
  }

  editExpence(expense: Expense) {
    const headers ={
      "content-type": "application/json"
    }

    const url = "http://localhost:2000/api/expenses";
    return this.http.put(url, expense, {headers});
  }

  deleteExpense(id: string) {
    const url = "http://localhost:2000/api/expenses/" + id;
    return this.http.delete(url);
  }
}
