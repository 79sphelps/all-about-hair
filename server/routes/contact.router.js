const ctrlContact = require('../controllers/contact.controller');


module.exports = function(app, jwtCheck, adminCheck) {
    app.get('/api/admin/contact', ctrlContact.getContactInfo);
    app.get('/api/admin/contact/:id', jwtCheck, ctrlContact.getContactInfoById);
    //app.post('/api/admin/contact', jwtCheck, adminCheck, ctrlContact.create);
    app.put('/api/admin/contact/update/:id', jwtCheck, adminCheck, ctrlContact.update);
    //app.delete('/api/admin/contact/:id', jwtCheck, adminCheck, ctrlContact.delete);
};