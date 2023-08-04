import { Router } from 'express';
import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from '../Controller/Employee.Controller.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const employeeRoute = new Router();

// Add employeeRoute
employeeRoute.get('/:emp_id', getEmployee);
employeeRoute.post('/', addEmployee);
employeeRoute.put('/:emp_id', updateEmployee);
employeeRoute.delete('/:emp_id', deleteEmployee);

export default employeeRoute;
