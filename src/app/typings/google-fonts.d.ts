declare module "vite/fonts/google" {
    interface FontOptions {
        weight: string[];
        subsets: string[];
    }

    interface FontFunction {
        (options: FontOptions): string;
    }

    export const Monserrat: FontFunction;
    export const Karla: FontFunction;
}
