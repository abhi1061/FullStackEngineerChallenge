jest.mock('../../services/EmployeeService')
const request = require('supertest')
const EmployeeService = require('../../services/EmployeeService')
const app = require('../../app')

describe('Employee Routes', () => {
    it('POST should return HTTP 201 response when request parameters are valid and emplyee saved successfully', async () => {
        const expectedBody = {
            _id: '123423432aesf',
            name: 'Phill Collins',
            email: 'collins@gmail.com',
            department: 'MTSD',
            post: 'Application Engineer',
            phoneNumber: '(080) 90491061',
        }
        EmployeeService.post = jest.fn(() => Promise.resolve(expectedBody))
        await request(app)
            .post('/employee')
            .send({
                name: 'Phill Collins',
                email: 'collins@gmail.com',
                department: 'MTSD',
                post: 'Application Engineer',
                phoneNumber: '(080) 90491061',
            })
            .expect(201, expectedBody)
    })
    it('POST should return HTTP 400 response when request parameters are not valid', async () => {
        const expectedBody = {
            _id: '123423432aesf',
            name: 'Phill Collins',
            email: 'collins@gmail.com',
            department: 'MTSD',
            post: 'Application Engineer',
            phoneNumber: '(080) 90491061',
        }
        EmployeeService.post = jest.fn(() => Promise.resolve(expectedBody))
        await request(app)
            .post('/employee')
            .send({
                name: 'Phill Collins',
                phoneNumber: '(080) 90491061',
            })
            .expect(400)
    })

    it('PUT should return HTTP 204 when app parameters are valid and employee updated successfully', async () => {
        let serviceResp = {
            _id: '5ec4c9c4c7823700117b676a',
            name: 'Thomas Lang',
            email: 'lang.thomas@gmail.com',
            department: 'MTSD',
            post: 'Application Engineer',
            phoneNumber: '(070) 50591562',
            createdAt: '2020-05-20T06:10:12.229Z',
            updatedAt: '2020-05-20T06:10:12.229Z',
            __v: 0,
        }
        EmployeeService.put = jest.fn(() => Promise.resolve(serviceResp))
        await request(app)
            .put('/employee/5ec4c9c4c7823700117b676a')
            .send({
                name: 'Thomas Lang',
                email: 'lang.thomas@gmail.com',
                department: 'MTSD',
                post: 'Application Engineer',
                phoneNumber: '(070) 50591562',
            })
            .expect(204, {})
    })

    it('PUT should return HTTP 400 when app parameters are not valid and employee did not update successfully', async () => {
        let serviceResp = {
            _id: '5ec4c9c4c7823700117b676a',
            name: 'Thomas Lang',
            email: 'lang.thomas@gmail.com',
            department: 'MTSD',
            post: 'Application Engineer',
            phoneNumber: '(070) 50591562',
            createdAt: '2020-05-20T06:10:12.229Z',
            updatedAt: '2020-05-20T06:10:12.229Z',
            __v: 0,
        }
        EmployeeService.put = jest.fn(() => Promise.resolve(serviceResp))
        await request(app)
            .put('/employee/5ec4c9c4c7823700117b676a')
            .send({
                phoneNumber: '(070) 50591562',
            })
            .expect(400)
    })

    it('PUT should return HTTP 204 when app parameters are valid and employee deleted successfully', async () => {
        let serviceResp = {
            _id: '5ec4c9c4c7823700117b676a',
        }
        EmployeeService.del = jest.fn(() => Promise.resolve(serviceResp))
        await request(app)
            .delete('/employee/5ec4c9c4c7823700117b676a')
            .expect(204)
    })

    it('PUT should return HTTP 400 when app parameters are not valid and employee deleted successfully', async () => {
        let serviceResp = {
            _id: '5ec4c9c4c7823700117b676a',
        }
        EmployeeService.del = jest.fn(() => Promise.resolve(serviceResp))
        await request(app)
            .delete('/employee/5ec4c9c4c7823700117b676a')
            .expect(204)
    })
})
