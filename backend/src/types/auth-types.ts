import type { AuthService } from "../services/auth-service.js";

export interface ControllerDeps {
    authService: InstanceType<typeof AuthService>; 
}