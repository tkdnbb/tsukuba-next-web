const toei = {
  shinjuku: {
  	en: "Toei Shinjuku Line",
		jp: "都営新宿線（岩本町駅）"
	},
	oedo: {
		en: "Toei ōedo Line",
		jp: "都営大江戸線"
	}
} as const;

const JR = {
	joban: {
		en: "JR Jōban Line",
		jp: "JR常磐線"
	},
	musashino: {
		en: "JR Musashino Line",
		jp: "JR武蔵野線"
	},
  keihin: {
		en: "JR Keihin-Tōhoku Line",
		jp: "JR京浜東北線"
	},
	yamanote: {
		en: "JR Yamanote Line",
		jp: "JR山手線"
	},
	sobu: {
		en: "JR Sōbu Line",
		jp: "JR総武線"
	},	
} as const;

const metro = {
	hibiya: {
		en: "Tokyo Metro Hibiya Line",
		jp: "東京メトロ日比谷線",
	},
	chiyoda: {
		en: "Tokyo Metro Chiyoda Line",
		jp: "東京メトロ千代田線",
	},
} as const;

const lines = {
	kantoRailwayJoso: {
		en: "Kantō Railway Jōsō Line",
		jp: "関東鉄道常総線",
	},
	tobuSkytree: {
		en: "Tōbu SKYTREE Line",
		jp: "東武スカイツリーライン",
	},
	tobuUrban: {
		en: "Tōbu URBAN PARK Line",
		jp: "東武アーバンパークライン",
	},
	...metro,
	...JR,
	...toei,
} as const;

export const StationIdToTransferLines = {
	"01": [lines.yamanote, lines.keihin, lines.sobu, lines.hibiya, toei.shinjuku,],
	"02": [toei.oedo],
	"03": [],
	"04": [lines.hibiya],
	"05": [],
	//"05": [lines.tobuSkytree, lines.chiyoda, lines.joban, lines.hibiya],
	"06": [],
	"07": [],
	"08": [],
	"09": [],
	"10": [],
	//"10": [lines.musashino],
	"11": [],
	"12": [],
	//"12": [lines.tobuUrban],
	"13": [],
	"14": [],
	"15": [],
	//"15": [lines.kantoRailwayJoso],
	"16": [],
	"17": [],
	"18": [],
	"19": [],
	"20": [],
} as const;
