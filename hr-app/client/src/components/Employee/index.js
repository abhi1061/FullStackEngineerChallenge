import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import './employee.css';
import AddEmployeeButton from './AddEmployeeButton';
import EmployeeModal from './EmployeeModal';
import EmployeeTable from './EmployeeTable';
import {
    listEmplyees,
    createEmployee,
    editEmployee,
    deleteEmployee,
} from '../../actions';

export default function EmployeePage(props) {
    const { user } = props;
    const [showEmployeeModal, setShowEmployeeModal] = useState(false);
    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([]);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        async function fetchEmployees() {
            const response = await listEmplyees();
            setEmployees(response);
        }
        fetchEmployees();
    }, []);

    const createNewEmployee = async () => {
        const response = await createEmployee(employee);
        setEmployees((previousState) => [...previousState, response]);
        handleClose();
    };

    const editExistingEmployee = async () => {
        await editEmployee(employee._id, employee);
        const newEmployees = [...employees];
        const index = _.findIndex(employees, ['_id', employee._id]);
        newEmployees[index] = employee;
        setEmployees(newEmployees);
        handleClose();
    };

    const deleteExistingEmployee = async (id) => {
        await deleteEmployee(id);
        const index = _.findIndex(employees, ['_id', id]);
        const newEmployees = [...employees];
        newEmployees.splice(index, 1);
        setEmployees(newEmployees);
    };

    const handleClose = () => {
        setEditMode(false);
        setShowEmployeeModal(false);
        setEmployee({});
    };

    return (
        <div className="employee-container">
            {user.role === 'admin' ? (
                <div className="add-emplyee-btn-container">
                    <AddEmployeeButton
                        setShowEmployeeModal={setShowEmployeeModal}
                    />
                </div>
            ) : null}
            <EmployeeTable
                data={employees}
                user={user}
                setEmployee={setEmployee}
                setShowEmployeeModal={setShowEmployeeModal}
                setEditMode={setEditMode}
                deleteExistingEmployee={deleteExistingEmployee}
            />
            <EmployeeModal
                showEmployeeModal={showEmployeeModal}
                setShowEmployeeModal={setShowEmployeeModal}
                employee={employee}
                setEmployee={setEmployee}
                createEmployee={createEmployee}
                editMode={editMode}
                setEditMode={setEditMode}
                createNewEmployee={createNewEmployee}
                editExistingEmployee={editExistingEmployee}
                handleClose={handleClose}
            />
        </div>
    );
}
