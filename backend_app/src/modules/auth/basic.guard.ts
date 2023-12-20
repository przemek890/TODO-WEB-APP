import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class BasicGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {}

    private decodeAuthHeader(header: string) {
        // przyklad: dGVzdDFAZXhhbXBsZS5jb206cGFzc3dvcmQxMjM=
        const b64auth = header.split(' ')[1];
        if(!b64auth) return undefined;
        const decoded = Buffer.from(b64auth,'base64').toString().split(':')
        if (decoded.length != 2) return undefined;
        return {
            username: decoded[0],
            password: decoded[1],
        };
    }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const auth = request.headers['authorization'];
        if(!auth) return false;
        const { username, password } = this.decodeAuthHeader(auth);
        if(!username || !password) return false;

        const user = await this.authService.verifyUser(username,password);
        if(!user) return false;

        request.userId = user.id;
        return true;
    }
}