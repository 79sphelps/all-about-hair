const ctrlAppointments = require('../controllers/appointments.controller');


module.exports = function(app, jwtCheck, adminCheck) {
    app.get('/api/admin/appointments', ctrlAppointments.getAppointments);
    app.get('/api/admin/appointments/:id', jwtCheck, ctrlAppointments.getRequestById);
    app.post('/api/appointments/new', ctrlAppointments.create);
    app.put('/api/admin/appointments/update/:id', jwtCheck, adminCheck, ctrlAppointments.update);
    app.delete('/api/admin/appointments/:id', jwtCheck, adminCheck, ctrlAppointments.delete);
};
