import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  icon: IconType;
  reverse?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { label, icon: Icon, reverse } = props;

  return (
    <button
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
      className="text-2xl p-2 bg-surface-background hover:bg-surface-primary rounded-lg transition-colors"
    >
      {Icon && <Icon />}
    </button>
  );
};
export const IconButtonSecondary = (props: IconButtonProps) => {
  const { icon: Icon } = props;

  return (
    <button className="text-2xl p-2 bg-surface-secondary hover:bg-surface-tertiary rounded-lg transition-colors">
      {Icon && <Icon />}
    </button>
  );
};
