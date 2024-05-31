import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Redirect } from "./Redirect";

import { PageMainLayout } from "../../entities/layouts/PageMainLayout";
import { Home } from "../../pages/home";
import { Contact } from "../../pages/contact";

// 404
import NotFoundPage from "../../pages/NotFoundPage";

// interface RouterConfigProps {}


// routing.
export function RouterConfig() {
    return (
      <Router>
        <Routes>
          <Route element={<PageMainLayout />}>
            <Route path="/" element={<Home />} />
            {/* Handling 404 */}
            <Route path="*" element={<NotFoundPage />} />
    
            {/* Redirect */}
            <Route element={<Redirect />}>
              <Route path="contact" element={<Contact />} />
            </Route>
    
            {/* Uncomment and use if needed */}
            {/* <Route path="email-confirmation" element={<EmailConfirmationPage />} /> */}
          </Route>
        </Routes>
      </Router>
    );
  }
