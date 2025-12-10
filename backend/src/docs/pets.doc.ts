/**
 * @swagger 
 * tags:
 *   - name: Pets
 *     description: Operaciones relacionadas con mascotas
 */

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Listar mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Listado de mascotas encontradas
 *       400:
 *         description: No tiene mascotas registradas
 */

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crear una nueva mascota
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:        
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *               breed:
 *                 type: string
 *               age:
 *                 type: string
 *               weight:
 *                 type: string 
 *               photoUrl:
 *                 type: string
 *                 format: binary
 *                        
 *     responses:
 *       201:
 *         description: Mascota creada
 */

/**
 * @swagger
 * /api/pets/{id}/events:
 *   post:
 *     summary: Crear evento
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *               attachmentUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Error
 */