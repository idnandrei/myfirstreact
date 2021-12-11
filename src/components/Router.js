import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Employee from "./Employee";
import AddEmployees from "./AddEmployees";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/myfirstreact" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employee" element={<Employee />} />
          <Route exact path="/add" element={<AddEmployees />} />
          <Route exact path="/edit/:employeeId" element={<AddEmployees />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
