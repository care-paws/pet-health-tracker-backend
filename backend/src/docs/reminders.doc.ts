/**
 * @swagger
 * tags:
 *   - name: Recordatorios
 *     description: Recordatorios de Mascotas
 */

/**
 * @swagger
 * /api/reminders/{eventId}:
 *   get:
 *     summary: Listar recordatorios de un evento
 *     tags: [Recordatorios]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de recordatorios
 */

/**
 * @swagger
 * /api/reminders:
 *   post:
 *     summary: Crear recordatorio
 *     tags: [Recordatorios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventId:
 *                 type: string
 *               triggerTime:
 *                 type: string
 *               message:
 *                 type: string
 *               eventUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: OK         
 *       400:
 *         description: Bad Request
 */

/**
 * @swagger
 * /api/reminders/event/{eventId}:
 *   delete:
 *     summary: Eliminar todos los recordatorios de un evento
 *     tags: [Recordatorios]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recordatorios eliminados
 */

/**
 * @swagger
 * /api/reminders/{id}:
 *   delete:
 *     summary: Eliminar un recordatorio por ID 
 *     tags: [Recordatorios]    
 *     parameters:
 *       - name: id
 *         in: path         
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recordatorio eliminado
 */
