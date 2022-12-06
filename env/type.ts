export type EnvKeys = "BASE_PATH" | "BASE_URL" | "PORT" | "ENV" | "authDomain" | "databaseURL" | "projectId" | "strageBucket" | "messagingSenderId" | "appId" | "HOST"

export type EnvConfig = {
    [key in EnvKeys]?: string
}