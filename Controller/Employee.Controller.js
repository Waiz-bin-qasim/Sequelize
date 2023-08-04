import { response } from "express";
import { Employee } from "../Models/Employee.model.js";

export const addEmployee = (req,res)=>{
    const {emp_name,emp_salary,emp_gender} = req.body;
    if( emp_name && emp_salary && emp_gender){
        const emp = Employee.build({emp_name,emp_salary,emp_gender});
        emp.save().then(response=>{
            console.log(response);
            res.send("done")
        }).catch(err=>{
            res.status(400).send({err:err.parent.sqlMessage})
        });
    }else{
        res.status(400).send({err:"Invalid body"})
    }
}

export const getEmployee = (req,res)=>{
    const{emp_id} = req.params;
    if(emp_id){
        Employee.findOne({where:{
            emp_id:emp_id
        }}).then(response=>{
            if(response){
                res.status(200).send(response)
            }else{
                res.status(400).send("Not Found")
            }
        }).catch(err=>{
            res.status(400).send({err:err.parent.sqlMessage})
        })
    }else{
        res.status(400).send({err:"emp_id Required"})
    }
}

export const deleteEmployee = (req,res)=>{
    const {emp_id} = req.params;
    console.log(emp_id);
    if(emp_id)
    {   Employee.destroy({where:{
            emp_id:emp_id
        }}).then((response)=>{
            console.log(response);
            if(response){
                res.status(200).send("done")
            }else{
                res.status(400).send({err:"Invalid emp_id"})
            }
        }).catch((err)=>{
            res.status(400).send({err:err.parent.sqlMessage})
        })
    }else{
        res.status(400).send({err:"emp_id Required"})
    }
}

export const updateEmployee = (req,res)=>{
    const {emp_id} = req.params;
    const {emp_name,emp_salary,emp_gender} = req.query;
    if(emp_id && (emp_name || emp_salary || emp_gender)){  
        Employee.update({
            emp_name,
            emp_salary,
            emp_gender,
        },{
            where:{emp_id:emp_id}
        }).then((response)=>{
            res.status(200).send("done")
        }).catch(err=>{
            res.status(400).send({err:err.parent.sqlMessage})
        })
    }else{
        res.status(400).send({err:"Invalid Request"})
    }
}