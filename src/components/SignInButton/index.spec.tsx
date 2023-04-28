import { render } from "@testing-library/react";
import { SignInButton } from ".";

test("sign in button renders correctly", () => {
  const { debug } = render(<SignInButton></SignInButton>);

  debug();
});
