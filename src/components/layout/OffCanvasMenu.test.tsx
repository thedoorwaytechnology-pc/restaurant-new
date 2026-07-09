import { describe, expect, it } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { OffCanvasMenu } from "./OffCanvasMenu";
import { UIStateProvider, useUIState } from "./UIStateProvider";

function Harness() {
  const { setMenuOpen } = useUIState();
  return (
    <div>
      <button onClick={() => setMenuOpen(true)}>open</button>
      <OffCanvasMenu />
    </div>
  );
}

describe("OffCanvasMenu", () => {
  it("is not present in the DOM when closed", () => {
    render(
      <UIStateProvider>
        <OffCanvasMenu />
      </UIStateProvider>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows the full nav link list once opened", async () => {
    render(
      <UIStateProvider>
        <Harness />
      </UIStateProvider>,
    );

    await act(async () => {
      screen.getByText("open").click();
    });

    const dialog = screen.getByRole("dialog", { name: /site navigation/i });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reservations/i })).toBeInTheDocument();
  });
});
