// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export const DepartmentComponent = () => {

    const [departmentName, setDepartmentName] = useState('')

    const [departmentDescription, setDepartmentDescription] = useState('')

    function saveDepartment(e) {
        e.preventDefault();

        const department = { departmentName, departmentDescription }
        console.log(department)

    }
    return (
        <div className='container'><br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'> Add Department</h2>

                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>department Name:</label>
                                <input
                                    type='text'
                                    name='departmentName'
                                    placeholder='Enter Department Name'
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    className='form-control'>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>department Description:</label>
                                <input
                                    type='text'
                                    name='departmentDescription'
                                    placeholder='Enter Department Description'
                                    value={departmentDescription}
                                    onChange={(e) => setDepartmentDescription(e.target.value)}
                                    className='form-control'>
                                </input>
                            </div>
                            <button className='btn btn-success mb-2' onClick={(e) => saveDepartment(e)}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
