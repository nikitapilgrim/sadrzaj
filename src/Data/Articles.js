const essay = 'essay';
const lyrics = 'lyrics';

export default [
  {
    id: 1,
    title: 'Narodna književnost',
    subtitle: 'Majka Fatu kroz tri gore viče',
    type: lyrics,
    text: `Majka Fatu kroz tri gore viče:
          “Jesi l’, kćeri, ub’jelila platno?”
          Fata joj se kroz sedam odziva:
          “Nisam, majko, ni do vode došla,
          dragi mi je vodu zamutio!
          Kun’ ga, majko, i ja ću ga kleti,
          samo stani, ja ću započeti:
          tamnica mu moja njedra bila,
          sindžir-halke – moje b’jele ruke,
          bukagije – moje belenzuke!”
          
          Lirska narodna pjesma (sevdalinka)`,
    video: 'url',
    audio: require(`../assets/sounds/pronunciation/testvoice.aac`),
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Lirski svijet ove pjesme čine:',
        answers: [
          {
            title: 'osjećanja',
            right: true,
          },
          {
            title: 'događaji',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Prema kome djevojka ispoljava osjećanja:',
        answers: [
          {
            title: 'samo prema majci',
            right: true,
          },
          {
            title: 'događaji',
            right: false,
          },
          {
            title: 'i prema majci i prema mladiću',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'O čemu majka misli i govori?',
        answers: [
          {
            title: 'o „bjeljenju platna“, odnosno o poslu zbog koga je djevojka pošla',
            right: false,
          },
          {
            title: 'o tome kako će izgrditi kćerku',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'O čemu kćerka misli i govori?',
        answers: [
          {
            title: 'da ne može oprati rublje zbog mutne vode',
            right: false,
          },
          {
            title: 'da se srela sa dragim i da posao nije ni započela',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5th question',
        question: 'Razlike u mišljenju su izražene:',
        answers: [
          {
            title: 'samo brojevima',
            right: true,
          },
          {
            title: 'samo riječima',
            right: false,
          },
          {
            title: 'i brojevima i riječima',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 6th question',
        question: '„…dragi mi je vodu zamutio!“ je:',
        answers: [
          {
            title: 'izgovor što se djevojka predugo zadržala',
            right: false,
          },
          {
            title: 'činjenica da je dragi konjem prešao preko vode i zamutio je pa zbog toga djevojka nije mogla „ubjeliti platno“.',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 7th question',
        question: 'Kroz djevojčino „odzivanje“ (odgovaranje majci) se naslućuje:',
        answers: [
          {
            title: 'ljutnja',
            right: false,
          },
          {
            title: 'radost zbog susreta sa dragim“.',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 8th question',
        question: 'Kćerka i majka su u:',
        answers: [
          {
            title: 'bliskom odnosu',
            right: true,
          },
          {
            title: 'u sukobu',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 9th question',
        question: 'Kletvom se izražava:',
        answers: [
          {
            title: 'djevojčina želja da ostvari sreću sa svojim momkom',
            right: true,
          },
          {
            title: 'djevojčina želja da se osveti momku',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 10th question',
        question: 'Pjesma nam dočarava…',
        answers: [
          {
            title: 'djevojčinu tugu',
            right: false,
          },
          {
            title: 'atmosferu sreće',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 11th question',
        question: 'Lirske narodne pjesme ispjevane su u:',
        answers: [
          {
            title: 'lirskom osmercu',
            right: false,
          },
          {
            title: 'lirskom desetercu',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 12th question',
        question: 'Sevdah je arapska riječ i znači:',
        answers: [
          {
            title: 'praznik',
            right: true,
          },
          {
            title: 'ljubav, ljubavna čežnja, ljubavni zanos',
            right: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Narodna književnost',
    subtitle: 'Ljubavi rastanak',
    type: lyrics,
    text: `Dva cvijeta u bostanu rasla:
plavi zumbul i zelena kada.
Plavi zumbul ode na Doljane,
osta kada u bostanu sama.
Poručuje zumbul sa Doljana:
“Dušo moja, u bostanu kado,
kako ti je u bostanu samoj?”
Odgovara iz bostana kada:
“Što je nebo, da je list
što je gora, da su 
što je more, da je crn
pak da pišem tri godine dana,
ne bi moji’ ispisala jada!”

Narodna lirska pjesma (sevdalinka)`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'Odaberi tačan odgovor',
        question: 'Kada (zelenkada, narcis) i zumbul imaju preneseno značenje i ukazuju na:',
        answers: [
          {
            title: 'mladića i djevojku',
            right: true,
          },
          {
            title: 'baštu sa cvijećem',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Cvjetovi u ovoj pjesmi imaju…',
        answers: [
          {
            title: 'simbolično značenje',
            right: true,
          },
          {
            title: 'onomatopejsko značenje',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Šta o mladićevim osjećanjima govori pitanje: „Dušo moja, u bostanu kado, / kako ti je u bostanu samoj?“',
        answers: [
          {
            title: 'da je mladić zaboravio djevojku',
            right: false,
          },
          {
            title: 'mladićevu brigu, ljubav i tugu',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Uloga hiperbole u predstavljanju djevojčinih osjećanja je:',
        answers: [
          {
            title: 'da opiše prirodu koja je okružuje',
            right: false,
          },
          {
            title: 'dada stvori jasnu sliku o njenoj tuzi, bolu',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Cvijet je simbol…:',
        answers: [
          {
            title: 'ljubavi, nježnosti, pažnje, ljepote',
            right: true,
          },
          {
            title: 'rastanka i zaborava',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pridjevi koji stoje uz imenice i bliže ih određuju su…',
        answers: [
          {
            title: 'sinonimi',
            right: false,
          },
          {
            title: 'epiteti',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Narodna književnost',
    subtitle: 'Smrt Omera i Mejrime',
    text: `Dvoje su se zamilili mladih:
Omer momče, Mejrima djevojka,
u proljeće kad im cvjeta cv’jeće,
kad im cvjeta zumbul i karanfil.
Upazi ih jedna mala straža,
mala straža, Omerova majka,
pa besjedi Omerova majka:
“Mili sine, Omer’, momče mlado,
ti ne ljubi Mejrime djevojke!
Ljepšom će te oženiti majka –
l’jepom Fatom novoga serdara.
Još je Fata od roda bogata,
i tebe će potpomoći blagom.”
Аl’ besjedi Omer momče mlado:
“Prođi me se, moja mila majko.
Nije blago ni srebro ni zlato,
već je blago što je srcu drago.”
To ne sluša Omerova majka,
već na silu oženila sina,
i na silu dovela djevojku.
Kad je bilo večer po večeri
i mladence u ložnicu sveli,
al’ besjedi Omer momče mlado:
“Ao, Fato, ala ti si l’јера!
Moja Mejra nije tako l’јера,
al’ je Mejra srcu mome draga.
Oj, boga ti, Fatima djevojko,
donesi mi divit i hartije,
da napišem do dv’je do tri r’ječi,
jer je moja pobjedljiva majka,
pa će reći da si m’ umorila.”
Kad je majci knjigu napisao,
on govori Fatimi djevojci:
“Oj, boga ti, Fatima djevojko,
kupajte me đulom rumenijem,
prones’te me pokraj moje Mejre,
nek me Mejra mrtvoga cjeliva
kad me nije živog poljubila.
Oj, boga ti, žalosna djevojko,
ne pust’ glasa do bijela dana,
nek se moja naveseli majka
i sestrice kola naigraju
i u kolu pjesme napjevaju.”
To izusti pa i dušu pusti.
Kad ujutru b’jeli dan osvanu,
uranila Omerova majka,
nosi kitu sitnoga bosiljka,
da probudi dvoje mladenaca.
Ciknu, viknu Fatima djevojka:
“Oj, boga ti, mila moja majko,
sinoć ti je Omer počinuo!”
Аl’ besjedi Omerova majka:
“Bog t’ ubio, Fatima djevojko!
Ti si mi ga umorila mlada!”
Аl’ besjedi Fatima djevojka:
“Nisam, majko, života mi moga!
Neg’ evo ti do dv’je do tri r’ječi
što je tebi Omer ostavio.”
Čita r’ječi Omerova majka,
čita r’ječi pa suze proliva.
Kupaše ga đulom rumenijem,
pon’ješe ga Mejrinome dvoru.
Аl’ besjedi Mejrima djevojka:
“Đul miriše, mila moja majko,
đul miriše oko našeg dvora;
čini mi se – Omerova duša.”
Аl’ besjedi l’јере Mejre majka:
“Muč’, ne luduj, Mejrima djevojko!
Muč’, ne luduj, kad budala nisi!
Sad tvoj Omer drugu dragu ljubi,
a za tebe mladu i ne mari!”
Al’ besjedi Mejrima djevojka:
“Đul miriše, mila moja majko,
đul miriše – Omerova duša.”
Ona strča dolje niz čardake,
pa istrča na sokak na vrata,
vidi granu sitnoga bisera,
bogom brati do dva pobratima:
“Čija li je grana od bisera?”
Аl’ besjede do dva pobratima:
“To je grana mladoga Omera.”
Аl’ besjedi Mejrima djevojka:
“Bogom braćo, do dva pobratima,
spustite ga pred moje dvorove –
da ga jadna mrtvoga cjelivam,
kad ga nisam živa poljubila!”
Spustiše ga pred Mejrine dvore,
k njemu Mejra živa primaknula,
mrtva Mejra crnoj zemlji pala.
Sabljama joj sanduk satesaše.
Kad Omera od dvora pon’ješe,
tada Mejru u sanduk spustiše;
kad Omera na groblje don’ješe,
tada Mejru od dvora pon’ješe;
kad Omera u raku spustiše,
tada Mejru na groblje don’ješe;
kad Omera zemljicom posuše,
tada Mejru u raku spustiše.
Tu se tuku do dv’je stare majke
i proklinju i staro i mlado
ko rastavi i milo i drago.

Narodna balada`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'Odaberi tačan odgovor',
        question: 'Epskolirske pjesme govore...',
        answers: [
          {
            title: 'uvijek o osjećanjima',
            right: false,
          },
          {
            title: 'o nekom događaju, ali su prožete snažnim emocijama',
            right: true,
          },
          {
            title: 'isključivo o bojevima i junacima',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Balade su…',
        answers: [
          {
            title: 'izrazito tužne pjesme',
            right: true,
          },
          {
            title: 'vesele, šaljive pjesme',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Stihovi „Nije blago ni srebro ni zlato, / već je blago što je srcu drago“, samostalno upotrijebljeni predstavljaju:',
        answers: [
          {
            title: 'zagonetku',
            right: false,
          },
          {
            title: 'poslovicu',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Aliteracija je…',
        answers: [
          {
            title: 'uzastopno ponavljanje istog samoglasnika u nizu riječi',
            right: false,
          },
          {
            title: 'uzastopno ponavljanje istog suglasnika u nizu riječi',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pjesma se završava gradacijom. U njoj se osjećanja i slike nižu prema:',
        answers: [
          {
            title: 'težini',
            right: true,
          },
          {
            title: 'zanimljivosti',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Omer i Mejrima su simbol…',
        answers: [
          {
            title: 'tragične ljubavi',
            right: true,
          },
          {
            title: 'davno prošlog vremena',
            right: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Narodna književnost',
    subtitle: 'Tuturuza i šeh Meco (odlomak)',
    type: essay,
    text: `Tuturuza je ispričao najnoviju hridsku dogodovštinu. Slinić koji je kad je, ozgodnio i postao čaršijski prvak, promijenio prezime, oćutio je neku večer nekakvo orgecanje u magazi pod kućom. Pomislio je na hrsuza pa je uzdigao svu kućnu čeljad na noge da ga hvataju. I komšije su opkolile kuću i poredale se pred magazna vrata. Slinić je nagovarao hrsuza da izađe, da se ne boji, neće mu ništa biti. “Izađi slobodno! Neću te prijaviti policiji!” Štropot bakrenog suda nije prestajao, ali hrsuz nije htio napolje. Da ga ohrabri, Slinić ga je nagovarao da se ne stidi. “Slobodno ti izađi! I ja sam pod mladost bio takav!” Odškrinuo je magazna vrata. Najednom se nešto u magazi skrha, a na vrata jurne pas, krupan kao tele, i pobjegne između svijeta. Sve bi dobro bilo da nije bilo tuđeg svijeta, iz komšiluka. I tako se proču priča i sađe odmah ujutro do Baščaršije, pa Slinić ne može s mirom među svijet.
Mahmutaga, dobričak i mehak čovjek, zacenuo se od smijeha. Sve ga suze oblile. Jedva je progovorio:
– Bolji ti je dram smijeha, nego tovar suza.
Tuturuza je malo promućkao u glavi, a onda hrabro progovorio, makar se malo i pribojavao da protuslovi uglednom čaršijskom starcu, posljednjem ćehaji abadžijskog esnafa:
– I jedna suza može nekad vrijediti više od tovara zlata.
– A oklen ti to znaš? – oglasio se prijekorno šeh Meco.
Ako baš hoćete da znate, da vam ispričam.
– Tamam! – pristade Mahmutaga.
Ženskadija koja se spremala čuti neku pjesmu iznenadila se kad se Tuturuza podiže na koljena i poče, upravo kao kakav hodža sa ćursa, pričati priču koju niko od njih nije bio čuo.
U Bagdadu, u glavnoj džamiji Azamiji, pred džumu bilo je puno svijeta, ali váiz nije došao. Svijet se osvrtao neće li ga opaziti kako ulazi na glavna vrata, da ustane ispred njega na noge, da se razmakne i napravi mu prolaz do ćursa. Ali, nije ga bilo. Bilo je još uleme, ali njega nije bilo, a nije svakom dano da vâzi. Je li bilo tako udešeno da on taj dan ne dođe pa da se zamoli učeni šejh Musaddik iz Kufe, koji je tih dana boravio u Bagdadu i upravo bio u Azamiji, da on taj dan vázi, jer je bio nadaleko znan kao učenjak i váiz, ne znam. Kako ne bî stalnog vaiza, nekoliko hodža zamoli šejha Musaddika da im on toga dana provazi. On se malo nećkao, ali ga zamoliše da im barem ispriča o čemu se u posljednje vrijeme priča u Kufi. Napokon pristade i pope se na ćurs.
Svi su u nj uperili oči, a slijepi, i takvih na istoku ima uvijek dosta, pomalo su zakrenuli glavu ustranu da im uho na koje bolje čuju bude okrenuto prema ćursu.
Šejh Musaddik se pomolio Bogu onom dovom kojom se Musa pejgamber obratio Bogu da mu rasprostrani prsa i odriješi čvor s jezika, a onda prešao na začudnu priču o događaju koji se nedavno zbio u Kufi, gdje se naširoko prepričavao.
U Kufi je bio jedan trgovac vrlo bogat, koji je pošteno trgovao, lijepo zarađivao, ugledao sirotinju, davao robu i na veresiju, pozajmljivao i gotovinu bez kamata, a svijet mu se pošteno oduživao i nikad ga niko nije zakinuo, a ni on nikoga. Jednom trgovcu iz Basre dao je na veresiju dosta skupocjene robe i u tome je i umro, a da nije obavijestio ni sina koji je uza nj radio i naslijedio ga.
I taj njegov sin je trgovao, radio, stanovao u očinskoj kući, imao ženu i djecu i dobro živio. Jedno vrijeme je trgovina napredovala, a on, kao otac mu, dijelio, kupovao, zajmao i posuđivao drugima, neki vraćali posuđeno i oduživali se, a neki ga, namjerno ili slučajno, zakidali pa se u dugu zemanu desilo da je spao na najtanje grane. Čak mu se trgovina potpuno ispraznila, kuća ogoljela, pa je došlo vrijeme da nije mogao sebe i svoju kućnu čeljad ni prehraniti.
Smišljao šta da uradi pa odluči prodati kuću ne bi li se time neko vrijeme izdržavao, pa jeda jednom krene posao naprijed. Ali mu se nije dalo dati kuću na telala pa da se javno prodaje. Imao je jednog dobrog prijatelja pa ga poče tražiti da od njega uzajmi nešto malo novca dok ne proda kuću. Tražio ga je po svoj Kufi, a nigdje da ga susretne. Ni kući ga nije bilo. Gladan on, gladna mu kućna čeljad – mora ga naći pa gdje bilo da bilo. Pođe prema džamiji da klanja jer se primaklo vrijeme akšama, kad ugleda ahbaba kako nosi u ruci somun. Pozdraviše se, a trgovac ga odmah zamoli da mu pozajmi nešto novca dok ne proda kuću, a najprije je njemu nudi da je on kupi. Gladna su mu kućna čeljad, a i on, pa... Postiđen je oborio oči preda se, a prijatelj mu se popipa po džepovima, po pasu, ali kese s novcem nema.
– Evo ti ovaj somun pa hajde kući, kad ste gladni, a ja ću ti poslije naći para koliko ti bude trebalo.
Zahvali se onaj trgovac, uze somun pa se uputi odmah kući. Podigao onaj somun do usta da odgrize barem zalogaj, a hljeb miriše kao duša. Ne, neće ga načinjati nego će ga cijela donijeti kući.
Tako misli trgovac i uputi se najbližim sokakom kući, kad niz sokak ide jedna žena, vodi dijete. Dijete kao švrače mršavo, izvalilo krupne crne oči pa njima jede onaj somun u trgovčevim rukama. Gurkā mater i pokazuje joj trgovčev somun. Kad dođoše uprema se žena zastade i zamoli trgovca da radi Allaha otkine samo zalogaj somuna jer joj je dijete gladno – i ne pamti kad su posljednji put jeli. Trgovac htjede otkinuti komad, ali kad ču da nisu odavno jeli, a on i njegova djeca su ipak nešto jučer pregrizli, dade ženi cio somun.
Dijete razvuče lice od veselja, a materi potekoše dvije suze kao dva alema niz obraze.
Pođe trgovac kući, ali od umora i gladi ne može dalje pa se spusti ukraj ulice i poče razmišljati:
– Šta ja uradih? Kod kuće gladna moja djeca, gladna moja žena, ja gladan, a dadoh somun neznanoj ženi i njezinu djetetu. Jest da je sevab što sam nahranio gladnu ženu i gladno dijete, ali sam zgriješio prema svojoj porodici što sam ih ostavio da gladuju. Na jednoj strani sevab, a na drugoj grijeh. Ali nije to grijeh. I tu sam zaradio sevab, jer sam tuđina nahranio. To su tri sevaba. Dijete sam nahranio, mater mu nahranio, a treći je sevab što sam ono što je u onoj prilici bilo najpreče meni i mojoj čeljadi poklonio onima koji trpe kao i mi.
Šejtan mu je došaptavao da to i nije sevab, da je grijeh što je uradio jer je zanemario one koji su mu najpreči, koji ovise o njemu, a on, trgovac, odgonio ga je u mislima od sebe i bio raspoložen što je dijete nahranio, što je svojim darom obradovao majku koja nije mogla uzdržati suze zahvalnice, a nikakav alem-kamen nije vrijedan kao iskrena suza.
Mrak se počeo spuštati nad zemlju kad eto ti onog njegova prijatelja što mu je dao somun, sav se oznojio i zapuhao se od umora i trke. Ugleda trgovca pa će kao izvan sebe:
– Gdje si, pobogu? Izgubih noge tražeći te... Svu sam Kufu obio, a tebe nigdje, kao da si u zemlju propao.
– Šta je, što me tražiš? Jesi li mi našao kupca kući?
– Kakav kupac, kakva kuća? Došao ti kući trgovac koji ti se zadužio kod oca, pa eno sad na tri deve donio blago, sav dug i hedije. Nije ni znao da ti je otac umro, pa hajde sad ti primi to imáće.

Alija Nametak`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'Odaberi tačan odgovor',
        question: 'Poenta prvog dijela priče je:',
        answers: [
          {
            title: 'Bolji ti je dram smijeha, nego tovar suza.',
            right: true,
          },
          {
            title: 'Bolji ti je dram smijeha, nego tovar blaga.',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Drugi dio priče najavljuje mudrost:',
        answers: [
          {
            title: 'Jedna suza može vrijediti više od tovara smijeha.',
            right: false,
          },
          {
            title: 'I jedna suza može nekad vrijediti više od tovara zlata.',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'O čijoj je suzi ovdje riječ?',
        answers: [
          {
            title: 'trgovčevoj',
            right: false,
          },
          {
            title: 'majčinoj',
            right: true,
          },
          {
            title: 'djetetovoj',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Koja bi poslovica odgovarala trgovčevom postupku (dao je somun sirotici iako je u njegovoj kući nestalo hrane):',
        answers: [
          {
            title: 'Dobro se dobrim vraća.',
            right: true,
          },
          {
            title: 'Dobar i lud su braća.',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pričalac je ispričao priču da bi one koji su je slušali…',
        answers: [
          {
            title: 'poučio dobroti',
            right: true,
          },
          {
            title: 'zabavio',
            right: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Umjetnička književnost - Roman',
    subtitle: 'Starac i more (Odlomci)',
    type: essay,
    text: `Starac Santjago, kubanski ribar, živi u krajnjoj bijedi u jednoj kolibici na obali mora. Već osamdeset i četiri dana uzalud isplovljava da nešto ulovi, ali nema sreće. Jedini mu je prijatelj jedan dječak kome otac zabranjuje da se viđa sa njim.
Osamdeset i petog dana izgledalo je kao da se sreća starom ribaru osmjehnula. Ulovio je veliku sabljarku. Dva dana ga riba vuče za sobom, a starac posljednjim snagama uspijeva da se održi u svojoj lađici...
*
Dva sata kasnije riba je još uvijek kružila, dok je starac bio sav mokar od znoja, a duboko u kostima osjećao je težak umor. Krugovi su sada ipak bili mnogo manji, a po nagibu povraza starac zaključi da se riba postepeno diže prema površini.
Već se jedan sat starcu mračilo pred očima, a slani znoj zalijevao mu je oči i ranu iznad oka i na čelu. Nije se bojao što mu se pred očima mrači. To je prirodno kad čovjek ovako naporno povlači povraz. Ali dva puta je osjetio da ga hvata nesvjestica i da mu se vrti u glavi, i to ga je zabrinulo.
– Ne smijem iznevjeriti samoga sebe, pa da umrem kraj ovakve ribe – reče. – Bože, pomozi mi da izdržim kad sam je već tako lijepo privukao. Izmolit ću sto očenaša i sto zdravomarija. Ali sad ih ne mogu izmoliti.
Uzmi kao da sam ih već izmolio, pomisli. Izmolit ću ih kasnije.
Upravo tada osjeti na povrazu, koji je držao objema rukama, neko udaranje i trzanje. Osjećalo se nešto oštro, tvrdo i teško.
Udara kopljem u žicu na kraju povraza, pomisli. Do toga je moralo doći. To je morala učiniti. Ali mogla bi zbog toga iskočiti, a ja bih volio da i dalje kruži. Onda je morala iskočiti da udahne zraka. Ali poslije toga svaki će skok proširiti usjeklinu udice, pa bi se mogla otkačiti.
– Ne skači, ribo, reče. – Ne skači.
Riba je još nekoliko puta udarila u žicu, i svaki put kad je trgnula glavom starac je popustio malo povraza.
Ne smijem joj zadavati nove muke, pomisli. Moje nisu važne. Ja mogu savladati svoje. Ali ona bi od bola mogla pobjesniti.
Nešto kasnije riba prestade udarati u žicu i opet poče polako kružiti. Starac je sada neprekidno povlačio povraz. Ali ponovo osjeti da ga hvata nesvjestica. On zgrabi malo morske vode lijevom rukom i polije glavu. Zatim se iznova polije i protrlja zatiljak.
– Nemam grčeva – reče. – Riba će uskoro izaći, a ja ću izdržati. Moraš izdržati. O tome nema ni govora.
On se nasloni koljenima na pramac, a povraz načas ponovo prebaci preko leđa. Sad ću se odmoriti dok je ona na vanjskoj polovini kruga, a kad dođe bliže, ustat ću i vući je, odluči on.
.......
Prvi put je ugledao ribu kad se treći put okrenula. Najprije ju je opazio kao dugačku sjenu, koja se tako dugo vukla ispod čamca da nije mogao vjerovati da je tako dugačka.
Ne – reče. – Ne može biti tako velika.
Ali ona je zaista bila tako velika, i na kraju ovog kruga približila se površini samo trideset jardi od čamca, te joj starac vidje repnu peraju iznad vode. Bila je viša od najveće kose i vrlo blijede ljubičaste boje nad tamnoplavom vodom. Bila je povijena, a kako je riba plivala ispod same površine, starac je mogao vidjeti njeno golemo tijelo i ljubičaste pruge koje su je opasivale. Leđna joj je peraja bila spuštena, a goleme prsne peraje raširene.
Na ovom krugu starac joj opazi oči, a ugleda i dvije sive ustavice kako plivaju kraj nje. Ponekad bi se prilijepile na nju. Ponekad bi pobjegle. A ponekad bi mirno plivale u sjeni ribe. Svaka je bila dugačka preko tri stope a kad bi zaplivale brzo, savijale bi tijelo kao jegulje.
Starac se uznojio, ali ne samo zbog sunca. Svaki put kad je riba mirno, spokojno zaokrenula prema njemu, starac je pritezao sve više povraza, te je bio siguran da će nakon dva kruga imati priliku da zabije harpunu u nju.
Samo je moram privući blizu, blizu, blizu, pomisli. Ne smijem je gađati u glavu. Moram je pogoditi u srce.
– Budi miran i jak, starče – reče.
U idućem krugu leđa ribe proviriše iz vode, ali je bila predaleko od čamca. I u sljedećem krugu bila je još uvijek predaleko, ali više nad vodom, pa je starac bio siguran da će je, kad pritegne još malo povraza, privući do čamca.
Harpunu s laganim užetom smotanim u okrugloj košarici bio je već odavno pripremio i drugi kraj užeta omotao oko bitve na pramcu.
Riba se kružeći približavala mirna i lijepa, mičući samo velikim repom. Starac upre svu snagu da je privuče bliže. Riba se samo načas nakrenu na bok. Zatim se ispravi i iznova nastavi kruženje.
– Pokrenuo sam je – reče starac. – Pokrenuo sam je, dakle.
Ponovo osjeti da ga hvata nesvjestica, ali je ipak svom snagom potezao veliku ribu. Pokrenuo sam je, pomisli. Možda ću je ovaj put izvrnuti. Vucite, ruke, pomisli. Držite se, noge. Glavo, izdrži mi. Nikada me još nisi iznevjerila. Ovaj put ću je izvrnuti.
Ali kad je skupio svu svoju snagu i stao je privlačiti iz petnih žila, još prije nego je došla do čamca riba se malo nakrenu, a onda ispravi i otpliva dalje.
– Ribo – reče starac. – Ribo, ionako ćeš umrijeti. Zar moraš ubiti i mene?
Ovako nećemo ništa postići, pomisli. Usta su mu se tako osušila da nije mogao govoriti, ali sada nije mogao dohvatiti vode. Ovaj put je moram privući, pomisli. Ne bih mogao izdržati još mnogo krugova. Mogao bih, reče sam sebi. Mogao bih uvijek.
Kad se riba idući put okrenula, gotovo ju je privukao, ali ona se ipak ispravila i lagano otplovila.
Ubit ćeš me, ribo, pomisli starac. Ali imaš pravo. Nikad nisam vidio većeg, ljepšeg, mirnijeg ili plemenitijeg stvora od tebe, sestro. Hajde, ubij me. Svejedno mi je tko će koga ubiti.
Počinje ti se mutiti u glavi, starče, pomisli. Moraš sačuvati bistru glavu. Sačuvaj bistru glavu i podnesi sve kao muškarac. Ili kao riba, pomisli.
Iznova pokuša, ali s istim uspjehom. Tako, pomisli, i osjeti da ga izdaju snage, još prije nego je počeo; pokušat ću još jednom.
On sakupi sav svoj bol, i posljednje ostatke snage, i davno preživjeli ponos i usredotoči ih protiv ribinih muka, i riba se izvrnu na bok i zapliva polagano na boku, gotovo dodirujući čamac kljunom, i poče prolaziti mimo njega, onako dugačka, duboka, široka, srebrnasta, išarana ljubičastim prugama i beskrajna u vodi.
Starac ispusti povraz i stane na njega nogom te podiže harpunu što je više mogao, i zarinu je svom snagom i s još više snage, koju je u tom času prikupio, u bok ribe, upravo iza velike prsne peraje, koja se dizala sve do starčevih prsiju. Osjetio je kako se željezo zarilo u meso, pa se navali na harpunu svom težinom i zarinu je još dublje.
U smrtnoj muci riba oživje i skoči visoko iz vode u čitavoj svojoj dužini, širini, snazi i ljepoti. Činilo se kao da lebdi u zraku iznad starca u čamcu. A onda pade s takvom žestinom da je voda zapljusnula preko starca i čitava čamca.
Starac osjeti nesvjesticu i mučninu te mu se smrači pred očima. Ali on otpusti uže s harpune i propusti ga polako kroz ranjave ruke, a kad mu se razbistrilo pred očima, ugleda kako riba leži na leđima, okrenuvši srebrnasti trbuh uvis. Držak harpune stršio je koso iz ribinih leđa, a morska voda crvenjela je od krvi što je tekla iz njezina srca. Najprije je bila tamna kao riblje jato usred plave vode koja je bila duboka više od jedne milje. Onda se raširila poput oblaka. A riba se srebrnasta i nepomična ljuljala na valovima.
            
            
Ernest Hemingvej`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'Odaberi tačan odgovor',
        question: 'Ernest Hemingvej, pisac romana „Starac i more“, je dobitnik…',
        answers: [
          {
            title: 'Pulicerove nagrade',
            right: false,
          },
          {
            title: 'Nobelove nagrade',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'U romanima se prikazuje…',
        answers: [
          {
            title: 'cijeli život jednog lika',
            right: true,
          },
          {
            title: 'jedan važan događaj iz života književnog lika',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Slikajući nesklad između ribareve snage i težine borbe sa ribom, pisac se poslužio stilskom figurom koja se zove…',
        answers: [
          {
            title: 'kontrast',
            right: true,
          },
          {
            title: 'simbol',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Ribareve riječi upućene ribi: „Nikad nisam vidio većeg, ljepšeg, mirnijeg ili plemenitijeg stvora od tebe, sestro“, izražavaju…',
        answers: [
          {
            title: 'zadovoljstvo zbog dobrog ulova',
            right: false,
          },
          {
            title: 'saznanje da narušava sklad i ljepotu prirode',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Legenda je…',
        answers: [
          {
            title: 'istinita priča o nekom važnom događaju ili ličnosti.',
            right: false,
          },
          {
            title: 'priča sa nestvarnim elementima o nekom važnom događaju ili ličnosti.',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Umjetnička književnost - Roman',
    subtitle: 'Zlatna ptica (Odlomci iz romana “Derviš i smrt”)',
    type: essay,
    text: `Svoju priču “o odnosu i sukobu između ideologije i ozlojeđenog pojedinca”, kako je i sam rekao o temi romana, Meša Selimović je prenio na derviša Nurudina, intelektualca, koji je nakon kratkog ratovanja i prve promašene ljubavi našao utočište u vjeri. Te okolnosti su razlog sukoba, podijeljenosti čovjeka između vjere i slobodnog izbora da odlučuje, između mirenja i pobune, slobode i neslobode – ukratko, svega onoga što je pisac osjećao kada je saznao da je izgubio brata pod neshvatljivim okolnostima. Odlomci su uzeti iz drugog dijela romana i govore o susretu mladog derviša sa dječakom koji ima samo majku i slijepu baku.
*
Biće nesrećan koji svoju dušu okalja.
Jedno dijete je govorilo o svome strahu, davno. Ličilo je na pjesmicu:
Na tavanu
ima jedna greda koja udara u glavu,
ima jedan vjetar koji lupa kapkom,
ima jedan miš koji viri iz ćoška.
Bilo mu je šest godina, veselim plavim očima gledao je zadivljeno u vojnike, i u mene, mladog derviša-askera, bili smo drugovi, i prijatelji, ne znam da li je ikog u životu toliko volio, jer sam ga dočekivao radosno i nisam pokazivao da sam stariji.
Ljeto je bilo, smjenjivala se kiša i vrelina, stanovali smo u čadorima, na ravnici punoj komaraca i kreketa žaba, sat hoda od Save, uz nekadašnji han, gdje je mališan stanovao s majkom i poluslijepom bakom.
Jednom, dok sam sjedio u polju, na trulom panju, u gruboj slakovini do koljena, sam, zaglušen cikom zrikavaca pod vrelim suncem (uvijek je nešto cičalo, pištalo, pjevalo na ovoj ravnici), smućen onim što sam čuo od vojnika o mladoj ženi u hanu, vidio sam dječaka kako je zastao u travi, utonuo gotovo do grla. Javio mi se s povjerenjem. Bili smo već poznanici.
Puštao sam da me vodi svojim djetinjim putevima, da razgovaramo djetinjim jezikom, da mislimo na djetinji način, srećan kad mi je to uspijevalo potpuno, jer sam osjećao da sam tako obogaćen. Pravili smo svirale od trave sabljarke i uživali u oštrom piskavom zvuku koji je nastajao kad je zeleno sječivo sjeklo vazduh iz usta. Pažljivo smo djeljali zovino drvo, izbacujući vlažnu srčiku, da dobijemo šupljinu punu skrivenih glasova. Nizali smo u vijenac plave i žute barske cvjetove da ih odnese majci, poslije sam ga nagovorio da kiti topoline grane, da ne bih mislio ništa ružno.
– Hoće li na granama niknuti cvijeće? – pitao me.
– Možda i hoće – rekao sam, pomalo i sam vjerujući u to cvjetno oživljavanje sivog drveta.
– Gdje je sunce – pitao me jednom.
– Iza oblaka.
– Je li uvijek tamo? I kad je oblačno?
– Uvijek.
– Možemo li ga vidjeti kad se popnemo na vrh topole?
– Ne možemo.
– A na munaru?
– Ne možemo. Iznad munare je oblak.
– A kad bi se probila rupa u oblaku?
Zaista, zašto ljudi ne probiju rupu u oblaku, zbog dječaka koji vole sunce?
Kad je padala kiša, sjedio sam s njim u jednoj od soba prostrane kuće, vodio me i na tavan, i jedna greda me zaista udarila u glavu, pričao mi je svoje lijepe priče o velikom – velikom čamcu, kao ova kuća, koji plovi po rijeci-ravnici, o ljubimcu golubu koji u sparnim noćima leprša iznad njegove postelje dok on spava, o baki koja ne vidi ali zna sve priče na svijetu.
– I o zlatnoj ptici?
– I o zlatnoj ptici.
– Šta je to zlatna ptica?
– Zar ne znaš? – čudio se moj mali učitelj. – To je ptica od zlata. Nju je teško naći.
I u mojoj kući bio je tavan. Sjedio sam šćućuren na starom bačenom sedlu, sam u tom svijetu neupotrebljivih stvari što su izgubile raniji oblik i poprimale novi, prema dobu dana i mojim raspoloženjima, prema jačoj ili slabijoj svjetlosti što ih je preobličavala, prema tuzi ili radosti u meni. Jašući na sedlu u susret želji da nešto bude, da se desi nešto iz maglovitih dječijih maštanja što su se hirovito mijenjala, nestvarna kao i stvari u tavanskoj polutami.
Taj tavan me stvarao, kao što me stvaralo i bezbroj drugih mjesta i prilika, susreta, ljudi, nastajao sam u hiljadama izmjena, i uvijek mi se činilo da je sve ranije nestajalo sa novom promjenom, da se gubilo kao beznačajno u maglama proteklog vremena. A onda sam, uvijek nanovo, i neočekivano, nalazio tragove svega što je bivalo, kao žive iskopine, kao svoje vlastite naslage, i mada stare i ružne, postajale su drage i lijepe. Taj ponovo otkriveni neizgubljeni dio mene, što nije samo sjećanje, vrijeme je uljepšalo i vraćalo iz nedohvatljivih daljina, spajajući me s njim. Tako je postojao dvojako, kao djelić moje sadašnje ličnosti, i kao sjećanje. Kao sadašnjost, i kao početak.
Na tom tavanu, gdje sam tražio samoću, saznavajući se, i pribježište od otvorenih širina zavičaja, iako sam ga volio više nego majku, mislio sam često o zlatnoj ptici iz neninih priča. Nisam znao šta je ta zlatna ptica, ali dok sam slušao kako pada kiša po krovu od šindre, i otvoreni kapak lupa na vjetru, i bezbroj očiju viri iz ćoškova, zamišljao sam kako pronalazim svoju zlatnu pticu, kao junak iz neninih žubornih kazivanja, znajući da se tako, na neki čudan, neobjašnjiv način, ostvaruje sreća.
Zaboravio sam na nju docnije, život je raspršio snatrenja mladosti, moguća u vrelom zamišljanju bez prepreka, u slobodi željenja bez granica, rođena u neiskustvu. A javila se ponovo, kao podsmijeh, kad mi je bilo najteže.
Bio jednom jedan dječak, u očevoj kući, nad rijekom, koji je sanjao zlatne snove, jer ništa nije znao o životu.

Meša Selimović`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'Odaberi tačan odgovor',
        question: 'Mladi derviš – asker je bio „tako obogaćen“ zbog toga što je…:',
        answers: [
          {
            title: 'sa dječakom uživao u njegovom maštovitom svijetu',
            right: true,
          },
          {
            title: 'mislio da će ostati da živi u dječakovoj prostranoj kući',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Šta je pripovjedača privlačilo na druženje sa dječakom za vrijeme kišnih dana?',
        answers: [
          {
            title: 'nestrpljenje i dosada',
            right: false,
          },
          {
            title: 'sjećanje na sopstveno djetinjstvo',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pripovjedač kaže: „Taj tavan me je stvarao“, ali i druga mjesta i susreti. To znači da je…',
        answers: [
          {
            title: 'tavan bio dio njega kao životno iskustvo i veza sa prošlošću',
            right: true,
          },
          {
            title: 'on bio dijete koje je voljelo da se krije',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Zlatna ptica iz mladih dana je...',
        answers: [
          {
            title: 'samo priča pripovjedačeve majke',
            right: false,
          },
          {
            title: 'simbol mladalačkog gledanja na život koji nudi samo sreću',
            right: true,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Roman “Derviš i smrt“ iz koga je uzet ovaj odlomak, je…',
        answers: [
          {
            title: 'historijski roman',
            right: false,
          },
          {
            title: 'psihološki roman',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Umjetnička književnost - Roman',
    subtitle: 'Starac i more',
    type: essay,
    text: `Starac Santjago, kubanski ribar, živi u krajnjoj bijedi u jednoj kolibici na obali mora. Već osamdeset i četiri dana uzalud isplovljava da nešto ulovi, ali nema sreće. Jedini mu je prijatelj jedan dječak kome otac zabranjuje da se viđa sa njim.
            Osamdeset i petog dana izgledalo je kao da se sreća starom ribaru osmjehnula. Ulovio je veliku sabljarku. Dva dana ga riba vuče za sobom, a starac posljednjim snagama uspijeva da se održi u svojoj lađici...
            *
            Dva sata kasnije riba je još uvijek kružila, dok je starac bio sav mokar od znoja, a duboko u kostima osjećao je težak umor. Krugovi su sada ipak bili mnogo manji, a po nagibu povraza starac zaključi da se riba postepeno diže prema površini.
            Već se jedan sat starcu mračilo pred očima, a slani znoj zalijevao mu je oči i ranu iznad oka i na čelu. Nije se bojao što mu se pred očima mrači. To je prirodno kad čovjek ovako naporno povlači povraz. Ali dva puta je osjetio da ga hvata nesvjestica i da mu se vrti u glavi, i to ga je zabrinulo.
            – Ne smijem iznevjeriti samoga sebe, pa da umrem kraj ovakve ribe – reče. – Bože, pomozi mi da izdržim kad sam je već tako lijepo privukao. Izmolit ću sto očenaša i sto zdravomarija. Ali sad ih ne mogu izmoliti.
            Uzmi kao da sam ih već izmolio, pomisli. Izmolit ću ih kasnije.
            Upravo tada osjeti na povrazu, koji je držao objema rukama, neko udaranje i trzanje. Osjećalo se nešto oštro, tvrdo i teško.
            Udara kopljem u žicu na kraju povraza, pomisli. Do toga je moralo doći. To je morala učiniti. Ali mogla bi zbog toga iskočiti, a ja bih volio da i dalje kruži. Onda je morala iskočiti da udahne zraka. Ali poslije toga svaki će skok proširiti usjeklinu udice, pa bi se mogla otkačiti.
            – Ne skači, ribo, reče. – Ne skači.
            Riba je još nekoliko puta udarila u žicu, i svaki put kad je trgnula glavom starac je popustio malo povraza.
            Ne smijem joj zadavati nove muke, pomisli. Moje nisu važne. Ja mogu savladati svoje. Ali ona bi od bola mogla pobjesniti.
            Nešto kasnije riba prestade udarati u žicu i opet poče polako kružiti. Starac je sada neprekidno povlačio povraz. Ali ponovo osjeti da ga hvata nesvjestica. On zgrabi malo morske vode lijevom rukom i polije glavu. Zatim se iznova polije i protrlja zatiljak.
            – Nemam grčeva – reče. – Riba će uskoro izaći, a ja ću izdržati. Moraš izdržati. O tome nema ni govora.
            On se nasloni koljenima na pramac, a povraz načas ponovo prebaci preko leđa. Sad ću se odmoriti dok je ona na vanjskoj polovini kruga, a kad dođe bliže, ustat ću i vući je, odluči on.
            .......
            Prvi put je ugledao ribu kad se treći put okrenula. Najprije ju je opazio kao dugačku sjenu, koja se tako dugo vukla ispod čamca da nije mogao vjerovati da je tako dugačka.
            Ne – reče. – Ne može biti tako velika.
            Ali ona je zaista bila tako velika, i na kraju ovog kruga približila se površini samo trideset jardi od čamca, te joj starac vidje repnu peraju iznad vode. Bila je viša od najveće kose i vrlo blijede ljubičaste boje nad tamnoplavom vodom. Bila je povijena, a kako je riba plivala ispod same površine, starac je mogao vidjeti njeno golemo tijelo i ljubičaste pruge koje su je opasivale. Leđna joj je peraja bila spuštena, a goleme prsne peraje raširene.
            Na ovom krugu starac joj opazi oči, a ugleda i dvije sive ustavice kako plivaju kraj nje. Ponekad bi se prilijepile na nju. Ponekad bi pobjegle. A ponekad bi mirno plivale u sjeni ribe. Svaka je bila dugačka preko tri stope a kad bi zaplivale brzo, savijale bi tijelo kao jegulje.
            Starac se uznojio, ali ne samo zbog sunca. Svaki put kad je riba mirno, spokojno zaokrenula prema njemu, starac je pritezao sve više povraza, te je bio siguran da će nakon dva kruga imati priliku da zabije harpunu u nju.
            Samo je moram privući blizu, blizu, blizu, pomisli. Ne smijem je gađati u glavu. Moram je pogoditi u srce.
            – Budi miran i jak, starče – reče.
            U idućem krugu leđa ribe proviriše iz vode, ali je bila predaleko od čamca. I u sljedećem krugu bila je još uvijek predaleko, ali više nad vodom, pa je starac bio siguran da će je, kad pritegne još malo povraza, privući do čamca.
            Harpunu s laganim užetom smotanim u okrugloj košarici bio je već odavno pripremio i drugi kraj užeta omotao oko bitve na pramcu.
            Riba se kružeći približavala mirna i lijepa, mičući samo velikim repom. Starac upre svu snagu da je privuče bliže. Riba se samo načas nakrenu na bok. Zatim se ispravi i iznova nastavi kruženje.
            – Pokrenuo sam je – reče starac. – Pokrenuo sam je, dakle.
            Ponovo osjeti da ga hvata nesvjestica, ali je ipak svom snagom potezao veliku ribu. Pokrenuo sam je, pomisli. Možda ću je ovaj put izvrnuti. Vucite, ruke, pomisli. Držite se, noge. Glavo, izdrži mi. Nikada me još nisi iznevjerila. Ovaj put ću je izvrnuti.
            Ali kad je skupio svu svoju snagu i stao je privlačiti iz petnih žila, još prije nego je došla do čamca riba se malo nakrenu, a onda ispravi i otpliva dalje.
            – Ribo – reče starac. – Ribo, ionako ćeš umrijeti. Zar moraš ubiti i mene?
            Ovako nećemo ništa postići, pomisli. Usta su mu se tako osušila da nije mogao govoriti, ali sada nije mogao dohvatiti vode. Ovaj put je moram privući, pomisli. Ne bih mogao izdržati još mnogo krugova. Mogao bih, reče sam sebi. Mogao bih uvijek.
            Kad se riba idući put okrenula, gotovo ju je privukao, ali ona se ipak ispravila i lagano otplovila.
            Ubit ćeš me, ribo, pomisli starac. Ali imaš pravo. Nikad nisam vidio većeg, ljepšeg, mirnijeg ili plemenitijeg stvora od tebe, sestro. Hajde, ubij me. Svejedno mi je tko će koga ubiti.
            Počinje ti se mutiti u glavi, starče, pomisli. Moraš sačuvati bistru glavu. Sačuvaj bistru glavu i podnesi sve kao muškarac. Ili kao riba, pomisli.
            Iznova pokuša, ali s istim uspjehom. Tako, pomisli, i osjeti da ga izdaju snage, još prije nego je počeo; pokušat ću još jednom.
            On sakupi sav svoj bol, i posljednje ostatke snage, i davno preživjeli ponos i usredotoči ih protiv ribinih muka, i riba se izvrnu na bok i zapliva polagano na boku, gotovo dodirujući čamac kljunom, i poče prolaziti mimo njega, onako dugačka, duboka, široka, srebrnasta, išarana ljubičastim prugama i beskrajna u vodi.
            Starac ispusti povraz i stane na njega nogom te podiže harpunu što je više mogao, i zarinu je svom snagom i s još više snage, koju je u tom času prikupio, u bok ribe, upravo iza velike prsne peraje, koja se dizala sve do starčevih prsiju. Osjetio je kako se željezo zarilo u meso, pa se navali na harpunu svom težinom i zarinu je još dublje.
            U smrtnoj muci riba oživje i skoči visoko iz vode u čitavoj svojoj dužini, širini, snazi i ljepoti. Činilo se kao da lebdi u zraku iznad starca u čamcu. A onda pade s takvom žestinom da je voda zapljusnula preko starca i čitava čamca.
            Starac osjeti nesvjesticu i mučninu te mu se smrači pred očima. Ali on otpusti uže s harpune i propusti ga polako kroz ranjave ruke, a kad mu se razbistrilo pred očima, ugleda kako riba leži na leđima, okrenuvši srebrnasti trbuh uvis. Držak harpune stršio je koso iz ribinih leđa, a morska voda crvenjela je od krvi što je tekla iz njezina srca. Najprije je bila tamna kao riblje jato usred plave vode koja je bila duboka više od jedne milje. Onda se raširila poput oblaka. A riba se srebrnasta i nepomična ljuljala na valovima.
            
          
          Ernest Hemingvej`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Ernest Hemingvej, pisac romana „Starac i more“, je dobitnik…',
        answers: [
          {
            title: 'Pulicerove nagrade',
            right: false,
          },
          {
            title: 'Nobelove nagrade',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'U romanima se prikazuje…',
        answers: [
          {
            title: 'cijeli život jednog lika',
            right: true,
          },
          {
            title: 'jedan važan događaj iz života književnog lika',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Slikajući nesklad između ribareve snage i težine borbe sa ribom, pisac se poslužio stilskom figurom koja se zove…',
        answers: [
          {
            title: 'kontrast',
            right: true,
          },
          {
            title: 'simbol',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Ribareve riječi upućene ribi: „Nikad nisam vidio većeg, ljepšeg, mirnijeg ili plemenitijeg stvora od tebe, sestro“, izražavaju…',
        answers: [
          {
            title: 'zadovoljstvo zbog dobrog ulova',
            right: false,
          },
          {
            title: 'saznanje da narušava sklad i ljepotu prirode',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Umjetnička književnost - Roman',
    subtitle: 'Lovac u žitu',
    type: essay,
    text: `Roman “Lovac u žitu” po mnogo čemu je neobičan i zato već dugo, kod mnogih generacija, izaziva “ljubav na prvi pogled”. Roman počinje bez uvoda, direktno se ulazi u radnju i pričanje ima retrospektivni tok.
            Pričalac, glavni lik romana, Holden Kolfild, o događajima govori kada je već sve preživio i razbolio se. Dok leži u bolesničkoj postelji, svojom pričom obuhvata sve ono što se dogodilo u nekoliko dana oko Božića. Holden se odlikovao oštrinom zapažanja i stalno isticao da mrzi sve što zvuči lažno, istrošeno i licemjerno, a svijet u kome je živio davao je mnogo primjera za to. Shvatao je da se većina ponaša po šablonu, da većina govori ono što sredina u kojoj se nalazi voli da čuje ili ono što je navikla da čuje.
            *
            Lice starog Spensera postajalo je sve ozbiljnije. Znao sam da će biti tako. “I tako, ti nas ostavljaš, eh?”, rekao je.
            “Da, gospodine. Tako izgleda.”
            Počeo je da se prepušta svojoj navici da klima glavom. Niste sigurno nikada u životu vidjeli čovjeka koji toliko klima glavom kao stari Spenser. Nikada niste mogli znati da li to radi zato što razmišlja ili samo zbog toga što je dobar stari čiko koji više nije u stanju da razlikuje vlastitu stražnjicu od svog vlastitog lakta.
            “Šta ti je rekao Dr. Termer, mladiću? Čuo sam da ste imali priličan razgovor.”
            “Jesmo. Jesmo, zaista. Bio sam u njegovoj kancelariji, mislim, dobra dva sata.”
            “Šta ti je rekao?”
            “Oh... e pa, da je život kao sportska utakmica i te stvari. I da je treba igrati prema propisanim pravilima. Bio je prilično ljubazan. Hoću da kažem, nije skakao do plafona niti nešto slično. Samo je govorio i govorio o tome kako je život utakmica i te stvari. Znate već i sami šta.”
            “Život jeste sportska utakmica, mladiću. Život jeste utakmica koju treba igrati po propisanim pravilima.”
            “Da, gospodine. Znam da jeste. Znam to.”
            Utakmica, kako da ne! I jeste mi neka utakmica. Ako se nađeš na onoj strani gdje su sve glavne dase i asovi, onda jeste, u redu – to priznajem. Ali ako se nađeš na drugoj strani, gdje nikakvih dasa nema, onda kakva je to utakmica? Nikakva. Nema utakmice. “Da li je Dr. Termer napisao pismo tvojim roditeljima?”, upitao me je stari Spenser.
            “Rekao je da će im napisati u ponedjeljak.”
            “Jesi li ih ti obavijestio?”
            “Nisam, gospodine, nisam ih obavijestio jer ću ih vjerovatno vidjeti u srijedu uveče, kada dođem kući.”
            “Pa šta misliš, kako će primiti tu novost?”
            “E pa... mislim da će ih ona prilično uzrujati”, rekao sam. “Hoće, zaista. Promijenio sam do sada, mislim valjda četiri škole.” Odmahnuo sam glavom. Imam već neku takvu naviku. “Ljudi moji”, rekao sam. Često govorim “ljudi moji”, prilično često. Djelimično zato što mi je rječnik vrlo siromašan a djelimično zato što se ponekad ponašam kao da sam mlađi nego što jesam. Imao sam tada šesnaest, sada imam sedamnaest, ali ponekad se ponašam kao da imam negdje svega trinaest godina. To je zaista ironija jer sam visok 189 centimetara a u kosi imam dosta sijedih vlasi. Imam, zaista. Čitava jedna strana – desna strana – puna je miliona sijedih vlasi. Imam ih još od djetinjstva. Ali pored svega toga ponekad se ponašam kao da imam samo dvanaest godina. Svi to kažu, naročito moj otac. To je dijelom istina, priznajem, ali nije u cijelosti istina. Ljudi uvijek misle da govore apsolutnu istinu. Meni je to potpuno svejedno, osim što mi ponekad ide na živce kada počnu da me upozoravaju da se ponašam onako kako to dolikuje mom uzrastu. Ponekad se ponašam kao da sam mnogo stariji nego što jesam, zaista, ali to ljudi nikada ne primjećuju. Ljudi nikada ništa ne primjećuju.
            Stari Spenser počeo je ponovo da klima glavom. Počeo je također da čeprka po nosu. Radio je to tako da je izgledalo kao da ga samo gnječi, dok je ustvari ugurao u nozdrvu čitav palac. Uvjeren sam da je smatrao da je to sasvim na mjestu, s obzirom na to da u sobi nije bilo nikoga osim mene. Meni je to bilo svejedno, iako je prilično neprijatno posmatrati nekoga kako čeprka po nosu.
            Zatim je rekao: “Imao sam čast da se upoznam sa tvojim ocem i majkom kada su prije nekoliko nedjelja došli da malo porazgovaraju sa Dr. Termerom. Silni su to ljudi.”
            “Da, jesu. Veoma su dobri.”
            Silni. Evo riječi koju iz dubine duše mrzim. Tako lažno zvuči. Mogao bih povraćati svaki put kada je čujem.
            Iznenada je stari Spenser poprimio držanje kao da je pronašao nešto vrlo zgodno da mi kaže, nešto oštro kao igla. Zavalio se dublje u fotelju i nekako se kao promeškoljio. Bila je to, međutim, lažna uzbuna. Šta je uradio, samo je podigao Atlantic Monthly sa krila i pokušao da ga baci na krevet, pored mene. Promašio je. Za svega nekoliko centimetara, ali svejedno je promašio. Ustao sam, podigao list i položio ga na krevet. Tada sam, iznenada, osjetio ludačku želju da pobjegnem nekuda dovraga iz te sobe. Mogao sam osjetiti da mi se sprema strašna lekcija. Samo po sebi to mi ne bi mnogo smetalo, ali nešto nisam bio raspoložen da slušam nečije propovijedi, mirišem Viksove kapljice za nos i gledam starog Spensera u pidžami i bademantilu, i sve to odjednom. Nisam, zaista.
            Stvar je, međutim, već počela. “Šta je to s tobom, mladiću?”, rekao je stari Spenser. Rekao je to prilično strogo, bar za njega. “Koliko si predmeta imao u ovom polugodištu?”
            “Pet, gospodine”.
            “Pet. A iz koliko si predmeta pao?”
            “Četiri.” Pomjerio sam malo stražnjicu na krevetu. Bio je to najtvrđi krevet na kome sam ikada u životu sjedio. “Prošao sam iz engleskog”, rekao sam, “jer sam Beowulfa i Lord Randal My Sona i sva ta čuda radio još dok sam bio u školi u Hutonu. Hoću da kažem, iz engleskog nisam morao gotovo ništa da radim, osim da s vremena na vrijeme napišem poneki sastav.”
            On nije čak ni slušao. On gotovo nikada nije slušao šta mu čovjek priča.
            “Oborio sam te iz istorije zato što nisi znao apsolutno ništa.”
            “Znam to, gospodine. Svjestan sam toga. Vi tu niste mogli ništa učiniti.”
            “Apsolutno ništa”, ponovio je, još jednom. Takve stvari dovode me do ludila – kad neko dva puta ponavlja jedno te isto, iako je već čuo priznanje. Zatim je rekao isto i treći put. “Ali apsolutno ništa. Duboko sumnjam da si otvorio udžbenik i jedan jedini put u toku čitavog polugodišta. Jesi li? Reci mi istinu, mladiću.”
            “E pa... malo sam kao zavirio u njega nekoliko puta”, odgovorio sam. Nisam želio da povrijedim njegove osjećaje. Bio je lud za istorijom.
            “Zavirio si, eh?”, rekao je veoma sarkastično. “Ah, tvoj ispitni zadatak je tamo gore na ormaru. Na vrhu one gomile papira. Donesi ga, molim te, ovamo.”
            Bio je to odvratan trik, ali sam ustao i donio mu zadatak – druge alternative, niti bilo čega, nije bilo. Zatim sam opet sjeo na ovaj njegov betonski krevet. Ljudi moji, nemate pojma koliko sam žalio što sam uopšte dolazio da se s njim pozdravim.
            Držao je u rukama moj ispitni zadatak kao da je nešto pogano ili nešto tako slično. “Egipćane smo učili od 4. novembra do 2. decembra”, rekao je. “Ti si za slobodnu temu izabrao da pišeš o njima. Da li želiš da čuješ ono što si napisao?”
            “Ne, gospodine, ne baš naročito”, rekao sam.
            On je, međutim, ipak počeo da čita. Kada profesor hoće nešto da uradi, nemoguće ga je zaustaviti. On to jednostavno uradi.
            Egipćani su bili starodavno kavkasko pleme koje je živjelo u jednoj oblasti Sjeverne Afrike. Ova je, kao što je opće poznato, najveći kontinent na Istočnoj hemisferi.
            Bio sam prisiljen da sjedim i slušam to lupetanje. Bio je to zaista odvratan trik.
            Stari Egipćani su iz više razloga veoma interesantni za savremenog čovjeka. Moderna nauka uprkos brojnim pokušajima nije bila u stanju da odgonetne kakve su tajne sastojke Egipćani upotrebljavali kada su umotavali u platno svoje mrtvace tako da im lica ne istrunu u toku bezbrojnih stoljeća. Ova interesantna zagonetka predstavlja još uvijek nerješivu tajnu za modernu nauku dvadesetog vijeka.
            Prestao je da čita i spustio je papir. Počeo sam gotovo da ga mrzim. “Tvoj esej, tako da kažemo, tu svršava”, rekao je onim svojim veoma sarkastičnim glasom. Čovjek nikada ne bi pomislio da tako star čovjek može govoriti tako sarkastično. “Ti si mi, međutim, napisao i jednu kratku poruku, ovdje na dnu stranice”, dodao je.
            “Znam da jesam”, rekao sam. Rekao sam to veoma brzo jer sam želio da prekinem prije nego što počne da i to glasno čita. Ali njega je bilo nemoguće zaustaviti. Bio je upaljen kao raketa.
            Dragi gospodine Spenseru, (čitao je glasno) ovo je sve što znam o Egipćanima. Izgleda da nisam u stanju da se zainteresujem za njih, iako su vaša predavanja vrlo zanimljiva. Što se mene tiče, možete me mirne savjesti oboriti, jer i tako padam iz svih predmeta osim iz engleskog. S poštovanjem vaš HOLDEN KOLFILD.
            Spustio je moj prokleti zadatak i pogledao me pobjedonosno, kao da je upravo ubio boga u meni u ping-pongu ili nečem sličnom. Mislim da mu nikada neću oprostiti što mi je naglas pročitao moje glupe pisanije. Ja ih nikada ne bih njemu čitao da ih je on napisao – ne bih, zaista. U prvom redu, ja sam onu bilješku napisao samo zato da mu ne bude teško što me mora oboriti.
            “Zamjeraš li mi što sam te oborio, mladiću?”, rekao je.
            “Ne, gospodine. Ni najmanje, sigurno!” Želio sam da već jednom prestane da me čitavo vrijeme naziva “mladiću”.
            Kada je konačno završio propovijed, pokušao je da baci na krevet i moj ispitni zadatak. Međutim, ponovo je promašio – naravno. Morao sam ponovo da ustanem, da ga podignem i položim na Atlantic Monthly. Dosadno je raditi jedno te isto svake dvije minute.
            “Šta bi ti uradio na mom mjestu?”, upitao je. “Reci mi istinu, mladiću.”
            Što jeste – jeste, bilo je očigledno da se zaista osjeća bijedno što me je morao oboriti. Zato sam navio staru ploču. Rekao sam mu da sam pravi pravcati degenerik i sve što ide uz to. Rekao sam mu da bih uradio tačno isto što i on da sam se našao na njegovom mjestu i da mnogi ljudi nisu u stanju da shvate kakva je to muka biti nastavnik. Ukratko, štosove te vrste. Stare pjesme.
                      
          
          Džerom D. Selindžer`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Roman „Lovac u žitu“ pripada vrsti romana koja se zove…',
        answers: [
          {
            title: 'pustolovni roman',
            right: false,
          },
          {
            title: 'roman odrastanja',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'U susretu sa profesorom Spenserom, Holden nastupa…',
        answers: [
          {
            title: 'strpljivo, mada ga u suštini profesor nervira',
            right: true,
          },
          {
            title: 'nervozno i neprijatno',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Holden je promijenio više škola, jer…',
        answers: [
          {
            title: 'nije bio vrijedan',
            right: true,
          },
          {
            title: 'profesori nisu imali za njega razumijevanje',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Holden je profesoru zamjerao…',
        answers: [
          {
            title: 'neiskrenost i to što nije shvatao da je kritika suvišna, jer Holden napušta školu',
            right: true,
          },
          {
            title: 'to što je bio uporan da ga vrati u školu',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 5th question',
        question: 'Holden je iskreno mislio… ',
        answers: [
          {
            title: 'o sebi da je „degenerik“',
            right: false,
          },
          {
            title: 'da će se, preuzimanjem krivice na sebe, brže riješiti profesora',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Umjetnička književnost - Roman',
    subtitle: '2001: Odiseja u svemiru',
    type: essay,
    text: `Brod je krenuo od Zemlje prije samo trideset dana, ali je Dejvidu Boumenu ponekad bilo teško da povjeruje da je ikada znao i za neki drugi oblik postojanja osim ovoga u zatvorenom, malom svijetu “Otkrića”. Sve godine obuke, sve pređašnje misije na Mjesec i Mars, kao da su pripadale nekom drugom čovjeku, u nekom drugom životu.
            Frenk Pul imao je isti utisak i ponekad bi u šali požalio što se najbliži psihijatar nalazi udaljen od njih gotovo stotinu miliona milja. Ali ovo osjećanje izdvojenosti i otuđenosti lako se moglo shvatiti i ono jamačno nije ukazivalo ni na kakvu abnormalnost. Za pedeset godina od kako su se ljudi vinuli u svemir, još nije bilo ovakve misije.
            Ona je započela prije pet godina kao projekt “Jupiter” – prvo povratno putovanje broda sa ljudskom posadom do najveće među planetama. Letjelica je već gotovo bila spremna za dvogodišnji pohod, kada je, krajnje neočekivano, došlo do promjene profila misije.
            “Otkriće” će, doduše, stići do Jupitera, ali neće se tu zaustaviti. Čak neće ni smanjiti brzinu dok bude hitalo kroz razuđen jovijanski satelitski sistem. Naprotiv – iskoristiće gravitaciono polje džinovskog svijeta kao svojevrsnu praćku koja će ga hitnuti još dalje od Sunca. Slično kakvoj kometi, ono će se zaputiti ka spoljnjim područjima Sunčevog sistema, ka svom krajnjem odredištu, blistavom Saturnu opasanom prstenovima. I nikada se neće vratiti...
            Za “Otkriće”, to će biti jednosmjerno putovanje – ali njegova posada nipošto nije imala namjeru da izvrši samoubistvo. Ako sve bude bilo u redu, oni će se vratiti na Zemlju kroz sedam godina – od kojih će pet proteći u magnovenju, u besanom spavanju hibernacije, dok budu čekali da ih izbavi još nenajavljeno “Otkriće II”. No, glagol “izbaviti” pažljivo je izbjegavan u svim iskazima i dokumentima Astronautičke agencije; on je pretpostavljao mogućnost pojave neke pogreške u planovima, tako da se u odobrenom žargonu radije koristila riječ “pokupiti”. Ako nešto stvarno krene naopako, sasvim izvjesno neće biti nikakve nade u izbavljanje, s obzirom na udaljenost od gotovo milijardu milja od Zemlje.
            Bio je to sračunat rizik, baš kao i kod svih putovanja u nepoznato. Ali poluvjekovno istraživanje pokazalo je da je vještački sprovedena hibernacija ljudi savršeno bezbjedna, što je otvorilo nove mogućnosti u svemirskim putovanjima. Tek je, međutim, ovaj pohod trebalo da cijelu stvar stavi na najtežu probu.
            Tri člana istraživačke ekipe, koji neće biti potrebni sve dok brod ne uđe na završnu orbitu oko Saturna, prespavaće cijelo putovanje do odredišta. Na ovaj način biće ušteđene tone hrane i drugih potrošnih dobara; gotovo je podjednako bila važna okolnost što će tim biti svjež i poletan, neiznuren desetomjesečnim putovanjem, kada bude trebalo da stupi u dejstvo.
            “Otkriće” će ući na parkirnu orbitu oko Saturna, postavivši novi mjesec džinovske planete. Kretaće se naprijed- nazad po dva miliona milja dugačkoj elipsi koja će ga na jednom kraju dovesti sasvim blizu Saturna, da bi ga potom zaputila preko orbita svih osamdeset većih mjeseca. Imaće na raspolaganju stotinu dana da kartografišu i izučavaju jedan svijet osamdeset puta prostraniji od Zemlje i okružen svitom od bar petnaest poznatih satelita – od kojih je jedan velik poput planete Merkur.
            Tu mora da se nahode čudesa koja se stoljećima mogu izučavati; prva ekspedicija može da preduzme samo preliminarna izviđanja. Sve što ona bude otkrila biće radiovezom upućeno na Zemlju; čak i ako se istraživači nikada ne vrate, njihova otkrića neće biti izgubljena.
            Poslije stotinu dana “Otkriće” će zamrijeti. Svi članovi posade otići će u hibernaciju; samo će ključni sistemi nastaviti da dejstvuju, a nad njima će bdjeti neumorni elektronski mozak broda. Letjelica će nastaviti da kruži oko Saturna po orbiti koja će u toj mjeri biti određena da će ljudi uvijek tačno znati gdje da potraže svog planetnog izaslanika, kako sada tako i kroz hiljadu godina. Ali kroz samo pet godina, prema sadašnjim planovima, tamo će prispjeti “Otkriće II”. Čak i ako do tada protekne šest, sedam ili osam godina, usnulim putnicima biće svejedno. Za sve njih časovnik će stati, kao što je već stao za Vajtheda, Kaminskog i Hantera. Ponekad je Boumen, kao zapovjednik “Otkrića”, zavidio svojoj trojici besvjesnih kolega u zamrznutom spokoju hibernakuluma. Njih uopšte nije morila dosada, niti ih je opterećivala odgovornost; sve dok ne stignu do Saturna, spoljni svijet uopšte neće postojati za njih.
            Ali taj svijet bdio je nad njima posredstvom njihovih biosenzornih displeja. Neupadljivo smješteno među mnogobrojnim instrumentima na kontrolnoj tabli, nalazilo se pet malih panela sa natpisima “Hanter”, “Vajthed”, “Kaminski”, “Pul” i “Boumen”. Posljednja dva bila su prazna i beživotna; njihovo vrijeme doći će tek za godinu dana. Ostali su sadržali sazviježđa sićušnih, zelenih svjetala koja su obznanjivala da je sve u redu; uz to, na svakome je bio smješten mali displej preko koga su nizovi sjajnih linija pratili spore ritmove što su označavali bilo, disanje, i moždanu djelatnost.
            Bilo je trenutaka kada je Boumen, iako potpuno svjestan da je to sasvim nepotrebno – budući da bi se uzbuna oglasila istog trena čim bi nešto pošlo naopako – uključio i audio-izlaz. Stao bi da sluša, napola hipnotisan, beskrajno spore otkucaje srca svojih usnulih kolega, ne skidajući pogled sa tromih talasa koji su sinhrono marširali preko ekrana.
            Najvećma su ga očaravali displeji EEG-a – elektronski potpisi triju ličnosti koje su jednom postojale i koje će jednog dana ponovo postojati. Bili su gotovo lišeni vršaka i dolja, električnih eksplozija koje su obilježavale djelatnost budnog mozga – ili čak mozga u stanju normalnog spavanja. Ukoliko je i preostao neki djelić svijesti, on se nalazio izvan domašaja uređaja, ali i pamćenja.
            Ovu posljednju činjenicu Boumen je znao iz ličnog iskustva. Prije no što je bio izabran za ovaj pohod, isprobane su njegove reakcije na hibernaciju. Poslije toga, on nije bio siguran da li je izgubio nedjelju dana života – ili je za isto razdoblje odložio konačni trenutak smrti.
            Kada su mu elektrode postavljene na čelo i pošto je generator spavanja stao da šalje svoje impulse, pred očima mu se nakratko razigrala predstava kaleidoskopskih ustrojstava i pokretnih zvijezda. Potom je sve to iščezlo i progutala ga je tmina. Uopšte nije osjetio injekcije, a još manje prvi dodir studeni, dok mu se tjelesna temperatura spuštala ka nivou od svega nekoliko stepeni iznad tačke mržnjenja.
            Probudio se sa utiskom da je kao maločas sklopio oči. Ali znao je da je to privid; zbog nečega je bio uvjeren da su, u stvari, minule godine u međuvremenu.
            Da li je misija izvršena? Jesu li već stigli do Saturna, obavili ispitivanje i vratili se u hibernaciju? Je li stiglo “Otkriće II” da ih vrati na Zemlju?
            Ležao je u snolikoj omami, krajnje nesposoban da razabere koja su sjećanja prava, a koja prividna. Otvorio je oči, ali se malo šta moglo vidjeti osim zamućenog sazviježđa svjetala koja su ga zbunjivala nekoliko minuta. A onda je shvatio da posmatra indikatorske svjetiljke na brodskoj situacionoj tabli, ali bilo je nemoguće dovesti ih u žižu. Uskoro je odustao od pokušaja da to učini.
            Preplavljivao ga je topao vazduh, odagnavajući mu studen iz udova. Bilo je tiho, osim što je iz zvučnika i njegove glave dopirala neka podsticajna, blaga melodija.
            Lagano je postajala sve jača. A onda mu se obrati jedan opušteni, prijateljski glas, za koji je on, međutim, znao da ga je sintetisao računar.
            “Postaješ funkcionalan, Dejve. Nemoj ustajati niti činiti nagle kretnje. Ne pokušavaj da govoriš.”
            Nemoj ustajati! – pomisli Boumen. Baš smiješno. Sumnjao je da može i prstom da mrdne. Prilično se iznenadio kada je ustanovio da je to ipak u stanju da učini.
            Osjećao se sasvim zadovoljan, ali na izvjestan omamljen, glupav način. Nejasno je znao da je spasilački brod već morao stići, da je otpočeo postupak automatskog buđenja i da će uskoro vidjeti druga ljudska bića. To je bilo lijepo, ali ga zbog nečega nije uzbuđivalo.
            A onda je osjetio glad. Računar je, razumije se, predvidio ovu potrebu.
            “Kraj tvoje desne ruke nalazi se signalno dugme, Dejve. Ako si gladan, molim te da ga pritisneš.”
            Boumen nagna prste da potraže unaokolo i oni uskoro napipaše izbočinu u obliku kruške. Potpuno ju je smeo sa uma, iako je morao znati da se ona nalazi tu. Koliko li je još samo stvari zaboravio: da li hibernacija može da briše pamćenje?
            On pritisnu dugme i sačeka. Nekoliko minuta kasnije jedna metalna ruka pokrenu se iz kućišta i plastična cucla poče da mu se spušta ka usnama. Stao je halapljivo da usisava i topla, slatka tečnost poče da mu se sliva niz grlo, vraćajući mu izgubljenu snagu sa svakom kapi.
            A onda se hranilica ponovo podiže i on opet ostade da spokojno počiva. Sada je bio kadar da pokreće ruke i noge; pomisao na koračanje više nije predstavljala nemoguć san.
            Iako je osjećao da mu se snaga brzo vraća, uopšte ne bi mario ako bi tu ostao dovijeka da leži kada više ne bi bilo spoljnjih podsticaja. A onda mu se obrati novi glas – ovog puta u potpunosti ljudski, a ne sazdan od električnih impulsa sabranih u cjelini u memoriji koja je bila više nego ljudska. Bio je to takođe poznat glas, premda je proteklo neko vrijeme prije no što ga je prepoznao.
            “Zdravo, Dejve. Fino se povraćaš. Možeš sada da govoriš. Znaš li gdje se nalaziš?”
            Mozgao je oko toga neko vrijeme. Ako je stvarno na orbiti oko Saturna, šta se dogodilo tokom svih onih mjeseci od kako je krenuo sa Zemlje? Ponovo je počeo da se pita da li pati od amnezije. Paradoksalno, sama ova pomisao ga je ospokojila. Ako se mogao sjetiti riječi “amnezija”, onda mu se mozak jamačno nalazi u dobrom stanju...
            Ali još nije znao gdje je, a govornik sa druge strane veze mora da je potpuno razumio njegovu situaciju.
            “Ne brini, Dejve. Ovdje Frenk Pul. Posmatram tvoje srce i disanje – sve je savršeno normalno. Samo se opusti – polako. Sada ćemo otvoriti vrata i izvući te napolje.”
            Blaga svjetlost ispuni komoru; spram ulaza koji se sve više širio, on razabra obrise pokretnih obličja. I upravo tog časa sjećanje mu se potpuno povrati i on shvati gdje se, u stvari, nalazi. Iako se bezbjedno vratio sa najdaljih međa smrti, bio je odsutan samo nedjelju dana. Kada bude izašao iz hibernakuluma, neće ugledati hladno Saturnovo nebo; ono se i dalje nalazilo više od godinu dana u budućnost i milijardu milja daleko. Još je bio u odjeljenju za obuku u Središtu za svemirski let u Hjustonu, pod vrelim Suncem Teksasa.
			
            Artur Klark`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Naučnofantastični romani su…',
        answers: [
          {
            title: 'samo plod piščeve mašte',
            right: false,
          },
          {
            title: 'zasnovani na naučnim otkrićima koja dograđuje mašta pisca',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'U odlomku (kao i u cijelom romanu) u prvom planu su…',
        answers: [
          {
            title: 'psihološka stanja glavnog lika',
            right: true,
          },
          {
            title: 'planovi za nova otkrića i praćenje rada mašina',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Boravak u svemiru kod astronauta izaziva osjećanje…',
        answers: [
          {
            title: 'straha',
            right: false,
          },
          {
            title: 'izdvojenosti i otuđenosti',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Astronauti su prihvatili rizik da se…',
        answers: [
          {
            title: 'možda ne mogu obaviti naučna istraživanja',
            right: false,
          },
          {
            title: 'možda nikada neće vratiti na Zemlju',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: 'Film „Odiseja u svemiru“, snimljen prema romanu Artura Klarka, režirao je…',
        answers: [
          {
            title: 'Stenli Kjubrik',
            right: true,
          },
          {
            title: 'Stiven Spilberg',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 6th question',
        question: 'Piloti će sačekati „Otkriće“ u stanju…',
        answers: [
          {
            title: 'hibernacije',
            right: true,
          },
          {
            title: 'dehidracije',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 7h question',
        question: 'Boumen se priprema za svemirsko putovanje u…',
        answers: [
          {
            title: 'uslovima stvarnog putovanja',
            right: false,
          },
          {
            title: 'odjeljenju za obuku',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'Umjetnička književnost - Roman',
    subtitle: 'Otok plavih dupina',
    type: essay,
    text: ` “Otok plavih dupina” je roman o stvarnom događaju iz života jedne Indijanke koja je na pustom ostrvu sama provela 18 godina, od 1835. do 1853. godine. Ovaj odlomak govori o njenom povratku u civilizaciju.
            *
            O njegovu glasu što me zove razmišljala sam već odavno, još od one olujne noći kad je brod bio otplovio. Za ta dva proljeća i dva ljeta nije bilo dana da nisam otišla na rt i gledala more, uvijek u zoru, pa opet u sumrak.
            Ujutro sam osjetila miris dima njihove vatre. Sišla sam u klanac i okupala se na izvoru, pa se ogrnula vidrinim krznom i navukla suknju od kormoranova. I okitila se ogrlicom od crnih kamenčića i crnim naušnicama. Modrim muljem preko nosa nacrtala sam znak našeg plemena.
            Onda učinih nešto od čega se nasmiješih na svoj račun. Ono isto što je moja starija sestra Ulape učinila kad je odlazila s Otoka plavih dupina. Ispod znaka našeg plemena pažljivo narisah znak da sam još neudata. Više nisam bila mlada djevojka, ali sam ga ipak nacrtala, modrim muljem i s malo bijela mulja za točkice.
            Zatim se vratih kući, naložih vatru i spremih jelo za Rontu-Arua i sebe. Ali nije mi se jelo pa je on pojeo i svoje i moje.
            Mi sad odlazimo – rekoh mu. – Odlazimo s našeg otoka.
            A on samo nakrivi glavu na jednu stranu, kao što mu je otac često činio, i kako mu ništa ne rekoh, odšeta na sunce, izvali se i zaspa.
            Sada kad su se bijeli ljudi vratili, nisam mogla misliti što ću raditi kad odem preko mora, ni u glavi predočiti sebi bijele ljude i čime se oni ondje bave, niti zamisliti one svoje ljude koji su bili tako davno otišli. Dapače, razmišljajući o prošlosti nakon tolikih minulih ljeta, zima i proljeća, nisam mogla zamisliti nijednoga od njih napose. Svi su mi bili jedno, nešto što me steže u grudima i drugo ništa.
            Jutro je bilo okupano suncem. Vjetar je mirisao po moru i svemu što živi u njemu. Ugledala sam ljude mnogo prije nego što će oni vidjeti kuću na rtu, još dok su bili daleko na dinama prema jugu. Bila su trojica, dva visoka muškarca i jedan nizak, u nekoj dugoj sivoj halji. Spustiše se s dina i pođoše duž litice, a onda spaziše dim vatre koju sam održavala i po njemu najzad stigoše do moje kuće.
            Provukla sam se ispod ograde i stala njima sučelice. Onaj u sivoj halji nosio je oko vrata ogrlicu o kojoj je visio neki ukras od izglačana drva. Taj čovjek podiže ruku i napravi mi neki znak, nalik na onaj ukras koji je nosio. Onda mi jedan od one dvojice koji su stajali iza njega nešto reče. Njegove riječi učiniše mi se najčudnijim zvukom što sam ga ikad čula. Došlo mi je najprije da se smijem, ali sam se ugrizla za jezik.
            Zavrtjela sam glavom i nasmiješila mu se. Opet je nešto rekao, ovaj put polako, a njegove riječi zvučale su mi isto kao i prije, i nisu mi imale smisla, ali mi je njihov zvuk bio sladak. To su bili zvuci ljudskoga glasa. A takvome zvuku nema ravna na cijelome svijetu.
            Čovjek podiže ruku i pokaza prstom u dragu, a zatim mi napravi neki znak u zraku, kao oblik broda.
            Na to klimnuh glavom i pokazah prstom u tri košare koje sam bila postavila pokraj vatre, pa napravih znak da ih uzimam sa sobom na brod. A i krletku u kojoj su bila moja dva ptića.
            Još smo se narazgovarali rukama prije nego što ćemo otići, a i ona dvojica su nešto govorila među sobom. Svidjela im se moja ogrlica, pa vidrina koža i suknja od kormoranova perja, koja se blistala na suncu. Ali čim smo došli na žalo gdje im je bio tabor, onaj čovjek koji je najviše govorio odmah je rekao ostalima neka mi naprave haljinu.
            Znala sam da je to rekao jer je jedan od njih stao preda me i nekom uzicom mjerio mi visinu od vrata do peta i širinu ramena.
            Haljina je bila plava. Sastavili su je od dva para hlača, onih istih kakve su nosili bijeli ljudi. Hlače su razrezali na komade, pa je jedan od njih sjeo na kamen i one komade opet sastavljao nekom bijelom niti. Imao je dug nos, baš kao igla kojom je baratao. Sjedio je cijelo popodne na kamenu, a igla mu išla gore-dolje, unutra-van, blistajući se nа suncu.
            Tu i tamo bi pridizao haljinu i klimao glavom, kao da je zadovoljan. Klimala sam i ja kao da sam zadovoljna, ali nisam bila. Radije bih ostala u svojoj suknji od kormoranova perја i ogrtaču od vidrina krzna, koji su bili mnogo ljepši od onoga što mi je on pravio.
            Haljina me pokrivala od vrata do stopala, a nije mi se sviđala ni zbog boje ni zato što me grebala. I bilo mi je vruće u njoj. Ipak sam se nasmiješila, strpala suknju od kormoranova perja u košaru, da je nosim ondje preko mora, u neko doba kad oko mene ne bude ljudi. Brod je ostao u Koraljnoj dragi devet dana. Bio je došao po vidre, ali vidri nije bilo. Zacijelo je ipak bilo ostalo još nekih koje su pamtile Aleute, jer onog jutra nije nijedne bilo na vidiku.
            Znala sam kamo su bile otišle. Bile su otišle do Visoke hridi, ali kad su mi ljudi pokazali oružje koje su ponijeli da bi njime ubijali vidre, zavrtjela sam glavom i pravila se da ih ne razumijem. Pokazivali su u moje vidrino krzno, a ja sam svejedno vrtjela glavom.
            Onda sam ja njih upitala za brod koji je prije mnogo godina bio odveo moj narod, pravila sam znak broda i pokazivala na istok, ali me oni nisu razumjeli. Tek kad sam stigla u misiju Santa Barbare i upoznala oca Gonzalesa, od njega sam doznala da je onaj brod bio potonuo u nekoj velikoj oluji malo nakon dolaska u njegov kraj i da na čitavom moru ondje nije bilo drugoga broda. To je bio razlog što se bijeli ljudi nisu vratili po mene. Isplovili smo desetog dana. Tog jutra nebo je bilo plavo, a od vjetra ni daha. Krenuli smo ravno prema suncu.
            Dugo sam stajala i gledala Otok plavih dupina. S vida mi je posljednji iščeznuo Visoki rt. Mislila sam na Tontua koji ondje leži pod kamenjem svakakvih boja, a i na Won-a-nee koja je tko zna gdje, i na malu crvenu lisicu koja bi mi uzaludno grebla po ogradi, i na svoj kanu skriven u špilji, i na sve one sretne dane.
            Iz mora su izranjali dupini i plivali ispred broda. Ligama su tako ujutro plivali, vezući mnoge pjenušave preplete. Moje su ptičice cvrkutale u krleci, a kraj mene jе sjedio Rontu-Aru.
            Skot O’ Del`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: '„Otok plavih dupina“ se ubraja u…',
        answers: [
          {
            title: 'pustolovne romane',
            right: true,
          },
          {
            title: 'putopise',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Istoj vrsti pripada i roman Danijela Defoa „Robinzon Kruso“. Robinzon je simbol za…',
        answers: [
          {
            title: 'putnika lutalicu',
            right: false,
          },
          {
            title: 'usamljenički život',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Književna djela poput „Robinzona Krusoa“ zovu se…',
        answers: [
          {
            title: 'robinzonade',
            right: true,
          },
          {
            title: 'putovanke',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'U romanima „Robinzon Kruso“ i „Otok plavih dupina“ govori se o…',
        answers: [
          {
            title: 'događajima i ličnostima koje je pisac izmislio',
            right: false,
          },
          {
            title: 'stvarnim događajima i ličnostima',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: 'Poslije osamnaest usamljeničkih godina na pustom ostrvu, Indijanka govori o njima kao o…',
        answers: [
          {
            title: 'sretnim godinama',
            right: true,
          },
          {
            title: 'godinama nesreće',
            right: false,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'Umjetnička književnost – Putopis',
    subtitle: 'Писма из Норвешке',
    type: essay,
    text: ` ...Овде је ипак друкчије. Сунце је интензивно светло као око грозничавог болесника, али топлих сунчевих зрака добијамо само толико колико кроз прстен с моје мршаве руке може да прође. А суво лишће не пролеће и не пада него цури и залива, веје и затрпава. Куд год се макнеш газиш по њему и пада на тебе. Кад год заћутиш зашушти ти у ушима, кад год уздахнеш замирише ти у ваздуху, што год додирнеш посуто је њиме. Где год кап кише може да падне пада и суво лишће. На таласе фјура и у дну чамца, на шешире људи и у косе жена, на школске торбице дечака и у колица малих беба. И преко свега тога опет пада, журно и густо пада и дању и ноћу, пада само од себе, пада ако га додирнеш, пада ако га погледаш...
            *
            Даљине! Ту реч не треба пред Норвежанима споменути. У њиховој је земљи све далеко јер нема људи. Норвешка је земља где се чезне за обликом и гласом човека, где читаве покрајине стотинама година стоје пусте јер не могу да даду толико топлоте да постану нечија колевка, ни толико хране и одбране да постану неком домовина.
            У научним извјештајима је забележено да цео норвешки народ, који живи на 322.000 км, има само два и по милиона људи, и да на квадратном километру живи просечно седам становника. Али то треба тако разумети, да тамо горе, изнад Нурфјура (Нордфјорд), врло често тек на десет квадратних километара долази седам људи: и кад се узме у обзир да тих седам људи могу бити једна породица, излази задњи факат да се кроз многе крајеве Норвешке путује а једва се срета човек...
            *
            ...Бог Тор је бацио очи поубијаних џинова на небо и тако су постале звезде. И стога су можда те звезде тако мало милостиве према људима што овде живе. Одиста, мало је овде веселих звезданих ноћи и топлих сунчаних дана. Ово је земља окретања и идења за сунцем. Сви предмети, природни и вештачки, стоје у насилном положају, имају криву осовину, и не познају ону сигурну симетрију крајева где је десно и лево свеједно, где су исток и запад благословене стране света. Све се нагиње и тражи сунчану страну, јер ко је на сунчаној страни (Солбакке) тај је богат и срећан, а чија је кућа у хладу јела и смрека тај је сиромах и тужан...
            Норвежанин живи као и његова бреза, то тако карактеристично и тако симболично дрво целе његове земље. У јужним и западним крајевима она је силно дрво, лепша можда него игде на свету. А према сјеверу, на фјеловима, увученим далеко од мора и од топле струје, по оним страшним висоравнима које су често мокар, често суви песак, а понајвише снег или раздробљени камен, бреза се грчи, савија, тањи, смањује се од дрвета до жбуна, од жбуна до пузаве богаљасте биљке, хвата се за камење да је ветрови не покидају, рије кроз песак који је затрпава, болује, мучи се, и чак тамо иза Хамерфеста умире са оном чудном, ућутканом сумњом северњака кога добри бог целог века кињи...
            *
            ...Норвежани, рекла бих, претрпели су у прошлом столећу неку врсту националног очајања. Дуготрајна унија, дуготрајно расипање, норвешких сила на данско-норвешке циљеве нити је могло национално сасвим да их успава, нити национално сасвим да их разбуди. Једва су се пренули. Зар народ који има снагу и здравље као нико у Европи, који има једну од најлепших земаља на свету, народ који је имао писану књижевност раније него културни Енглези, и који од малих и по историји несрећних европских народа има највишу и најбољу културу у Европи, зар тај народ да не може сам за себе стајати и сам своју бригу бринути!
            И онда су учинили да буду сами и своји, Норвежани сасвим, али, како ми се чини и у новој фази им је културна осетљивост остала јача од националне, и то ће им још дуго сметати да буду срчани и силни и коренито народни у свим манифестацијама свога духа и рада...
            *
            ...Јако површно речено, фјур је дуга, мање или више широка вода у каменом ждрелу; али је веома компликовано одредити у чему је нарочитост норвешке композиције тих двају елемената. Фјур се увлачи у земљу у дужину од сто до две стотине и преко две стотине километара, и вијуга сасвим као река. Али на многим местима је тако огромно широк да имаш импресију мора; на другим местима га затварају циркусне стене и ти имаш утисак језера, и најзад планински венци могу сасвим да се примакну, фјур добије две мање више паралелне обале, и изгледа као река.
            Али у свим тим својим облицима фјур има и плиму и осеку, па према томе има и све мирне и ћудљиве појаве и игре мора. А како се у необичној дужини простире од отворене пучине до самог срца земље, то успут наилазиш све степене приморске и континенталне климе, и све карактеристичности и бизарности у природним појавама и у начину живота у најсупротнијим климатским приликама.
            Најзад, једна од најважнијих околности, која тумачи величанственост, невулгарисаност, чак неку сублимну неприступачност тих вода, лежи у облику стена које фјурове прате. Планине су скоро искључиво веома високе, и не само оно што се обично разуме под изразом стрменитих стена, него су од једне нагле окомитости која је апсолутна и језива вертикалност. Фјурови су дакле понајчешће воде без обала, и у томе је, рекла бих, тајанственост слике и мистичног живота око тих вода...
            *
            ...Равнодушно гледају ти горостаси кад златни облаци, прамен по прамен, просипају своје злато, кад се умиљавају свеже горске маглице плаве као једро грожђе, кад се сунце помеша са зимом и као златне пчеле лепршају пахуљице снега.
            Чудна драж је заронити у тишину и покрета и звука. Негде на дно човека падају мисли, и глава плива у несвестици визија. Та шума, то су закопани џинови који хоће да пођу, и гле, ако одједаред ишчупају ноге из земље, заљуљају своја огромна телеса, и почне путовати црна шума са белом шубаром на глави... Тишина. Бескрајна шумска путовања, и на белоћи стоји само траг мојих дугих дрвених ципела. Чудно ми је и не могу да схватим. Смешно ми је и смејем се Сфингиним смехом без веселости. У тишини је све, и воља за животом и воља за пропашћу. Дух одриче, а живот хоће живот...
            Исидора Секулић`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'O čemu se u putopisima ne govori:',
        answers: [
          {
            title: 'o utiscima stečenim na putovanju kroz zemlje o kojima pisac želi da piše',
            right: false,
          },
          {
            title: 'o putovanju na neku od planeta',
            right: true,
          },
          {
            title: 'o stanovnicima zemlje koja se opisuje',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Putopis…',
        answers: [
          {
            title: 'je granična književna vrsta',
            right: true,
          },
          {
            title: 'nije književna vrsta',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Norvežani daljine mjere…',
        answers: [
          {
            title: 'miljama',
            right: false,
          },
          {
            title: 'udaljenošću čovjeka od čovjeka',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Norvežani bogatstvo i sreću mjere…',
        answers: [
          {
            title: 'visokim zaradama',
            right: false,
          },
          {
            title: 'količinom sunčanih sati',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: 'Isidora Sekulić je opisala Norvešku…',
        answers: [
          {
            title: 'realno, ne unoseći svoja osjećanja u opis',
            right: false,
          },
          {
            title: 'unoseći svoja zapažanja i emocije',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Umjetnička književnost – Putopis',
    subtitle: 'Некролог једној чаршији',
    type: essay,
    text: `Годину, мјесец и дан више и не памтим.
           Била је зима...
           Било је то давно...
           Била је она права, стара сарајевска зима са много снијега и неке чудне бијеле тишине. И била је ноћ. Поодмакло глухо доба над смиреном котлином око Миљацке.
           Не знам колико је било сати. Ни кад ме је мајка пробудила, ни кад сам бунован погледао у прозоре нисам помислио на вријеме.
           У завијаним окнима нашег прозора горио је град. Горјело је читаво Сарајево.
           Наши прозори били су окренути према Имарету. Са наших прозора видио се велики дио Сарача, шиљати оџаци на медреси Куршумлији, мали сарајевски дућани Сефарда, Ташлихан, три минарета, стара синагога и дио зида и чесме пред Беговом џамијом.
           Те ноћи све је блистало у топлој позлати огња. Сокаци су били пуни буновног свијета.
           Сви смо трчали према буктињи која нас је мамила и омамљивала.
           Пламен је надвисио старе јабланове, минарета и смеђу сахат-кулу.
           Те тихе зимске ноћи горио је Колобара хан.
           Дим је био пун мириса штављених брављих кожа.
           Можда се ништа не усијече тако јасно у памћење као неки велики пожар у ноћи.
           Док сам цртао старца у лијевом углу цртежа, сјетио сам се старог аџе кога сам посљедњи пут видио те ноћи.
           Аџо је имао смијешан мали дућан у једном ћошку старог хана. Његов дућан више је личио на повећи сандук за шећер или неко лимено посуђе него на радњу у којој је романијским сељацима хамајлијама и чудотворним записима истјеривао зле духове, ограме, демоне и шејтане. Осим дивита и неколико пожутјелих старих ћитаба, који су изгледали као испуцани црепови са каквог заборављеног турбета, више ничега није ни било.
           Можда је такав некада давно био и дућан онога Мула Мустафе Башескије, мудрог и веселог хроничара старих сарајевских прилика и улица.
           Башескије, који се подједнако молио за спас душа и оних који гоне и оних који су гоњени.
           Аџо је стајао те ноћи погурен и нијем. Читаве те ноћи аџо је шапутао неку дугу спасоносну молитву.
           Добрих духова ноћас није било.
           Ватра је горјела читаве дуге зимске вечери.
           Ватра је прогутала чађаве таване и диванхане, јадна имања сиромаха, читав један инвентар фукарлука и туге. Лучеви диреци пуцали су као рамазанске бешчеталаме.
           Ујутро је освануло згариште.
           Црно и укочено као дугачак леш некаквог џина који се читаве ноћи носио са црвеним бичевима огњене агоније.
           Стара авлија је била пуна мртвих птица.
           Можда је у једном њеном ћошку некада био дућан онога доброг старца који је толико волио Велиудин-пашу Черкеза, сераскера вилајетског и непријатеља Фра Грге.
           Горе на спрату била је диванхана на којој су, можда, некада давно акшамлучили и шенлучили ровашни Морићи и по читаве ноћи кенчијали са смијешним и несретним Ђерзелезом.
           Изгорјела је за једну зимску ноћ црвоточна велика кутија усред чаршије.
           Изгорјела је кутија која је вијековима под својим црним поклопцем окупљала путнике и намјернике.
           Турке, Грке и Латине.
           Кириџије и кавгаџије.
           Кекезе и наказе.
           Чауше и фратре.
           Хоџе и хаџије.
           Људе који су путовали свијетом за богатством и трговином, и несретнике које су по свијету вукли мрачни и страшни нагони.
           Те тихе зимске ноћи изгорио је Колобара хан.
           Ништа се не усијече тако јасно у памћење као сјећање на велики пожар у ноћи.
           У неким новинама одштампана је читуља једној ријеткости. Изгорјела је једне ноћи иза добро осигураних замандаљених капија...
           Из бедекера је истргнута страница о мравињаку, гдје се годинама и данима зацјењивало, уцјењивало, процјењивало и цјенкало, док густ кисео дим није однио све у бесцијење...
           Зуко Џумхур`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'U „Nekrologu jednoj čaršiji“ ulogu pripovjedača ima…',
        answers: [
          {
            title: 'Zuko Džumhur',
            right: false,
          },
          {
            title: 'dječak, posmatrač požara',
            right: true,
          },
          {
            title: 'This is title for 2nd question',
            question: 'Pripovjedaču Аdžin dućan budi asocijacije na…',
            answers: [
              {
                title: 'putopisca Čelebiju',
                right: true,
              },
              {
                title: 'Mula Mustafu Bašeskiju',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 3rd question',
            question: 'Bašeskija je poznat po svome…',
            answers: [
              {
                title: 'ljetopisu',
                right: true,
              },
              {
                title: 'historijskom romanu',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 4th question',
            question: 'Fra Grgo Martić je bio…',
            answers: [
              {
                title: 'slikar',
                right: false,
              },
              {
                title: 'sakupljač narodnih umotvorina',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 5h question',
            question: 'Kojim se od navedenih riječi pisac u svom putopisu nije služio:',
            answers: [
              {
                title: 'turcizmima, orjentalizmima, germanizmima, lokalizmima',
                right: false,
              },
              {
                title: 'riječima iz latinskog i grčkog jezika',
                right: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'Umjetnička književnost – Putopis',
    subtitle: 'Održa se kao na Drini ćuprija',
    type: essay,
    text: `U jednoj narodnoj pjesmi ima stih:
            “Kad prebrodi Drinu valovitu,
  stade gazit’ Bosnu kalovitu.”
            U ovom prvom stihu pjesnik je apsolutno pogodio, jer istina je da je Drina jedna voda i valovita i plahovita. Pa je valjda otuda i nastala priča: kako je neka djevojka, koja je bila nesrećna u svojoj ljubavi, od svih voda našla da je Drina najdublja, i svoju nesrećnu ljubav prekratila ovako: “Savi oči pa u Drinu skoči.“
            Tu gdje je danas Višegrad – nekad se preko Drine prelazilo splavom; mora da je iznad vode bila opružena žica za koju je dolje bio privezan splav – i ljudi tako prelazili sa jedne na drugu stranu, uz plaćanje, naravno, lađarine. Ostala je priča – a može biti da je tako i bilo: da su nekakvim splavom, ili nekakvom lađom, na tom mjestu, gdje je Višegrad, prevezli nekad jadno dijete iz nedalekog sela Sokolovića, koje će kasnije – pošto se odškolovalo u Carigradu, odraslo i dobilo visoke činove, postati i jedan od carskih vezira, onaj koji je tri cara služio, a zvao se Mehmed-paša Sokolović.
  Šta je sve spadalo u životno djelo ovog paše, čiji je vijek trajao 73 godine, sigurno su zabilježili hroničari iako jesu – onda bi na čelo svih njegovih djela svakako spadala ćuprija na Drini. Zna se da to svoje veliko djelo – u svom dalekom rodnom kraju, u Bosni, zemlji kalovitoj, a na njenoj rijeci Drini valovitoj, nije vidio, jer umro je ubrzo – nisu bile prošle ni dvije godine od izgradnje mosta na Drini. Umro je od ruke svoga zemljaka – nekakvog šejha iz tekije u Novoj Kasabi; dakle, od čovjeka koji je bezbroj puta prelazio njegovim mostom – pa i onda kad je pošao u Carigrad sa namjerom da ubije pašu. Ubio ga je pred džamijom – kad je paša išao na molitvu, i to tako što mu je – uz uobičajeno metanisanje, pružio nekakvu molbu ljudi svoga kraja da je pročita, i dokle je vezir čitao molbu, šejh se dotle poslužio nožem.
  Zna se da je mnogo građevina ostalo iza svoga velikoga vezira, a najveća i najljepša je ova na Drini – most kakav ni na jednoj vodi u carevini – ni do tada ni poslije, nije izgrađen.
  Odgovara vodi na kojoj je – jer je Drina, takva kakva je, tražila upravo i takav most nad sobom. Na jedanaest je lukova. Od kamena je – i to ne samo tesanog, nego i glačanog, i željeznim mačkama utvrđenog, a željezo zaliveno olovom: da se most održi, da vječno traje – i već traje blizu četiri stoljeća.
  Stajao sam bezbroj puta na tome mostu i mislio na vrijeme: prolazilo je kao dolje pod njima Drina, a on ostajao... ostao je i onda kad ga je Drina za više od metar i po preplavila – godine 1896, poslije čega će u narodu ostati izreka: “Održa se kao Most na Drini!“
            Ispričane su o njemu priče i legende. Zapisan je u istorijama i hronikama. Napisane su o njemu knjige. Kao što to i biva o svemu velikom, što uzbuđuje ljudsku maštu pa će tako jedna priča reći: da su u ćupriju uzidani brat i sestra: Stojan i Stojanka, kao cijena građevini, jer ako hoćeš nešto veliko, moraš ga žrtvama otkupiti. A najveća žrtva i cijena ljudski je život, pa se i tražila takva cijena. Jer – sve što bi Rade neimar danju sagradio, to bi vila obnoć porušila.
  Ta ista vila činila je to i sa Skadrom – “dok nešto nije progovorilo: da se u zid uzida ljudski stvor – i neimar će uzidati mladu Gojkovicu”. Ovdje na Drini uzidaće brata i sestru. A i tamo i ovamo – mladost! Jer mladost i jest simbol vrijednosti; ono što je najdraže – i na čemu svijet ostaje.
  Putnici i prolaznici staće i diviće se mostu na Drini; a koliko ih je ovuda prošlo za njegovih do danas – 395 godina! Prolazile su njim vojske i karavani, bogati i siromašni, siti i mahniti; osuđeni, protjerani, prognani; prolazili su učeni, umni a i ludi; srećni i nesrećni; mladi i stari – a to će reći cio jedan bijeli svijet, onaj što je hodio džadama – jer ovaj Most i jest dio džade; dio puta – onaj nad vodom, na drugi način jedva prolaznom, jer je to Drina! Ona koja nadođe – ”... od brega do brega!“
            Nema na njemu šara i ukrasa – nego ima nešto silno i moćno, tako kao da je karavana zagazila u vodu, tu se skamenila – i ostala... U poretku jednom skladnom, a preko vode – od jedne do druge njene obale.
  Onaj što ju je zidao, nije nam svoje ime ostavio, pa pred sobom gledamo djelo – a ne znamo ime njegovog tvorca. Mora da je aršinom mjerio svaki kamen, svaki luk, svaki stub, svako okno – svaki prst na mostu, jer tu je sve skladno, sve izmjereno, sve po aršinu. Pa je i kod popravaka tako mjereno – sve na metar i na santimetar, kako bi sve bilo kao što je i nekad bilo – prije gotovo četiri stoljeća. Popravljan je više puta – jer nijedan od ratova nije prošao a da ovu starinu nije rušio; i zanimljivo je da su uz obadva velika rata bili porušeni isti lukovi, isti stubovi. To jest: ono što nisu mogli toliki povodnji i toliko vrijeme, mogla je ruka rušioca. Porušeni lukovi ličili su tada na kakve pećine – i bila je to tužna slika; stajao sam tada na obali i gledao je. Ni Drina više nije bila lijepa, jer to dvoje – na ovom mjestu, kad se nađu jedno bez drugog, nije više lijepo; i sve je ličilo na srušen hram, na pustoš.
  Danas su te rane zacijeljene, i jedva se poznaje gdje su i bile, ili se nikako i ne poznaje, nego je onako kao i nekad – kad je ovu ćupriju, ispustivši aršin iz ruku, ostavio za sobom njen graditelj. Bilo je to godine 1577. Davno i davno! Mnogo je od tada niz Drinu prošlo vode, mnogo ljudi sjelo na “sofu” – i odatle, sa sredine mosta, sa visine od oko petnaest metara iznad vode, gledalo dolje niz Drinu, i gore uz Drinu, i pred sobom grad Višegrad. A ako je neko umio, mogao je tu odmah prema “sofi ”, a na ploči mramornoj, čitati ovakav natpis na mostu: “Gospodin Mehmed-paša, mudrac svog vremena, potrošio je svoj imetak na zadužbine. Niko neće reći za imetak koji se troši na zadužbine, da je rasipanje. Bio je svjestan da su svakom njegova djela najbolje potomstvo. Podigao je most, kojem na svijetu nema ravna. Nemoj reći da je propao imetak, koji se troši na ovakva djela.“
            Ćamil Sijarić`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Pišući o ćupriji na Drini, Ćamil Sijarić u prvom dijelu putopisa govori i o ličnosti po čijoj je želji most sagrađen. To je…',
        answers: [
          {
            title: 'Husein – beg Gradaščević',
            right: false,
          },
          {
            title: 'Mehmed – paša Sokolović',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Mehmed- paša Sokolović je dao da se sagradi, sem mosta na Drini, još mnogo zadužbina.',
        answers: [
          {
            title: 'da',
            right: true,
          },
          {
            title: 'ne',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Govoreći o mostu, putopisac ističe njegovu…',
        answers: [
          {
            title: 'čvrstu građu',
            right: true,
          },
          {
            title: 'ljepotu',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Poslovica „Održa se kao na Drini ćuprija“ govori o',
        answers: [
          {
            title: 'istrajnosti, čvrstini, snazi',
            right: true,
          },
          {
            title: 'prolaznosti i nestajanju velikih građevina',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: 'Ime graditelja mosta…',
        answers: [
          {
            title: 'nije poznato',
            right: true,
          },
          {
            title: 'je poznato',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 6th question',
        question: 'Most je sagrađen…',
        answers: [
          {
            title: '1757. godine',
            right: false,
          },
          {
            title: '1577. godine',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 7h question',
        question: 'Na mostu se…',
        answers: [
          {
            title: 'nalazi ploča sa tekstom koji govori o Mehmed- paši i njegovim zadužbinama (tarih).',
            right: true,
          },
          {
            title: 'ne nalazi ispisan tarih.',
            right: false,
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: 'Umjetnička književnost – Lirske pjesme',
    subtitle: 'Zavidim jedino pužu',
    video: 'url',
    audio: 'url',
    questions: [],
    type: lyrics,
    text: `Iščekuje me draga, sin me čeka,
    Izviruje i plamen svijeća.
      Nije više daleka
    Moja ljubav, moja sreća.
      Podiže pogled iznad veza
    Koraci su nestrpljivi, znani.
    Zašumila je radosno breza,
    Čežnji su odbrojani dani.
      Miriše ševina pjesma iz čaja,
    Omamljuje sjaj kamina.
    Uvećali smo pjesmu zagrljaja
    Ručicama razbuđenog sina.
      Zavidim jedino pužu
    Što nikuda ne ide iz kuće.
      Slavim svoju vječitu ružu
    Za sutra, danas i juče.
    Ruben Dario`,
  },
  {
    id: 15,
    title: 'Umjetnička književnost – Lirske pjesme',
    subtitle: 'Kiša u Sarajevu',
    video: 'url',
    audio: 'url',
    questions: [],
    type: lyrics,
    text: `(U gradu Wuppertalu
\t\t\t– svaka mu čast i hvala! –
\t\t\tdeset godina provedoh,
\t\t\tnije to, djeco, šala.)
            ...Na vjetru se već danima
            ljuljaju zavjese kiše.
            Ne znam kud bih sa sobom
            i šta od muke više.
            Ona mi nešto šapuće,
            al’ ja, što slušati umijem,
            uzalud naprežem čula,
            n i š t a je ne razumijem.
            I pada,
            šušti,
            pljušti,
            po živcima mi šeta;
            kada će najzad prestati,
            pa ovo je smak svijeta!
            Pa da bar munja sijevne,
            da barem grom puca –
            ne; samo kiša,
            kiša,
            kiša,
            po živcima mi kljuca.
            ...U jedno mutno jutro,
            tek počelo da sviće,
            idem ja, brate, kući,
            pa šta će biti – biće.
            A tek u Sarajevu –
            k’o da se potop sprema!
            Sići ću s uma, ljudi,
            tu više spasa nema!
            Stanem uz prozor... slušam
            kuckanje kišnih kapi...
            I sve je manje p r a z n i n e
            što mi u duši zjapi
            Ma neka pada! Jer ja,
            ja što slušati umijem,
            ovu čarobnu kišu
            k’o majčin glas razumijem.
            I tonem u blaženstvo,
            kao u dubok vir...
            Drago moje Sarajevo,
            donijelo si mi mir.
                
            
            Wuppertal, marta 2008.
            Ivica Vanja Rorić`,
  },
  {
    id: 16,
    title: 'Umjetnička književnost – Lirske pjesme',
    subtitle: 'Tarih o gradnji mosta u Mostaru',
    type: essay,
    text: `Ćupriju podiže koja podsjeća na lûk dûge
           Allahu moj! Ima l’ na svijetu po ljepoti drûge?
           Jedan je Derviš zadivljen stao i rekao riječi:
           Ostavit ćemo ćupriju a mi ćemo preći.</p>
           
		   Godine 974. (1576–77)
           Derviš-paša Bajezidagić`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Tarih je natpis sa datumom građenja mosta, džamije, knjižnice i sličnih građevina. Pisan je u obliku rečenice ili ___________ .',
        answers: [
          {
            title: '',
            right: false,
          },
          {
            title: 'stiha',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Kojim je pismom pisan tarih?',
        answers: [
          {
            title: 'bosančicom',
            right: false,
          },
          {
            title: 'arapskim pismom',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Derviš Bajezidagić u svom tarihu (Tarih o gradnji mosta u Mostaru) izražava…',
        answers: [
          {
            title: 'zahvalnost graditelju mosta',
            right: true,
          },
          {
            title: 'divljenje prema ljepoti mosta',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'U „Gazelu o Mostaru“ pjesnik…',
        answers: [
          {
            title: 'ne govori o mostu',
            right: false,
          },
          {
            title: 'govori, pored ostalog, i o ljepoti mosta',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: '„Gazel o Mostaru“ govori…',
        answers: [
          {
            title: 'o ljepoti grada Mostara',
            right: true,
          },
          {
            title: 'historiji grada',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 6th question',
        question: 'Most je sagrađen…',
        answers: [
          {
            title: '1757. godine',
            right: false,
          },
          {
            title: '1577. godine',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 7h question',
        question: 'U doba osmanske vladavine u Bosni javljaju se pjesnici i prozni pisci koji su stvarali na orijentalnim jezicima, najviše na turskom. Među njima najpoznatiji je pisac sarajevskog Ljetopisa koji se zvao ___________ .',
        answers: [
          {
            title: '',
            right: false,
          },
          {
            title: 'Bašeskija',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 8th question',
        question: 'Alhamijado književnost je stvarana na našem jeziku, ali pisana…',
        answers: [
          {
            title: 'turskim pismom',
            right: false,
          },
          {
            title: 'arapskim pismom',
            right: true,
          },
        ],
      },
    ],
  },
  {
    id: 23,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Breza',
    type: essay,
    text: `Lijepa i mlada djevojka Janica udaje se za Marka Labudana, dopadljivog momka, seoskog lugara na koga djevojke i mlade žene često pogledaju. Zapravo, Marko ne bi nikada ni zapazio Janicu jer po seoskom ukusu ona nije bila nimalo lijepa. Ali njegov šef je obratio pažnju na njenu izuzetnost, a kako je Marko nastojao da ponešto usvoji od gospodske finoće, tako se odlučio da, na čuđenje sela, zaprosi Janicu. U poređenju sa drugim djevojkama “Tanka je ona i slabašna. Ali visoka i strojna. Pa dok druge cure i snaše teško koračaju kao medvjedi, u njenom hodu ima nešto ritma, možda čak elegancije. Oči su joj plave, plavlje od jasnoga neba, a za kosu rekoše neki da je crvenkasta, a neki da je zlatna ili pozlaćena. Svakako, izvrsno je pristajala onom okruglom, bijelom lišcu i onim nasmijanim, malim usnicama.”
           Četiri-pet nedjelja Janica leži teško bolesna.
           *
           Čitava stvar se razvijala prilično brzo. Dva mjeseca prije toga rodila je Janica dijete. Nije na žalost bio dečko, već curica. Curica malešna kao zemička, a glasna kao jare.
           Odležala Janica par dana u krevetu, desetak dana muvala se po kući, a onda je potjeraše na pašu. – Kaj bi se tu po hiži potezala kakti kakva frajla! – rekla je stara Labudanka.
           Nije Janici bilo baš najslađe, ali tko da vječno ratuje s babom! Što se mora – kažu ljudi – nije ni teško. Uostalom, sve bi dobro bilo da se dragi bog umilostivio pa da je dao lijepo i toplo vrijeme, ali eto udariše jesenske kiše, hladne i beskrajne, pa badava i ona stara golema ambrela, badava novi opanci, Janica se vraćala sva mokra, prozebla, pokisla do kosti, a plava kao šljiva.
           .......
           Umrlo joj u to vrijeme i dijete. Vidjelo siroče da za nj nema života i da je samo na nepriliku. Mati ga nije mogla više dojiti, kravsko mlijeko nije mu nikako prijalo. Došli užasni grčevi i mala se curica preselila na drugi svijet prije negoli je pravo ovaj i zagledala. Uostalom, pravo je učinila! Svi su joj to odobrili, jer šta će tu bez matere!?
           Marko se nije pačao u domaće poslove, pa se tako nije izjavio niti da dovezu daske za lijes niti protiv toga. Njemu je bilo sve svejedno.
           Druge su njega brige trle. Svatovsko je bilo vrijeme i za nekih desetak dana trebala je biti svadba kod Žugečića, u bogatoj kući na Žugečić-brdu. Njega, Marka Labudana, lugara zemljišne zajednice, pozvali su za zastavnika. Poznata je stvar bila da u tri župe nije bilo takvog barjaktara kakav je bio Marko Labudan. Bio je on čovjek od oka, a kad je progutao koju litru, ni vrag ga ne bi nadvikao ni nadskakao. Pun šala i vragolija koje je pokupio širom svijeta, on je izazivao udivljenje u ženskoga i muškog. Pa kad se još uzme u obzir njegov lugarski rang, njegov šešir s perjanicom, pa puška, onda je jasno što je to značilo za svatove, za mladu i za mladenca, imati Marka Labudana za barjaktara. Da ih on predvodi, da on pred svatovima poigrava, da on juška i vrišti, kako to samo on zna!
           I sad baš u takvo vrijeme razboli mu se žena! Koliko neprilika! Šta će, umre li mu u nezgodan čas? Recimo, uoči samih svatova.
           Udešava Marko svoju patentnu klopku, pa se sve češe iza uha. Jedan zaponac ne radi onako kako bi trebalo, ali još mu je veći jad ta njegova žena i njena bolest.
           Najbolje bi mu išlo u račun kad bi pričekala bar dvije-tri nedjelje pa onda umrla ako već umrijeti mora. Ili da umre odmah! Samo da mu ne bi pokvarila svatove, jer zbogom onda barjaktarija, zbogom ono veselje, pa gospodsko društvo (jer bit će tamo sigurno g. bilježnik, blagajnik, učitelj, a možda i sam velečasni), zbogom onda dobra večerica i ono fino Žugečićevo vino!...
           Ne može se reći da Marko nije volio svoju ženu i da mu nije žao bilo što će umrijeti, ali opet: može li joj on pomoći? Pa da plače dan i noć, njojzi od toga nikakva korist!
           .......
           Ima li, na priliku, smisla zvati doktora? Pomoći joj neće, to je sigurna stvar, samo će biti više troška. Ako je vozi k doktoru, umrijet će putem, ako li pak doktora zove, tu mu konja nahrani i napoji, pa još slušaj njegove prigovore: zašto pijete svi iz jedne čaše, zašto jedete iz jedne zdjele, zašto toliki spavate u jednoj sobi, zašto obojke sušite na peći. Zašto? Zašto? Lako je gospodi prigovarati, ali je teško siromahu čovjeku živjeti! Muči se on na sve fele i načine čitavu godinu i onda na koncu ništa nema!
           Jedna od devet “dužnosti kršćanskih” nalaže: bolesnoga pohoditi.
           Dobar je i pobožan ženski svijet. Može li ikako, on se drži zapovijedi božjih i crkvenih. Treba doista bolesniku olakšati muke, prikratiti mu vrijeme, pružiti mu čašu vode, dati mu dobar savjet i lijepom ga riječju utješiti.
           Pravo reći, Janici zadnjih dana nije bilo ni do razgovora ni do utjehe...
           Ležala je nemoćno, sa zaklopljenim očima, disala kratko i teško, dok su kroz onu malu njenu glavicu sporo prolazile neke mutne misli, čudne i neobične slike, neodređene i nejasne želje.
           Nije njoj do posjeta. Jedino da joj Marko dođe, ali inače bi najvoljela mir. Samo mir i tišinu.
           Međutim žene ipak dolaze. Kako koja dospije od posla. Dolazi obično svaka za se, a neka ponese i dijete na ruci. Lica su im tužna i zabrinuta. Zaleti se, doduše, i neka cura ili mlada snaša, još sasvim neozbiljna, pa ne shvaćajući tragiku situacije, uniđe bučno i nasmijano. No strogi pogledi starijih odmah je upokore i ona se postidi i odrveni kao kip.
           I toga su dana dolazile žene. Kako koja dođe, uzdahne tužno i još tužnije nazove:
           – Faljen Isus!...
           – Na sve veke budi faljen! – odgovara stara Kata Labudanka, kao da pamuk kroz nos provlači.
           Ona je sitna, gurava i vječno nekud čađava kao da u dimnjaku spava. Od posla, razumije se, i nema kad da se uredi, a nije joj više do cifranja. Muva se ona po svoj kući. Sve prigleda. Skokne na dvorište, svađa se s kokošima, doziva piliće, zagleda i u štalu, pa vikne koju susjedu preko plota, pa se opet zaleti u sobu.
           U sobi je sumorno i nekako kiselo. Možda od onog napoja uz peć ili od krumpira i drača, što se na peći kuha za svinje.
           Dva okanca, mutna i malena (toliko da glava nešto jačeg kalibra ne može kroz njih), propuštaju malo svjetla. U kutu do peći sjedi stara majka, mati Mike Labudana. Ona je slijepa, gluha i bez zuba. Nitko joj godina ne zna i ona u kući ništa ne znači. Vječno prede u svom kutu ili čija perje, i one prazne, upale čeljusti neprestano nešto melju. Nitko se na nju ne osvrće, a ona vječno nešto mrmlja. Da li psuje ili se bogu moli – tko bi to znao i razumio! Do nje se uz peć protegnuo stari pepeljasti mačak (on se jedini oko nje mazi!), pa s njom prede u istom taktu.
           Po zemljanom neravnom podu koprca se dvoje musave djece Janičine jetrve Jage. Oni se natežu, dreče i natjeravaju po sobi. S njima zajedno provodi dane i jedna pura, jadni invalid, kojoj je neki ljubazni susjed prebio nogu a Marko joj napravio nekakvi majstorski patentni zavoj, neku protezu pa ta ćurka svečano šepa i tužno pijuče.
           Žene se na sve to ne obaziru. One posjedaju po krevetima, jedna do druge, kao kokoši na grani. U posljednje ih vrijeme naročito interesira da li ih i koju od njih još Janica pozna. Zato je svaka pridošlica pita milo i slatko:
           – Janek!... Oj Janice! Je li me još poznaš?... Oj Janek, daj me pogledaj, daj!...
           Ali Janica toga popodneva nije nikom odgovarala. Ona bi neku od njih pogledala tužno, pa odmah zaklopila oči.
           Žene bi se samo značajno pogledale i kritički zaklimale glavama.
           – Ej, mila moja, kaj me zbilja ne poznaš? – uzviknula je gotovo uvrijeđena Janičina tetica Jela. – Em sem to ja, tvoja tetica!
           – Morti vas pozna – rekla je Bara Pavunčecova – ali joj siroti nî do govora, nî do razgovora!...
           – Kak samo zlo izgleda! – uzdahnula druga. – Bleda je i žuta kakti list v jeseni!...
           – Ej, Janica, Janica, na kaj si došla. Da ti sebe vidiš, ne bi se poznala! Bi li se, bogica boga, sama sebe prepala!...
           Marena Brezovka, jedra udovica kojoj je predlani grom ubio muža (a koja je rado na Marka pogledavala), uzdahnu i reče:
           – Žene drage, ako ćemo pravo, ona nigdar nî ni bila prejaka. Neću ja nju ogovarjati, ali vi i same znaste da je navek bila tenka i slabašna. Pak je i nadšumar rekel, da zgledi kakti breza...
           – Istina, istina! – potvrdila je tetica Jela koja još nije mogla prežaliti što Marko nije uzeo njenu kćer. – Ja se ni denes nemrem dosti načuditi da je Marko baš nju štel zeti!...
           – Bogme, takov čovek!... Mogel je dobiti curu debelu kak mesaricu, pak još i bogatu...
           – E, kaj ćete, takva vam je muška pamet!...
           Prisjela je i stara Kata, pa nadošla i Jaga, druga snaha, koja se baš vratila s paše.
           – Oj Janek, je li ti kaj treba?...
           Ali Janica nije davala odgovora.
           – Je li ti, Janica, čuješ kaj se mi razgovarjamo? – pita je opet Marena Brezovka, ljubezno i preljubezno.
           – Ej, bogica boga, ona svoje misli ima! Morti se ona već i s ajngeli spominja... Samo da bi joj bog i majka božja dali zdravljica!
           – Teško da bu toga! – primjećuje kroz nos stara Kata.
           – Sè je vu bože ruke. Dragi Bog sè može, fala mu budi i dika!...
           – To se zna!...
           Onda opet stara Kata nadovezuje kakva je Janica bila kao snaha. Otvoreno govoreći, nije bila baš “prenajbolja”. Raditi je htjela, tek je previše bila gizdava, svoje glave, a koji put i oštra jezika. Puno nije pripovijedala, niti se puno svađala, ali je znala dobro odbrusiti. Ipak, šteta ju je, jer je mlada pak bi se popravila.
           Malo-pomalo prijeđoše žene na drugi razgovor: o kokošima, o predivu, o muževima i susjedama. Dok su one tako pričajući zaboravile na bolesnicu da je bodre i tješe, Janica najednom uzdahnu i mučno prošaputa:
           – Marko... ja-bu-ko... moja! Zovète mi Marka!...
           Potrčala jedna od njih na vrata.
           – Oj Marko! Janica te zove!... Žuri se!...
           – Bum došel već! – otresao se on. Nije on to volio, pa gotovo. Osim toga nije imao ni kad, jer je baš svršavao tu svoju patentnu klopku za tvorce.
           Zagleda se Janica u vrata neće li Marko doći.
           O, koliko je tuge, koliko beskrajne žalosti i najnježnije čežnje bilo u onim divno plavim, djetinjskim, a tako umornim očima!
           Ali Marko nije dolazio.
           I najednom se te prekrasne i prežalosne oči koje su se već stale zaklapati od napora, naglo i silno otvoriše. Zjenice se raširile u užasu jednom, divlje, preneraženo, kao da su ugledale nešto neviđeno strašno.
           Žene su osjetile da je u sobu došla Smrt.
           
			Slavko Kolar`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Breza u priči simbolizira…',
        answers: [
          {
            title: 'vitku djevojku nježnog izgleda',
            right: true,
          },
          {
            title: 'usamljenu osobu',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Simbol je stilska figura kojom se…',
        answers: [
          {
            title: 'preuveličavaju osobine nekog pojma',
            right: false,
          },
          {
            title: 'jednim pojmom ukazuje na neki drugi',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Janica u svojoj bolesti…',
        answers: [
          {
            title: 'nije imala razumijevanje svojih bližnjih',
            right: true,
          },
          {
            title: 'imala je razumijevanje svoga muža',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Marko Labudan je opisan sa…',
        answers: [
          {
            title: 'iskrenim divljenjem',
            right: false,
          },
          {
            title: 'prikrivenim podsmjehom',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: 'Kojom se stilskom figurom pisac poslužio slikajući Marka Labudana, ali i šire – čitavu porodicu i susjede?',
        answers: [
          {
            title: 'ironijom',
            right: true,
          },
          {
            title: 'hiperbolom',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 6th question',
        question: 'Ironija je stilska figura kojom se riječima daje…',
        answers: [
          {
            title: 'suprotan smisao od onog koje imaju u osnovnom značenju',
            right: true,
          },
          {
            title: 'simbolično značenje',
            right: false,
          },
        ],
      },
    ],
  },
  {
    id: 24,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Сузе којих се стидим',
    type: essay,
    text: `У прољеће кад се природа обнавља, те голе гране заодјене младим свијетлозеленим лишћем, а блатне ливаде дарежљиво покрије свјежим зеленим сагом, буди се и у људима жеља да одјену нову одјећу. Зажеле они да одбаце поношене зимске капуте, који у магловитим зимским данима и нису изгледали тако сиви, излизани и нагризени прашином; као сада у пуном сунчаном сјају. Па и они који нису ташти, а нису више ни млади, радују се кад се могу извући из старе зимске чахуре.
           Али кад је нетко у деветој години живота, а готово свих девет година носио је прекројену одјећу старије сестре као ја, онда је та жеља још јача него код других сретника који често добивају нове хаљине. И кад такво деветогодишње створење напокон дочека капут, који није још ни једном преокретан, те још мирише по дућану, онда је радост с пуним правом голема.
           Такву сам радост осјећала и ја, кад сам једне лијепе прољетне недјеље први пут навукла нове жуте ципеле, плави капутић и плаву морнарску капицу. Све зајамчено ново новцато.
           На капутићу жута дугмад љескала се као да је од суха злата. Права дивота! Била сам увјерена да ће очи свијета бити уперене само у ме кад се појавим у тој дивоти. Та помисао удвостручила је моју радост, али и моју нестрпљивост: кад ће ми бити допуштено да се покажем јавно у пуној паради.
           Дуго сам морала чекати на тај сретни час. Прољеће бијаше кишно; мама с правом није допуштала да одјенем на кишу свој парадни капутић. – Стрпи се! Кад се вријеме устали, онда ћеш се поновити. За кишу је добар и стари капут – гласила је мамина одредба.
           Али сваке недјеље лијевала је киша као да пркоси мени, а мој дивни капут морао је чамити у мрачном ормару и нитко му се није могао дивити.
           Прекопала сам све календаре да пронађем временска прорицања прештампана из стољетног календара; проучила сам све мијене мјесеца, измолила сто Оченаша за лијепо вријеме, но киша је свеудиљ лијевала само да напакости мени и свима мени сличнима.
           Но све има свој крај. Тако сам и ја напокон дочекала своју сунчану недјељу.
           Била је то заиста права прољетна недјеља. Кроз отворени прозор навирали су сунчани траци, напунили кућу свјетлошћу и ведрином. Из кухиње ширио се мирис свјеже печених колача, прокађен мирисом клинчића и цимета. Собе окићене баршунастим мацицама, јаглацом и висибабама употпуњавале су моје сретно расположење.
           У тој свечаној атмосфери шетала сам у своме новом капуту и плавој морнарској капици, с које су весело лепршале двије свилене врпце. Је ли итко могао бити сретнији него што сам била ја тога прољетног доподнева? Прије изласка погледала сам се још једном у зрцало и пресретна кренула из куће да и други виде мој лијепи капут. Мама ме испратила брижним погледом.
           Поносно сам прошла кроз вежу и радознало заокружила оком по сусједним прозорима да се увјерим види ли још нетко моју “параду”. Штета, нигдје никог!
           А сунце сја, једнако као и у мојој души, гдје је све ведро и сунчано. Само на влажној земљи познали су се трагови обилних прољетних киша. Јарак пред нашом кућом набујао од калне воде. Над јарком мостић преко којег морадох пријећи.
           Баш када ступих на мостић, спопадне ме поновно жеља да се огледам по сусједним прозорима. Али у зао час! Не гледајући преда се, умјесто да станем на мостић ступила сам мимо – и пљус – прије него сам била свјесна што се збива, нађох се заједно с мојим новим капутом у јарку пуном воде.
           Мирном улицом проломио се мој врисак и привукао прозорима људе жељне сензација. Ускоро су сви прозори били начичкани главама, док сам ја запомагала: – Мама!... Мама! – и својом виком привукла све више непожељних свједока своје невоље.
           Још час прије пожељела сам да ме сви виде и сад ми је жеља била испуњена. Сви су ме видјели, али какву? Мокру као покисло штене, како се дижем из кална јарка; с мојега новог капутића тече млаз воде, а низ образе поточић суза. Моја морнарска капица пливала је по муљу, за њом се вијугаху свилене врпце као двије дебеле глисте.
           Све бијаше уништено! Свршена парада, радост и срећа. Остао је само мокри и упрљани капут и ја, тако јавно осрамоћена. Тулећи иза гласа враћала сам се__ утучена кући. Био је то призор који је и доброћудне сусједе нагнао у смијех, па и моја властита мајка, која је иза мене била највише погођена овом незгодом, није могла сакрити смијешак.
           Размишљала сам колико ми је јада задао мој нови капут. Три кишне недјеље проплакала сам што га нисам смјела обући због кише, а четврте, сунчане недјеље, окупала сам се у њему! А прије тога чували смо га да не падне на њ ни кап кише!
           Присјео ми капут. Да ли је завриједио мојих суза?
           Одговор на то питање дао ми је догађај којем сам присуствовала након много година.
           Било је то једне блиставе недјеље. У граду се славила нека свечаност. Уз звукове глазбе наилазила је поворка свечано одјевене дјеце. Поглед ми запе на дјевојчици која је ступала у поворци окружена напирлитаним “луткицама”. Сама, без свога пара. Пожалих је! Сиротица, мора да јој је тешко што нема своје дружице! Те мале умишљене паунице вјеројатно јој нису хтјеле пружити руке што није била тако лијепо одјевена као оне. Али, кад јој позорно погледах у лице, изненадих се: на њеном лицу није се одражавала ни туга ни разочарање због старе хаљинице.
           Сјетила сам се тада оне дјевојчице која је прије много година горко плакала што није смјела одјенути нови капутић једне кишне недјеље.
           Порумењела сам у том тренутку... и постидјела се својих суза.
            
			Злата Коларић-Кишур`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Tema priče „Suze kojih se stidim“ je…',
        answers: [
          {
            title: 'sjećanje na jedan događaj iz djetinjstva',
            right: true,
          },
          {
            title: ' želja jedne djevojčice da dobije novu odjeću',
            right: false,
          },
          {
            title: 'This is title for 2nd question',
            question: 'Ko priča o događaju?',
            answers: [
              {
                title: 'Zlata Kolarić – Kišur',
                right: false,
              },
              {
                title: 'djevojčica, glavna junakinja priče',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 3rd question',
            question: 'Djevojčica se radovala jer je',
            answers: [
              {
                title: 'prvi put dobila novu odjeću',
                right: false,
              },
              {
                title: 'procvjetalo proljećno cvijeće',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 4th question',
            question: 'Koji događaj u priči predstavlja preokret?',
            answers: [
              {
                title: 'Kada je djevojčica dobila novu odjeću.',
                right: false,
              },
              {
                title: 'Kada je isprljala novu odjeću.',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 5th question',
            question: 'Poslije pada djevojčica se osjećala…',
            answers: [
              {
                title: 'kao glavni lik u komediji',
                right: false,
              },
              {
                title: 'osramoćeno',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 6th question',
            question: 'Koji je događaj pokazao djevojčici da isprljana odjeća nije bila vrijedna suza?',
            answers: [
              {
                title: 'Kada je kao odrasla mogla kupovati što god poželi.',
                right: false,
              },
              {
                title: 'Kada je u povorci, među lijepo obučenom djecom, vidjela skromno obučenu, ali ponosnu djevojčicu.',
                right: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 25,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Sećanje na šarenu pticu',
    type: essay,
    text: `Posle mnogo godina našao sam se u gradu mog dečaštva kao gost na Tribini mladih. Bio sam dočekan s kuđenjem, prigovarali su mi na crnoj slici sveta i osuđivali moje knjige. Pokajao sam se što sam pristao da gostujem u gradu koji me i ranije obasipao grdnjama, pa ako hoćete i prognao, jer sam idiličnu sliku zavičaja ukaljao ružnim opisima. Sala Tribine bila je malena i zagušljiva; prosto sam vapio za zrakom, a bio sam toliko utučen pogrdama da se nisam usudio tražiti čašu vode, iako su mi se usta sušila. I taman sam se ponadao da će lepa voditeljica objaviti kraj ovom neslavnom gostovanju, kad se na ulazu sale pojaviše invalidska kolica; njih je gurao crnoput mladić s kovrdžavom kosom, u majici koja je isticala njegovu mišićavost. U kolicima je sedeo momak izduženog lica, pomalo izobličenog i bledog, s maljama što su se hvatale samo uz rub lica i podbradak. Glavu je držao malo nagnutu u stranu, ali ne na onaj način nemoćnog.
            – Sad moraš još malo ostati – rekla je voditeljica. – To je naš Fahro, redovni posetilac Tribine.
            Crnoputi momak probio se s kolicima do prozora i spretno ga otvorio tako da nas je osvežio zrak, a prijao je i njegovom bolesnom prijatelju. Vani su se čule ptice; miris lipe zapljusnuo nas je kao neki poetski dah. Sala je bila puna dnevnog svetla. Bolesni dečak iz mog detinjstva gledao me kao neznanca, istim onim lepim, plavim očima. Sada nije imalo svrhe potezati uspomene iz Mahale; mogao sam misliti samo o tome kako se na životnoj mapi naše sudbine dodiruju i udaljuju i najzad slivaju u isti tok vremena. Njegov otac je umro od opake bolesti; kažu da je dugo ležao pod tim teretom kao neki kažnjenik. Umro je u neorealističkom dekoru Mahale, a poslednji njegov razgovor sa sinom bio je o filmu.
            – Šta se daje u bioskopu? – upitao je slabim, promuklim glasom.
            – <i>Pustinja straha</i>.
            – Žao mi je što film neću s tobom gledati, ali pustinja straha je preda mnom i ja sam već zakoračio tamo. Imam i ulaznicu.
            U njegovoj ostavštini, među dokumentima, pronađena je beležnica. U njoj su bili podaci o sedamsto filmova koje je gledao u toku svog nesrećnog i protivurečenog života. Dečak je nastavio kao i otac, počeo je da vodi svoju <i>istoriju filma</i>, da unosi podatke u svoju beležnicu, predano, brižljivo i s akribijom, i da, na koncu, daje svoje ocene. Voleo je američke filmove o divljem zapadu, avanturističke filmove i spektakle. <i>Kabinet doktora Kaligarija</i> gledao je šest puta. Bergmana nije podnosio. Taj mladić mi je postavio pitanje: utiče li film na literaturu? i s ogorčenjem naveo nekog književnika koji je izjavio da prezire film. Takođe je zamolio da za njegovu beležnicu navedem filmove i režisere koje volim. To pitanje me spaslo od onih što su već bili počeli s uvredama i sramoćenjem, nazivajući me literarnom nakazom.
            Tada sam izrazio sumnju u književnika koji prezire film i naveo nekog hispanoameričkog pisca, ne sećam se tačno njegovog imena, mogao bi biti Fuentes ili Oktavio Paz, zašto ne, a on je rekao da je film <i>umetnost uskrsnuća, a literatura umetnost raspeća</i>. Možda je to preterano, ali je rečeno s ozbiljnošću, pogotovu što je uskrsnuće nagrada pojedincu da se obuče u sliku nebesku. Ako se čovek ukazuje kao slika božja, onda je bog izumio film. I Borhes ističe u prologu prvog izdanja <i>Sveopšte istorije beščašća</i> da su na njegove prozne sastave uticali prvi filmovi Jozefa von Sternberga. Takođe izjavljuje da je uprkos slabom vidu gledao hiljade filmova. Ispričao sam o beogradskoj kinoteci kao novom hramu; tamo su se podjednako nalazili i pisci i slikari i arhitekte i režiseri i manijaci, ne samo kao zaljubljenici u film, već kao ljudi koji su pohađali časove jedinstvene prakse. <i>Film je umetnost zadovoljstva, a literatura umetnost melankolije</i>, to sam naveo ne sećajući se otkuda i kako je to ostalo u mom pamćenju.
            Tek što sam bio započeo svoju listu filmova, i za mladićevu beležnicu naveo najpoetičniji film <i>Los Olvidados</i>, a na prvo mesto stavio svog omiljenog reditelja Luisa Bunjuela, dogodilo se nešto neobično: u salu je uletela jedna lepa šarena ptica, lepršala je u uglovima dvorane pribijajući se uz zid, grebući kandžicama i ljušteći kreč. U nekoliko mahova bezglavo je udarila u staklo gornjeg zatvorenog dela prozora. Jedna peruška, kao pahulja, pala je ozgo na moje rame. Pojava ptice izazvala je radost i ushićenje u dvorani, samo je bolesni mladić Fahro uzdrhtao uplašen da će se ptica ozlediti. Kad je pronašla prozor i otprhnula, u sali je zavladala tišina kakvu posle nikad nisam doživeo. Sen krila te ptice je tajanstveni znak pod kojim smo se razišli.
            Još se i danas pitam nije li to bio privid, moja duševna ptica, spasonosni anđeo, pojava na poziv mašte da se oslobodi zarobljenica mog detinjstva. San o ptici često me i danas pohodi. Stekel ga tumači kao biseksualni simbol, za mene pak ima duhovno značenje, zaručničku vrednost Hristove poruke: <i>budi bezazlen kao grlica</i>!
            U vreme dok sam radio na ovoj priči brinuo sam o mnogim nedostacima, a ponajviše o nepouzdanom svršetku, ali tada mi je u pomoć priskočio slučaj, zaštitnik pripovedača. Jednog dana sam susreo nekadašnju voditeljicu Tribine, sada ženu srednjih godina, ostarelu pre vremena. Nećete mi verovati, ali tamo više nije bilo nijedne crte nekadašnje lepotice. Kratko i bezvoljno razgovarali smo o prošlosti, pominjala je mnoga imena koja mi ništa nisu značila. Jedva sam čekao da se pozdravimo. Na rastanku je rekla:
            – Nikad neću zaboraviti onu pticu! Sećaš li se? Što ne napišeš nešto o tome?
            <i>Mirko Kovač</i>`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Pisac se sjećao Tribine mladih na kojoj se neprijatno osjećao, jer su ga…',
        answers: [
          {
            title: 'obasipali grdnjama i proglasili lošim piscem',
            right: true,
          },
          {
            title: 'podsjećali na teško djetinjstvo',
            right: false,

          },
          {
            title: 'This is title for 2nd question',
            question: 'Atmosferu u sali je promijenio ulazak…',
            answers: [
              {
                title: 'mladića u invalidskim kolicima',
                right: true,
              },
              {
                title: 'otvaranje prozora u sali',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 3rd question',
            question: 'Mladić u kolicima je bio zaljubljenik u…',
            answers: [
              {
                title: 'književnost',
                right: false,
              },
              {
                title: 'film',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 4th question',
            question: 'Pisac je doživio dolazak ptice kao tajanstveni znak poslije koga je uslijedilo njegovo…',
            answers: [
              {
                title: 'oslobađanje od neprijatnosti i pritiska koji je trpio',
                right: true,
              },
              {
                title: 'saznanje da je sve prolazno',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 5th question',
            question: 'Ptica u književnosti je simbol…',
            answers: [
              {
                title: 'ljubavi',
                right: false,
              },
              {
                title: 'slobode',
                right: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 26,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Sećanje na šarenu pticu',
    type: essay,
    text: `Posle mnogo godina našao sam se u gradu mog dečaštva kao gost na Tribini mladih. Bio sam dočekan s kuđenjem, prigovarali su mi na crnoj slici sveta i osuđivali moje knjige. Pokajao sam se što sam pristao da gostujem u gradu koji me i ranije obasipao grdnjama, pa ako hoćete i prognao, jer sam idiličnu sliku zavičaja ukaljao ružnim opisima. Sala Tribine bila je malena i zagušljiva; prosto sam vapio za zrakom, a bio sam toliko utučen pogrdama da se nisam usudio tražiti čašu vode, iako su mi se usta sušila. I taman sam se ponadao da će lepa voditeljica objaviti kraj ovom neslavnom gostovanju, kad se na ulazu sale pojaviše invalidska kolica; njih je gurao crnoput mladić s kovrdžavom kosom, u majici koja je isticala njegovu mišićavost. U kolicima je sedeo momak izduženog lica, pomalo izobličenog i bledog, s maljama što su se hvatale samo uz rub lica i podbradak. Glavu je držao malo nagnutu u stranu, ali ne na onaj način nemoćnog.
            – Sad moraš još malo ostati – rekla je voditeljica. – To je naš Fahro, redovni posetilac Tribine.
            Crnoputi momak probio se s kolicima do prozora i spretno ga otvorio tako da nas je osvežio zrak, a prijao je i njegovom bolesnom prijatelju. Vani su se čule ptice; miris lipe zapljusnuo nas je kao neki poetski dah. Sala je bila puna dnevnog svetla. Bolesni dečak iz mog detinjstva gledao me kao neznanca, istim onim lepim, plavim očima. Sada nije imalo svrhe potezati uspomene iz Mahale; mogao sam misliti samo o tome kako se na životnoj mapi naše sudbine dodiruju i udaljuju i najzad slivaju u isti tok vremena. Njegov otac je umro od opake bolesti; kažu da je dugo ležao pod tim teretom kao neki kažnjenik. Umro je u neorealističkom dekoru Mahale, a poslednji njegov razgovor sa sinom bio je o filmu.
            – Šta se daje u bioskopu? – upitao je slabim, promuklim glasom.
            – <i>Pustinja straha</i>.
            – Žao mi je što film neću s tobom gledati, ali pustinja straha je preda mnom i ja sam već zakoračio tamo. Imam i ulaznicu.
            U njegovoj ostavštini, među dokumentima, pronađena je beležnica. U njoj su bili podaci o sedamsto filmova koje je gledao u toku svog nesrećnog i protivurečenog života. Dečak je nastavio kao i otac, počeo je da vodi svoju <i>istoriju filma</i>, da unosi podatke u svoju beležnicu, predano, brižljivo i s akribijom, i da, na koncu, daje svoje ocene. Voleo je američke filmove o divljem zapadu, avanturističke filmove i spektakle. <i>Kabinet doktora Kaligarija</i> gledao je šest puta. Bergmana nije podnosio. Taj mladić mi je postavio pitanje: utiče li film na literaturu? i s ogorčenjem naveo nekog književnika koji je izjavio da prezire film. Takođe je zamolio da za njegovu beležnicu navedem filmove i režisere koje volim. To pitanje me spaslo od onih što su već bili počeli s uvredama i sramoćenjem, nazivajući me literarnom nakazom.
            Tada sam izrazio sumnju u književnika koji prezire film i naveo nekog hispanoameričkog pisca, ne sećam se tačno njegovog imena, mogao bi biti Fuentes ili Oktavio Paz, zašto ne, a on je rekao da je film <i>umetnost uskrsnuća, a literatura umetnost raspeća</i>. Možda je to preterano, ali je rečeno s ozbiljnošću, pogotovu što je uskrsnuće nagrada pojedincu da se obuče u sliku nebesku. Ako se čovek ukazuje kao slika božja, onda je bog izumio film. I Borhes ističe u prologu prvog izdanja <i>Sveopšte istorije beščašća</i> da su na njegove prozne sastave uticali prvi filmovi Jozefa von Sternberga. Takođe izjavljuje da je uprkos slabom vidu gledao hiljade filmova. Ispričao sam o beogradskoj kinoteci kao novom hramu; tamo su se podjednako nalazili i pisci i slikari i arhitekte i režiseri i manijaci, ne samo kao zaljubljenici u film, već kao ljudi koji su pohađali časove jedinstvene prakse. <i>Film je umetnost zadovoljstva, a literatura umetnost melankolije</i>, to sam naveo ne sećajući se otkuda i kako je to ostalo u mom pamćenju.
            Tek što sam bio započeo svoju listu filmova, i za mladićevu beležnicu naveo najpoetičniji film <i>Los Olvidados</i>, a na prvo mesto stavio svog omiljenog reditelja Luisa Bunjuela, dogodilo se nešto neobično: u salu je uletela jedna lepa šarena ptica, lepršala je u uglovima dvorane pribijajući se uz zid, grebući kandžicama i ljušteći kreč. U nekoliko mahova bezglavo je udarila u staklo gornjeg zatvorenog dela prozora. Jedna peruška, kao pahulja, pala je ozgo na moje rame. Pojava ptice izazvala je radost i ushićenje u dvorani, samo je bolesni mladić Fahro uzdrhtao uplašen da će se ptica ozlediti. Kad je pronašla prozor i otprhnula, u sali je zavladala tišina kakvu posle nikad nisam doživeo. Sen krila te ptice je tajanstveni znak pod kojim smo se razišli.
            Još se i danas pitam nije li to bio privid, moja duševna ptica, spasonosni anđeo, pojava na poziv mašte da se oslobodi zarobljenica mog detinjstva. San o ptici često me i danas pohodi. Stekel ga tumači kao biseksualni simbol, za mene pak ima duhovno značenje, zaručničku vrednost Hristove poruke: <i>budi bezazlen kao grlica</i>!
            U vreme dok sam radio na ovoj priči brinuo sam o mnogim nedostacima, a ponajviše o nepouzdanom svršetku, ali tada mi je u pomoć priskočio slučaj, zaštitnik pripovedača. Jednog dana sam susreo nekadašnju voditeljicu Tribine, sada ženu srednjih godina, ostarelu pre vremena. Nećete mi verovati, ali tamo više nije bilo nijedne crte nekadašnje lepotice. Kratko i bezvoljno razgovarali smo o prošlosti, pominjala je mnoga imena koja mi ništa nisu značila. Jedva sam čekao da se pozdravimo. Na rastanku je rekla:
            – Nikad neću zaboraviti onu pticu! Sećaš li se? Što ne napišeš nešto o tome?
            <i>Mirko Kovač</i>`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Pisac se sjećao Tribine mladih na kojoj se neprijatno osjećao, jer su ga…',
        answers: [
          {
            title: 'obasipali grdnjama i proglasili lošim piscem',
            right: true,
          },
          {
            title: 'podsjećali na teško djetinjstvo',
            right: false,

          },
          {
            title: 'This is title for 2nd question',
            question: 'Atmosferu u sali je promijenio ulazak…',
            answers: [
              {
                title: 'mladića u invalidskim kolicima',
                right: true,
              },
              {
                title: 'otvaranje prozora u sali',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 3rd question',
            question: 'Mladić u kolicima je bio zaljubljenik u…',
            answers: [
              {
                title: 'književnost',
                right: false,
              },
              {
                title: 'film',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 4th question',
            question: 'Pisac je doživio dolazak ptice kao tajanstveni znak poslije koga je uslijedilo njegovo…',
            answers: [
              {
                title: 'oslobađanje od neprijatnosti i pritiska koji je trpio',
                right: true,
              },
              {
                title: 'saznanje da je sve prolazno',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 5th question',
            question: 'Ptica u književnosti je simbol…',
            answers: [
              {
                title: 'ljubavi',
                right: false,
              },
              {
                title: 'slobode',
                right: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 27,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Šala (odlomak)',
    type: essay,
    text: `Vedro zimsko podne... Mraz je jak, puca, i Nađenjki, koja me drži ispod ruke, srebrnastim injem prekriva kovrdže na sljepoočnicama i malje iznad gornje usne. Stojimo na visokom klizalištu. Od naših nogu do same zemlje prostire se strma površina, u kojoj se sunce ogleda kao u ogledalu. Pored nas su male sanke, tapacirane svijetlocrvenom čojom.
           – Da se spustimo, Nadežda Petrovna! – nagovaram je. – Samo jednom! Siguran sam, ostaćemo živi i zdravi.
           Ali, Nađenjka se plaši. Čitav prostor od njenih malih kaljača do kraja zaleđenog klizališta izgleda joj kao strašna, neizmjerno duboka provalija. Obamire i gubi dah čim pogleda dolje, čim joj samo predložim da sjedne u sanke, a šta će tek biti ako rizikuje da poleti u provaliju! Umrijeće, poludjeće.
           – Preklinjem vas! – kažem. – Nemojte se plašiti! Shvatite, to je malodušnost, kukavičluk!
           Nađenjka najzad popušta, a po licu joj vidim da se prepušta opasnosti po život. Smještam je u sanke, blijedu, drhtavu, obuhvatam je rukom dok se zajedno strmoglavljujemo u bezdan.
           Sanke lete, kao metak. Presječeni vazduh udara nam u lice, fijuče, zviždi u ušima, kida nas, bolno štipa od zlobe, hoće da nam otkine glavu sa ramena. Od pritiska vjetra nemamo snage da dišemo. Izgleda da nas je sam đavo uzeo u svoje šake, i uz fijuk vuče u pakao. Predmeti oko nas ulivaju se u jednu dugu traku, koja silovito juri... Evo, još samo tren i, izgleda – poginućemo!
           – Volim vas, Nađa! – kažem poluglasno.
           Sanke počinju da klize sve sporije i sporije, fijuk vjetra i škripa saonika više nisu tako strašni, više ne gubimo dah i najzad smo dolje. Nađenjka je ni živa ni mrtva. Blijeda je, jedva diše... Pomažem joj da ustane.
           – Nipošto se neću sankati drugi put – kaže gledajući me razrogačenim očima, punim užasa. – Ni za šta na svijetu! Samo što nisam umrla!
           Malo kasnije, dolazi sebi i već upitno mi se zagleda u oči: da li sam joj ja rekao one tri riječi ili ih je ona samo pričula u huci kovitlaca? A ja stojim pored nje, pušim i pažljivo posmatram svoju rukavicu.
           Ona me hvata ispod ruke i dugo šetamo oko klizališta. Zagonetka joj, po svoj prilici, ne da mira. Da li su one riječi izgovorene ili nisu? Da ili ne? Da ili ne? To je pitanje samoljubivosti, časti, života, sreće, veoma važno pitanje, najvažnije na svijetu. Nađenjka nestrpljivo, tužno, pronicljivim pogledom pilji u moje lice, odgovara mi neumjesno, čeka ne bih li ja progovorio o tome. O, kakva igra na tom milom licu, kakva igra! Vidim ja, ona se bori protiv sebe, trebalo bi da mi nešto kaže, da me nešto pita, ali ne nalazi riječi, nezgodno joj je, smeta joj radost...
           – Znate šta? – kaže ne gledajući u mene.
           – Šta? – pitam.
           – Hajdemo još jednom... da se sankamo.
           Stepeništem se penjemo na klizalište. Opet blijedu, drhtavu Nađenjku smještam u sanke, opet letimo u strašnu provaliju, opet fijuče vjetar i škripe saonici, i opet ja, prilikom najjačeg i najbučnijeg letenja sanki, poluglasno kažem:
           – Volim vas, Nađenjka!
           Čim se zaustave sanke, Nađenjka pogledom obuhvata klizalište, niz koje smo se upravo spustili, zatim mi dugo zuri u lice, osluškuje moj glas, ravnodušan i bezosjećajan, a sva, sva ona, pa čak i njen muf, i kapuljača, i čitava njena figura izražavaju krajnju nedoumicu. Na licu joj piše:
           “U čemu je stvar? Ko je izgovorio one riječi? On, ili sam ih samo pričula?“
           Ta neizvjesnost je uznemiruje, izvodi iz takta. Jadna djevojčica mi ne odgovara na pitanja, mršti se, samo što ne zaplače.
           – Hoćemo li kući? – pitam.
           – Ali meni... meni se sviđa ovo sankanje – kaže crveneći se. – Zar nećemo da se spustimo još jednom?
           Njoj se “sviđa” ovo sankanje, međutim, dok sjeda u sanke ona je, kao i ranije, blijeda, jedva diše od straha, drhti.
           Spuštamo se treći put, i vidim kako mi posmatra lice, prati moje usne. A ja stavljam maramicu na usta, kašljem i kada stignemo do sredine klizališta, uspijevam da izgovorim:
           – Volim vas, Nađa!
           I zagonetka ostaje zagonetka! Nađenjka ćuti, razmišlja o nečem...
           Sa sankanja je pratim kući, ona nastoji da hoda što laganije, usporava korake i sve čeka ne bih li joj kazao one riječi. I vidim kako joj pati duša, kako se suzdržava da ne kaže:
           “Ma, neće biti da ih je govorio vjetar! Neću da mi to govori vjetar!” Sutradan ujutro dobio sam ceduljicu: “A ko danas pođete na sankanje, svratite po mene. N.” I od tada svakodnevno odlazim na sankanje sa Nađenjkom, a dok letimo sankama, ja svaki put poluglasno izgovaram iste riječi:
           – Volim vas, Nađa!
           Ubrzo se Nađenjka navikava na tu rečenicu, kao na vino ili na morfijum. Ne može da živi bez nje. Istina, letenje niz klizalište i dalje joj je strašno, ali strah i opasnost sada već pridaju naročitu draž izjavi ljubavi, riječima koje i dalje predstavljaju zagonetku i muče joj dušu. Osumnjičeni smo nas dvojica: ja i vjetar... Ko joj od nad dvojice izjavljuje ljubav, ona ne zna, ali, po svemu sudeći, već joj je svejedno; nije bitno iz koje posude ćeš piti – bitno je samo biti pijan.
           Jednog podneva odem na sankanje sam; pošto sam upao u gužvu, vidim kako Nađenjka prilazi klizalištu, kako me traži pogledom... Zatim se bojažljivo penje stepeništem... Strašno joj je da se sanka sama, o, kako joj je strašno! Blijeda je kao snijeg, drhti, ide kao na gubilište, ali ide, ide bez osvrtanja, odlučno. Po svoj prilici, najzad se usudila da proba: hoće li čuti one čudesne slatke riječi i kad nije sa mnom? Gledam je kako blijeda, usta otvorenih od užasa, sjeda u sanke, zatvara oči pa, pošto se zanavijek oprostila sa zemljom, kreće... “Šššš”, škripe saonici. Čuje li Nađenjka one riječi, ne znam... Samo vidim kako iz sanki ustaje iznemogla, slaba. A na licu joj se vidi kako i sama ne zna da li je nešto čula ili nije. Strah, koji ju je spopao dok se vozila dolje, oduzeo joj je sposobnost da čuje, da razlikuje zvuke, da razumijeva...
           Ali, evo, nastupa proljećni mjesec mart... Sunce postaje umilnije. Naše ledeno klizalište tamni, gubi svoj sjaj i najzad kopni. Prestajemo da se sankamo. Jadna Nađenjka više nema gdje da čuje one riječi, a nema ko ni da ih izgovara, jer se vjetar ne čuje, a ja se spremam u Peterburg – na dugo, vjerovatno zauvijek.
           Nekako pred odlazak, dva dana ranije, u sumrak, sjedim ja u baštici, a tu bašticu i Nađenjkino dvorište razdvaja visoka ograda sa gvozdenim šiljcima... Još je prilično hladno, ispod stajskog đubreta je još snijeg, drveće je mrtvo, ali već miriše proljeće i vrane bučno gaču dok se spremaju za počinak. Prilazim ogradi i dugo gledam kroz šupljinu. Vidim kako Nađenjka izlazi na doksat i tužan, čežnjiv pogled upire u nebo... Proljećni vjetar joj duva pravo u blijedo, snuždeno lice... Podsjeća je na onaj vjetar koji nam je fijukao na klizalištu, kad je slušala one tri riječi, i lice joj postaje žalosno, žalosno, niz obraz joj klizi suza... I jadna djevojčica pruža obje ruke, kao da moli vjetar da joj još jednom donese one riječi. A ja sam sačekao vjetar da poluglasno kažem:
           – Volim vas, Nađa!
           Bože moj, šta bi sa Nađenjkom! Ona usklikuje, osmjehuje se čitavim licem i pruža ruke u susret vjetru, radosna, srećna, lijepa.
           A ja odoh da se pakujem...
           To je bilo još davno. Sada je Nađenjka već udata; dali su je ili je sama pošla – svejedno – za sekretara plemićkog tutorstva, i sad već ima troje djece. To, kako smo nekad zajedno odlazili na sankanje i kako joj je vjetar donosio riječi “volim vas, Nađenjka” nije zaboravljeno; za nju je to sada najsrećnija, najdirljivija i najljepša uspomena u životu...
           A meni sada, kada sam zašao u godine, više nije jasno zašto sam joj govorio te riječi, zašto sam se šalio...
           (1886)
            
			Anton Pavlovič Čehov`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'U pripovijeci „Šala“ ulogu pripovjedača ima…',
        answers: [
          {
            title: 'pisac',
            right: false,
          },
          {
            title: 'mladić – lik iz priče',
            right: true,
          },
          {
            title: 'This is title for 2nd question',
            question: 'Mladićeve riječi: „Volim vas, Nađa“, bile su…',
            answers: [
              {
                title: 'iskrene',
                right: false,
              },
              {
                title: 'samo šala',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 3rd question',
            question: 'Djevojka je mladićeve riječi primila kao…',
            answers: [
              {
                title: 'istinu',
                right: false,
              },
              {
                title: 'nedoumicu',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 4th question',
            question: 'Da li je, na kraju priče, za tu šalu nađeno opravdanje?',
            answers: [
              {
                title: 'da.',
                right: true,
              },
              {
                title: 'ne',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 5th question',
            question: 'Opis prirode u književnom djelu je…',
            answers: [
              {
                title: 'pejzaž',
                right: true,
              },
              {
                title: 'panorama',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 6th question',
            question: 'Opis fizičkog izgleda, ali i osobina nekog lika je…',
            answers: [
              {
                title: 'psihološka analiza',
                right: false,
              },
              {
                title: 'portret',
                right: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 28,
    title: 'Umjetnička književnost – Drama',
    subtitle: 'Hasanaginica (odlomak)',
    type: lyrics,
    text: `AGA HASANAGA
            <br> HASANAGINICA
            <br> SULTANIJA
            <br> FATA
            <br> MEHO
            <br> AHMED
            <br> njihova djeca
            <br> BEG PINTOROVIĆ, brat Hasanaginičin
            <br> ZARIFHANUMA, mati Hasanaginičina
            <br> UMMIHANA, mati Hasanagina
            <br> IMOTSKI KADIJA
            <br> TETKA HATA
            <br> TETKA AIŠA
			<br> IBRAHIM
            <br> HUSREF
            <br> rodbina kadijina
            <br> ROBINJICA VLAHINJA
            <br> LATIFA, sluškinja u Zarifhanume
            <br> HUSEJIN, stari sluga Hasanagin
            <br> SVATÂ STAREŠINA
            <br> Mali “begović” u bešici. Sluškinje. Sluge. Askeri (vojnici). Kmetovi. Robinjice. Robovi. Igračice. Igrači. Muslimi. Muslimke. Jengjijice (svatovice). Svatovi. Djeca. Itd.
            
			Prvi se i treći čin događa na Hasanaginoj kuli, drugi kod kuće begovice Zarifhanume.
            PRIZOR TREĆI
            <br> PRIJAŠNJI. HASANAGINICA. SULTANIJA.
            Na vrata slijeva naglo je sunula u avliju HASANAGINICA, blijeda i uznemirena. Vitka je to, lijepa i mlada žena; ima joj jedva trideset i dvije godine, a još je vidjeti i mlađa; bijelo joj je dugoljasto miloliko lice i ruke bijele. Odjevena u svijetlu anteriju (zobuncem), na kojoj su pod vratom dukati; dimije su izvezene srebrom, a na glavi joj je jemenija (rubac). Došavši do bostana naglo je zastala Hasanaginica i stisnula se uz sjenicu, kao da će se srušiti; mrtvo je upiljila oči u zemlju, kao da je nešto izgubila. Za njom se neopazice kao sjena pojavila na vratima najstarija joj kći SULTANIJA, djevojče u prvom cvijetu mladosti, jedva u šesnaestoj godini. Blagost i neka mirna razumnost vidjeti joj je na licu. Odjevena je kao i majka joj, tek nema na glavi jemenije, da joj prekrije bujnu svjetložutu kosu.
            
			SULTANIJA
            <br> <i>(još s vratiju)</i>
            <br> Oh, majko!
            HASANAGINICA
            <i>(nijemo se okrene)</i>
            SULTANIJA
            <br> <i>(doleti k njoj i obuhvati je rukom oko pasa)</i>
            <br> Majko!
            <br> <i>(Uzme je za tim za obje ruke.)</i>
            <br> Gledni ovamo!
            <br> U moje oči – ko što ti to znaš!
            <br> Ti danas gledaš nekud u stranu,
            <br> ko izgubljena bježiš. Tražim te
            <br> po cieloj kuli, stanu, avliji.
            <br> A sve mi danas nekud izmičeš.
            <br> O, nešto se je zbilo! Tajiš mi.
            <br> Zar ne će babo doći?
            HASANAGINICA
            <br> <i>(mirno i gorko)</i>
            <br> Doć’ će.
            SULTANIJA
            <br> Ti vesela si, mati, svaki dan
            <br> do danas bila. Uviek medj’ nama!
            <br> Prizivala nas djecu naokrug,
            <br> za doček babi sve si spremala.
            <br> Sva drhtala si, kad će doći čas,
            <br> da babajko nas sviju zagrli,
            <br> A eto danas, kad bi trebalo,
            <br> da svi smo tu na dvoru veseli,
            <br> ti – smrknuta si, tužna, skršena!
            <br> I dosad bábo s vojske dolazio,
            <br> al’ taka nikad – nikad nisi bila!
            HASANAGINICA
            <br> <i>(svedj jednaka)</i>
            <br> Oj, ni on nije nikad taki bio!
            SULTANIJA
            <br> Ta kakav, majko! Meni barem reci,
            <br> kad pred drugima kriješ. Reci mi!
            HASANAGINICA
            <br> O, nije više, što je negda bilo!
            <br> Ja nemam više age Hasanage,
            <br> ni djece nemam.
            SULTANIJA
            <br> <i>(uprepaštena)</i>
            <br> Bábe, djece nemaš?!
            <br> Što govoriš to, majko!
            HASANAGINICA
            <br> Ja ne govorim.
            <br> To aga – bábo – on to govori!
            SULTANIJA
            <br> A gdje i kad je to ti rekao?
            HASANAGINICA
            <br> Ni sama te još ne vjerujem rieči,
            <br> već cieli dan i cielu noćas noć
            <br> ja govorim ih sama sa sobom
            <br> po dva put i tri puta...
            SULTANIJA
            <br> Što, zar sinoć?!
            HASANAGINICA
            <br> <i>(kao prečula njezino pitanje)</i>
            <br> Da l’ mog’o ih je on izustiti?
            <br> Il’ da je kakva slabost staračka
            <br> Husejinu ih prišaptala valjda,
            <br> ра buncao ih sinoć...
            SULTANIJA
            <br> Šta, Husejin?
            <br> I kakove su samo rieči to
            <br> Husejinove? Znadem tek toliko,
            <br> da veseli smo pošli spavati,
            <br> kad Huso nam je svima kazao,
            <br> dа ko večeras babo doći će.
            <br> I ti si, majko, bila vesela.
            <br> Ti svakoga si nas poljubila:
            <br> i Fatimu i Mehu, Ahmeda
            <br> i malog “bega” još u bešici.
            <br> Još liepe si nam kazivala pjesme:
            <br> o šatoru u gori zelenoj,
            <br> o kauru i bábi Hasanagi,
            <br> od ljutijeh što rana boluje
            <br> i što ih junak već prebolio!
            HASANAGINICA
            <br> Da, tako bilo sve, Sultanijo!
            <br> Al’ kad sam sve vas u san spremila,
            <br> prošetala sam kuli po bedemu
            <br> ko svako veče. U to Huso je
            <br> već dočeko me – o da nije tako! –
            <br> I reko mi je mučno... polagano...
            <br> Rieč po rieč kano živu žeravicu!
            <br> U meni samo srce zamrlo –
            <br> oko mene se sve okrenulo.
            <br> I dvor i kula i to nebo gore...
            <br> Ko ranjena sam zvierka skočila,
            <br> Poletjela i htjela lomit vrat
            <br> niz bielu kulu...
            SULTANIJA
            <br> Majko jedina!
            <br> Ta, kakove su rieči bile to,
            <br> da sa njih bi životu kidisala?!
            HASANAGINICA
            <br> Ja ne znam, da li pravo sam ih čula!
            <br> I dugo u njih vjerovala nisam,
            <br> tek pekle su me.
            <br> <i>(Pokazuje na grudi.)</i>
            <br> Tu su bile mi,
            <br> dо glave tek su sporo dopirale,
            <br> razumjeti ih nisam mogla, ne!
            <br> I nisam mogla pravo smirit se
            <br> u kuli nigdje. Tužna legla sam
            <br> sve misleć, da to ružni neki san
            <br> рre spavanja mi došo, pa sam htjela
            <br> mjesto njeg ljepši sanak usniti.
            <br> Аl’ nije bilo sna! Kroz pendžer je
            <br> u moju sobu mjesec svietlio.
            <br> Poludjet mišljah...
            SULTANIJA
            <br> Šta je, reci mi.
            HASANAGINICA
            <br> <i>(kao da je ne čuje)</i>
            <br> Zar kriva sam? Zar drugoga zavoljeh?
            <br> Zar svraćah koga u dvor, da ga ljubim?
            <br> Ne rodih li mu djece petero:
            <br> pet cvjetova? Ta, šta mu skrivih ја?!
            SULTANIJA
            <br> Zar to bi on o tebi mislio!
            <br> Ne, ne, ja u to ne vjerujem, majko.
            <br> Ta, šta je reko? Što l’ poručio?
            <br> (S kule dopire tiha pjesmica MEHE i FATE:
            <br> “Kroz bašču mi Drina voda teče,
            <br> krajem Drine badem drvo raste,
            <br> il’ se vješaj il’ u Drinu skači!“
            <br> Iza pjesme smijeh.)
            HASANAGINICA
            <br> Do jutra nisam mogla usnuti.
            <br> Dva <a href="#null" class="prevod" data-modal="modal-197">bulbula</a> su svu noć pjevala
            <br> i s moje glave sanak tjerala.
            <br> Tišinom noćnom tad sam slušala:
            <br> pod kulu našu netko došao,
            <br> <a href="#null" class="prevod" data-modal="modal-198">sedefli</a> on je igro tamburu.
            <br> Do pendžera mi dopro muški glas.
            <br> Da nije ašik tvoj, Sultanijo?
            SULTANIJA
            <br> Ja nemam jošte svoga <a href="#null" class="prevod" data-modal="modal-199">dilbera</a>
            <br> Da pjeva mi. Ti, majko, dobro znaš,
            <br> Da ja još nikog <a href="#null" class="prevod" data-modal="modal-200">sevdisala</a> nisam.
            HASANAGINICA
            <br> Ah, tako liepa bila pjesma noćna
            <br> I tako mila! Pjesma ljubavna,
            <br> Što aga mi je znao pjevati
            <br> U dane mlade. Eno, slušaj ju!
            <br> To sada djeca gore pjevaju
            <br> Na kuli našoj. – S tim sam usnula.
            SULTANIJA
            <br> I spavala si dugo, dugo – majko!
            <br> Odskočilo je bilo jutros sunce
            <br> Visoko već – a ti si spavala,
            <br> I ja te nisam htjela buditi.
            <br> A tada mrka, mrka ustala si,
            <br> Pa k sluškinjama onda pošla si
            <br> Sva slomljena i poništena, tužna.
            <br> Među nas djecu nisi ni izišla,
            <br> Već skrila se u svoje odaje.
            <br> Za ručkom sve si tako ćutala,
            <br> Da svi smo bili žalosni. A tada
            <br> Ja nigdje naći nisam mogla te.
            <br> Sve bježiš od nas.
            HASANAGINICA
            <br> Bježala sam samo
            <br> Pred onim njeg’vim strašnim riečima.
            SULTANIJA
            <br> Ta, kakvim, majko, kakvim riečima?
            <br> Daj, reci svojoj kćerci jedinoj,
            <br> jer “jedinom” me svojom zoveš ti,
            <br> ko sestra da sam tvoja. Reci mi!
            <br> I lakše će ti biti, kad mi rečeš...
            HASANAGINICA
            <br> Nek reče ti Husejin! Ja ne mogu?
            <br> Jer to je tako strašno. – Tamo je!
            <br> Oj Huso, starče, amo dođi sada!
            HUSEJIN
            <br> <i>(digao se s tratine)</i>
            <br> Zove li to hanuma baš mene?
            HASANAGINICA
            <br> Da, tebe, tebe! Samo tebe čujem
            <br> Svu noćas noć i cieli danas dan.
            <br> Ded kaži sada tu pred djevojkom,
            <br> što reko si mi sinoć. Sve nam reci,
            <br> jer i ja hoću čuti drugi put.
            HUSEJIN
            <br> <i>(došao naprijed)</i>
            <br> Što li ću vam kazivati jade!
            <br> Dosta ih je jednom čuti bilo.
            SULTANIJA
            <br> Kaži, Huso, lakše će nam biti!
            <br> Kaži, pa da utješimo majku!
            HUSEJIN
            <br> Kad zajaših konja lastavicu
            <br> i kad dođoh aginu šatoru,
            <br> sjedi aga mrko pred šatorom.
            <br> Uza nj majka, uza nj je sestrica,
            <br> uzа nj svieta i askera vojska.
            <br> “<a href="#null" class="prevod" data-modal="modal-201">Selam alejć</a>! Aga Hasanaga!
            <br> Evo tebi Huso <a href="#null" class="prevod" data-modal="modal-202">selam</a> nosi
            <br> a od tvoje ljube i dječice,
            <br> da te pitam, jesi li prizdravio
            <br> I hoćeš li skoro bielom dvoru,
            <br> da mi tebe, ago, dočekamo!”
            <br> Ćuti aga, ništa ne govori,
            <br> već pogleda majku i sestricu,
            <br> pа na mene oči naoblači:
            <br> ”Vrat se natrag, otkuda si došo!
            <br> Isporuči Hasanaginici:
            <br> Kada sutra na noćište panem,
            <br> nek me mlada ne čeka u dvoru –
            HASANAGINICA
            <br> Oh, “ni u dvoru, ni u rodu mome!”
            <br> On taki meni <a href="#null" class="prevod" data-modal="modal-203">haber</a> naslao!
            HUSEJIN
            <br> “Ni u dvoru, ni u rodu mome”,
            <br> tako reče – ja se <a href="#null" class="prevod" data-modal="modal-204">obeznani’</a>.
            <br> Samo gledam, vjerovat ne mogu.
            <br> “Idi, idi, u što si sad stao?
            <br> Treba li ti jedno dvaput reći?
            <br> Valja da si već podjetinjio,
            <br> igrajuć se s dječicom po dvoru!”
            <br> “Ago!” šanem, “nemoj, dobri ago,
            <br> nemoj griešit duše na hanumi!
            <br> Nije ovo da se šališ vrieme...”
            <br> A on trže brza <a href="#null" class="prevod" data-modal="modal-205">samokresa</a>,
            <br> dа ne strugnuh, ubi me ko zeca!
            <br> Takog agu još ne vidjeh nigda.
            <br> Jeste ljutit aga Hasanaga.
            SULTANIJA
            <br> Zar majku nam je potjerao babo?
            <br> Аl’ zašto, zašto?
            
			<i>Milan Ogrizović</i>`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Drama „Hasanaginica“ nastala je na osnovu čuvene epsko-lirske pjesme (balade) o kojoj ste već učili. Drama i pjesma se razlikuju…',
        answers: [
          {
            title: 'u korišćenju osnovnih izražajnih sredstava',
            right: true,
          },
          {
            title: 'This is title for 2nd question',
            question: 'U dramama se odvija radnja, izražavaju karakteri i razvijaju dramske situacije preko',
            answers: [
              {
                title: 'isključivo dijaloga',
                right: false,
              },
              {
                title: 'dijaloga i monologa',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 3rd question',
            question: 'U datom odlomku dijalog se vodi između…',
            answers: [
              {
                title: 'Hasanaginice i njene kćerke Sultanije',
                right: true,
              },
              {
                title: 'Hasanaginice i Hasanage',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 4th question',
            question: 'Pjesma je spjevana u epskom desetercu. U drami…',
            answers: [
              {
                title: 'je takođe dosljedno proveden deseterac',
                right: false,
              },
              {
                title: 'deseterac nije dosljedno proveden',
                right: true,
              },
            ],
          },
          {
            title: 'This is title for 5th question',
            question: 'O portretu likova se može govoriti na osnovu onoga…',
            answers: [
              {
                title: 'što govore, kako govore i šta čine',
                right: true,
              },
              {
                title: 'što izlaže narator',
                right: false,
              },
            ],
          },
          {
            title: 'This is title for 6th question',
            question: 'I drama i balada odvijaju se u tragičnoj atmosferi:',
            answers: [
              {
                title: 'da',
                right: true,
              },
              {
                title: 'ne',
                right: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 29,
    title: 'Umjetnička književnost - Drama',
    subtitle: 'Јазавац пред судом (Одломак)',
    type: essay,
    text: `СУДАЦ: Па ти, Давиде, ниси, како видим, будала?
            ДАВИД: Ко каже да сам будала?
            СУДАЦ: Не каже нико, него... Како ти можеш, божји човјече, тужити јазавца?
            ДАВИД: А како ти мене јопе’ мореш тако питати? Зар ти мислиш, болан, да ја не знам да овај ваш цар има за свашто закон? Знам ја то, знам: добро ја то знам. Немој мислити да не знам!
            СУДАЦ: Ама, ето, Давиде, да речемо да има закон и за јазавце, опет је то некако незгодно. Бистар си и паметан човјек, промисли се... Ти знаш, кад суд неког осуђује треба да зна колико је стар, је ли ожењен, има ли дјеце, како говори, које је вјере. Све је то потребно суду. Ето, које је вјере тај твој несретник?
            ДАВИД: Никакве! Да је икакве вјере, не би дир’о у моју сиротињу.
            СУДАЦ <i>(смијуљи се)</i>: Је ли ожењен?
            ДАВИД: Јес’, ожењен је.
            СУДАЦ: По чему знаш?
            ДАВИД: Знам, ’вамо, по нечем. То не треба славни суд да зна. Срамота је то вође и помислити, а камоли изрећи. Ожењен је, ожењен!
            СУДАЦ: Има ли дјеце, враг га однио, кад је ожењен?
            ДАВИД: Има. О, да му видиш дјеце и вамилије! Пуна и’ долина више оне моје јадне и једине њивице што се зове Ни Давидова ни царска ни спа’иска.
            СУДАЦ: Како говори, Давиде, тај лопов, којим језиком?
            ДАВИД: То ти, главати господине, ’нако посигурно не умијем казати. Бркљачи ко и ти и ово дијете кад сте се нешто малоприје договарали. Забркљачи де, господине, мало на њег’ да видим ’оће ли...
            СУДАЦ <i>(смије се, говори нешто и удара јазавца по њушци)</i>
            ДАВИД: Види, господине, види како диже њушку, како те разумије! Види курвина сина како се ко ђоја ражалостио. Не претварај се, лопове један! Иако говориш господиновим језиком, то ти неће помоћи. Слободно, немој се претварати.
            СУДАЦ: Кад је рођен, колико је стар овај твој лопов, Давиде?
            ДАВИД: Није он ни стар. Млад је он још.
            СУДАЦ: Не питам те то, већ би рад знати колико му је година. И то ми је потребно.
            ДАВИД: А колико има година откад сте ви дошли у Босну?
            СУДАЦ: Па има тако двадесет и три, и четири године.
            ДАВИД: О, млого, по богу брате! кад ћете ви већ... Е, толико је година, отприлике, и овом лопову, сјеме му се затрло!
            СУДАЦ: Како ти то знаш?
            ДАВИД: Знам, ’вамо, по нечем. Пиши ти слободно, толико му је.
            СУДАЦ: “Пиши ти слободно, толико му је!” Ти то мени као да заповиједаш, а? Ухватили смо те, Давиде! Не знаш!
            ДАВИД: Ама пиши, господине, кад ти кажем, толико му је.
            СУДАЦ: Ама није то тако! Мораш казати по чему то знаш.
            ДАВИД: Е, кад ’оћеш да кажем, казаћу ти: дира у туђу сиротињу, па ја мислим да је баш за вашег земана рођен. Ето по чему знам!
            СУДАЦ: Како, како?
            ДАВИД: Све полако... Опрости, господине, помео сам се. Опрости, господине, молим те, збунио сам се, па не знам ни шта говорим. Кад год уђем у славни суд, чини ми се да ме из свију ћошкова боду у очи оне несретне, палиграпске куке. Жена ме је, бог је убио, устрашила, она моја крезуба бабетина!
            ПИСАРЧИЋ: Ја бих река’, господине судац, да се овај човјек претвара.
            ДАВИД <i>(у себи)</i>: Е, мој синко, зар си ти то сад видио?... Не гријеши, дијете, душе. Не биједи ме код славног суда!... Ето, господине, казао сам све што си ме пит’о. Сад морате тог лопова по закону осудити.
            СУДАЦ: А име?
            ДАВИД: Име му је Јолпаз Давидов. Тако га свијет зове, а тако ће му и славни суд позивке писати, ако га данас не осудите на вјешала. Село му се зове Мелина, котар Бања Лука, окружје Бања Лука, а земља, мислим, главати господине, да ће и њему бити Босна. Кућна му је лумера, каже кнез, оне двије кантарске куке.
            <i>Петар Кочић</i>`,
    video: 'url',
    audio: 'url',
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Vrijeme vršenja radnje drame „Jazavac pred sudom“ je doba…',
        answers: [
          {
            title: 'osmanske vladavine',
            right: false,
          },
          {
            title: 'austrougarske vladavine',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 2nd question',
        question: 'Petar Kočić u svojoj drami osuđuje tuđinsku vlast…',
        answers: [
          {
            title: 'kroz humor i oštru kritiku',
            right: true,
          },
          {
            title: 'tako što austrougarske činovnike čini smiješnima',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 3rd question',
        question: 'Ova drama je satirična. Satirom se izražava…',
        answers: [
          {
            title: 'opomena ljudima koji su skloni lošem ponašanju',
            right: false,
          },
          {
            title: 'oštra osuda društva ili ljudskih mana',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 4th question',
        question: 'Davidova tužba protiv jazavca je…',
        answers: [
          {
            title: 'gest jednog šaljivdžije',
            right: false,
          },
          {
            title: 'optužba austrougarske vlasti',
            right: true,
          },
        ],
      },
      {
        title: 'This is title for 5h question',
        question: 'Ko su suprotstavljeni likovi u drami?',
        answers: [
          {
            title: 'David i carski činovnici',
            right: true,
          },
          {
            title: 'David i jazavac',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 6th question',
        question: 'U svojoj borbi protiv ugnjetavanja siromašnih bosanskih seljaka, David se služio…',
        answers: [
          {
            title: 'ironijom',
            right: true,
          },
          {
            title: 'augmentativima',
            right: false,
          },
        ],
      },
      {
        title: 'This is title for 7h question',
        question: 'Kočić je odabrao ime svog junaka (David) da bi...',
        answers: [
          {
            title: 'zvučalo neobično i lako se pamtilo',
            right: false,
          },
          {
            title: 'da bi predstavio borbu između slabog i diva kao u priči „David i Golijat“',
            right: true,
          },
        ],
      },
    ],
  },
];
