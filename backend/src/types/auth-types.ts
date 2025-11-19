import type { AuthService } from "../services/auth-service.js";

export interface ControllerDeps {
    authService: InstanceType<typeof AuthService>; 
}

export interface RegisterPayload {
    email: string;
    passwordHash: string;
}