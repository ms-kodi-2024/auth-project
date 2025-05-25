# OAuth User Panel

Simple Node.js app using Google OAuth 2.0 and Passport.js.

## Setup

1. Install:
   yarn install

2. Add `.env`:
   GOOGLE_CLIENT_ID=...  
   GOOGLE_CLIENT_SECRET=...  
   GOOGLE_CALLBACK_URL=http://localhost:8000/auth/google/callback  
	 SESSION_SECRET=random_string_here

3. Run:
   yarn start

## Endpoints

- `/` – Home (login button)
- `/auth/google` – Start login
- `/auth/google/callback` – OAuth callback
- `/auth/logout` – Logout

### Protected (require login)

- `/user/logged`
- `/user/profile`
- `/user/profile/settings`

### Utility

- `/user/no-permission` – Shown on auth error
- any invalid URL → 404 page
