import { Router } from "express";
import "dotenv/config";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

export const router = Router();

router.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

router.post("/authenticate", new AuthenticateUserController().handle);
