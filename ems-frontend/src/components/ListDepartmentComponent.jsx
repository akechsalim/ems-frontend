import React, { useState, useEffect } from "react";
import { listDepartments } from "../services/DepartmentService";

const ListDepartmentComponent = () => {
    const [department, setDepartments] = useState([]);

    useEffect(() => {
        getAllDepartments();
    }, []);

    function getAllDepartments() {
        listDepartments()
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className="container">
            <h2 className="text-center">List of departments</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>DepartmentId</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {department.map((department) => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.name}</td>
                            <td>{department.description}</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => updateEmployee(employee.id)}
                                >
                                    update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeEmployee(employee.id)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListDepartmentComponent
