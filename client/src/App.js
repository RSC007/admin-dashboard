import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theam";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Dashboard from "seanes/dashboard";
import Layout from "seanes/layout";
import Products from "seanes/products";
import Customers from "seanes/customers";
import Transactions from "seanes/transactions";
import Geography from "seanes/geography";
import Overview from "seanes/overview";
import Daily from "seanes/daily";
import Monthly from "seanes/monthly";
import Breakdown from "seanes/breakdown";
import Admin from "seanes/admin";
import Performance from "seanes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} replace />
              <Route path="/products" element={<Products />} replace />
              <Route path="/customers" element={<Customers />} replace />
              <Route path="/transactions" element={<Transactions />} replace />
              <Route path="/geography" element={<Geography />} replace />
              <Route path="/overview" element={<Overview />} replace />
              <Route path="/daily" element={<Daily />} replace />
              <Route path="/monthly" element={<Monthly />} replace />
              <Route path="/breakdown" element={<Breakdown />} replace />
              <Route path="/admin" element={<Admin />} replace />
              <Route path="/performance" element={<Performance />} replace />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
