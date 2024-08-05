// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService';

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([]);

    const navigator = useNavigate();

    useEffect(() => { listAllDepartments(); }, []);

    function listAllDepartments() {
        getAllDepartments().then((response) => { setDepartments(response.data); }).catch((error) => { console.error(error); });
    }

    function addNewDepartment() {
        navigator('/add-department')
    }

    function updateDepartment(id) {
        navigator(`/edit-department/${id}`)
    }

    function removeDepartment(id) {
        deleteDepartment(id).then(() => { listAllDepartments(); }).catch((error) => { console.error(error) })
    }
    return (
        <div className='container'>
            <h2 className='text-center'>List of departments</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.name}</td>
                                <td>{department.description}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => updateDepartment(department.id)}>update</button>
                                    <button className='btn btn-danger' onClick={() => removeDepartment(department.id)}
                                        style={{ marginLeft: '10px' }}>delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            <button className='btn btn-primary mb-2' onClick={addNewDepartment}>Add Department</button>
        </div>
    );
};

export default ListDepartmentComponent
