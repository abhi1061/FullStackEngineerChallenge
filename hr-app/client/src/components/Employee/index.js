import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import './employee.css';
import AddEmployeeButton from './AddEmployeeButton';
import EmployeeModal from './EmployeeModal';
import EmployeeTable from './EmployeeTable';
import { listEmplyees, createEmployee, editEmployee } from '../../actions';

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
        setShowEmployeeModal(false);
    };

    const editExistingEmployee = async () => {
        const newEmployees = [...employees];
        const response = await editEmployee(employee._id, employee);
        const index = _.findIndex(employees, ['_id', employee._id]);
        newEmployees[index] = response;
        setEmployees(newEmployees);
        setShowEmployeeModal(false);
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
            />
        </div>
    );
}
