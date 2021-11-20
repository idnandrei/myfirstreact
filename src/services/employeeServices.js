import httpclient from "../commons/httpclient";

//nfn
const getEmployees = () => {
  return httpclient.get("/employees");
};

export default { getEmployees };
