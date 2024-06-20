import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MedicineCard from "../components/MedicineCard";

test("renders MedicineCard component", () => {
  render(<MedicineCard />);
  expect(screen.getByText(/Buscador de Medicinas/i)).toBeInTheDocument();
});

test("search functionality works", () => {
  render(<MedicineCard />);
  const searchInput = screen.getByLabelText(/Buscar/i);
  fireEvent.change(searchInput, { target: { value: "test" } });
  expect(searchInput.value).toBe("test");
});
