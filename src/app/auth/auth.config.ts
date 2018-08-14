// src/app/auth/auth.config.ts
import { ENV } from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'ByEQfNfDaRgC5EzoLuo06Yxf8Roiks7Q',
  CLIENT_DOMAIN: 'sphelps.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:8081/api/', // e.g., http://localhost:8080/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles'
};
