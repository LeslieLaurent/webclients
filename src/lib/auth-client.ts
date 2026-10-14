import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "https://clients.leslie-laurent.fr",
});