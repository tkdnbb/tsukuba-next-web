import { cn } from "@/lib/utils";

export type StationId =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20";
export type StationSerial =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;
export type StationEnName =
  | "Akihabara"
  | "Shin Okachimachi"
  | "Asakusa"
  | "Minami Senju"
  | "Kita Senju"
  | "Aoi"
  | "Rokuchō"
  | "Yashio"
  | "Misato chūō"
  | "Minami Nagareyama"
  | "Nagareyama centralpark"
  | "Nagareyama ōtakanomori"
  | "Kashiwanoha campus"
  | "Kashiwa Tanaka"
  | "Moriya"
  | "Miraidaira"
  | "Midorino"
  | "Bampaku kinenkōen"
  | "Kenkyū gakuen"
  | "Tsukuba";
export type StationName =
  | "秋葉原"
  | "新御徒町"
  | "浅草"
  | "南千住"
  | "北千住"
  | "青井"
  | "六町"
  | "八潮"
  | "三郷中央"
  | "南流山"
  | "流山セントラルパーク"
  | "流山おおたかの森"
  | "柏の葉キャンパス"
  | "柏たなか"
  | "守谷"
  | "みらい平"
  | "みどりの"
  | "万博記念公園"
  | "研究学園"
  | "つくば";
export type StationFurigana =
  | "あきはばら"
  | "しんおかちまち"
  | "あさくさ"
  | "みなみせんじゅ"
  | "きたせんじゅ"
  | "あおい"
  | "ろくちょう"
  | "やしお"
  | "みさとちゅうおう"
  | "みなみながれやま"
  | "ながれやまセントラルパーク"
  | "ながれやまおおたかのもり"
  | "かしわのはキャンパス"
  | "かしわたなか"
  | "もりや"
  | "みらいだいら"
  | "みどりの"
  | "ばんぱくきねんこうえん"
  | "けんきゅうがくえん"
  | "つくば";

export interface StationLabelProps {
  id: StationId;
  serial: StationSerial;
  enName: StationEnName;
  name: StationName;
  furigana: StationFurigana;
}

const multiLineEnNames = new Set([
  "Shin Okachimachi",
  "Minami Nagareyama",
  "Nagareyama centralpark",
  "Nagareyama ōtakanomori",
  "Kashiwanoha campus",
  "Kashiwa Tanaka",
  "Kenkyū gakuen",
]);
const transformEnName = (name: string) => {
  const [first, second] = name.split(" ");
  if (multiLineEnNames.has(name)) {
    return (
      <>
        <span>{first}-</span>
        <br />
        <span>{second}</span>
      </>
    );
  }
  if (second) {
    return `${first}-${second}`;
  }
  return name;
};

const StationLabel = ({
  id,
  name,
  furigana,
  enName,
  serial,
}: StationLabelProps) => {
  const isMultiLine = multiLineEnNames.has(enName);
  const enNameClass = cn("text-xs -rotate-12 leading-3", {
    "translate-x-4.5 translate-y-5": !isMultiLine,
    "translate-x-4 translate-y-1.5": isMultiLine,
    "translate-x-4 translate-y-1": enName === "Bampaku kinenkōen",
    "translate-x-3 translate-y-1.5": enName === "Shin Okachimachi",
    "translate-x-4.5 translate-y-1.5":
      enName === "Minami Nagareyama" || enName === "Nagareyama centralpark",
    "translate-x-5": enName.length > 5 && enName.length < 7,
    "translate-x-5.5": enName.length > 7 && enName.length < 10,
    "translate-y-5": enName.length < 8,
    //"translate-y-6": enName.length < 4
  });
  const nameClass = cn("flex flex-col flex-1 justify-between", {
    "text-[27px]": name.length > 3,
    "text-2xl": name.length === 6,
    "text-lg": name.length > 6,
  });
  const furiganaClass = cn(
    "h-full text-xs absolute top-0 -right-[16px] flex flex-col justify-between leading-3",
    {
      hidden: name === furigana,
      "-right-[17px]": name.length > 3,
      "-right-[19px]": name.length > 5,
      "-right-[22px]": name.length > 6,
    }
  );

  return (
    <section className="w-26 min-w-[6.5rem]">
      <div className="flex">
        <div className="translate-x-2.5 font-number">{id}</div>
        <div className={enNameClass}>{transformEnName(enName)}</div>
      </div>

      <div className="flex items-center py-2 gap-[3px]">
        <div className="flex bg-gray-400 rounded-2xl flex-col w-9 items-center justify-start text-center text-3xl py-[6px] min-h-[140px] border border-solid border-gray-900">
          <div className="rounded-full bg-slate-300 w-6 h-6 border border-solid border-gray-500"></div>
          <div className="relative flex flex-1">
            <div className={nameClass}>
              {name.split("").map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>
            <div className={furiganaClass}>
              {furigana.split("").map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationLabel;
