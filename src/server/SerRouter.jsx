import React from "react";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
// 服务端部分
import SerApp from "./SerApp";
import FileAdd from "./pages/FileAdd";

export default function SerRouter() {
  return (
    <Routes>
      <Route path="/api" element={<SerApp />}>
        <Route path="" element={<FileAdd />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
