import React from "react";

import LazyWrap from "@/components/LazyWrap";
import ProtectedRoute from "@/components/ProtectedRoute";

const ListPage = React.lazy(() => import("./ListPage"));
const DetailPage = React.lazy(() => import("./DetailPage"));

const routes = [
  {
    path: "",
    index: true,
    element: (
      <ProtectedRoute toPath="/auth">
        <LazyWrap>
          <ListPage />
        </LazyWrap>
      </ProtectedRoute>
    ),
  },
  {
    path: ":invoiceId",
    element: (
      <ProtectedRoute toPath="/auth">
        <LazyWrap>
          <DetailPage />
        </LazyWrap>
      </ProtectedRoute>
    ),
  },
];

export default routes;
