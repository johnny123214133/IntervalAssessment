// API response types
export interface ApiResponse<T = any> {
  status: number;
  data?: T;
  error?: string;
  timestamp: string;
}

// Hello endpoint response
export interface HelloResponse {
  message: string;
  timestamp: string;
}

// Echo endpoint request and response
export interface EchoRequest {
  message: string;
  [key: string]: any;
}

export interface EchoResponse {
  echo: EchoRequest;
  timestamp: string;
}