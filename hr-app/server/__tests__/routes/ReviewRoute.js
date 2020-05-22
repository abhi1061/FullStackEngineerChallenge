jest.mock('../../services/ReviewService')
const request = require('supertest')
const ReviewService = require('../../services/ReviewService')
const app = require('../../app')

describe('Review Routes', () => {
    it('PUT should return HTTP 204 when app parameters are valid and review updated successfully', async () => {
        ReviewService.put = jest.fn(() => Promise.resolve({}))
        await request(app)
            .put('/review/5ec4c9c4c7823700117b676a')
            .send({
                jobKnowledge: 5,
                workQuality: 1,
                attendance: 5,
                initiative: 3,
                communication: 3,
                dependibility: 5,
            })
            .expect(204)
    })
    it('PUT should return HTTP 400 when app parameters are not valid actual marking is not a number', async () => {
        ReviewService.put = jest.fn(() => Promise.resolve({}))
        await request(app)
            .put('/review/5ec4c9c4c7823700117b676a')
            .send({
                jobKnowledge: null,
                workQuality: 1,
                attendance: 5,
                initiative: 3,
                communication: 3,
                dependibility: 5,
            })
            .expect(400)
    })
    it('PUT should return HTTP 400 when app parameters are not valid and some review markings are missing', async () => {
        ReviewService.put = jest.fn(() => Promise.resolve({}))
        await request(app)
            .put('/review/5ec4c9c4c7823700117b676a')
            .send({
                dependibility: 5,
            })
            .expect(400)
    })
})
