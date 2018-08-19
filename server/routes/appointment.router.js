const ctrlAppointments = require('../controllers/appointments.controller');


module.exports = function(app, testCheck, jwtCheck, adminCheck) {
    app.get('/api/admin/appointments', ctrlAppointments.getAppointments);
    app.get('/api/admin/appointments/:id', jwtCheck, adminCheck, ctrlAppointments.getAppointmentById);
    app.post('/api/appointments/new', ctrlAppointments.create);
    app.put('/api/admin/appointments/update/:id', testCheck, jwtCheck, adminCheck, ctrlAppointments.update);
    app.delete('/api/admin/appointments/:id', jwtCheck, adminCheck, ctrlAppointments.delete);
};
