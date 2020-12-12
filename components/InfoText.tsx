interface InfoTextProps {
  txt: string;
}

const InfoText = ({ txt }: InfoTextProps) => <p className="w-full mt-8 text-3xl italic font-bold text-center">{txt}</p>;

export default InfoText;
