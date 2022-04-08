import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';


const TOKEN = 'ac65363082b0183d2ae8bed48407cfc578d4fae2258dc73f33c5126515b20b7b';

describe('Users', () => {
    it('GET /users', () => {
        // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
        // console.log(err);
        // console.log(res.body);
        // expect(res.body.data).to.not.be.empty;
        // done();
        // });
        return request.get(`users?access-token=${TOKEN}`).then((res) => {
            console.log(res.body);
        });
    });
    // http get method
    it('GET /users/:id', () => {
        return request.get(`users/3575?access-token=${TOKEN}`).then((res) => {
            // expect(res.body.data.id).to.be.eq(1);
            console.log(res.body);
        });
    });
});
// it('GET /users with query params', () => {
//     const url = `users?access-token=${TOKEN}&pages=5&gender=Female&status=Active`;

//     return request.get(url).then((res) => {
//         expect(res.body.data).to.not.be.empty;
//         res.body.data.forEach((data) => {
//             expect(data.gender).to.eq('Female');
//             expect(data.status).to.eq('Active');
//         });
//     });
// });



//post method
it('POST /users', () => {
    // const data = {};
    const data = {
        email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
        name: 'Mahbub',
        gender: 'male',
        status: 'active',
    };

    return request
        .post('users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
            // expect(res.body.data).to.deep.include(data);
            console.log(res.body);
        });
});




//put 
it('PUT /users/:id', () => {
    const data = {
        status: 'inactive',
        name: `Suresh Varrier Esq. - ${Math.floor(Math.random() * 9999)}`,
    };

    return request
        .put('users/128')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then((res) => {
            // console.log(res.body);
            expect(res.body.data).to.deep.include(data);
        });
});
//delete
it('DELETE /users/:id', () => {
    return request
        .delete('users/25')
        .set('Authorization', `Bearer ${TOKEN}`)
        .then((res) => {
            console.log(res.body);
            expect(res.body.data).to.be.eq(null);
        });
});