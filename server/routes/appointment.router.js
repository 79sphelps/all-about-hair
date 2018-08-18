const ctrlAppointments = require('../controllers/appointments.controller');


module.exports = function(app, jwtCheck, adminCheck) {
    console.log('... appt routes ...');
    app.get('/api/admin/appointments', jwtCheck, adminCheck, ctrlAppointments.getAppointments);
    app.get('/api/admin/appointments/:id', jwtCheck, adminCheck, ctrlAppointments.getAppointmentById);
    
    app.post('/api/appointments/new', ctrlAppointments.create);
    
    app.put('/api/admin/appointments/update/:id', jwtCheck, adminCheck, ctrlAppointments.update);
    app.delete('/api/admin/appointments/:id', jwtCheck, adminCheck, ctrlAppointments.delete);
};
