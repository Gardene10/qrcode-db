const express = require('express');
const router = express.Router();

const TicketController = require('./controllers/TicketController');

// Ping test
router.get('/ping', (req, res) => {
  res.json({ pong: false });
});

// Adicionando um ticket
router.post('/ad/ticket', TicketController.addTicket);

// Listando os tickets
router.get('/ad/list', TicketController.getTickets); 
// consultando e invalidando
router.put('/consult/invalidate/:id', TicketController.consultAndInvalidateTicket);
// gerando automaticamente do 1 ao 170
router.post('/create-initial-tickets', TicketController.createInitialTickets);


module.exports = router;
