import { SolidButton } from "../button";
import Typography from "../typography";

export type AlertProps = {
  mode?: "oneButton" | "twoButton";
  title: string;
  description?: string;
  buttonLabel?: string;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  onButtonPress?: () => void;
  onSubmitButtonPress?: () => void;
  onCancelButtonPress?: () => void;
  isNegativeSubmit?: boolean;
  autoHideOnSubmit?: boolean;
};

const Alert = ({
  mode = "oneButton",
  title,
  description,
  buttonLabel = "확인",
  submitButtonLabel = "확인",
  cancelButtonLabel = "취소",
  onButtonPress,
  onSubmitButtonPress,
  onCancelButtonPress,
  isNegativeSubmit = false,
}: AlertProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="flex w-[20.9375rem] flex-col items-center justify-center rounded-lg bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center py-[2.5rem] text-center">
          <Typography component="h1" variant="headline5">
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              className="text-semantic-text-secondary mt-2 w-[18.4375rem] whitespace-pre-line"
            >
              {description}
            </Typography>
          )}
        </div>
        {mode === "oneButton" ? (
          <SolidButton
            onClick={onButtonPress}
            fullWidth
            className="rounded-t-[0]"
          >
            {buttonLabel}
          </SolidButton>
        ) : (
          <div className="flex h-[3.375rem] w-full rounded-b-lg">
            <SolidButton
              variant="secondary"
              onClick={onCancelButtonPress}
              fullWidth
              className="rounded-t-[0] rounded-br-[0]"
            >
              {cancelButtonLabel}
            </SolidButton>
            <SolidButton
              variant={isNegativeSubmit ? "danger" : "primary"}
              onClick={onSubmitButtonPress}
              fullWidth
              className="rounded-t-[0] rounded-bl-[0]"
            >
              {submitButtonLabel}
            </SolidButton>
          </div>
        )}
      </div>
    </div>
  );
};
export default Alert;
