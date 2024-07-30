// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getAllDepartments } from '../services/DepartmentService'
import { Link } from 'react-router-dom'

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([]);

    useEffect(() => { listAllDepartments(); }, []);

    function listAllDepartments() {
        getAllDepartments().then((response) => { setDepartments(response.data); }).catch((error) => { console.error(error); });
    }
    return (
        <div className="container">
            <h2 className="text-center">List of departments</h2>
            <Link to='/add-department' className="btn btn-primary mb-2"> add department</Link>
            <table className="table table-striped table-bordered">
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
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default ListDepartmentComponent
