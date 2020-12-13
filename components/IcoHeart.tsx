interface IcoHeartProps {
  show: boolean;
  setShow: (k: boolean) => void;
}

const IcoHeart = ({ show, setShow }: IcoHeartProps) => {
  const cls = show ? 'w-20 h-20 ht' : 'w-0 h-0';

  const handleAnimEnd = () => setShow(false);

  return (
    <div className="absolute flex items-center justify-center w-full top-1/2" onAnimationEnd={handleAnimEnd}>
      <svg
        className={`absolute text-white transition-all duration-300 ${cls}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IcoHeart;
