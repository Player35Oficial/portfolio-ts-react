import {
  Button,
  ButtonSecondary,
  IconButton,
  IconButtonSecondary,
} from "../../components/Buttons";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="text-text-primary">
      <h1 className="text-3xl font-bold underline font-kalam ">Olá, Vite</h1>
      <Button label="Label" icon={GoArrowRight} />
      <ButtonSecondary label="Label" icon={GoArrowRight} />
      <IconButton icon={GoArrowRight} />
      <IconButtonSecondary icon={GoArrowRight} />
    </div>
  );
}
