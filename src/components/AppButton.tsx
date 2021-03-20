import { TNum } from '@/utils/types';

interface AppButtonProps {
  btnText: 'Previous' | 'Next';
  index: TNum;
  isDisabled: boolean;
  onPress: () => void;
  setNum: (i: TNum) => void;
}

const AppButton = (props: AppButtonProps) => {
  const { btnText, index, isDisabled, onPress, setNum } = props;

  const handleSetNum = () => setNum(index);

  return (
    <button
      disabled={isDisabled}
      className="w-32 py-2 bg-pink-600 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white rounded-md select-none text-lg font-medium disabled:opacity-70 disabled:cursor-wait"
      type="button"
      onClick={onPress}
      onPointerDown={handleSetNum}
    >
      {btnText}
    </button>
  );
};

export default AppButton;
