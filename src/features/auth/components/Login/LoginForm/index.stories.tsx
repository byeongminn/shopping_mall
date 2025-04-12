import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { LoginForm } from "@/features/auth/components/Login/LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "LoginForm",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 300 }} onSubmit={(event) => event.preventDefault()}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onChangeEmail: action("Email Changed"),
    onChangePassword: action("Password Changed"),
    onLogin: action("Login Submitted"),
  },
};
