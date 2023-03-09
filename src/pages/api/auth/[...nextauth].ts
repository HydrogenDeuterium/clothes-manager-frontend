import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: { secret: process.env.NEXTAUTH_SECRET },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password", placeholder: "Passwrod" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as { username: string; password: string };
        const ADMIN_USER = process.env.ADMIN_USER;
        const ADMIN_PWD = process.env.ADMIN_PWD;

        if (!ADMIN_PWD || !ADMIN_USER) throw new Error("Please add ADMIN_PWD and ADMIN_USER to env");
        if (username === ADMIN_USER && password === ADMIN_PWD) return { username } as any;
        else return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      // @ts-expect-error
      session.user = token.user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
