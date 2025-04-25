import { AxiosRequestConfig } from "axios";

export interface AuthFormData {
  email: string;
  password: string;
}

export interface ConfigWithJWT extends AxiosRequestConfig {
  headers: {
    Authorization: string;
  };
}
