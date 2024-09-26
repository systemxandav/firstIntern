import { Button } from "../button";
import FormWork from "../profile/FormWork";
import AbsentForm from "./absentForm";
import FormConfigSalary from "./formConfigSalary";

interface ShowTogle {
  isOpen: boolean;
  onClose: () => void;
}

export default function AbsentCheck({ onClose, isOpen }: ShowTogle) {
  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-full w-full overflow-y-auto rounded-xl bg-white md:h-[760px] md:w-[600px]">
        <Button
          variant="ghost"
          className="absolute right-2 top-2"
          onClick={onClose}
        >
          X
        </Button>
        <div className="h-full w-full">
          <AbsentForm />
        </div>
      </div>
    </div>
  );
}
