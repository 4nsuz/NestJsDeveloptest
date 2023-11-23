import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./entities/role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userDataFromBody = request.body;

    if (!userDataFromBody || !userDataFromBody.accessrole) {
      throw new UnauthorizedException("Access role is missing");
    }

    const userRoles: Role[] = userDataFromBody.accessrole;

    const hasRequiredRole = requiredRoles.some((role) => userRoles?.includes(role));

    if (!hasRequiredRole) {
      throw new UnauthorizedException("Insufficient privileges");
    }

    return true;
  }
}