/**
 * @swagger 
 * tags:
 *   - name: Autenticación
 *     description: Operaciones relacionadas con usuario
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar nuevo usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string                
 *                        
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request       
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@gmail.com 
 *               password:
 *                 type: string 
 *                 example: 123456              
 *                        
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
 *       400:
 *         description: Bad Request       
 */

/**
 * @swagger
 * /api/auth/currentUser:
 *   get:
 *     summary: Obtener usuario actual
 *     tags: [Autenticación]    
 *     responses:
 *       200:
 *         description: ok
 *       401:
 *         description: Unauthorized      
 */

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Cerrar sesión
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []     
 *                       
 *     responses:
 *       200:       
 *         description: ok                   
 */

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Olvidé contraseña
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string                            
 *                        
 *     responses:
 *       200:
 *         description: OK  
 *       400:
 *         description: Bad Request        
 */

/**
 * @swagger
 * /api/auth/reset-password:
 *   put:
 *     summary: Recetear contraseña
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string  
 *               newPassword:
 *                 type: string        
 *                        
 *     responses:
 *       200:
 *         description: OK  
 *       401:
 *         description: Unauthorized 
 *       400:
 *         description: Bad Request        
 */


