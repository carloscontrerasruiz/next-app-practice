import { render, screen, waitFor } from "@testing-library/react";
import Poke from "../../pages/poke";

describe("Test with hooks", () => {
  it("Renders pokemon", async () => {
    const mockResults = [{ name: "Charizard", url: "https://imagen.com/1" }];

    global.fetch = jest.fn().mockImplementation((url) => {
      console.log(url);
      expect(url).toBe("https://pokeapi.co/api/v2/pokemon?limit=150");
      return new Promise((resolve) => {
        resolve({
          json: () =>
            Promise.resolve({
              results: mockResults,
            }),
        });
      });
    });

    render(<Poke />);

    const loading = screen.getByText("Cargando...");
    expect(loading).toBeInTheDocument();
    await waitFor(() => screen.getByText("Pokemones"));
    const element = screen.getByTestId(1);
    const anchor = element.children[0];
    expect(anchor).toBeInTheDocument;
    expect(anchor).toHaveAttribute("href", "/pokemons/1");
    expect(anchor).toHaveTextContent("Charizard");
  });
});
