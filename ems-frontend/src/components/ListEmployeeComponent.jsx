import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);

        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewEmployee(){
        navigator('/add-employee')

    }


    return (
        <div className='container'>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>

        </div>
    )
}

export default ListEmployeeComponent
