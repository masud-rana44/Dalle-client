import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="relative rounded-xl card shadow-card group hover:shadow-cardhover">
      <img
        className="w-full h-auto object-contain rounded-xl"
        src={photo}
        alt={photo}
      />
      <div className="hidden group-hover:flex flex-col absolute bottom-0 right-0 bg-[#10131f] p-4 m-2 rounded-md max-h-[94.5%]">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 text-white text-xs font-bold flex items-center justify-center">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <img
              className="w-6 h-6 object-contain invert"
              src={download}
              alt="download"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
