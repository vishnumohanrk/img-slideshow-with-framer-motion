interface MyImgTextProps {
  elem: React.ReactNode;
  cls: string;
}

const MyImgText = ({ elem, cls }: MyImgTextProps) => (
  <p className="mb-2 imgTxt">
    {elem ? <span className={`inline px-2 py-px bg-white rounded-md ${cls}`}>{elem}</span> : null}
  </p>
);

export default MyImgText;
