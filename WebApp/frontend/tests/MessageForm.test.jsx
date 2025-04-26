import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageForm from "../src/components/MessageForm";

test('nappia "Lähetä" voi klikata', () => {
  render(<MessageForm />);

  // Täytetään lomake
  const nimiInput = screen.getByPlaceholderText("Nimesi");
  const viestiInput = screen.getByPlaceholderText("Viestisi");
  const lahetaNappi = screen.getByText("Lähetä");

  fireEvent.change(nimiInput, { target: { value: "Testikäyttäjä" } });
  fireEvent.change(viestiInput, { target: { value: "Hei vaan!" } });

  // Klikataan lähetä-nappia
  fireEvent.click(lahetaNappi);

  
});
