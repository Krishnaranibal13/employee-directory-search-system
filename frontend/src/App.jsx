// import { useState } from "react";
// import { searchEmployees, getAllEmployees } from "./services/api";

// import SearchBar from "./components/SearchBar";
// import EmployeeTable from "./components/EmployeeTable";
// import StatusMessage from "./components/StatusMessage";

// import "./index.css";

// function App() {
//   const [query, setQuery] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim() === "") {
//       setEmployees([]);
//       setHasSearched(false);
//       setError("");
//     }
//   };

//   const handleSearch = async () => {
//     if (!query.trim()) return;

//     try {
//       setLoading(true);
//       setError("");
//       setHasSearched(true);

//       const data = await searchEmployees(query);
//       setEmployees(data);
//     } catch {
//       setError("Failed to fetch employees.");
//       setEmployees([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFocus = () => {
//     if (employees.length > 0) {
//       setEmployees([]);
//       setHasSearched(false);
//       setError("");
//     }
//   };

//   const handleShowAll = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       setHasSearched(true);
//       setQuery("");

//       const data = await getAllEmployees();
//       setEmployees(data);
//     } catch {
//       setError("Failed to load employees.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h1>Employee Directory System</h1>

//       <SearchBar
//         value={query}
//         onChange={handleChange}
//         onSearch={handleSearch}
//         onShowAll={handleShowAll}
//         onFocus={handleFocus}
//       />

//       {!query && !hasSearched && (
//         <StatusMessage
//           type="info"
//           message="🔍 Start typing a name, department or designation and press Search or Enter."
//         />
//       )}

//       {loading && <StatusMessage type="info" message="Loading employees..." />}
//       {error && <StatusMessage type="error" message={error} />}

//       {!loading && hasSearched && employees.length === 0 && !error && (
//         <StatusMessage type="warning" message="No employees found." />
//       )}

//       {employees.length > 0 && <EmployeeTable employees={employees} />}
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { searchEmployees, getAllEmployees } from "./services/api";

// import SearchBar from "./components/SearchBar";
// import EmployeeTable from "./components/EmployeeTable";
// import StatusMessage from "./components/StatusMessage";

// import "./index.css";

// function App() {
//   const [query, setQuery] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim() === "") {
//       setEmployees([]);
//       setHasSearched(false);
//       setError("");
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       setHasSearched(true);

//       const data = await searchEmployees(query);
//       setEmployees(data);
//     } catch (err) {
//       const message =
//         err?.response?.data?.detail || "Failed to fetch employees.";
//       setError(message);
//       setEmployees([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFocus = () => {
//     if (employees.length > 0 || error) {
//       setEmployees([]);
//       setHasSearched(false);
//       setError("");
//     }
//   };

//   const handleShowAll = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       setHasSearched(true);
//       setQuery("");

//       const data = await getAllEmployees();
//       setEmployees(data);
//     } catch (err) {
//       const message =
//         err?.response?.data?.detail || "Failed to load employees.";
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h1>Employee Directory System</h1>

//       <SearchBar
//         value={query}
//         onChange={handleChange}
//         onSearch={handleSearch}
//         onShowAll={handleShowAll}
//         onFocus={handleFocus}
//       />

//       {!query && !hasSearched && (
//         <StatusMessage
//           type="info"
//           message="🔍 Start typing a name, department or designation and press Search or Enter."
//         />
//       )}

//       {loading && <StatusMessage type="info" message="Loading employees..." />}
//       {error && <StatusMessage type="error" message={error} />}

//       {!loading && hasSearched && employees.length === 0 && !error && (
//         <StatusMessage type="warning" message="No employees found." />
//       )}

//       {employees.length > 0 && <EmployeeTable employees={employees} />}
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import { searchEmployees, getAllEmployees } from "./services/api";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import StatusMessage from "./components/StatusMessage";
import "./index.css";

function extractErrorMessage(err) {
  if (typeof err?.response?.data?.detail === "string") {
    return err.response.data.detail;
  }

  if (Array.isArray(err?.response?.data?.detail)) {
    return err.response.data.detail[0]?.msg || "Invalid request.";
  }

  return "Something went wrong.";
}

function App() {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setEmployees([]);
      setHasSearched(false);
      setError("");
    }
  };

  // const handleSearch = async () => {
  //   try {
  //     setLoading(true);
  //     setError("");
  //     setHasSearched(true);

  //     const data = await searchEmployees(query);
  //     setEmployees(data);
  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter something to search.");
      setEmployees([]);
      setHasSearched(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setHasSearched(true);

      const data = await searchEmployees(query);
      setEmployees(data);
    } catch (err) {
      setError(extractErrorMessage(err));
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    if (employees.length || error) {
      setEmployees([]);
      setHasSearched(false);
      setError("");
    }
  };

  const handleShowAll = async () => {
    try {
      setLoading(true);
      setError("");
      setHasSearched(true);
      setQuery("");

      const data = await getAllEmployees();
      setEmployees(data);
    } catch (err) {
      setError(extractErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Employee Directory System</h1>

      <SearchBar
        value={query}
        onChange={handleChange}
        onSearch={handleSearch}
        onShowAll={handleShowAll}
        onFocus={handleFocus}
      />

      {!query && !hasSearched && (
        <StatusMessage type="info" message="🔍 Start typing a name, department or designation and press Search or Enter." />
      )}

      {loading && <StatusMessage type="info" message="Loading employees..." />}
      {error && <StatusMessage type="error" message={error} />}
      {!loading && hasSearched && employees.length === 0 && !error && (
        <StatusMessage type="warning" message="No employees found." />
      )}

      {employees.length > 0 && <EmployeeTable employees={employees} />}
    </>
  );
}

export default App;
