import '../App.css'
import BlagoEsti  from '../songs/BlagoEsti';
import VstaetZarya from "../songs/VstaetZarya";
import VTebeGospod  from '../songs/VTebeGospod';
import VChristeOdnom  from '../songs/VChristeOdnom';
import VChasKogdaTryba from "../songs/VChasKogdaTryba";
import DerjitOnMenya from "../songs/DerjitOnMenya";
import DolgMoyYplatil from "../songs/DolgMoyYplatil";
import EstiNaNebeGorod from "../songs/EstiNaNebeGorod";
import ZaLoveZaMilost from "../songs/ZaLoveZaMilost";
import ZvezdDivnieAlmazi from "../songs/ZvezdDivnieAlmazi";
import ZdeciNaZemle from "../songs/ZdeciNaZemle";
import KakPrekrasno from "../songs/KakPrekrasno";
import KakHorosho from "../songs/KakHorosho";
import KydaBiYaIdtiHotel from "../songs/KydaBiYaIdtiHotel";
import LybitJesusMenya from "../songs/LybitJesusMenya";
import LybitEtoZnachit from "../songs/LybitEtoZnachit";
import LoveChtoNePomnit from "../songs/LoveChtoNePomnit";
import MoyaMolitva from "../songs/MoyaMolitva";
import MiNygniDrygDrygy from "../songs/MiNygniDrygDrygy";
import NaDalekomHolme from "../songs/NaDalekomHolme";
import NadCerkovnimiKupolami from "../songs/NadCerkovnimiKupolami";
import NaychiMenya from "../songs/NaychiMenya";
import OdnaListva from "../songs/OdnaListva";
import OtPogibeliSpasla from "../songs/OtPogibeliSpasla";
import ProsipausNaZare from "../songs/ProsipausNaZare";
import PustYgasloNebo from "../songs/PustYgasloNebo";
import PytKGolgofe from "../songs/PytKGolgofe";
import SkoroDayTotPridet from "../songs/SkoroDayTotPridet";
import SonGodNamRojden from "../songs/SonGodNamRojden";
import TamDaleko from "../songs/TamDaleko";
import TiIskupilMir from "../songs/TiIskupilMir";
import TiKydaIdesh from "../songs/TiKydaIdesh";
import TiMenyaNapolni from "../songs/TiMenyaNapolni";
import TiNePechalsya from "../songs/TiNePechalsya";
import UnostSvetlya from "../songs/UnostSvetlya";
import KraiChydeshu from "../songs/KraiChydeshu";
import HristianinNesiOgon from "../songs/HristianinNesiOgon";
import SkolkoEstiZamanchivih from "../songs/SkolkoEstiZamanchivih";
import VdoliPoViaDolorossa from "../songs/VdoliPoViaDolorossa";
import NashaJizniThisGod from '../songs/NashaJizniThisGod';
import NeperechestiNam from '../songs/NeperechestiNam';
import IshitePrejde from '../songs/IshitePrejde';
import MilostiyBoje from '../songs/MilostiyBoje';
import NashaJizniThisPyti from '../songs/NashaJizniThisPyti';
import BydyJitiPodZaschitou from '../songs/BydyJitiPodZaschitou';
import ZKojnimDnemDarajei from '../songs/ZKojnimDnemDarajei';
import SDetskihLet from '../songs/SDetskihLet';
import YaKoleniSklonu from '../songs/YaKoleniSklonu';
import ManitSerdceMechtou from '../songs/ManitSerdceMechtou';
import ChakaemCyabeNashIsus  from '../songs/ChakaemCyabeNashIsus';
import TihayaNight from '../songs/TihayaNight';
import PoklonicCkaruCkarei from '../songs/PoklonicCkaruCkarei';
import YtromKogdaVstaet from '../songs/YtromKogdaVstaet';
import VHasheiJisniSamoe from '../songs/VHasheiJisniSamoe';
import PutiIstinaJizni from '../songs/PutiIstinaJizni';
import VelikiIChudni from '../songs/VelikiIChudni';
import OnShelVJary from '../songs/OnShelVJary';
import NebesniiDomOstavil from '../songs/NebesniiDomOstavil';
import DayYgas from '../songs/DayYgas';
import ZemlyaZastilaVOjidanii from '../songs/ZemlyaZastilaVOjidanii';
import YaIskalTebaBoje from '../songs/YaIskalTebaBoje';
import KogdaHristosMenyaProstil from '../songs/KogdaHristosMenyaProstil';
import VmesteMiSVamiVerili from '../songs/VmesteMiSVamiVerili';
import JiznyBorbaIVDushe from '../songs/JiznyBorbaIVDushe';
import PokaOgoniLybviChydesnoi from '../songs/PokaOgoniLybviChydesnoi';
import ChtoTakoeChristiansctvo from '../songs/ChtoTakoeChristiansctvo';
import DayZaDay from '../songs/DayZaDay';
import JiznLetitMoya from '../songs/JiznLetitMoya';
import TiPrisheKakDojd from '../songs/TiPrisheKakDojd';
import OYnostSvetlaia from '../songs/OYnostSvetlaia';
import VremyaDanoNaVremya from '../songs/VremyaDanoNaVremya';
import PodnimauGlaza from '../songs/PodnimauGlaza';
import LoveChtoJeThisTakoe from '../songs/LoveChtoJeThisTakoe';
import MiKajdiiDayVstrechaemsya from '../songs/MiKajdiiDayVstrechaemsya';
import PoStranitsamBiblii from '../songs/PoStranitsamBiblii';
import BibliaMnogoSveta from '../songs/PoStranitsamBiblii';
import NetSiliGospodi from '../songs/NetSiliGospodi';

interface ITool{
  name: string,
  titleSong: string,
  getNameSong:React.Dispatch<React.SetStateAction<string>>
}

export function Toolbox({ name, titleSong, getNameSong }:ITool) {
  const components = {
    BlagoEsti: BlagoEsti,
    BibliaMnogoSveta: BibliaMnogoSveta,
    BydyJitiPodZaschitou: BydyJitiPodZaschitou,
    ChakaemCyabeNashIsus: ChakaemCyabeNashIsus,
    DayYgas: DayYgas,
    DerjitOnMenya: DerjitOnMenya,
    DolgMoyYplatil: DolgMoyYplatil,
    EstiNaNebeGorod: EstiNaNebeGorod,
    HristianinNesiOgon: HristianinNesiOgon,
    IshitePrejde: IshitePrejde,
    JiznyBorbaIVDushe: JiznyBorbaIVDushe,
    KakHorosho: KakHorosho,
    KakPrekrasno: KakPrekrasno,
    KogdaHristosMenyaProstil: KogdaHristosMenyaProstil,
    KraiChydeshu: KraiChydeshu,
    KydaBiYaIdtiHotel: KydaBiYaIdtiHotel,
    LoveChtoNePomnit: LoveChtoNePomnit,
    LoveChtoJeThisTakoe: LoveChtoJeThisTakoe,
    LybitEtoZnachit: LybitEtoZnachit,
    LybitJesusMenya: LybitJesusMenya,
    ManitSerdceMechtou: ManitSerdceMechtou,
    MilostiyBoje: MilostiyBoje,
    MiKajdiiDayVstrechaemsya: MiKajdiiDayVstrechaemsya,
    MiNygniDrygDrygy: MiNygniDrygDrygy,
    MoyaMolitva: MoyaMolitva,
    NaDalekomHolme: NaDalekomHolme,
    NadCerkovnimiKupolami: NadCerkovnimiKupolami,
    NashaJizniThisGod: NashaJizniThisGod,
    NashaJizniThisPyti: NashaJizniThisPyti,
    NaychiMenya: NaychiMenya,
    NeperechestiNam: NeperechestiNam,
    NetSiliGospodi: NetSiliGospodi,
    NebesniiDomOstavil: NebesniiDomOstavil,
    OdnaListva: OdnaListva,
    OnShelVJary: OnShelVJary,
    OtPogibeliSpasla: OtPogibeliSpasla,
    PokaOgoniLybviChydesnoi: PokaOgoniLybviChydesnoi,
    PoklonicCkaruCkarei: PoklonicCkaruCkarei,
    PoStranitsamBiblii: PoStranitsamBiblii,
    ProsipausNaZare: ProsipausNaZare,
    PustYgasloNebo: PustYgasloNebo,
    PytKGolgofe: PytKGolgofe,
    PutiIstinaJizni: PutiIstinaJizni,
    SDetskihLet: SDetskihLet,
    SkolkoEstiZamanchivih: SkolkoEstiZamanchivih,
    SkoroDayTotPridet: SkoroDayTotPridet,
    SonGodNamRojden: SonGodNamRojden,
    TamDaleko: TamDaleko,
    TihayaNight: TihayaNight,
    TiIskupilMir: TiIskupilMir,
    TiKydaIdesh: TiKydaIdesh,
    TiMenyaNapolni: TiMenyaNapolni,
    TiNePechalsya: TiNePechalsya,
    UnostSvetlya: UnostSvetlya,
    VelikiIChudni: VelikiIChudni,
    VmesteMiSVamiVerili: VmesteMiSVamiVerili,
    VChasKogdaTryba: VChasKogdaTryba,
    VChristeOdnom: VChristeOdnom,
    VdoliPoViaDolorossa: VdoliPoViaDolorossa,
    VstaetZarya: VstaetZarya,
    VTebeGospod: VTebeGospod,
    VHasheiJisniSamoe: VHasheiJisniSamoe,
    YaKoleniSklonu: YaKoleniSklonu,
    YaIskalTebaBoje: YaIskalTebaBoje,
    YtromKogdaVstaet: YtromKogdaVstaet,
    ZaLoveZaMilost: ZaLoveZaMilost,
    ZdeciNaZemle: ZdeciNaZemle,
    ZemlyaZastilaVOjidanii: ZemlyaZastilaVOjidanii,
    ZKojnimDnemDarajei: ZKojnimDnemDarajei,
    ZvezdDivnieAlmazi: ZvezdDivnieAlmazi,
    ChtoTakoeChristiansctvo: ChtoTakoeChristiansctvo,
    DayZaDay:DayZaDay,
    JiznLetitMoya: JiznLetitMoya,
    TiPrisheKakDojd:TiPrisheKakDojd,
    OYnostSvetlaia: OYnostSvetlaia,
    VremyaDanoNaVremya: VremyaDanoNaVremya,
    PodnimauGlaza: PodnimauGlaza
  };
  const Tool = components[name as keyof typeof components ];
  return <Tool title={titleSong} getNameSong={getNameSong} />;
}