import http from "./httpService";
import axios from "axios";

const apiEndpoint = "/api/";

export function colormaster(req) {
  return http.post(apiEndpoint + "colormaster", req);
}

export function GetAllMasterServices(req) {
  return http.post(apiEndpoint + "GetAllMasterServices", req);
}
