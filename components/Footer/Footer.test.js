import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Renders the footer", () => {
  render(<Footer />);

  const footerText = screen.getByText(/Mailchimp Open Commerce/);
  expect(footerText).toBeInTheDocument();
});
