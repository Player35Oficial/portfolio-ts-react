import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  icon: IconType;
  reverse?: boolean;
  action?(): void;
}

export const Button = (props: ButtonProps) => {
  const { label, icon: Icon, reverse, action } = props;

  return (
    <button
      onClick={action}
      className={
        reverse
          ? "primary flex text-base h-fit w-fit flex-row-reverse items-center gap-x-2 bg-primary-500 hover:bg-primary-400 py-4 px-4 rounded-lg transition-colors"
          : "primary flex text-base h-fit w-fit items-center gap-x-2 bg-primary-500 hover:bg-primary-400 py-4 px-4 rounded-lg transition-colors"
      }
    >
      {label}
      <div className="text-2xl">{Icon && <Icon />}</div>
    </button>
  );
};

export const ButtonSecondary = (props: ButtonProps) => {
  const { label, icon: Icon, reverse } = props;

  return (
    <button
      className={
        reverse
          ? "primary flex text-base h-fit w-fit flex-row-reverse items-center gap-x-2 bg-surface-secondary hover:bg-surface-tertiary py-4 px-4 rounded-lg transition-colors"
          : "primary flex text-base h-fit w-fit items-center gap-x-2 bg-surface-secondary hover:bg-surface-tertiary py-4 px-4 rounded-lg transition-colors"
      }
    >
      <span>{label}</span>
      <div className="text-2xl">{Icon && <Icon />}</div>
    </button>
  );
};

interface IconButtonProps {
  icon: IconType;
  action?: () => void;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon: Icon, action } = props;

  return (
    <button
      onClick={action}
      className="text-2xl p-2 bg-surface-background dark:bg-light-surface-background hover:bg-surface-primary dark:hover:bg-light-surface-primary dark:text-light-text-secondary rounded-lg transition-colors"
    >
      {Icon && <Icon />}
    </button>
  );
};
export const IconButtonSecondary = (props: IconButtonProps) => {
  const { icon: Icon } = props;

  return (
    <button className="text-2xl p-2 dark:bg-light-surface-secondary dark:hover:bg-light-surface-tertiary bg-surface-secondary hover:bg-surface-tertiary rounded-lg transition-colors">
      {Icon && <Icon />}
    </button>
  );
};

interface ButtonThree {
  label: string;
  icon: React.ElementType;
  icon2: React.ElementType;
}

export const ButtonThree = (props: ButtonThree) => {
  const { label, icon: Icon, icon2: Icon2 } = props;

  return (
    <button
      className={
        "justify-between w-full primary flex text-base h-fit items-center gap-x-2 bg-primary-500 hover:bg-primary-400 py-4 px-4 rounded-lg transition-colors"
      }
    >
      <div className="text-2xl">{Icon && <Icon />}</div>
      {label}
      <div className="text-2xl">{Icon2 && <Icon2 />}</div>
    </button>
  );
};

export const ButtonThreeSecondary = (props: ButtonThree) => {
  const { label, icon: Icon, icon2: Icon2 } = props;

  return (
    <button
      className={
        "justify-between w-full primary flex text-base h-fit items-center gap-x-2 bg-surface-secondary hover:bg-surface-tertiary py-4 px-4 rounded-lg transition-colors"
      }
    >
      <div className="text-2xl">{Icon && <Icon />}</div>
      {label}
      <div className="text-2xl">{Icon2 && <Icon2 />}</div>
    </button>
  );
};
