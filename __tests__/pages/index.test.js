import { render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../../pages/index";

describe("Index", () => {
  it("sumar 2 +2", () => {
    expect(2 + 2).toBe(4);
  });

  it("Se renderiza", () => {
    //render(<Home pokemons={[]} />);
    const { getByTestId } = render(<Home pokemons={[]} />);
    const paragraph = screen.getByText("Pokemones");
    const paragraph2 = screen.getByTestId("titulo");
    const paragraph3 = getByTestId("titulo");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
    expect(paragraph3).toBeInTheDocument();
  });

  it("Se renderiza con pokemones", () => {
    render(
      <Home pokemons={[{ name: "Charizard", url: "/pokemon.com/detalle/6" }]} />
    );
    const charizard = screen.getByText("Charizard");
    expect(charizard).toBeInTheDocument();
    expect(charizard.getAttribute("href")).toEqual("/pokemons/6");
  });

  it("Test getStaticProps", async () => {
    global.fetch = jest.fn().mockImplementation((url) => {
      console.log(url);
      expect(url).toBe("https://pokeapi.co/api/v2/pokemon?limit=150");
      return new Promise((resolve) => {
        resolve({
          json: () =>
            Promise.resolve({
              results: "lista",
            }),
        });
      });
    });
    const { props } = await getStaticProps();
    expect(props.pokemons).toBe("lista");
  });
});
