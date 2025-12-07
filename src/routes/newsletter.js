const express = require('express');
const router = express.Router();
const config = require('../config/config');
const logger = require('../utils/logger');

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email inválido'
      });
    }

    // Si Listmonk está habilitado
    if (config.listmonk.enabled) {
      const response = await fetch(`${config.listmonk.url}/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${config.listmonk.apiKey}:`).toString('base64')}`
        },
        body: JSON.stringify({
          email,
          name: '',
          lists: [parseInt(config.listmonk.listId)],
          status: 'enabled'
        })
      });

      const data = await response.json();

      if (response.ok) {
        logger.info(`Newsletter subscription: ${email}`);
        return res.json({
          success: true,
          message: 'Suscripción exitosa'
        });
      } else {
        throw new Error(data.message || 'Error al suscribir');
      }
    } else {
      // Si Listmonk no está habilitado, solo loguear
      logger.info(`Newsletter subscription (not processed): ${email}`);
      return res.json({
        success: true,
        message: 'Suscripción registrada'
      });
    }
  } catch (error) {
    logger.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      error: 'Error al procesar suscripción'
    });
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = router;
