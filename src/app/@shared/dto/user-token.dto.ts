export interface UserTokenDto {
  isToken: boolean;
  token: string;
  authyId: string;
  cell: string;
}

// {
//   "success": true,
//     "status": "SUCCESS",
//       "body": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InZwYXRpZGFyOTRAZ21haWwuY29tIiwiaXNzdWVyIjoiYXV0aDAiLCJhdWRpZW5jZSI6ImZvc3RlcnN1cHBvcnQiLCJzdWIiOiIwMFE0eDAwMDAwNXJaNGVFQUUiLCJQaG9uZSI6IjA4OTg5NTI5MTA3IiwiRmlyc3ROYW1lIjoiVmluYXkiLCJMYXN0TmFtZSI6IlBhdGlkYXIiLCJOYW1lIjoiVmluYXkgUGF0aWRhciIsImlhdCI6MTYxODU2OTU3MiwiZXhwIjoxNjE4NTg3NTcyfQ.hPby9Mg-nGCPtEiob4v8NjbcvC7tJJWsBE1v_zeQBck"
// }