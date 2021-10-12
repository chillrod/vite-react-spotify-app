export interface AuthSectionDTO {
  authBehavior: string;
  client_id: string;
  redirect_uri: string;
  scopes: string[];
}

export interface HandleAuthorizationDTO {
  client_id: string;
  redirect_uri: string;
  scopes: string[];
}

export interface HandleTokenDTO {
  code: string;
  grant_type: string;
  redirect_uri: string;
  client_id?: string | undefined;
  client_secret?: string | true | undefined;
}

export interface TokenRequestDTO {
  data: {
    access_token: string;
  };
}
