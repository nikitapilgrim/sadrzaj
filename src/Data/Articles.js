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
          bukagije – moje {{belenzuke!(3)}}” 
          `,
    author: 'Lirska narodna pjesma (sevdalinka)',
    year: false,
    video: false,
    audio: require(`../assets/sounds/pronunciation/01.aac`),
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
    text: `Dva cvijeta u {{bostanu(4)}} rasla:
plavi zumbul i zelena {{kada(5)}}.
Plavi zumbul ode na Doljane,
osta kada u bostanu sama.
Poručuje zumbul sa Doljana:
“Dušo moja, u bostanu kado,
kako ti je u bostanu samoj?”
Odgovara iz bostana kada:
“Što je nebo, da je list ’{{artije(215)}},
što je gora, da su {{kalemovi(7)}},
što je more, da je crn {{murećep(8)}},
pak da pišem tri godine dana,
ne bi moji’ ispisala jada!”
`,
    author: 'Narodna lirska pjesma (sevdalinka)',
    year: false,
    video: false,
    audio: require('../assets/sounds/pronunciation/02.aac'),
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
            title: 'da stvori jasnu sliku o njenoj tuzi, bolu',
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
    type: lyrics,
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
l’jepom Fatom novoga {{serdara(10)}}.
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
“{{Muč(14)}}’, ne luduj, Mejrima djevojko!
Muč’, ne luduj, kad budala nisi!
Sad tvoj Omer drugu {{dragu(-)}} ljubi,
a za tebe mladu i ne mari!”
Al’ besjedi Mejrima djevojka:
“Đul miriše, mila moja majko,
đul miriše – Omerova duša.”
Ona strča dolje niz {{čardake(15)}},
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
`,
    author: 'Narodna balada',
    year: false,
    video: false,
    audio: require('../assets/sounds/pronunciation/03.aac'),
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
    subtitle: 'Tuturuza i šeh Meco',
    subtitleDescr: '(odlomak)',
    type: essay,
    text: `Tuturuza je ispričao najnoviju hridsku dogodovštinu. Slinić koji je kad je, ozgodnio i postao čaršijski prvak, promijenio prezime, oćutio je neku večer nekakvo orgecanje u magazi pod kućom. Pomislio je na hrsuza pa je uzdigao svu kućnu čeljad na noge da ga hvataju. I komšije su opkolile kuću i poredale se pred magazna vrata. Slinić je nagovarao hrsuza da izađe, da se ne boji, neće mu ništa biti. “Izađi slobodno! Neću te prijaviti policiji!” Štropot bakrenog suda nije prestajao, ali hrsuz nije htio napolje. Da ga ohrabri, Slinić ga je nagovarao da se ne stidi. “Slobodno ti izađi! I ja sam pod mladost bio takav!” Odškrinuo je magazna vrata. Najednom se nešto u magazi skrha, a na vrata jurne pas, krupan kao tele, i pobjegne između svijeta. Sve bi dobro bilo da nije bilo tuđeg svijeta, iz komšiluka. I tako se proču priča i sađe odmah ujutro do Baščaršije, pa Slinić ne može s mirom među svijet.
Mahmutaga, dobričak i mehak čovjek, zacenuo se od smijeha. Sve ga suze oblile. Jedva je progovorio:
– Bolji ti je dram smijeha, nego tovar suza.
Tuturuza je malo promućkao u glavi, a onda hrabro progovorio, makar se malo i pribojavao da protuslovi uglednom čaršijskom starcu, posljednjem ćehaji abadžijskog {{esnafa(22)}}:
– I jedna suza može nekad vrijediti više od tovara zlata.
– A oklen ti to znaš? – oglasio se prijekorno šeh Meco.
Ako baš hoćete da znate, da vam ispričam.
– Tamam! – pristade Mahmutaga.
Ženskadija koja se spremala čuti neku pjesmu iznenadila se kad se Tuturuza podiže na koljena i poče, upravo kao kakav hodža sa {{ćursa(23)}}, pričati priču koju niko od njih nije bio čuo.
U Bagdadu, u glavnoj džamiji Azamiji, pred džumu bilo je puno svijeta, ali váiz nije došao. Svijet se osvrtao neće li ga opaziti kako ulazi na glavna vrata, da ustane ispred njega na noge, da se razmakne i napravi mu prolaz do ćursa. Ali, nije ga bilo. Bilo je još {{uleme(26)}}, ali njega nije bilo, a nije svakom dano da vâzi. Je li bilo tako udešeno da on taj dan ne dođe pa da se zamoli učeni šejh Musaddik iz {{Kufe(217)}}, koji je tih dana boravio u Bagdadu i upravo bio u Azamiji, da on taj dan vázi, jer je bio nadaleko znan kao učenjak i váiz, ne znam. Kako ne bî stalnog vaiza, nekoliko hodža zamoli šejha Musaddika da im on toga dana provazi. On se malo nećkao, ali ga zamoliše da im barem ispriča o čemu se u posljednje vrijeme priča u Kufi. Napokon pristade i pope se na ćurs.
Svi su u nj uperili oči, a slijepi, i takvih na istoku ima uvijek dosta, pomalo su zakrenuli glavu ustranu da im uho na koje bolje čuju bude okrenuto prema ćursu.
Šejh Musaddik se pomolio Bogu onom dovom kojom se Musa pejgamber obratio Bogu da mu rasprostrani prsa i odriješi čvor s jezika, a onda prešao na začudnu priču o događaju koji se nedavno zbio u Kufi, gdje se naširoko prepričavao.
U Kufi je bio jedan trgovac vrlo bogat, koji je pošteno trgovao, lijepo zarađivao, ugledao sirotinju, davao robu i na veresiju, pozajmljivao i gotovinu bez kamata, a svijet mu se pošteno oduživao i nikad ga niko nije zakinuo, a ni on nikoga. Jednom trgovcu iz Basre dao je na veresiju dosta skupocjene robe i u tome je i umro, a da nije obavijestio ni sina koji je uza nj radio i naslijedio ga.
I taj njegov sin je trgovao, radio, stanovao u očinskoj kući, imao ženu i djecu i dobro živio. Jedno vrijeme je trgovina napredovala, a on, kao otac mu, dijelio, kupovao, zajmao i posuđivao drugima, neki vraćali posuđeno i oduživali se, a neki ga, namjerno ili slučajno, zakidali pa se u dugu zemanu desilo da je spao na najtanje grane. Čak mu se trgovina potpuno ispraznila, kuća ogoljela, pa je došlo vrijeme da nije mogao sebe i svoju kućnu čeljad ni prehraniti.
Smišljao šta da uradi pa odluči prodati kuću ne bi li se time neko vrijeme izdržavao, pa jeda jednom krene posao naprijed. Ali mu se nije dalo dati kuću na telala pa da se javno prodaje. Imao je jednog dobrog prijatelja pa ga poče tražiti da od njega uzajmi nešto malo novca dok ne proda kuću. Tražio ga je po svoj Kufi, a nigdje da ga susretne. Ni kući ga nije bilo. Gladan on, gladna mu kućna čeljad – mora ga naći pa gdje bilo da bilo. Pođe prema džamiji da klanja jer se primaklo vrijeme {{akšama(30)}}, kad ugleda ahbaba kako nosi u ruci somun. Pozdraviše se, a trgovac ga odmah zamoli da mu pozajmi nešto novca dok ne proda kuću, a najprije je njemu nudi da je on kupi. Gladna su mu kućna čeljad, a i on, pa... Postiđen je oborio oči preda se, a prijatelj mu se popipa po džepovima, po pasu, ali kese s novcem nema.
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
– Kakav kupac, kakva kuća? Došao ti kući trgovac koji ti se zadužio kod oca, pa eno sad na tri deve donio blago, sav dug i {{hedije(34)}}. Nije ni znao da ti je otac umro, pa hajde sad ti primi to imáće.
`,
    author: 'Alija Nametak',
    year: false,
    video: false,
    audio: false,
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
    subtitle: 'Zlatna ptica (Odlomci iz romana “Derviš i smrt”)',
    type: essay,
    text: `Svoju priču “o odnosu i sukobu između ideologije i ozlojeđenog pojedinca”, kako je i sam rekao o temi romana, Meša Selimović je prenio na {{derviša(56)}} Nurudina, intelektualca, koji je nakon kratkog ratovanja i prve promašene ljubavi našao utočište u vjeri. Te okolnosti su razlog sukoba, podijeljenosti čovjeka između vjere i slobodnog izbora da odlučuje, između mirenja i pobune, slobode i neslobode – ukratko, svega onoga što je pisac osjećao kada je saznao da je izgubio brata pod neshvatljivim okolnostima. Odlomci su uzeti iz drugog dijela romana i govore o susretu mladog derviša sa dječakom koji ima samo majku i slijepu baku.
*
Biće nesrećan koji svoju dušu okalja.
Jedno dijete je govorilo o svome strahu, davno. Ličilo je na pjesmicu:
Na tavanu
ima jedna greda koja udara u glavu,
ima jedan vjetar koji lupa kapkom,
ima jedan miš koji viri iz ćoška.
Bilo mu je šest godina, veselim plavim očima gledao je zadivljeno u vojnike, i u mene, mladog {{derviša-askera(58)}}, bili smo drugovi, i prijatelji, ne znam da li je ikog u životu toliko volio, jer sam ga dočekivao radosno i nisam pokazivao da sam stariji.
Ljeto je bilo, smjenjivala se kiša i vrelina, stanovali smo u čadorima, na ravnici punoj komaraca i kreketa žaba, sat hoda od Save, uz nekadašnji han, gdje je mališan stanovao s majkom i poluslijepom bakom.
Jednom, dok sam sjedio u polju, na trulom panju, u gruboj slakovini do koljena, sam, zaglušen cikom zrikavaca pod vrelim suncem (uvijek je nešto cičalo, pištalo, pjevalo na ovoj ravnici), smućen onim što sam čuo od vojnika o mladoj ženi u hanu, vidio sam dječaka kako je zastao u travi, utonuo gotovo do grla. Javio mi se s povjerenjem. Bili smo već poznanici.
Puštao sam da me vodi svojim djetinjim putevima, da razgovaramo djetinjim jezikom, da mislimo na djetinji način, srećan kad mi je to uspijevalo potpuno, jer sam osjećao da sam tako obogaćen. Pravili smo svirale od trave sabljarke i uživali u oštrom piskavom zvuku koji je nastajao kad je zeleno sječivo sjeklo vazduh iz usta. Pažljivo smo djeljali zovino drvo, izbacujući vlažnu {{srčiku(61)}}, da dobijemo šupljinu punu skrivenih glasova. Nizali smo u vijenac plave i žute barske cvjetove da ih odnese majci, poslije sam ga nagovorio da kiti topoline grane, da ne bih mislio ništa ružno.
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
Na tom tavanu, gdje sam tražio samoću, saznavajući se, i pribježište od otvorenih širina zavičaja, iako sam ga volio više nego majku, mislio sam često o zlatnoj ptici iz neninih priča. Nisam znao šta je ta zlatna ptica, ali dok sam slušao kako pada kiša po krovu od {{šindre(62)}}, i otvoreni kapak lupa na vjetru, i bezbroj očiju viri iz ćoškova, zamišljao sam kako pronalazim svoju zlatnu pticu, kao junak iz neninih žubornih kazivanja, znajući da se tako, na neki čudan, neobjašnjiv način, ostvaruje sreća.
Zaboravio sam na nju docnije, život je raspršio snatrenja mladosti, moguća u vrelom zamišljanju bez prepreka, u slobodi željenja bez granica, rođena u neiskustvu. A javila se ponovo, kao podsmijeh, kad mi je bilo najteže.
Bio jednom jedan dječak, u očevoj kući, nad rijekom, koji je sanjao zlatne snove, jer ništa nije znao o životu.
`,
    author: 'Meša Selimović',
    year: false,
    video: false,
    audio: false,
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
    id: 6,
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
            On se nasloni koljenima na {{pramac(64)}}, a povraz načas ponovo prebaci preko leđa. Sad ću se odmoriti dok je ona na vanjskoj polovini kruga, a kad dođe bliže, ustat ću i vući je, odluči on.
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
          `,
    author: 'Ernest Hemingvej',
    year: false,
    video: false,
    audio: false,
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
    id: 7,
    title: 'Umjetnička književnost - Roman',
    subtitle: 'Legenda o Ali-paši',
    type: essay,
    text: `Taj hamalin sa svojim užetom zabačenim preko pokrpljenog fermena, taj Alija zvan “leptir”, zato što je dnevno i po desetak puta obilazio cijelu čaršiju, bio je tada u tihom i lijepom šeheru svuda poznata i rado viđena osoba. Uvijek veseo, spreman na šalu, uvijek brz za ma kakav posao. Mnogi bi čaršinlija kuckajući oznojen u svoju bakrenu posudu, ili šijući s mukom debeli kožni {{ćurak(39)}}, govorio: “Baš je Leptir sretan! – On voli sunce.”
A i volio ga je Alija više nego časti ili dobro jelo, volio skoro koliko i Mehaginu Almasu, djevojku za kojom je čeznutljivo gledao kao gladnik u izlog najfinijih poslastica...
Voljeti sunce... Voljeti ga ljubavlju, kako je to samo u ona vremena bilo moguće! Kad ono veselo zasja na svodu, Alija bi, makar i ne zaradio toga dana ništa, odlazio više šume nad Kovačima (gdje su danas velike i lijepe kuće), na čistinu, legao na ledinu, a svoje lijepo lice okrenuo suncu, zaklopio oči pa {{snatrio(41)}}. Vilinske bajke izlazile mu pred oči. Bajke iz sunčanih zraka koje su i preko spuštenih kapaka tim očima godile svojom toplinom i čistoćom... Ležeći tako hamal bi Alija doživljavao – ne, proživljavao – krasne trenutke, sate, dane, godine, vjekove... negdje daleko, u carstvu priča, u carstvu svoje bujne mašte koju je tako bila razbuktala čvrsta vjera i vječiti optimizam njegove vesele duše. A sunce bi svog prijatelja grijalo, grijalo blaže i bolje nego druge i razgovaralo s njime. Jest, baš s tim Alijom hamalom, koga su zbog njegova lutanja nazivali srednjovjekovni čaršinlije “sretnim leptirom”.
Pričalo bi sunce Aliji priču o postanku svijeta, o nabiranju brda, o dubini {{denjiza(42)}}, o kulama koje se gordo uzdižu negdje iznad oblaka, o hazreti Hidru, vječito živome {{evliji(44)}}, dobrome mudracu, koji svima pomaže. Pričalo bi mu sunce preko svojih toplih zraka o nježnosti hurija u {{dženetu(46)}}, o slastima bogatstva i raskoši u Stambolu, o pješačenju brdima i vjetru samumu u pustinji, o blagoj sjenci palminih listova, o karavanama kamila koje vode zakukuljeni Arapi, ili o životu oblaka, ljubavi zvijezda, raskoši duge... Slušao bi Alija te priče, slušao i uživao, a osmijeh sreće igrao bi na njegovim poluotvorenim usnicama, ispod svileno plavih brkova. Osmijeh kakav nikad neće zatitrati oko usta najbogatijih Sarajlija: Mehage kazaza, Omerage kazandžije, Jefte {{abadžije(48)}}, Joze kujundžije ili gazde Ješue {{sarafa(50)}}...
I iz takve jedne priče sunca isplela bi Alijina mašta čudne bajke, svijet patuljaka i divova, svijet djevojaka najljepših glasova, svijet pjesme i ljubavi, ili pak svijet junaka, među kojima je on, razumije se, najjači...
Zar nije bio Alija sretan? Sretan sa svojim užetom, sirotinjom i bezbrižnošću, s čvrstom vjerom i svojim suncem?...
Znali šeherljani za ta njegova maštanja, koja su nazivali hava-muhabetom, razgovorom sa zrakom, ali su baš zbog toga i voljeli svog Leptira. Možda je baš radi toga i bio mekan i blag u postupanju s ljudima. Možda ga je baš ta ljubav prema suncu odgojila u čovjeka koji nikom ne bi rekao ni “po tamo se”, iako je bio snažniji i razvijeniji od svih šeherskih {{ukoljica(51)}}. Ta ga je ljubav nekako uzdizala, odvajala od ostalih hamala, mada je on bio izvrstan drug i uvijek spreman pomoći nekom starijem nosaču. Znao je on po čitav sat gurati kolica uza svog druga Muradifa bez ikakve nagrade osim onog: “Bog ti dao”. Ta ga je ljubav znala odvući od posla, istrgnuti iz svagdašnjice i pozvati na ledinu.
I toga proljetnog dana, baš kad je stigao do Miljacke, u {{Donje(52)}} {{Tabake(52)}} da se među kožarima raspita za posao, Alija je pogledao u nebo. Njegov ga je prijatelj zvao odozgor nasmijan, pozvao ga je u travu, u prirodu, da mu priča... Oh, kako je lijep i veseo taj njegov prijatelj danas. Kako se iz njegova sjaja širi blaga toplina i daje miris jorgovanu, žubor Miljacki, djevojačkoj pjesmi ljepotu, a ljudskom radu volju i veselje... Zato Alija pohita iz Tabaka na svoju ledinu, premda ništa nije bio zaradio...
Uzalud je za njim skakutao hrapav glas kožarskog majstora hadži-Edhema:
– Leptire, da mi izneseš s vode one razapete kože!
– Ode on na ledinu – kroz smijeh je hadžiji doviknuo susjedov šegrt Abdulah.
– Ah, da Bogdo mogu i ja... Nejse... doći će koji drugi hamal, koji je samo hamal, a ne i sretni Leptir.
Kada je Alija stigao u slobodu, tamo izvan gradskih bedema, tamo daleko od ljudi i graje, legao je na ledinu, ruke skupio pod glavu, ispružio noge, a udisao svježi šumski zrak mirisav od rascvalih breza... A sunce ga peklo, milovalo...
Ovaj put je Aliji došla čudna misao, bajka tako smjela da se uplašio i trgnuo se sav naježen.
Dok mu je visokim čelom plesala mekana kosa, oslobođena {{turbana(53)}}, koji mu je pao u travu više glave, dok su mu licem skakutale i igrale sjenke šiblja, Alija je ležao i snatrio... Nije osjetio kako mu kroz poderanu staru firalu na desnoj nozi viri prst. Nije osjetio kako mu na okrpljenim čakširama mile bube, niti je čuo sviruckanje i zujanje muha oko sebe... On je bio u polusnu, sretan, sretan... A smjela misao vezla je nit po nit nov život po njegovu mozgu...
– Eh, da sam paša...
`,
    author: 'Enver Čolaković',
    year: false,
    video: false,
    audio: false,
    questions: [
      {
        title: 'Odaberi tačan odgovor',
        question: 'Hamalin Alija je dobio nadimak Leptir zato što je…',
        answers: [
          {
            title: 'kada bi ga sunce izmamilo, lutao izvan grada',
            right: true,
          },
          {
            title: 'bio lijep i vitak mladić',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Alija je bio sretan jer je bio…',
        answers: [
          {
            title: 'sanjar',
            right: true,
          },
          {
            title: 'bogat',
            right: false,
          },
        ],
      },
      {
        title: 'Alija je bio dobar drug jer je uvijek…',
        question: 'Slikajući nesklad između ribareve snage i težine borbe sa ribom, pisac se poslužio stilskom figurom koja se zove…',
        answers: [
          {
            title: 'kontrast, simbol',
            right: true,
          },
          {
            title: 'bio skroman kad je naplaćivao svoju pomoć',
            right: false,
          },
        ],
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Leptirov osmijeh „nikada neće zatitrati oko usta najbogatijih Sarajlija jer…',
        answers: [
          {
            title: 'su bogate Sarajlije prezirale Leptira.',
            right: false,
          },
          {
            title: 'bogate Sarajlije nisu imale sposobnost da uživaju u malim stvarima kao što je ljepota sunčanog dana.',
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
            Utakmica, kako da ne! I jeste mi neka utakmica. Ako se nađeš na onoj strani gdje su sve glavne dase i {{asovi(70)}}, onda jeste, u redu – to priznajem. Ali ako se nađeš na drugoj strani, gdje nikakvih dasa nema, onda kakva je to utakmica? Nikakva. Nema utakmice. “Da li je Dr. Termer napisao pismo tvojim roditeljima?”, upitao me je stari Spenser.
            “Rekao je da će im napisati u ponedjeljak.”
            “Jesi li ih ti obavijestio?”
            “Nisam, gospodine, nisam ih obavijestio jer ću ih vjerovatno vidjeti u srijedu uveče, kada dođem kući.”
            “Pa šta misliš, kako će primiti tu novost?”
            “E pa... mislim da će ih ona prilično uzrujati”, rekao sam. “Hoće, zaista. Promijenio sam do sada, mislim valjda četiri škole.” Odmahnuo sam glavom. Imam već neku takvu naviku. “Ljudi moji”, rekao sam. Često govorim “ljudi moji”, prilično često. Djelimično zato što mi je rječnik vrlo siromašan a djelimično zato što se ponekad ponašam kao da sam mlađi nego što jesam. Imao sam tada šesnaest, sada imam sedamnaest, ali ponekad se ponašam kao da imam negdje svega trinaest godina. To je zaista ironija jer sam visok 189 centimetara a u kosi imam dosta sijedih vlasi. Imam, zaista. Čitava jedna strana – desna strana – puna je miliona sijedih vlasi. Imam ih još od djetinjstva. Ali pored svega toga ponekad se ponašam kao da imam samo dvanaest godina. Svi to kažu, naročito moj otac. To je dijelom istina, priznajem, ali nije u cijelosti istina. Ljudi uvijek misle da govore apsolutnu istinu. Meni je to potpuno svejedno, osim što mi ponekad ide na živce kada počnu da me upozoravaju da se ponašam onako kako to dolikuje mom uzrastu. Ponekad se ponašam kao da sam mnogo stariji nego što jesam, zaista, ali to ljudi nikada ne primjećuju. Ljudi nikada ništa ne primjećuju.
            Stari Spenser počeo je ponovo da klima glavom. Počeo je također da čeprka po nosu. Radio je to tako da je izgledalo kao da ga samo gnječi, dok je ustvari ugurao u nozdrvu čitav palac. Uvjeren sam da je smatrao da je to sasvim na mjestu, s obzirom na to da u sobi nije bilo nikoga osim mene. Meni je to bilo svejedno, iako je prilično neprijatno posmatrati nekoga kako čeprka po nosu.
            Zatim je rekao: “Imao sam čast da se upoznam sa tvojim ocem i majkom kada su prije nekoliko nedjelja došli da malo porazgovaraju sa Dr. Termerom. Silni su to ljudi.”
            “Da, jesu. Veoma su dobri.”
            Silni. Evo riječi koju iz dubine duše mrzim. Tako lažno zvuči. Mogao bih povraćati svaki put kada je čujem.
            Iznenada je stari Spenser poprimio držanje kao da je pronašao nešto vrlo zgodno da mi kaže, nešto oštro kao igla. Zavalio se dublje u fotelju i nekako se kao promeškoljio. Bila je to, međutim, lažna uzbuna. Šta je uradio, samo je podigao Atlantic Monthly sa krila i pokušao da ga baci na krevet, pored mene. Promašio je. Za svega nekoliko centimetara, ali svejedno je promašio. Ustao sam, podigao list i položio ga na krevet. Tada sam, iznenada, osjetio ludačku želju da pobjegnem nekuda dovraga iz te sobe. Mogao sam osjetiti da mi se sprema strašna lekcija. Samo po sebi to mi ne bi mnogo smetalo, ali nešto nisam bio raspoložen da slušam nečije propovijedi, mirišem Viksove kapljice za nos i gledam starog Spensera u pidžami i {{bademantilu(71)}}, i sve to odjednom. Nisam, zaista.
            Stvar je, međutim, već počela. “Šta je to s tobom, mladiću?”, rekao je stari Spenser. Rekao je to prilično strogo, bar za njega. “Koliko si predmeta imao u ovom polugodištu?”
            “Pet, gospodine”.
            “Pet. A iz koliko si predmeta pao?”
            “Četiri.” Pomjerio sam malo stražnjicu na krevetu. Bio je to najtvrđi krevet na kome sam ikada u životu sjedio. “Prošao sam iz engleskog”, rekao sam, “jer sam Beowulfa i Lord Randal My Sona i sva ta čuda radio još dok sam bio u školi u Hutonu. Hoću da kažem, iz engleskog nisam morao gotovo ništa da radim, osim da s vremena na vrijeme napišem poneki sastav.”
            On nije čak ni slušao. On gotovo nikada nije slušao šta mu čovjek priča.
            “Oborio sam te iz istorije zato što nisi znao apsolutno ništa.”
            “Znam to, gospodine. Svjestan sam toga. Vi tu niste mogli ništa učiniti.”
            “Apsolutno ništa”, ponovio je, još jednom. Takve stvari dovode me do ludila – kad neko dva puta ponavlja jedno te isto, iako je već čuo priznanje. Zatim je rekao isto i treći put. “Ali apsolutno ništa. Duboko sumnjam da si otvorio udžbenik i jedan jedini put u toku čitavog polugodišta. Jesi li? Reci mi istinu, mladiću.”
            “E pa... malo sam kao zavirio u njega nekoliko puta”, odgovorio sam. Nisam želio da povrijedim njegove osjećaje. Bio je lud za istorijom.
            “Zavirio si, eh?”, rekao je veoma {{sarkastično(72)}}. “Ah, tvoj ispitni zadatak je tamo gore na ormaru. Na vrhu one gomile papira. Donesi ga, molim te, ovamo.”
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
          `,
    author: 'Džerom D. Selindžer',
    year: false,
    video: false,
    audio: false,
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
            Poslije stotinu dana “Otkriće” će zamrijeti. Svi članovi posade otići će u hibernaciju; samo će ključni sistemi nastaviti da dejstvuju, a nad njima će bdjeti neumorni elektronski mozak broda. Letjelica će nastaviti da kruži oko Saturna po orbiti koja će u toj mjeri biti određena da će ljudi uvijek tačno znati gdje da potraže svog planetnog izaslanika, kako sada tako i kroz hiljadu godina. Ali kroz samo pet godina, prema sadašnjim planovima, tamo će prispjeti “Otkriće II”. Čak i ako do tada protekne šest, sedam ili osam godina, usnulim putnicima biće svejedno. Za sve njih časovnik će stati, kao što je već stao za Vajtheda, Kaminskog i Hantera. Ponekad je Boumen, kao zapovjednik “Otkrića”, zavidio svojoj trojici besvjesnih kolega u zamrznutom spokoju {{hibernakuluma(73)}}. Njih uopšte nije morila dosada, niti ih je opterećivala odgovornost; sve dok ne stignu do Saturna, spoljni svijet uopšte neće postojati za njih.
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
            Mozgao je oko toga neko vrijeme. Ako je stvarno na orbiti oko Saturna, šta se dogodilo tokom svih onih mjeseci od kako je krenuo sa Zemlje? Ponovo je počeo da se pita da li pati od {{amnezije(75)}}. {{Paradoksalno(76)}}, sama ova pomisao ga je ospokojila. Ako se mogao sjetiti riječi “amnezija”, onda mu se mozak jamačno nalazi u dobrom stanju...
            Ali još nije znao gdje je, a govornik sa druge strane veze mora da je potpuno razumio njegovu situaciju.
            “Ne brini, Dejve. Ovdje Frenk Pul. Posmatram tvoje srce i disanje – sve je savršeno normalno. Samo se opusti – polako. Sada ćemo otvoriti vrata i izvući te napolje.”
            Blaga svjetlost ispuni komoru; spram ulaza koji se sve više širio, on razabra obrise pokretnih obličja. I upravo tog časa sjećanje mu se potpuno povrati i on shvati gdje se, u stvari, nalazi. Iako se bezbjedno vratio sa najdaljih međa smrti, bio je odsutan samo nedjelju dana. Kada bude izašao iz {{hibernakuluma(73)}}, neće ugledati hladno Saturnovo nebo; ono se i dalje nalazilo više od godinu dana u budućnost i milijardu milja daleko. Još je bio u odjeljenju za obuku u Središtu za svemirski let u Hjustonu, pod vrelim Suncem Teksasa.
            `,
    author: 'Artur Klark',
    year: false,
    video: false,
    audio: false,
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
    text: ` “Otok plavih {{dupina(77)}}” je roman o stvarnom događaju iz života jedne Indijanke koja je na pustom ostrvu sama provela 18 godina, od 1835. do 1853. godine. Ovaj odlomak govori o njenom povratku u civilizaciju.
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
            Čovjek podiže ruku i pokaza prstom u {{dragu(80)}}, a zatim mi napravi neki znak u zraku, kao oblik broda.
            Na to klimnuh glavom i pokazah prstom u tri košare koje sam bila postavila pokraj vatre, pa napravih znak da ih uzimam sa sobom na brod. A i krletku u kojoj su bila moja dva ptića.
            Još smo se narazgovarali rukama prije nego što ćemo otići, a i ona dvojica su nešto govorila među sobom. Svidjela im se moja ogrlica, pa vidrina koža i suknja od kormoranova perja, koja se blistala na suncu. Ali čim smo došli na žalo gdje im je bio tabor, onaj čovjek koji je najviše govorio odmah je rekao ostalima neka mi naprave haljinu.
            Znala sam da je to rekao jer je jedan od njih stao preda me i nekom uzicom mjerio mi visinu od vrata do peta i širinu ramena.
            Haljina je bila plava. Sastavili su je od dva para hlača, onih istih kakve su nosili bijeli ljudi. Hlače su razrezali na komade, pa je jedan od njih sjeo na kamen i one komade opet sastavljao nekom bijelom niti. Imao je dug nos, baš kao igla kojom je baratao. Sjedio je cijelo popodne na kamenu, a igla mu išla gore-dolje, unutra-van, blistajući se nа suncu.
            Tu i tamo bi pridizao haljinu i klimao glavom, kao da je zadovoljan. Klimala sam i ja kao da sam zadovoljna, ali nisam bila. Radije bih ostala u svojoj suknji od kormoranova perја i ogrtaču od vidrina krzna, koji su bili mnogo ljepši od onoga što mi je on pravio.
            Haljina me pokrivala od vrata do stopala, a nije mi se sviđala ni zbog boje ni zato što me grebala. I bilo mi je vruće u njoj. Ipak sam se nasmiješila, strpala suknju od kormoranova perja u košaru, da je nosim ondje preko mora, u neko doba kad oko mene ne bude ljudi. Brod je ostao u Koraljnoj dragi devet dana. Bio je došao po vidre, ali vidri nije bilo. Zacijelo je ipak bilo ostalo još nekih koje su pamtile {{Aleute(81)}}, jer onog jutra nije nijedne bilo na vidiku.
            Znala sam kamo su bile otišle. Bile su otišle do Visoke hridi, ali kad su mi ljudi pokazali oružje koje su ponijeli da bi njime ubijali vidre, zavrtjela sam glavom i pravila se da ih ne razumijem. Pokazivali su u moje vidrino krzno, a ja sam svejedno vrtjela glavom.
            Onda sam ja njih upitala za brod koji je prije mnogo godina bio odveo moj narod, pravila sam znak broda i pokazivala na istok, ali me oni nisu razumjeli. Tek kad sam stigla u misiju Santa Barbare i upoznala oca Gonzalesa, od njega sam doznala da je onaj brod bio potonuo u nekoj velikoj oluji malo nakon dolaska u njegov kraj i da na čitavom moru ondje nije bilo drugoga broda. To je bio razlog što se bijeli ljudi nisu vratili po mene. Isplovili smo desetog dana. Tog jutra nebo je bilo plavo, a od vjetra ni daha. Krenuli smo ravno prema suncu.
            Dugo sam stajala i gledala Otok plavih dupina. S vida mi je posljednji iščeznuo Visoki rt. Mislila sam na Tontua koji ondje leži pod kamenjem svakakvih boja, a i na Won-a-nee koja je tko zna gdje, i na malu crvenu lisicu koja bi mi uzaludno grebla po ogradi, i na svoj kanu skriven u špilji, i na sve one sretne dane.
            Iz mora su izranjali dupini i plivali ispred broda. Ligama su tako ujutro plivali, vezući mnoge pjenušave preplete. Moje su ptičice cvrkutale u krleci, a kraj mene jе sjedio Rontu-Aru.
            `,
    author: 'Skot O’ Del',
    year: false,
    video: false,
    audio: false,
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
            Норвежанин живи као и његова бреза, то тако карактеристично и тако симболично дрво целе његове земље. У јужним и западним крајевима она је силно дрво, лепша можда него игде на свету. А према сјеверу, на {{фјеловима(86)}}, увученим далеко од мора и од топле струје, по оним страшним висоравнима које су често мокар, често суви песак, а понајвише снег или раздробљени камен, бреза се грчи, савија, тањи, смањује се од дрвета до жбуна, од жбуна до пузаве богаљасте биљке, хвата се за камење да је ветрови не покидају, рије кроз песак који је затрпава, болује, мучи се, и чак тамо иза Хамерфеста умире са оном чудном, ућутканом сумњом северњака кога добри бог целог века кињи...
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
            `,
    author: 'Исидора Секулић',
    year: false,
    video: false,
    audio: false,
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
    subtitle: '{{Некролог(114)}} једној чаршији',
    type: essay,
    text: `Годину, мјесец и дан више и не памтим.
           Била је зима...
           Било је то давно...
           Била је она права, стара сарајевска зима са много снијега и неке чудне бијеле тишине. И била је ноћ. Поодмакло глухо доба над смиреном котлином око Миљацке.
           Не знам колико је било сати. Ни кад ме је мајка пробудила, ни кад сам бунован погледао у прозоре нисам помислио на вријеме.
           У завијаним окнима нашег прозора горио је град. Горјело је читаво Сарајево.
           Наши прозори били су окренути према {{Имарету(90)}}. Са наших прозора видио се велики дио {{Сарача(91)}}, шиљати оџаци на медреси Куршумлији, мали сарајевски дућани {{Сефарда(93)}}, {{Ташлихан(94)}}, три минарета, стара синагога и дио зида и чесме пред Беговом џамијом.
           Те ноћи све је блистало у топлој позлати огња. Сокаци су били пуни буновног свијета.
           Сви смо трчали према буктињи која нас је мамила и омамљивала.
           Пламен је надвисио старе јабланове, минарета и смеђу сахат-кулу.
           Те тихе зимске ноћи горио је Колобара {{хан(96)}}.
           Дим је био пун мириса штављених брављих кожа.
           Можда се ништа не усијече тако јасно у памћење као неки велики пожар у ноћи.
           Док сам цртао старца у лијевом углу цртежа, сјетио сам се старог аџе кога сам посљедњи пут видио те ноћи.
           Аџо је имао смијешан мали дућан у једном ћошку старог хана. Његов дућан више је личио на повећи сандук за шећер или неко лимено посуђе него на радњу у којој је романијским сељацима хамајлијама и чудотворним записима истјеривао зле духове, ограме, демоне и шејтане. Осим дивита и неколико пожутјелих старих {{ћитаба(101)}}, који су изгледали као испуцани црепови са каквог заборављеног турбета, више ничега није ни било.
           Можда је такав некада давно био и дућан онога Мула Мустафе Башескије, мудрог и веселог хроничара старих сарајевских прилика и улица.
           Башескије, који се подједнако молио за спас душа и оних који гоне и оних који су гоњени.
           Аџо је стајао те ноћи погурен и нијем. Читаве те ноћи аџо је шапутао неку дугу спасоносну молитву.
           Добрих духова ноћас није било.
           Ватра је горјела читаве дуге зимске вечери.
           Ватра је прогутала чађаве таване и {{диванхане(102)}}, јадна имања сиромаха, читав један инвентар фукарлука и туге. Лучеви диреци пуцали су као рамазанске {{бешчеталаме(104)}}.
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
           `,
    author: 'Зуко Џумхур',
    year: false,
    video: false,
    audio: false,
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
        ],
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
  {
    id: 13,
    title: 'Umjetnička književnost – Putopis',
    subtitle: 'Održa se kao na Drini ćuprija',
    type: essay,
    text: `U jednoj narodnoj pjesmi ima stih:
            “Kad prebrodi Drinu valovitu,
  stade gazit’ Bosnu {{kalovitu(115)}}.”
            U ovom prvom stihu pjesnik je apsolutno pogodio, jer istina je da je Drina jedna voda i valovita i plahovita. Pa je valjda otuda i nastala priča: kako je neka djevojka, koja je bila nesrećna u svojoj ljubavi, od svih voda našla da je Drina najdublja, i svoju nesrećnu ljubav prekratila ovako: “Savi oči pa u Drinu skoči.“
            Tu gdje je danas Višegrad – nekad se preko Drine prelazilo splavom; mora da je iznad vode bila opružena žica za koju je dolje bio privezan splav – i ljudi tako prelazili sa jedne na drugu stranu, uz plaćanje, naravno, lađarine. Ostala je priča – a može biti da je tako i bilo: da su nekakvim splavom, ili nekakvom lađom, na tom mjestu, gdje je Višegrad, prevezli nekad jadno dijete iz nedalekog sela Sokolovića, koje će kasnije – pošto se odškolovalo u Carigradu, odraslo i dobilo visoke činove, postati i jedan od carskih vezira, onaj koji je tri cara služio, a zvao se Mehmed-paša Sokolović.
  Šta je sve spadalo u životno djelo ovog paše, čiji je vijek trajao 73 godine, sigurno su zabilježili hroničari iako jesu – onda bi na čelo svih njegovih djela svakako spadala ćuprija na Drini. Zna se da to svoje veliko djelo – u svom dalekom rodnom kraju, u Bosni, zemlji kalovitoj, a na njenoj rijeci Drini valovitoj, nije vidio, jer umro je ubrzo – nisu bile prošle ni dvije godine od izgradnje mosta na Drini. Umro je od ruke svoga zemljaka – nekakvog šejha iz tekije u Novoj Kasabi; dakle, od čovjeka koji je bezbroj puta prelazio njegovim mostom – pa i onda kad je pošao u Carigrad sa namjerom da ubije pašu. Ubio ga je pred džamijom – kad je paša išao na molitvu, i to tako što mu je – uz uobičajeno {{metanisanje(117)}}, pružio nekakvu molbu ljudi svoga kraja da je pročita, i dokle je vezir čitao molbu, šejh se dotle poslužio nožem.
  Zna se da je mnogo građevina ostalo iza svoga velikoga vezira, a najveća i najljepša je ova na Drini – most kakav ni na jednoj vodi u carevini – ni do tada ni poslije, nije izgrađen.
  Odgovara vodi na kojoj je – jer je Drina, takva kakva je, tražila upravo i takav most nad sobom. Na jedanaest je lukova. Od kamena je – i to ne samo tesanog, nego i glačanog, i željeznim mačkama utvrđenog, a željezo zaliveno olovom: da se most održi, da vječno traje – i već traje blizu četiri stoljeća.
  Stajao sam bezbroj puta na tome mostu i mislio na vrijeme: prolazilo je kao dolje pod njima Drina, a on ostajao... ostao je i onda kad ga je Drina za više od metar i po preplavila – godine 1896, poslije čega će u narodu ostati izreka: “Održa se kao Most na Drini!“
            Ispričane su o njemu priče i legende. Zapisan je u istorijama i hronikama. Napisane su o njemu knjige. Kao što to i biva o svemu velikom, što uzbuđuje ljudsku maštu pa će tako jedna priča reći: da su u ćupriju uzidani brat i sestra: Stojan i Stojanka, kao cijena građevini, jer ako hoćeš nešto veliko, moraš ga žrtvama otkupiti. A najveća žrtva i cijena ljudski je život, pa se i tražila takva cijena. Jer – sve što bi Rade neimar danju sagradio, to bi vila obnoć porušila.
  Ta ista vila činila je to i sa Skadrom – “dok nešto nije progovorilo: da se u zid uzida ljudski stvor – i neimar će uzidati mladu Gojkovicu”. Ovdje na Drini uzidaće brata i sestru. A i tamo i ovamo – mladost! Jer mladost i jest simbol vrijednosti; ono što je najdraže – i na čemu svijet ostaje.
  Putnici i prolaznici staće i diviće se mostu na Drini; a koliko ih je ovuda prošlo za njegovih do danas – 395 godina! Prolazile su njim vojske i karavani, bogati i siromašni, siti i mahniti; osuđeni, protjerani, prognani; prolazili su učeni, umni a i ludi; srećni i nesrećni; mladi i stari – a to će reći cio jedan bijeli svijet, onaj što je hodio džadama – jer ovaj Most i jest dio džade; dio puta – onaj nad vodom, na drugi način jedva prolaznom, jer je to Drina! Ona koja nadođe – ”... od brega do brega!“
            Nema na njemu šara i ukrasa – nego ima nešto silno i moćno, tako kao da je karavana zagazila u vodu, tu se skamenila – i ostala... U poretku jednom skladnom, a preko vode – od jedne do druge njene obale.
  Onaj što ju je zidao, nije nam svoje ime ostavio, pa pred sobom gledamo djelo – a ne znamo ime njegovog tvorca. Mora da je aršinom mjerio svaki kamen, svaki luk, svaki stub, svako okno – svaki prst na mostu, jer tu je sve skladno, sve izmjereno, sve po aršinu. Pa je i kod popravaka tako mjereno – sve na metar i na santimetar, kako bi sve bilo kao što je i nekad bilo – prije gotovo četiri stoljeća. Popravljan je više puta – jer nijedan od ratova nije prošao a da ovu starinu nije rušio; i zanimljivo je da su uz obadva velika rata bili porušeni isti lukovi, isti stubovi. To jest: ono što nisu mogli toliki povodnji i toliko vrijeme, mogla je ruka rušioca. Porušeni lukovi ličili su tada na kakve pećine – i bila je to tužna slika; stajao sam tada na obali i gledao je. Ni Drina više nije bila lijepa, jer to dvoje – na ovom mjestu, kad se nađu jedno bez drugog, nije više lijepo; i sve je ličilo na srušen hram, na pustoš.
  Danas su te rane zacijeljene, i jedva se poznaje gdje su i bile, ili se nikako i ne poznaje, nego je onako kao i nekad – kad je ovu ćupriju, ispustivši aršin iz ruku, ostavio za sobom njen graditelj. Bilo je to godine 1577. Davno i davno! Mnogo je od tada niz Drinu prošlo vode, mnogo ljudi sjelo na “sofu” – i odatle, sa sredine mosta, sa visine od oko petnaest metara iznad vode, gledalo dolje niz Drinu, i gore uz Drinu, i pred sobom grad Višegrad. A ako je neko umio, mogao je tu odmah prema “sofi ”, a na ploči mramornoj, čitati ovakav natpis na mostu: “Gospodin Mehmed-paša, mudrac svog vremena, potrošio je svoj imetak na {{zadužbine(123)}}. Niko neće reći za imetak koji se troši na zadužbine, da je rasipanje. Bio je svjestan da su svakom njegova djela najbolje potomstvo. Podigao je most, kojem na svijetu nema ravna. Nemoj reći da je propao imetak, koji se troši na ovakva djela.“
  `,
    author: 'Ćamil Sijarić',
    year: false,
    video: false,
    audio: false,
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
    video: false,
    audio: require('../assets/sounds/pronunciation/14.aac'),
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
    `,
    author: 'Ruben Dario',
    year: false
  },
  {
    id: 15,
    title: 'Umjetnička književnost – Lirske pjesme',
    subtitle: 'Kiša u Sarajevu',
    video: false,
    audio: require('../assets/sounds/pronunciation/15.aac'),
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
`,
    year: 'Wuppertal, marta 2008.',
    author: `Ivica Vanja Rorić`,
  },
  {
    id: 16,
    title: 'Umjetnička književnost – Lirske pjesme',
    subtitle: 'Tarih o gradnji mosta u Mostaru',
    type: essay,
    text: `Ćupriju podiže koja podsjeća na lûk dûge
           Allahu moj! Ima l’ na svijetu po ljepoti drûge?
           Jedan je {{Derviš(56)}} zadivljen stao i rekao riječi:
           Ostavit ćemo ćupriju a mi ćemo preći.
           `,
    author: `Derviš-paša Bajezidagić`,
    year: 'Godine 974. (1576–77)',
    video: false,
    audio: false,
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Tarih je natpis sa datumom građenja mosta, džamije, knjižnice i sličnih građevina. Pisan je u obliku rečenice ili  .',
        answers: [
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
        question: 'U doba osmanske vladavine u Bosni javljaju se pjesnici i prozni pisci koji su stvarali na orijentalnim jezicima, najviše na turskom. Među njima najpoznatiji je pisac sarajevskog Ljetopisa koji se zvao  .',
        answers: [
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
    id: 17,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Шпијун',
    text: `Дошавши у уред, стари подворник Коста прогура се кроз гомилу сељака, који су збијени и притијешњени стајали у ходнику и живо се препирали, уљезе у своју тијесну канцеларију, збаци са чупаве главе улупљени и замашћени шешир у прикрајак, и окренувши се на пети, узе некакву прљаву, разгуљену крпетину, па лагано, гегуцкајући, оде у предстојникову собу.
           – Ух!... Опет запрзнио!... – прогунђа промукло, испод ока гледајући по соби и мргодећи се. – Опет!
           Па, као размишљајући би ли или не би радио, лијено поче отирати прашину са књига и столца, поче размјештати некакве списе и хартије што су били разбацани по столу и око стола, поче тражити остатке цигара по тешким дубоким пепеоницама и трпати их у џеп.
           Пошто је све свршио, лагано оде до прозора, подигне танке завјесе и провири напоље. Уживао је да га они са улице виде како свако јутро провирује из предстојникове собе. Вјеровао је да му сви завиде на томе.
           Затим се опет врати и, по обичају, сједе на предстојникову столицу. Рашчупа неколико остатака од предстојникових цигара и замота у нов цигар. Запали.
           – Лијепо ли је овако, пост му љубим – уздахну, пребацивши ногу преко ноге и одбијајући димове. – И лако ли је!...
           Ослухнувши мало, брзо скочи са столице и нешто поче чистити, трљати, распремати.
           – Ево предстојника! – викну узбуђено, врпољећи се. – Ево га!...
           Чим предстојник уљезе, Коста бржебоље притрча, прихвати му штап и шешир, и, {{токорсе(143)}}, поче чистити капут као да стреса прашину, макар што је капут био чист и никакве прашине на њему није било... Предстојник, одмакавши се, удари дланом о длан, протрља руке, поправи цвикер, завуче руке у џепове и звиждућући поче шетати по соби.
           – А шта ти чекаш – пискутљиво запита Косту, који је тих, скроман, погурен стајао покрај врата и са страхом га гледао.
           – Шта ћеш?
           – Чекам шта ће ваша милост заповидјети – одговори Коста шапатом, једном руком грчевито теглећи пеш од капута и лукаво се смијешећи.
           – Не требаш ми...
           Коста се скупи, преви и, дубоко се поклонивши, прихвати за штекавицу на вратима.
           – Стој! – викну предстојник изненада, исправљајући се и заповједнички дижући руку. – Стани! Коста стаде.
           – Знаш ли да те ја волим? – запита предстојник ласкаво, искрививши главу и гледајући га преко наочала.
           Коста опусти руке низа се и, усиљавајући се да се опет насмије, блесасто развуче лице. Не одговори ништа...
           И моја те госпођа воли и сви те волимо, јер... јер си услужан, покоран, вјеран... и никад не протестираш и не буниш се... Ми те волимо и знамо да би ти сигурно нама за љубав све учинио.
           – Ако хоћеш, и у воду да скочим, што се рекне – одговори Коста {{осокољен(146)}}, премјештајући се с ноге на ногу. – Све...
           – А ти, имаш ли дјеце? – нагласи предстојник јаче.
           – Четворо, богу на {{аманет(147)}}!
           – Треба ти и боља плаћа?
           Коста приклони главу лијевоме рамену и пјевајући отегну:
           – Хај – хај!
           Предстојник му лагано приступи и ухвати га за раме.
           – Имаћеш бољу плаћу и још... још...
           Па му погледа у очи, прошапута тише:
           – Ако је знао зарадити...
           Дохвати једну столичицу, опкорачи је и сједе према Кости... Скрстивши руке на наслон од столице, спусти браду на њих.
           – Данас су чудне прилике настале – рече тихо, цупкајући ногом – и некакве нове струје јављају се... Чују се некакви протести, граје, тужбе... По чаршији говоре, вичу... А ти идеш по чаршији, састајеш се... а добар си човјек и сви ти вјерују.
           Вјерују, фала богу – одговори Коста поносито, па се мало исправи.
           – Па ја бих да ти будеш мој “повјерљив човјек” и... да ми јављаш шта ко говори и како се говори...
           Коста не одговори.
           Предстојник, натежући се, устаде и одгурну столицу. Коста лијено слегну раменима.
           – Но?
           – Шта? – мукло запита Коста, правећи се да не разумије.
           – Хоћеш ли бити мој “повјерљиви човјек?”...
           Коста поче поправљати јаку од кошуље, ширити је; поче ушмркивати, кашљати.
           – Ама то се у нас не назива чо’јек, него шпијун, господине – проциједи кроз зубе. Предстојник се подругљиво осмјехну.
           – Нека се назива како се хоће, али ја желим да ме послушаш – рече. – Или да добијеш бољу плаћу, или... да отрчиш из службе... Смисли се!... Бирај!...
           Коста се у души борио сам са собом читаво поподне. Предвече крену према Ракићевој {{механи(148)}}...
           Недалеко од њега, за омањим ниским столом, сједила су три бакала и, на беспослици, играли домина... Један, дугулендра, држећи чађаве домине на широком длану и међу прстима, непрестано је звецкао њима и непрестано зијевао... Зијевајући псовао је “проклето вријеме” кад човјек нема прилике ни “да што заради” и, уједно, корио другове што затежу игру.
           Чувши његову псовку, Кости падоше на памет предстојникове ријечи. Устаде и гегуцкајући приступи дугулендри:
           – Чујеш, немој ти тако говорити и немој ништа проклињати – рече тихо, тапшући га по рамену. – Нипошто!...
           – Хм!...
           – Ако је киша, не причај да је киша... Ако је магла, не кажи да је магла... И нипошто не проклињи!... Нипошто!...
           – Их!...
           – Благосиљај и ђавола и све називај благословеним.
           – А што, болан? – запита дугулендра отегнуто, звецкајући доминама.
           – Јер су избили “повјерљиви људи”, па те могу чути...
           Дугулендра отпрсну и одмахну руком.
           – Тешто!
           – Никоме сад не вјеруј!... Ни ћаћи рођеноме не вјеруј... Ни ја сам себи не вјерујем!...
           И не објашњавајући ништа, оде у друге механе.
           Тек предвече јави се предстојнику. Био је раздрљен, рашчупан, дроњав, са упрљаним рукама и облаћеним ногавицама; дуга, просиједа коса пала му је по челу и покрила ситне водњикаве очи, бркови му се опустили и пали по напола отвореним устима, брада му се овлажила и побијељела од пљувачке. Раскорачивши се нашироко и чувајући се да не падне, стаде пред предстојника и широко застења:
           – Ево ме...
           – Но? – запита предстојник тихо, пишући нешто, а и не осврћући се на њега. – Шта је?
           – Био сам и чуо сам...
           Предстојник остави перо и погледа га. И одмах скочи, и стиснувши зубе, диже руку да га удари. У задњи час, ипак, као да се предомисли, па одступи мало и оштро запита:
           – Шта си чуо?
           – Кнежевић каже да му се отелила крава; Петру Божовићу обосио коњ, те отишао да га поткује; Илија Митров изгубио на картама три гроша и опсовао попа; Станко...
           – Стани! – викну предстојник љутито, ударајући ногом о под. – Доста је!...
           – Још нијесам свршио – отегну Коста тепајући и вадећи некакве хартије. – Има овдје читава читуља...
           Предстојник застаде.
           – Зар су ти то важни гласови? – запита подругљиво.
           – А зар ја могу што друго чути? – окреса Коста растресајући хартије и загледајући их. – И зар ће ми неко нешто казати кад ено сва чаршија прича како је читав шехер препун шпијуна?...
           Предстојник збаци цвикер на сто и тресну читавим снопом хартија.
           – Ко прича? Ко? – нагло запита. Чаршија.
           – А ко ти је казао?... Ко?
           Предстојник се прислони леђима уза сто и љутит, бијесан, поче ломити прсте.
           – Ко је причао?... Ко?... – запита самог себе и опет погледа у Косту. – Да нијеси ти?...
           Коста не одговори.
           – Ти?... Ти?... Ти?...
           Па га ухвати за прса и поче дрмусати.
           Коста се некако отрже, затетура и, посрћући, ухвати се за зид.
           – Господине, ја ћу сам себе осудити на десет дана хавса – рече заплићући – само да нешто кажем... Запиши тамо: Коста Кошчинић осудио се на десет дана тамнице само да добије дозволу да нешто рекне...
           – Шта ћеш казати? – откреса предстојник сурово, одмјеравајући гдје би га, по обичају, ударио ногом. – Будалаштине!...
           Коста се блесасто зацерека и дубоко се наклони.
           – Питам те ја, господине, ко је од нас двојице виша будала: или ја, који сам постао тамо твој “чо’јек”, или ти, који си ме одабрао?
           Па, држећи се зида и једнако се церекајући, пође вратима.
           – Ето... бели сам те запитао и искалио се – рече вирећи иза {{каната(152)}}. – А сад лијепо одох у хавс! Збогом!
			`,
    author: 'Светозар Ћоровић',
    year: false,
    video: false,
    audio: false,
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Na početku pripovijetke upoznajemo se sa podvornikom Kostom i predstojnikom, jedina dva lika u priči. Psihološka karakterizacija likova izvršena je na osnovu….',
        answers: [
          {
            title: 'dijaloga',
            right: true
          },
          {
            title: 'detaljnog opisa njihove spoljašnjosti',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 2nd question',
        question: 'Prvi utisak o likovima i kancelariji je da…',
        answers: [
          {
            title: 'je sve u savršenom redu',
            right: false
          },
          {
            title: 'ne drže do reda i urednosti',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 3rd question',
        question: 'Između podvornika i predstojnika vlada odnos…',
        answers: [
          {
            title: 'iskrenosti',
            right: false
          },
          {
            title: 'podilaženja i lažne privrženosti',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 4th question',
        question: 'Upotreba blažih riječi kojima se izbjegava uvredljiv ton one riječi koja direktno označava neku pojavu ili predmet naziva se…',
        answers: [
          {
            title: 'eufemizam',
            right: true
          },
          {
            title: 'sarkazam',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 5h question',
        question: '„Povjerljiv čovjek“ je eufemizam za izraz…',
        answers: [
          {
            title: 'sluga',
            right: false
          },
          {
            title: 'špijun',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 6th question',
        question: 'Podvornik Kosta je…',
        answers: [
          {
            title: 'pristao da bude špijun',
            right: false
          },
          {
            title: 'samo glumio špijuna',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 7h question',
        question: 'Odnosi u sredini koja je opisana u priči zasnivaju se na…',
        answers: [
          {
            title: 'strahu od potkazivanja',
            right: false
          },
          {
            title: 'strogom redu koji održava predstojnik',
            right: true
          }
        ]
      },
    ]
  },
  {
    id: 18,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Ujka Filip',
    text: `“Živ sam!” kazao je upadajući u sobu, naglo, kao iz puške izbačen, cepteći sav od uzbuđenja. “Živ sam! Nisu me ubili! Nisu me ubili, svinje jedne! Prosto ne mogu da verujem... ne mogu da verujem!” Onako kratak i trbušat, žurno je prošao uzanim prostorom između stola i otomana i srušio se u fotelju. Pokrio je rukama lice. Nije glumio; bio je odviše uzbuđen. Kao i uvek, mislio je prvo na sebe, samo na sebe, a onda se tek setio da i nekog drugog ima u sobi.“
           Jutros si stigao i odmah me potražio. To je lepo od tebe. Daj da te zagrlim... daj da te zagrlim!” rekao je ne dižući se, posmatrajući svoje pružene ruke, i već je, opet, mislio na sebe, samo na sebe, kao da je jedino on bio u opasnosti ovoga rata. “Ah, nisam to očekivao! Nisam verovao da ću se spasti, da ću još ikog zagrliti njima!”
           Soba je bila neprijatna. Tesna, zagušljiva i mračna, pretrpana oveštalim građanskim nameštajem, kao da je u njoj sabrano sve što je od tri porodice nasleđeno i godinama čuvano. Trpezarija i pisaći sto sa kvrgavim nogama, klimava, iskrivljena etažera za knjige, pijanino i otoman sa visokim naslonom, presvučen mušemom. Na zidu fotografije, slike, “Ostrvo mrtvih” i “Čas anatomije”, na pisaćem stolu pritiskivač za hartiju u vidu mrtvačke lobanje i nekoliko lekarskih instrumenata, a sva soba puna vazni sa suvim cvećem, pepeljara, poslužavnika, jastuka i drugih ukrasa. Sve je bilo isto, nepromenjeno, samo je ustajali vazduh, natopljen memlom, zadahom naftalina, prašine i crvotočine, bio četiri godine stariji.
           “Kako si se izmenio za ovo vreme! Da mi Štefi nije kazala, ne bih te poznao. Pocrneo si, ojačao, postao muževniji, a i uniforma ti lepo stoji. Reklo bi se gotovo da vam u vojsci nije bilo rđavo. A?” Pitao je, gledajući iskosa, podozrivo, jednim okom, iza zlatom optočenih naočara. “A mi? A ja? Vidi šta je od mene ostalo. Vidi kako sve na meni visi!” Zavukao je prst pod okovratnik košulje i rukom protresao kaput; a imao je još okrugle rumene obraze i isturen trbuh, kao jastuk zavučen pod košulju i pantalone. “Ne možeš ni zamisliti koliko se propatilo, kakve sam teške časove preživeo kakva sam poniženja i lišavanja morao trpeti za sve ovo strašno vreme. I vi ste... (“Oh, i mi smo!... setio se, dakle, ipak!“)... i vi ste bili u opasnosti, ali to je nešto drugo. Borba nije svaki dan, a ni svako zrno ne pogađa – zar ne? – jer ko bi inače ostao živ. Vojnik može da se brani, da se ukopa u zemlju. Da pobegne ako treba. A ovde? Strah... stalni, zaslepljujući, od kog se ne može uteći, teskobno osećanje da si poput ovce određen da te jednog dana uhvate za vrat i izvuku iz tora. Četiri godine, dragi moj, četiri puta po trista šezdeset i pet dana stalne strepnje da će me odvesti s ulice, iz kuće, od ručka, od večere, ili noću dići iz kreveta. Pa onda ta ponižavajuća varoška glad i oskudica. Nisam bio izelica – Štefi me hranom nikada nije mazila, ona je i u tome bila uvek nemački stroga – a ni ponesen za dobrim jelom i pićem. (“Sem u gostima... sem u gostima, u tuđoj kući”... kao da je šaputalo iz starog zidnog sata, ali on to, zabavljen sobom, razume se, nije mogao čuti). Ali to stalno iščekivanje da li će Štefi uspeti da donese sa pijace glavicu kupusa ili mrkvu, to odvratno cenkanje sa seljacima za šaku brašna ili torbicu krompira, stajanje od izjutra do uveče u beskrajnim redovima, lutanje po varoši, uvek u potrazi za hranom, poput gladnog pseta koje njuška oko kapija i podrumskih prozora. To je bilo tako ponižavajuće, tako nedostojno čoveka... veruj mi, dragi, tako nedostojno čoveka.”
           Opet je rukama pokrio lice. Jedini prozor, okrenut dvorištu, bio je otvoren, ali zastrt zavesom. Ulicama su, još od ranog jutra, kuljali narod i vojska. Vikalo se: “Živela pobeda!” i “Živela sloboda!”, a vojne muzike nisu prestajale da sviraju. Sve je napolju bilo uskovitlano, puno prašine, buke, vreve i znoja.
           Pokrenuo se i, kao iglom uboden, skočio sa fotelje. “Pobeda... pobeda!” uzviknuo je šireći ruke. “Živ sam! Prosto da ne verujem. Prevario sam ih, gadove!.. Otišli su. Pobegli su juče, a nisu stigli da me ubiju. Dođe mi da se uštinem da bih bio siguran da ne sanjam. Uzeo je opet da šeta po sobi udarajući od uzbuđenja rukom o ruku. U prolazu očešao se o stočić i oborio srebrni poslužavnik, koji je tresnuo o pod.
           Otvorila su se vrata i u sobu je provirila Štefanija – Štefi, kako ju je on zvao – zapuštenija i ružnija no ikad. Tanki kukasti nos joj je podrhtavao; mora da je prisluškivala za vratima.
           “Šta se desilo?” pitala je sa praga, onako suva, upalih grudi, u prljavoj pocepanoj pregači i jednoj od svojih domaćih kapa, držeći u ruci krpu kojom je brisala prašinu. “Šta si razbio?”
           “Ništa!” odgovorio je dižući sa poda poslužavnik, i pokazao joj ga: “Ovo je samo palo!” a ona je još jednom prešla po sobi strogim, ispitujućim pogledom, i nečujno zatvorila vrata.
           “Ona me je spasla”, rekao je pošto je izišla. “Ona me je spasla i prvoga rata; izmolila je oca da me zadrži u bolnici kad je trebalo da me premeste na front. Od dobrovoljne bolničarke i kćerke jednog pukovnika to je bilo mnogo. Hladna je i stroga žena i tvoji je nisu mnogo marili (“Ružna je, zla i tvrdica, govorili su. Od muževljevih starih okovratnika plela je konopce, od njegovih dotrajalih šešira krojila je sebi kape, parala je čarape da bi iskoristila konac, sebe i njega morila je glađu i nikog nije pozivala u kuću.”), ali mogu ti reći da je u suštini imala dobru dušu, a kad je bila mlada, kad je bila sasvim mlada, bila je i lepuškasta. Da nije bilo nje, ko zna šta bi bilo sa mnom. Kuću i ove stvari ona je, štedeći, stekla, a sad mi je život spasla. Kao prava Nemica i kći bivšeg pukovnika, ona je to mogla; imala je veza. Ali i ja sam pomagao, ni ja nisam sedeo skrštenih ruku. Nisam bio dobar lekar – istina je – a ni vredan i vešt da zaradim velike pare, ali nisam bogme ni od onih tunjavka koji dozvoljavaju da im se nešto pravi na glavu. Bili su im potrebni lekari, ali, dođavola, i oni su dobro znali da sam ja nikakav lekar! Štefi je ipak udesila da me prime u {{prosekturu(153)}}, a i meni je to bilo draže; pre ili kasnije umro bi mi neki bolesnik i onda bih ja ispao kriv. Veruj da sam ih se naparao kao niko ovoga rata. Posao prljav, lešinarski, ali sam mislio: i to će proći; glavno je izdržati i sačuvati glavu. Štefi im je pokazala moje ordenje iz prvoga rata, a i sva odlikovanja svoga oca, kojih je imala celu gomilu. Upisala se opet u dobrovoljne bolničarke, nosila je i kukasti krst na rukavu, na kući je isticala nemačku zastavu, pozivala oficire na večeru, a ja sam sa posla odlazio pravo kući, manji od makova zrna, i bez velike potrebe ne bih izlazio na ulicu. Štefi je dokazala da sam se sa njome venčao u crkvi – katolik dakle – a tvrdili smo da mi je i mati bila Nemica. Prevario sam ih. Prevario svinje jedne! Morao sam da se ponižavam, da lažem i da varam, straha sam se nagutao, ali eto me živa, sa glavom na ramenima.”
			`,
    author: 'Erih Koš',
    year: false,
    video: false,
    audio: false,
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Ujka Filip je bio oduševljen činjenicom što je…',
        answers: [
          {
            title: 'preživio rat',
            right: true
          },
          {
            title: 'čovječanstvo dočekalo mir',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 2nd question',
        question: 'Ujka Filip je mislio samo na sebe. Takve ljude nazivamo…',
        answers: [
          {
            title: 'nesebičnim',
            right: false
          },
          {
            title: 'sebičnim',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 3rd question',
        question: 'Opis unutrašnjosti neke prostorije naziva se…',
        answers: [
          {
            title: 'eksterijer',
            right: false
          },
          {
            title: 'enterijer',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 4th question',
        question: 'Ujka Filip priča o svojim nedaćama u toku rata. Govor jednog lica naziva se…',
        answers: [
          {
            title: 'monolog',
            right: true
          },
          {
            title: 'refren',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 5h question',
        question: 'Kakvim se Filip pokazao u toku rata?',
        answers: [
          {
            title: 'kao kukavica',
            right: true
          },
          {
            title: 'uvijek spreman da pomogne',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 6th question',
        question: 'Filip je bio…',
        answers: [
          {
            title: 'požrtvovan u svom poslu',
            right: false
          },
          {
            title: 'loš ljekar',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 7h question',
        question: 'Filip je morao da se ponižava i laže – kako sam kaže. Štefanija je bila…',
        answers: [
          {
            title: 'sušta suprotnost',
            right: false
          },
          {
            title: 'ista kao i on',
            right: true
          }
        ]
      },
    ]
  },
  {
    id: 19,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Moj djed',
    text: `Jesenas je umro moj djed. Prije bi čovjek rekao da je usnuo nego umro. Zadnjih se pet godina nije baš ni u čem promijenio jer se upravo nije šta imalo na njem promijeniti. Kao srebro bijela kosa nije mogla još bjeljom postati, navorano čelo i lice sa plavim i crvenkastim piknjicama bilo je i ljeti i zimi jednako, kao iz kamena isklesano, a hod i govor ostao mu isti – pa kad smo ga bijelo obučena i na odru pružena gledali, činilo nam se da žmiravim očima sanja.
           Dva se dana pred smrt potuži da mu nije najbolje, treći dan ujutro ispovjedi se i pričesti, a sat iza toga ležao je mrtav...
           Zadnje dvije godine nije ni odlazio nikuda sa stana; jedino na Uskrs, ako je bilo lijepa vremena, dođe u crkvu. Uvijek je govorio da mu je na stanu {{laglje(128)}}, a čim dođe u selo, kao da oslabi i ostari.
           – Nije to više za mene, drugo je življenje i drugi je svijet u selu, a drugi u mojim prsima; ovo nekoliko dana hoću ja da po svojoj voljici poživim.
           Na stanu imao je svoju sobicu sa dva prozorčića, sâm ju je meo i čistio, da je bilo u njoj glatko i umiljato kao u ptičjem gnijezdu. Kad god sam dospio, otrčim djedaku na stan. Najprije sam mu morao ispripovijedati što je novo kod nas u selu – a on gutao svaku moju riječ, čudeći se koječemu kako se ljudi i običaji danomice mijenjaju. Kad dovršim, onda se djed maši pod slamnjaču pa mi izvadi oraha i lješnika, ili ode na tavan pa mi skine koju jabuku ili suhu šljivu; takovo što uvijek se kod njega našlo. I ostalog bilo svega na stanu: tu su bile krave i ovce, kokoši i {{pure(129)}}; imao djed i vina i šljivovice. Živio je kao sat: niti će ranije leći niti kasnije ustati, niti preko mjere najesti niti napiti se.
           – Tko pomalo pije, dugo će piti – rekao bi mi svaki put kad god je ispraznio svoju svakidašnju mjericu šljivovice. Za dosadu i dugo vrijeme nije djed znao, uvijek je našao sebi posla, bilo ljeti ili zimi. U proljeće popravlja on oko plotova, krči pomalo po livadi i šljiviku, skida màšinu s voćaka i okresuje ih, nikad ni časka neće stati da se odmori; kadikad tek pogleda na nebo da vidi koje je doba dana. Jelo si je najvolio sâm pripravljati; slaninu ispržiti na ražnju, udariti u tavicu dvoje-troje jaja, gljive začiniti – nije nitko umio kao on. – Rekao bih da bez njegova znanja niti je šta postalo niti čega nestalo sa stana. On je vidio prvu grlicu i čuo prvog slavuja, on je znao za ptičja gnijezda, svaki dan ih je sva obašao da vidi je li u redu s njima... On je znao za prvu jagodu na livadi i za prvu trešnju na deblu. Razgovarao se sa čitavom božjom prirodom, ničega nije bilo što bi njemu bilo nepoznato. Kad je djed rekao: – To bome ne znam što je, toga ja još nijesam vidio! – onda smo znali da toga sigurno nitko u selu ne zna. Po zvijezdama je znao kakovo će vrijeme biti, pa prije svakog važnijeg posla, bilo oranja ili kosidbe, izaći će on po dva, po tri puta preko noći da vidi kako je na nebu... Djed je od mladosti bio lovac, u svaki je šuplji hrast zavirio, znao je za svaki zgodniji grmečak i baricu kud patke padaju. Nad posteljom mu visila stara, kratka puška, sva crna i iskrpana debelom žicom. Ne bi djed ni za tri dana ispripovijedao koliko je zvjeradi njom natukao! Koliko li je lisica zaglavilo pred kokošinjakom s te zarđale puškice, koliko li je vukova zabolo nosom u snijeg kad je staráčko, tjerajući svinje u žir, iza klade pripalio... Kad god se diže hajka, svaki put se sastanu lovci i gospoda na djedakovu stanu, a on kao da se pomladi! Nije on tada žalio ni praseta ni {{purana(132)}}, ni vina ni šljivovice, samo da gostima ugodi. A kakva mu je tek bila stara kao zlato žuta šljivovica, kako li je tek znao ispeći odojče na ražnju! Dok se lovci s djedom ne porazgovore i ne posavjetuju, neće se hajka započeti. On je dobro znao koliko se u zadnje vrijeme viđalo i čulo vukova u toj i toj zabrani, i gdje i kako bi im čovjek mogao najbolje doći do kože. Kada se hajka svrši, obistini se na dlaku što je djed unaprijed kazao. Kad se lovci naručaju i malo pougriju vincem, onda postave nišane i pucaju da se vidi tko zna bolje nanišaniti, čija li će puška najdalje dobaciti. Jedni postave jajce na kolac, a drugi objese crvenu lukovicu na koncu o granu. Nišane gospoda s finim puškama ali niti se jaje raspada, niti se lukovica ziba... Dosadi to djedu, lati se svoje {{lunte(135)}}, pa jednim hicem raspršti jaje, a drugim odbije pol lukovice.
           – Vaše puške su za paradu, ali s ovom se tuče – rekne djed pola u šali pola uštipljivo, da vrati milo za drago onima koji su mu se ispotiha nasmijali kad je iznio svoju zarđalicu.
           Svakomu djed hoće po volji učiniti, i odraslu i nejaku, a ako kad i ukori, učini to nekako uz put, kao da tek prigovara. Kad se ukućani štogod porječkaju i posvade, onda svi redom idu djedu da se potuže, jer svaki misli da baš njega ima djed najradije, premda on ni sâm nije znao tko mu je najmiliji. Djed se je znao svačijoj ćudi prilagoditi; žestoke je mirnom riječju utažio, svadljivcima se podrugivao da su se morali sami sebe zastidjeti – i što bi se okrenuo, opet sve bilo izmireno kao da se nikad i ne posvadiše. Sa ženama bilo mu je već malo teže na kraj izaći, jer sačuvaj bog da bi ikad jedna drugoj ma u čemgod popustila. Zanovijeta i prigovara jedna drugoj sve dok djed ne sazna za prepirku, no čim djed spazi da se jedna pred drugom mrgodi, onda neće prestati prigovarati i peckati, tobože sve u šali, dok se najkasnije i jedna i druga u sav glas nasmiju i naposljetku izmire.
           Lijenosti i neradinosti nije djed živ gledati mogao, žene su morale brzati pred njegovim očima radio se lagan ili težak posao; jao si ga onoj koja bi se usudila reći da je ruke bole ili da se je umorila. Tê djed nije gledati mogao, nekmoli da progovori riječ s njome... Košulje i gaće morale su snahe praviti isto onakove kao što mu ih je njegova pokojna pravila, ali ako nije sve onako bilo (već možda i bolje), onda djed najprije bude čangrizav, kasnije kao da se ražalosti, tužeći se da danas mlađi slabo poštuju starije, da je teško svomu bez svojega, i da nema ni njemu već dugo života otkako mu njegove babe nesta... No ta zlovolja i žalobnost nije dugo trajala – našali li se tkogod, probrblja li koje dijete štogod smiješno ili pametno, odmah se i djed udobrovolji i postane onaj stari dobričina.
           Teških poslova nije radio niti se je u što miješao dok ga nijesu za savjet upitali.
           – Ja velim tako, a vi sad radite kako bolje znate – odgovorio bi on obično iza svakog takva razgovora. Premda mu je svaki savjet zlata vrijedio, ipak se nije nametao da zna najbolje. – Nije on više znao ni za veliku radost ni za veliku žalost. Pođe li koji posao dobro za rukom, i dok se drugi ukućani hvališu i koliko su zaslužili i koliko nijesu, dotle on samo šuteći sluša, tek mu na oku vidiš da je sjajnije i radosnije, pa će naposljetku reći: – E, pa hvala bogu kad je tako došlo! Bez njegove pomoći nikud-nikamo! – Bude li kakve nesreće ili nezgode, da se svi drugi razjade i duhom klonu, opet on šutljiv i miran: – E, a šta ćemo, de! Ne može uvijek samo dobro biti; da ne bude i kad kakve nesreće, evo moje glave ako se svijet ne bi pomamio – zna bog šta radi – Svakomu je odlanulo kad je čuo takove riječi.
           Kad se radi u hrpi, bilo to na gumnu u vršaju ili na livadi kupeći sijeno, onda je djed najveseliji, onda nitko ni riječi ne govori, sve sluša djeda, a on redom niže: sad jednu šaljivu, sad jednu ozbiljnu; sad zamnije gumnom radosno smijanje, sad zasine u mnogom oku bistra suzica...
           Svi smo ga jednako štovali i svakako se ulagivali, ne bi li mu ugodili. Kad dođe zima i zapane snijeg, onda navalimo na nj kao gavrani: “Djede, ja bih sanice!” “Djede, napravi i meni, i ja bih!” A ispod njegovih ruku samo što bi se stvarale saone! Prebije li se kojoj ženi {{preslica(137)}}, pukne li zipka ili stalak – opet: Daj, djede, pravi i opravljaj!... A on sve voljko i bez prigovora radi, da bi ga čovjek blagoslovio.
           Pred djedovim prozorom na stanu bila baščica s nekoliko bresaka i s jednom dugačkom lozom; tu su žene (da se bolje očuva) obično ostavljale sjemenjake od raznog povrća, a djevojke sadile cvijeće. Kad je suša, djed će, uz povrće, i cvijeće zaliti i neće nijedne nedjelje ili svetka zaboraviti da ga ne nabere i pošalje kući djevojkama, svojim unukama, da se okite kad u crkvu pođu. Ali zato kad mlade odu kupovati ma kakve {{oprave(139)}}, uvijek ćeš čuti pri izboru: “Ovo ne smijem uzeti, ovo ne bi bilo djedu po ćudi.” I najmanju malenkost na opravi opazi djed, pa nije li mu po volji, sigurno će turiti pod nos. On je doduše i sâm uživao kad je vidio svoju čeljad lijepo obučenu, ali kojekakvih suvišnih tričarija nije mogao trpjeti. – “Bolje bi bilo da si kupila opanke nego tu rugobu; samo se neka pod jesen potužiti da nemaš zimske obuće” – prišio bi on obijesnim djevojkama kad bi donijele s vašara kakvu suvišnu cifrariju... Kad dođe sajam, onda svi upremo oči u djeda. Sa stana će on otići na sajam, pa će svima donijeti ma najmanji darak. Čudne li vike i vreve onda: svatko misli da je njegov dar najljepši. Djedov darak, ma najsitniji, ipak nam je bio najdraži. A kad djed s jednoga sajma svima donese nešto, kome kolačić, kome igračku, cipelice ili maramicu – samo neposlušnoj djevojčici Kati ne donese ništa, onda ode šapat od usta do usta: “Kati nije djed ništa donio, ama baš ništa...” A namiguša Kata morade se zatvoriti u kiljer i do sita naplakati. Veće kazne nije moglo biti u našoj kući.
           Već dvije-tri godine pred smrt često djed spominje da mu neće biti teško umrijeti dok nas vidi ovako složne i poslušne. “A kad nestane toga strahopočitanja u vama, onda najbolje da nestane i mene, ne daj bog da te nesreće doživim!” – dodao bi svečanim glasom. Kao da je znao, ponavljao je pod konac života češće te riječi, a nama bilo da proplačemo, a iz očiju nam je mogao djed čitati da mu se bojazan neće ispuniti.
           Djed je tako srastao nama uz dušu i oko, da nijesmo ni pomisliti mogli da bi on ikad umro; nama je uza nj tako bilo kao da će navijek živjeti. Kad prvi put čusmo: umro nam je djed! – zazujaše nam te riječi tako čudno u ušima, da smo u prvi čas ostali bez boli i bez suza... Dugo ga ne mogasmo zaboraviti; dugo se obazirasmo za njim, hoće li doći sa stana i donijeti nam kitu jagoda i vijenac prvih trešanja... Ali njega nema!... A mi sretni i blaženi kad ga u snu vidimo kako nam pripovijeda i ljulja nas na koljenu.
           A naveče kad izmolimo svagdašnju molitvu, u duši se sjetimo i djeda: – Smiluj se, bože, našemu djedu!
		   `,
    author: 'Josip Kozarac',
    year: false,
    video: false,
    audio: false,
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Kroz cijelu priču „Moj djed“ građen je lik ',
        answers: [
          {
            title: 'djeda',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 2nd question',
        question: 'Opis lica, odjela, pojave neke osobe, kao i njenih osjećanja, naziva se ',
        answers: [
          {
            title: 'portret',
            right: true
          },
        ]
      },
      {
        title: 'This is title for 3rd question',
        question: 'Pripovijedanje počinje od…',
        answers: [
          {
            title: 'djedove mladosti pa do smrti (hronološko pričanje)',
            right: false
          },
          {
            title: 'od djedove smrti, vraćajući se u njegove pozne i mlađe godine (retrospektivno pričanje)',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 4th question',
        question: 'Ko se javlja u ulozi pripovjedača?',
        answers: [
          {
            title: 'djed',
            right: false
          },
          {
            title: 'dječak',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 5th question',
        question: 'U kojim formama je ispričana priča? (Jesenas je umro moj djed…Dugo ga ne mogasmo zaboraviti…)',
        answers: [
          {
            title: 'U 1. i 3. licu',
            right: true
          },
          {
            title: 'u množini',
            right: false
          }
        ]
      },
    ]
  },
  {
    id: 20,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Bašta sljezove boje',
    text: `Muškarci obično slabo razlikuju boje, ali jedan takav neznajša u bojama kakav je bio moj djed, e, takvog je bilo teško naći. Njegov spektar svodio se na svega četiri osnovne boje, a ono ostalo – to nije ni postojalo ili se svodilo, u najmanju ruku (ako je čiča dobre volje!), na neki vrlo neodređen opis: “Žuto je, a kao i nije žuto, nego nešto onako – i jest i nije.”
           Kako je na ovome našem šarenom svijetu većina stvorenja i predmeta obojena “i jest i nije” bojom, to je s mojim djedom oko toga uvijek dolazilo do nesporazuma i neprilika.
           U jedno od najprijatnijih doba godine, skoro preko noći, rascvjetao bi se u baštici kraj naše kuće crni sljez i ljupko prosinuo iza kopljaste pocrnjele ograde. On je u mirna sunčana jutra zračio tako povjerljivo i umiljato da to nije moglo izmaći čak ni djedovu oku i on bi udobrovoljeno gunđao majući se po dvorištu:
           – Pazider ga, sva se bašta modri kao {{čivit(125)}}.
           Ono, istina, na sljezovu cvijetu jedva da je negdje i bilo tragova modre boje, ali ako je djed kazao da je modra, onda ima da bude modra i kvit. Isto se tako moglo desiti da neke godine djed rekne za tu istu baštu da se crveni, i onda za tu godinu tako i važi: sljez mora ostati crven.
           Djedov rođak Sava Damjanović, negdašnji kradljivac sitne stoke, a pod starost ispičutura i pričalica, i nenamjerno je znao da najedi mog dobrog djeda. Dok djed priča, on ti ga istom začuđeno prekine:
           – Otkud lisica crvena kad je žuta!
           – Hm, žuta? – beči se djed. – Žut je tvoj nos. Sava zabrinuto pipne svoj ružičast baburast nos i vreči:
           – Crvena! Ta sve nacije odavde do Bihaća znaju da je žuta, a ti...
           Savin svijet prostire se do Bihaća, jer je čiča nekoliko puta tamo ležao u hapsu, ali čak ni ti prostori ne mogu da razuvjere mog djeda.
           – Hm, Bihaća! I drugi su ljudi ležali u bihaćkoj Kuli pa ne vele da je lisica žuta. Bolje ti je pij tu moju rakiju i ćuti, ne kvari mi unučadi.
           A unučad, nas troje, nabili se u ćošak blizu staraca i čekamo kad će Sava započeti sa svojim lopovskim doživljajima. Prepirka o bojama baš nas nimalo ne interesuje, lisica je lisica, pa ma kakve farbe bila.
           Zbog djedove tvrdoglavosti u pogledu boja, i ja sam, već na prvom koraku od kuće, upao u nepriliku.
           Bilo je to u prvom razredu osnovne škole.
           Negdje sredinom godine učiteljica nam je pričala o vuku, te živi ovako, te hrani se onako, dok će ti odjednom upitati:
           – Djeco, ko zna kakve je boje vuk? Ja prvi digoh ruku.
           Evo ga, Branko će nam kazati.
           – Vuk je zelen! – okidoh ja ponosito. Učiteljica se trže i začuđeno nadiže obrve.
           – Bog s tobom, dijete, gdje si to čuo?
           – Kaže moj djed – odvalih ja samouvjereno.
           – Nije tačno, vuk nije zelen.
           – Jeste, zelen je! – neočekivano se uzjogunih ja kao pravi unuk čestitog djeda Rade.
           Učiteljica mi priđe sasvim blizu, ljutito uzriki u moje lice i povuče me za uvo.
           – Kaži ti svome mudrom djedu da to nije istina. Vuk je siv. Siv, zapamti.
           Skoro plačući otklipsao sam toga dana kući i šmrcajući ispričao djedu sve što se u školi dogodilo.
           Ni slutio nisam kakva će se bura oko toga podići.
           Šta! Pred čitavim razredom njegovog unuka, miIjenca, tegliti za uši, a uvaženu starinu posprdno nazvati mudrim, bolje rečeno, budalom! Dotle li smo došli? I još reći da vuk nije zelen već nekakav... hm! E, to ne može tek tako proći.
           Sjutradan, pušući poput guska, djed je doperjao sa mnom u školsko dvorište i pred svom dječurlijom razgalamio se na učiteljicu:
           – A je li ti, šiškavico, ovakva i onakva, ti mi bolje od mene znaš kakav je vuk, а?! Nije zelen? Pazi ti nje! Ja se s vucima rodio i odrastao, čitavog vijeka s njima muku mučim, a ona ti tu... Po turu bi tebe trebalo ovim štapom, pa da se jednom naučiš pameti.
           Izvika se djed, rasplaka se učiteljica, a i mi, đaci, od svega toga uhvatismo neku vajdu: toga dana nije bilo nastave.
           Već sljedećeg jutra djeda otjeraše žandarmi. Odsjedi starina sedam dana u sreskoj {{buvari(126)}}, a kad se vrati, ublijedio i mučaljiv, on mi naveče poprijeti prstom.
           – A ti, jezičko, nek te ja još jednom čujem da blejiš kakav je ko, pa ću ti ja pokazati. Vuk je zelen, heh! Šta te se tiče kakav je ko.
           – Pa kad me je ona pitala.
           – Pitala te, hm! Imao si da ćutiš, pa kvit.
           Sljedećeg proljeća, bujnog i kišovitog, sljez u našoj bašti rascvjeta se kao nikada dotad, ali starina kao da ga ni zapazio nije. Nisu tu pomagala ni sva trtljanja neumornog rođaka Save, djed je bio slijep i za boje i za sve cvijeće ovoga svijeta. Tuga da te uhvati.
           Minulo je od tih neveselih dana već skoro pola vijeka, djeda odavna nema na ovome svijetu, a ja još ni danas posigurno ne znam kakve je boje sljez. Znam samo da u proljeće iza naše potamnjele baštenske ograde prosine nešto ljupko, prozračno i svijetlo pa ti se prosto plače, iako ne znaš ni šta te boli ni šta si izgubio.
		   `,
    author: 'Branko Ćopić',
    year: false,
    video: false,
    audio: require('../assets/sounds/pronunciation/20.aac'),
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'Glavni lik priče „Bašta sljezove boje“ je…',
        answers: [
          {
            title: 'dječak',
            right: true
          },
          {
            title: 'djed',
            right: false
          },
          {
            title: 'Branko Ćopić',
            right: false
          },
        ]
      },
      {
        title: 'This is title for 2nd question',
        question: 'Osnovno osjećanje u priči je…',
        answers: [
          {
            title: 'ljubav između unuka i djeda',
            right: true
          },
          {
            title: 'žalost zbog djedove nemogućnosti da razlikuje boje',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 3rd question',
        question: 'To što je djed „zagalamio“ na učiteljicu čini…',
        answers: [
          {
            title: 'uvod u radnju',
            right: false
          },
          {
            title: 'vrhunac radnje',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 4th question',
        question: 'Čitava priča je…',
        answers: [
          {
            title: 'humorna',
            right: false
          },
          {
            title: 'i vedra i tužna',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 5th question',
        question: 'Radnja priče se iznosi…',
        answers: [
          {
            title: 'najvećim dijelom retrospektivno',
            right: true
          },
          {
            title: 'hronološki',
            right: false
          }
        ]
      },
    ]
  },
  {
    id: 21,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Књига',
    text: `Сиромашни дјечак са села враћа се у град послије љетњег распуста. Полази у трећи разред гимназије (то је данашњи узраст ученика седмог разреда, јер је основна школа трајала четири године, а онда је почињала средња) са својом старом жељом – да умјесто већ кориштених уџбеника, намијењених сиромашним ђацима, добије нове, чисте, бијеле књиге. За њега је било важно и то да сада, као ученик трећег разреда, може позајмљивати књиге из школске библиотеке. Међутим, када је први пут узео књигу, догодило се да се спотакао и да му је књига пала и том приликом се озбиљно оштетила – њен унутрашњи дио испао је из корица. Од тада књига за њега постаје мора. Како вратити оштећену књигу? Како се појавити пред библиотекарем? Како то сакрити од других? То су само нека од питања која су га мучила.
           *
           Тако је дечак почео прве дане свога трећег разреда. За време школских часова, док је професор са шиљастом прогрушаном брадом објашњавао грчку азбуку, дечак је гледао кроз прозор врхове дрвета, пуне још бујног септембарског зеленила и делић светлог неба у даљини. Одсутан духом и неспособан да запамти те нове знакове, он је мислио само на упропашћену књигу са којом неће никад смети да изиђе пред строгог библиотекара, а која се, како њему све више изгледа, не може ни поправити ни набавити. И та је мисао, стална и мучна, губила све брже свој првобитни облик. Тако је било за време предавања, у игри и при другарским шалама. У сваком секунду он је знао да у свету постоји нешто покварено и разваљено, нека његова незгода и кривица коју не сме ником да призна и не уме да поправи, а за коју ће морати једног дана да одговара.
           Ипак му се у игри или при шетњама са друговима дешавало да успе да се заборави и да сатима не помисли на своју тајну. Смејао се, трчао или разговарао весело и безбрижно као и остали. Али тада би се наједном, као физички бол, јавила у њему мисао на скривену књигу. И сваки пут је тај бол био утолико љући и тежи уколико су тренутна радост и кратки заборав били јачи и дубљи, јер је на стари бол долазио увек још и прекор самом себи што га је изневерио. И кад би после таквих часова одлазио да легне у своју постељу, расањен у тами, он је ту налазио своју бригу, будну и непомичну, и сваки пут мало већу и тежу него што је оставио јутрос кад је устао.
           Недеље и месеци пролазили су, а догађај са књигом, обичан и незнатан сам по себи, добивао је, стално и све брже и брже, нестварни и аветињски изглед мучне тајне и непоправљиве грешке коју ваља крити.
           Све је то било лудо, излишно и у основи безразложно, а ипак стварно и болно, стварније од дневних игара и разговора. Почео је да избегава другове и њихове забаве. А на најбезбрижније међу њима гледао је са незлобивом али болном завишћу.
           Шта све није у тим јесењим ноћима пролазило кроз детињу главу? Какве се све могућности нису оцртавале и какви немогући снови испредали?
           Ноћ је пролазила, а он је мислио. Да повери неком шта му се десило? Да потражи негде савета како да то питање реши и да се ослободи бриге? При самој помисли на то њега би нешто огрејало изнутра, све би постало за тренутак јасно, лако и једноставно. Пред њим су се редала лица његових другова. Испредао је до ситница читаве разговоре, своју исповест и њихове одговоре и изразе лица, и на крају долазио до уверења да би то било узалудно и, што је још горе – немогућно. Помишљао је да каже ствар газдарици, али сам израз њеног лица, брижан и удовички, одвраћао га је од тога. Решавао се да пише оцу све потанко и да тражи савета и помоћи, или чак да оде једног дана до библиотеке, да сачека професора и да му, насамо, искрено призна ствар. И пошто би дуго оживљавао у себи своје речи и њихове одговоре, све до најмањег покрета и изразе лица, увидео би да је то изнад његове снаге, и остајао опет сам са својом тајном, која је после сваког таквог размишљања бивала тежа.
           Долазио је на мисао да се молитвом избави од свега. И шапутао би, заиста, све познате молитве, нечујно, дуго и усрдно. Са дланом на устима, да друг који спава у истој соби не би чуо, упућивао је жарке речи право богу и његовим свецима, који, аветињски – оно што изазива ужас, страх као што се каже, могу да чине и већа чуда, и тражио да се раскоричена књига састави, да може да је мирно и слободно врати оном човеку, не излажући се ни сам не зна каквим строгостима, понижењима и казнама. Заспао би тако, уљуљкан својим сопственим шапатом. А пре свитања би се будио, са плашљивом али дивном надом у себи, одлазио до ковчега и ту налазио своју књигу, јадно и безнадежно раскинуту надвоје, онакву каква је била пре свих његових нада и молитава, и, чини му се, још гору и безнаднију. И враћао би се, поражен, у постељу.
           Да умрем – мислио је тада дечак у кревету, стегнутих вилица, сав згрчен – да умрем сада одмах! Умрети значило би не морати поверавати се никоме, не чекати чуда која неће да дођу, не одговарати за оно што ниси крив, не морати никад више ступити пред оног риђег, подругљивог човека. То би значило да нестане мене, али са мном и књига, здравих, оштећених и поправљених, и библиотека и библиотекара, и одговорности, и страха од њих.
           “Боже, дај да умрем пре него што дође крај семестра и онај неизбежни тренутак кад ћу морати изићи пред библиотекара и одговарати за покварену књигу!”
           Затим је мислио како би било да изгори гимназијска зграда, заједно са библиотеком и списком позајмљених књига. Да ли би се тад морале враћати преостале књиге? Или не, да изгори ова кућа у којој он живи, са свим стварима, па и са том књигом у ковчегу. Како би тада било лакше одговарати!
           Не, најбоље би било и најсигурније: умрети.
           Али уместо да умре, он би редовно заспао са том својом жељом. А после, у сну, јавља се опет оштећена књига у најфантастичнијим облицима и страх од тешке, неправедне и нејасне одговорности, и са њим опет и у сну – жеља да умре, да нестане из живота, сниваног као и стварног, потпуно и заувек.
           С временом дечак је постајао све више усамљен и повучен у себе. Смршао је, јер је јео мало и жвакао зловољно и слабо. То није нико примећивао. Али су зато професори приметили да је попустио у учењу. Два месеца узастопце добивао је из грчког језика и математике неповољне оцене.
           Професор грчког језика, човек ћутљив и једак, није се много бавио њиме. Поставио би му два питања и, добивши несигурне одговоре, само би сикћући и са неразумљивом мржњом изговорио:
           – На место!
           Рђаве оцене ређале су се једна за другом.
           Много је теже дечаку било са професором математике, мршавим и доброћудним старцем, који га је забринуто гледао преко златног оквира својих бистрих и некако добрих и веселих наочара.
           – Шта је с тобом, Латковићу? Ја сам навикао да од тебе добивам другачије одговоре. Прени се, човече!
           А дечак је трептао очима, стидио се и ћутао.
           Тако, сви траже од њега само напор и питају за плодове тога напора, а нема никога коме би могао да се повери и да потражи савета и излаза.
           Са сујеверним страхом заобилазио је излоге књижара у којима су биле поређане нове и лепо укоричене књиге. А кад би се међу друговима повела реч о библиотеци или о каквој било књизи, он би одједном поцрвенео, почео збуњено да замуцкује, забашурује, и скреће говор на друге ствари, док му се по грудима разливало, као физички бол, његово већ познато мучно осећање од помисли на неку нејасну и непоправљиву штету која му се десила и за коју још нико не зна, али за коју ће морати да одговара. А то осећање било је утолико теже уколико се он више трудио да га сакрије. Често му се чинило да му се другови намерно обраћају са питањима која се односе на библиотеку, књиге и њихове повезе. На свако такво питање он би одговарао ћутањем, обарајући очи и чекајући кад ће му неко отворено казати да зна да он у свом ковчегу држи разваљену књигу.
           Сви су дани били тешки, али нарочито мучан био је уторник. Тога дана он није могао да мисли ни на шта друго до на своју књигу. Уторником после подне другови су враћали прочитане књиге и узимали нове. Он није смео ни помислити на то. Не би се бојао да изиђе, ако треба, пред директора и пред сваки суд овог света, али ето, нема снаге ни храбрости да изиђе пред тога крупног риђег човека који суво, крто тражи од свакога да брзо, јасно и одређено каже шта хоће. И то још да изиђе са оштећеном књигом! Не, за то нема храбрости. Њега се боји више од свега на свету.
		   `,
    author: 'Иво Андрић',
    year: false,
    video: false,
    audio: false,
    questions: [
      {
        title: 'This is title for 1st question',
        question: 'U novelama se opisuje…',
        answers: [
          {
            title: 'jedan događaj iz života glavnog lika',
            right: true
          },
          {
            title: 'više događaja u kojima učestvuje veći broj likova',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 2nd question',
        question: 'Glavni lik u noveli „Knjiga“ je…',
        answers: [
          {
            title: 'bibliotekar',
            right: false
          },
          {
            title: 'dječak',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 3rd question',
        question: 'Priča se zove „Knjiga“ zbog toga što se…',
        answers: [
          {
            title: 'dječaku ispunila želja da iznajmljuje knjige iz biblioteke',
            right: false
          },
          {
            title: 'dječaku dogodilo da ošteti knjigu što je bilo uzrok njegovog velikog straha',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 4th question',
        question: 'Dječakov strah je bio…',
        answers: [
          {
            title: 'primjeren događaju sa knjigom',
            right: false
          },
          {
            title: 'preveliki u odnosu na ono što se dogodilo',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 5th question',
        question: 'Ivo Andrić je dobitnik… ',
        answers: [
          {
            title: 'Pulicerove nagrade',
            right: false
          },
          {
            title: 'Nobelove nagrade',
            right: true
          }
        ]
      },
    ]
  },
  {
    id: 22,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Breza',
    type: essay,
    text: `Lijepa i mlada djevojka Janica udaje se za Marka Labudana, dopadljivog momka, seoskog lugara na koga djevojke i mlade žene često pogledaju. Zapravo, Marko ne bi nikada ni zapazio Janicu jer po seoskom ukusu ona nije bila nimalo lijepa. Ali njegov šef je obratio pažnju na njenu izuzetnost, a kako je Marko nastojao da ponešto usvoji od gospodske finoće, tako se odlučio da, na čuđenje sela, zaprosi Janicu. U poređenju sa drugim djevojkama “Tanka je ona i slabašna. Ali visoka i {{strojna(155)}}. Pa dok druge cure i snaše teško koračaju kao medvjedi, u njenom hodu ima nešto ritma, možda čak elegancije. Oči su joj plave, plavlje od jasnoga neba, a za kosu rekoše neki da je crvenkasta, a neki da je zlatna ili pozlaćena. Svakako, izvrsno je pristajala onom okruglom, bijelom lišcu i onim nasmijanim, malim usnicama.”
           Četiri-pet nedjelja Janica leži teško bolesna.
           *
           Čitava stvar se razvijala prilično brzo. Dva mjeseca prije toga rodila je Janica dijete. Nije na žalost bio dečko, već curica. Curica malešna kao zemička, a glasna kao jare.
           Odležala Janica par dana u krevetu, desetak dana muvala se po kući, a onda je potjeraše na pašu. – Kaj bi se tu po hiži potezala kakti kakva {{frajla(159)}}! – rekla je stara Labudanka.
           Nije Janici bilo baš najslađe, ali tko da vječno ratuje s babom! Što se mora – kažu ljudi – nije ni teško. Uostalom, sve bi dobro bilo da se dragi bog umilostivio pa da je dao lijepo i toplo vrijeme, ali eto udariše jesenske kiše, hladne i beskrajne, pa badava i ona stara golema {{ambrela(160)}}, badava novi opanci, Janica se vraćala sva mokra, prozebla, pokisla do kosti, a plava kao šljiva.
           .......
           Umrlo joj u to vrijeme i dijete. Vidjelo siroče da za nj nema života i da je samo na nepriliku. Mati ga nije mogla više dojiti, kravsko mlijeko nije mu nikako prijalo. Došli užasni grčevi i mala se curica preselila na drugi svijet prije negoli je pravo ovaj i zagledala. Uostalom, pravo je učinila! Svi su joj to odobrili, jer šta će tu bez matere!?
           Marko se nije pačao u domaće poslove, pa se tako nije izjavio niti da dovezu daske za lijes niti protiv toga. Njemu je bilo sve svejedno.
           Druge su njega brige trle. Svatovsko je bilo vrijeme i za nekih desetak dana trebala je biti svadba kod Žugečića, u bogatoj kući na Žugečić-brdu. Njega, Marka Labudana, lugara zemljišne zajednice, pozvali su za {{zastavnika(162)}}. Poznata je stvar bila da u tri župe nije bilo takvog barjaktara kakav je bio Marko Labudan. Bio je on čovjek od oka, a kad je progutao koju litru, ni vrag ga ne bi nadvikao ni nadskakao. Pun šala i vragolija koje je pokupio širom svijeta, on je izazivao udivljenje u ženskoga i muškog. Pa kad se još uzme u obzir njegov lugarski rang, njegov šešir s perjanicom, pa puška, onda je jasno što je to značilo za svatove, za mladu i za mladenca, imati Marka Labudana za barjaktara. Da ih on predvodi, da on pred svatovima poigrava, da on juška i vrišti, kako to samo on zna!
           I sad baš u takvo vrijeme razboli mu se žena! Koliko neprilika! Šta će, umre li mu u nezgodan čas? Recimo, uoči samih svatova.
           Udešava Marko svoju patentnu klopku, pa se sve češe iza uha. Jedan zaponac ne radi onako kako bi trebalo, ali još mu je veći jad ta njegova žena i njena bolest.
           Najbolje bi mu išlo u račun kad bi pričekala bar dvije-tri nedjelje pa onda umrla ako već umrijeti mora. Ili da umre odmah! Samo da mu ne bi pokvarila svatove, jer zbogom onda barjaktarija, zbogom ono veselje, pa gospodsko društvo (jer bit će tamo sigurno g. {{bilježnik(166)}}, blagajnik, učitelj, a možda i sam velečasni), zbogom onda dobra večerica i ono fino Žugečićevo vino!...
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
           Ona je sitna, gurava i vječno nekud čađava kao da u dimnjaku spava. Od posla, razumije se, i nema kad da se uredi, a nije joj više do {{cifranja(168)}}. Muva se ona po svoj kući. Sve prigleda. Skokne na dvorište, svađa se s kokošima, doziva piliće, zagleda i u štalu, pa vikne koju susjedu preko plota, pa se opet zaleti u sobu.
           U sobi je sumorno i nekako kiselo. Možda od onog napoja uz peć ili od krumpira i drača, što se na peći kuha za svinje.
           Dva {{okanca(169)}}, mutna i malena (toliko da glava nešto jačeg kalibra ne može kroz njih), propuštaju malo svjetla. U kutu do peći sjedi stara majka, mati Mike Labudana. Ona je slijepa, gluha i bez zuba. Nitko joj godina ne zna i ona u kući ništa ne znači. Vječno prede u svom kutu ili čija perje, i one prazne, upale čeljusti neprestano nešto melju. Nitko se na nju ne osvrće, a ona vječno nešto mrmlja. Da li psuje ili se bogu moli – tko bi to znao i razumio! Do nje se uz peć protegnuo stari pepeljasti mačak (on se jedini oko nje mazi!), pa s njom prede u istom taktu.
           Po zemljanom neravnom podu koprca se dvoje musave djece Janičine jetrve Jage. Oni se natežu, dreče i natjeravaju po sobi. S njima zajedno provodi dane i jedna pura, jadni invalid, kojoj je neki ljubazni susjed prebio nogu a Marko joj napravio nekakvi majstorski patentni zavoj, neku protezu pa ta ćurka svečano šepa i tužno pijuče.
           Žene se na sve to ne obaziru. One posjedaju po krevetima, jedna do druge, kao kokoši na grani. U posljednje ih vrijeme naročito interesira da li ih i koju od njih još Janica pozna. Zato je svaka pridošlica pita milo i slatko:
           – Janek!... Oj Janice! Je li me još poznaš?... Oj Janek, daj me pogledaj, daj!...
           Ali Janica toga popodneva nije nikom odgovarala. Ona bi neku od njih pogledala tužno, pa odmah zaklopila oči.
           Žene bi se samo značajno pogledale i kritički zaklimale glavama.
           – Ej, mila moja, kaj me zbilja ne poznaš? – uzviknula je gotovo uvrijeđena Janičina tetica Jela. – Em sem to ja, tvoja tetica!
           – Morti vas pozna – rekla je Bara Pavunčecova – ali joj siroti nî do govora, nî do razgovora!...
           – Kak samo {{zlo(171)}} {{izgleda(171)}}! – uzdahnula druga. – Bleda je i žuta kakti list v jeseni!...
           – Ej, Janica, Janica, na kaj si došla. Da ti sebe vidiš, ne bi se poznala! Bi li se, {{bogica(172)}} {{boga(172)}}, sama sebe prepala!...
           Marena Brezovka, jedra udovica kojoj je predlani grom ubio muža (a koja je rado na Marka pogledavala), uzdahnu i reče:
           – Žene drage, ako ćemo pravo, ona nigdar nî ni bila prejaka. Neću ja nju ogovarjati, ali vi i same znaste da je navek bila tenka i slabašna. Pak je i nadšumar {{rekel(175)}}, da zgledi kakti breza...
           – Istina, istina! – potvrdila je tetica Jela koja još nije mogla prežaliti što Marko nije uzeo njenu kćer. – Ja se ni denes nemrem dosti načuditi da je Marko baš nju štel zeti!...
           – Bogme, takov čovek!... Mogel je dobiti curu debelu kak mesaricu, pak još i bogatu...
           – E, kaj ćete, takva vam je muška pamet!...
           Prisjela je i stara Kata, pa nadošla i Jaga, druga snaha, koja se baš vratila s paše.
           – Oj Janek, je li ti kaj treba?...
           Ali Janica nije davala odgovora.
           – Je li ti, Janica, čuješ kaj se mi razgovarjamo? – pita je opet Marena Brezovka, ljubezno i preljubezno.
           – Ej, bogica boga, ona svoje misli ima! Morti se ona već i s ajngeli {{spominja(180)}}... Samo da bi joj bog i majka božja dali zdravljica!
           – Teško da bu toga! – primjećuje kroz nos stara Kata.
           – Sè je vu bože ruke. Dragi Bog sè može, fala mu budi i {{dika(183)}}!...
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
			`,
    author: `Slavko Kolar`,
    year: false,
    video: false,
    audio: false,
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
    id: 23,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Сузе којих се стидим',
    type: essay,
    text: `У прољеће кад се природа обнавља, те голе гране заодјене младим свијетлозеленим лишћем, а блатне ливаде дарежљиво покрије свјежим зеленим сагом, буди се и у људима жеља да одјену нову одјећу. Зажеле они да одбаце поношене зимске капуте, који у магловитим зимским данима и нису изгледали тако сиви, излизани и нагризени прашином; као сада у пуном сунчаном сјају. Па и они који нису {{ташти(184)}}, а нису више ни млади, радују се кад се могу извући из старе зимске чахуре.
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
			`,
    author: `Злата Коларић-Кишур`,
    year: false,
    video: false,
    audio: require('../assets/sounds/pronunciation/23.aac'),
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
        ],
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
  {
    id: 24,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Sećanje na šarenu pticu',
    type: essay,
    text: `Posle mnogo godina našao sam se u gradu mog dečaštva kao gost na Tribini mladih. Bio sam dočekan s kuđenjem, prigovarali su mi na crnoj slici sveta i osuđivali moje knjige. Pokajao sam se što sam pristao da gostujem u gradu koji me i ranije obasipao grdnjama, pa ako hoćete i prognao, jer sam idiličnu sliku zavičaja ukaljao ružnim opisima. Sala Tribine bila je malena i zagušljiva; prosto sam vapio za zrakom, a bio sam toliko utučen pogrdama da se nisam usudio tražiti čašu vode, iako su mi se usta sušila. I taman sam se ponadao da će lepa voditeljica objaviti kraj ovom neslavnom gostovanju, kad se na ulazu sale pojaviše invalidska kolica; njih je gurao crnoput mladić s kovrdžavom kosom, u majici koja je isticala njegovu mišićavost. U kolicima je sedeo momak izduženog lica, pomalo izobličenog i bledog, s maljama što su se hvatale samo uz rub lica i podbradak. Glavu je držao malo nagnutu u stranu, ali ne na onaj način nemoćnog.
            – Sad moraš još malo ostati – rekla je voditeljica. – To je naš Fahro, redovni posetilac Tribine.
            Crnoputi momak probio se s kolicima do prozora i spretno ga otvorio tako da nas je osvežio zrak, a prijao je i njegovom bolesnom prijatelju. Vani su se čule ptice; miris lipe zapljusnuo nas je kao neki poetski dah. Sala je bila puna dnevnog svetla. Bolesni dečak iz mog detinjstva gledao me kao neznanca, istim onim lepim, plavim očima. Sada nije imalo svrhe potezati uspomene iz Mahale; mogao sam misliti samo o tome kako se na životnoj mapi naše sudbine dodiruju i udaljuju i najzad slivaju u isti tok vremena. Njegov otac je umro od opake bolesti; kažu da je dugo ležao pod tim teretom kao neki kažnjenik. Umro je u neorealističkom dekoru Mahale, a poslednji njegov razgovor sa sinom bio je o filmu.
            – Šta se daje u bioskopu? – upitao je slabim, promuklim glasom.
            – Pustinja straha.
            – Žao mi je što film neću s tobom gledati, ali pustinja straha je preda mnom i ja sam već zakoračio tamo. Imam i ulaznicu.
            U njegovoj ostavštini, među dokumentima, pronađena je beležnica. U njoj su bili podaci o sedamsto filmova koje je gledao u toku svog nesrećnog i protivurečenog života. Dečak je nastavio kao i otac, počeo je da vodi svoju istoriju filma, da unosi podatke u svoju beležnicu, predano, brižljivo i s {{akribijom(192)}}, i da, na koncu, daje svoje ocene. Voleo je američke filmove o divljem zapadu, avanturističke filmove i spektakle. Kabinet doktora Kaligarija gledao je šest puta. Bergmana nije podnosio. Taj mladić mi je postavio pitanje: utiče li film na literaturu? i s ogorčenjem naveo nekog književnika koji je izjavio da prezire film. Takođe je zamolio da za njegovu beležnicu navedem filmove i režisere koje volim. To pitanje me spaslo od onih što su već bili počeli s uvredama i sramoćenjem, nazivajući me literarnom nakazom.
            Tada sam izrazio sumnju u književnika koji prezire film i naveo nekog hispanoameričkog pisca, ne sećam se tačno njegovog imena, mogao bi biti Fuentes ili {{Oktavio(196)}} {{Paz(196)}}, zašto ne, a on je rekao da je film umetnost uskrsnuća, a literatura umetnost raspeća. Možda je to preterano, ali je rečeno s ozbiljnošću, pogotovu što je uskrsnuće nagrada pojedincu da se obuče u sliku nebesku. Ako se čovek ukazuje kao slika božja, onda je bog izumio film. I Borhes ističe u prologu prvog izdanja Sveopšte istorije beščašća da su na njegove prozne sastave uticali prvi filmovi {{Jozefa(198)}} {{von(198)}} {{Sternberga(198)}}. Takođe izjavljuje da je uprkos slabom vidu gledao hiljade filmova. Ispričao sam o beogradskoj kinoteci kao novom hramu; tamo su se podjednako nalazili i pisci i slikari i arhitekte i režiseri i manijaci, ne samo kao zaljubljenici u film, već kao ljudi koji su pohađali časove jedinstvene prakse. Film je umetnost zadovoljstva, a literatura umetnost melankolije, to sam naveo ne sećajući se otkuda i kako je to ostalo u mom pamćenju.
            Tek što sam bio započeo svoju listu filmova, i za mladićevu beležnicu naveo najpoetičniji film Los Olvidados, a na prvo mesto stavio svog omiljenog reditelja {{Luisa(199)}} {{Bunjuela(199)}}, dogodilo se nešto neobično: u salu je uletela jedna lepa šarena ptica, lepršala je u uglovima dvorane pribijajući se uz zid, grebući kandžicama i ljušteći kreč. U nekoliko mahova bezglavo je udarila u staklo gornjeg zatvorenog dela prozora. Jedna peruška, kao pahulja, pala je ozgo na moje rame. Pojava ptice izazvala je radost i ushićenje u dvorani, samo je bolesni mladić Fahro uzdrhtao uplašen da će se ptica ozlediti. Kad je pronašla prozor i otprhnula, u sali je zavladala tišina kakvu posle nikad nisam doživeo. Sen krila te ptice je tajanstveni znak pod kojim smo se razišli.
            Još se i danas pitam nije li to bio privid, moja duševna ptica, spasonosni anđeo, pojava na poziv mašte da se oslobodi zarobljenica mog detinjstva. San o ptici često me i danas pohodi. Stekel ga tumači kao biseksualni simbol, za mene pak ima duhovno značenje, zaručničku vrednost Hristove poruke: budi bezazlen kao grlica!
            U vreme dok sam radio na ovoj priči brinuo sam o mnogim nedostacima, a ponajviše o nepouzdanom svršetku, ali tada mi je u pomoć priskočio slučaj, zaštitnik pripovedača. Jednog dana sam susreo nekadašnju voditeljicu Tribine, sada ženu srednjih godina, ostarelu pre vremena. Nećete mi verovati, ali tamo više nije bilo nijedne crte nekadašnje lepotice. Kratko i bezvoljno razgovarali smo o prošlosti, pominjala je mnoga imena koja mi ništa nisu značila. Jedva sam čekao da se pozdravimo. Na rastanku je rekla:
            – Nikad neću zaboraviti onu pticu! Sećaš li se? Što ne napišeš nešto o tome?
            `,
    author: `Mirko Kovač`,
    year: false,
    video: false,
    audio: false,
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
        ],
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
  {
    id: 25,
    title: 'Umjetnička književnost - Pripovijetka',
    subtitle: 'Šala',
    subtitleDescr: '(odlomak)',
    type: essay,
    text: `Vedro zimsko podne... Mraz je jak, puca, i Nađenjki, koja me drži ispod ruke, srebrnastim injem prekriva kovrdže na sljepoočnicama i malje iznad gornje usne. Stojimo na visokom klizalištu. Od naših nogu do same zemlje prostire se strma površina, u kojoj se sunce ogleda kao u ogledalu. Pored nas su male sanke, tapacirane svijetlocrvenom {{čojom(201)}}.
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
           Čim se zaustave sanke, Nađenjka pogledom obuhvata klizalište, niz koje smo se upravo spustili, zatim mi dugo zuri u lice, osluškuje moj glas, ravnodušan i bezosjećajan, a sva, sva ona, pa čak i njen {{muf(202)}}, i kapuljača, i čitava njena figura izražavaju krajnju nedoumicu. Na licu joj piše:
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
           Ubrzo se Nađenjka navikava na tu rečenicu, kao na vino ili na {{morfijum(203)}}. Ne može da živi bez nje. Istina, letenje niz klizalište i dalje joj je strašno, ali strah i opasnost sada već pridaju naročitu draž izjavi ljubavi, riječima koje i dalje predstavljaju zagonetku i muče joj dušu. Osumnjičeni smo nas dvojica: ja i vjetar... Ko joj od nad dvojice izjavljuje ljubav, ona ne zna, ali, po svemu sudeći, već joj je svejedno; nije bitno iz koje posude ćeš piti – bitno je samo biti pijan.
           Jednog podneva odem na sankanje sam; pošto sam upao u gužvu, vidim kako Nađenjka prilazi klizalištu, kako me traži pogledom... Zatim se bojažljivo penje stepeništem... Strašno joj je da se sanka sama, o, kako joj je strašno! Blijeda je kao snijeg, drhti, ide kao na gubilište, ali ide, ide bez osvrtanja, odlučno. Po svoj prilici, najzad se usudila da proba: hoće li čuti one čudesne slatke riječi i kad nije sa mnom? Gledam je kako blijeda, usta otvorenih od užasa, sjeda u sanke, zatvara oči pa, pošto se zanavijek oprostila sa zemljom, kreće... “Šššš”, škripe saonici. Čuje li Nađenjka one riječi, ne znam... Samo vidim kako iz sanki ustaje iznemogla, slaba. A na licu joj se vidi kako i sama ne zna da li je nešto čula ili nije. Strah, koji ju je spopao dok se vozila dolje, oduzeo joj je sposobnost da čuje, da razlikuje zvuke, da razumijeva...
           Ali, evo, nastupa proljećni mjesec mart... Sunce postaje umilnije. Naše ledeno klizalište tamni, gubi svoj sjaj i najzad kopni. Prestajemo da se sankamo. Jadna Nađenjka više nema gdje da čuje one riječi, a nema ko ni da ih izgovara, jer se vjetar ne čuje, a ja se spremam u Peterburg – na dugo, vjerovatno zauvijek.
           Nekako pred odlazak, dva dana ranije, u sumrak, sjedim ja u baštici, a tu bašticu i Nađenjkino dvorište razdvaja visoka ograda sa gvozdenim šiljcima... Još je prilično hladno, ispod stajskog đubreta je još snijeg, drveće je mrtvo, ali već miriše proljeće i vrane bučno gaču dok se spremaju za počinak. Prilazim ogradi i dugo gledam kroz šupljinu. Vidim kako Nađenjka izlazi na doksat i tužan, čežnjiv pogled upire u nebo... Proljećni vjetar joj duva pravo u blijedo, snuždeno lice... Podsjeća je na onaj vjetar koji nam je fijukao na klizalištu, kad je slušala one tri riječi, i lice joj postaje žalosno, žalosno, niz obraz joj klizi suza... I jadna djevojčica pruža obje ruke, kao da moli vjetar da joj još jednom donese one riječi. A ja sam sačekao vjetar da poluglasno kažem:
           – Volim vas, Nađa!
           Bože moj, šta bi sa Nađenjkom! Ona usklikuje, osmjehuje se čitavim licem i pruža ruke u susret vjetru, radosna, srećna, lijepa.
           A ja odoh da se pakujem...
           To je bilo još davno. Sada je Nađenjka već udata; dali su je ili je sama pošla – svejedno – za sekretara plemićkog tutorstva, i sad već ima troje djece. To, kako smo nekad zajedno odlazili na sankanje i kako joj je vjetar donosio riječi “volim vas, Nađenjka” nije zaboravljeno; za nju je to sada najsrećnija, najdirljivija i najljepša uspomena u životu...
           A meni sada, kada sam zašao u godine, više nije jasno zašto sam joj govorio te riječi, zašto sam se šalio...
           (1886)
			`,
    author: `Anton Pavlovič Čehov`,
    year: false,
    video: false,
    audio: false,
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
    id: 26,
    title: 'Umjetnička književnost - Drama',
    subtitle: 'Hasanaginica ',
    subtitleDescr: '(odlomak)',
    type: lyrics,
    text: `AGA HASANAGA
             HASANAGINICA
             SULTANIJA
             FATA
             MEHO
             AHMED
             njihova djeca
             BEG PINTOROVIĆ, brat Hasanaginičin
             ZARIFHANUMA, mati Hasanaginičina
             UMMIHANA, mati Hasanagina
             IMOTSKI KADIJA
             TETKA HATA
             TETKA AIŠA
			 IBRAHIM
             HUSREF
             rodbina kadijina
             ROBINJICA VLAHINJA
             LATIFA, sluškinja u Zarifhanume
             HUSEJIN, stari sluga Hasanagin
             SVATÂ STAREŠINA
             Mali “begović” u bešici. Sluškinje. Sluge. Askeri (vojnici). Kmetovi. Robinjice. Robovi. Igračice. Igrači. Muslimi. Muslimke. Jengjijice (svatovice). Svatovi. Djeca. Itd.
            
			Prvi se i treći čin događa na Hasanaginoj kuli, drugi kod kuće begovice Zarifhanume.
            PRIZOR TREĆI
             PRIJAŠNJI. HASANAGINICA. SULTANIJA.
            Na vrata slijeva naglo je sunula u avliju HASANAGINICA, blijeda i uznemirena. Vitka je to, lijepa i mlada žena; ima joj jedva trideset i dvije godine, a još je vidjeti i mlađa; bijelo joj je dugoljasto miloliko lice i ruke bijele. Odjevena u svijetlu anteriju (zobuncem), na kojoj su pod vratom dukati; dimije su izvezene srebrom, a na glavi joj je jemenija (rubac). Došavši do bostana naglo je zastala Hasanaginica i stisnula se uz sjenicu, kao da će se srušiti; mrtvo je upiljila oči u zemlju, kao da je nešto izgubila. Za njom se neopazice kao sjena pojavila na vratima najstarija joj kći SULTANIJA, djevojče u prvom cvijetu mladosti, jedva u šesnaestoj godini. Blagost i neka mirna razumnost vidjeti joj je na licu. Odjevena je kao i majka joj, tek nema na glavi jemenije, da joj prekrije bujnu svjetložutu kosu.
            
			SULTANIJA
             (još s vratiju)
             Oh, majko!
             HASANAGINICA
             (nijemo se okrene)
             SULTANIJA
             (doleti k njoj i obuhvati je rukom oko pasa)
             Majko!
             (Uzme je za tim za obje ruke.)
             Gledni ovamo!
             U moje oči – ko što ti to znaš!
             Ti danas gledaš nekud u stranu,
             ko izgubljena bježiš. Tražim te
             po cieloj kuli, stanu, avliji.
             A sve mi danas nekud izmičeš.
             O, nešto se je zbilo! Tajiš mi.
             Zar ne će babo doći?
            HASANAGINICA
             (mirno i gorko)
             Doć’ će.
            SULTANIJA
             Ti vesela si, mati, svaki dan
             do danas bila. Uviek medj’ nama!
             Prizivala nas djecu naokrug,
             za doček babi sve si spremala.
             Sva drhtala si, kad će doći čas,
             da babajko nas sviju zagrli,
             A eto danas, kad bi trebalo,
             da svi smo tu na dvoru veseli,
             ti – smrknuta si, tužna, skršena!
             I dosad bábo s vojske dolazio,
             al’ taka nikad – nikad nisi bila!
            HASANAGINICA
             (svedj jednaka)
             Oj, ni on nije nikad taki bio!
            SULTANIJA
             Ta kakav, majko! Meni barem reci,
             kad pred drugima kriješ. Reci mi!
            HASANAGINICA
             O, nije više, što je negda bilo!
             Ja nemam više age Hasanage,
             ni djece nemam.
            SULTANIJA
             (uprepaštena)
             Bábe, djece nemaš?!
             Što govoriš to, majko!
            HASANAGINICA
             Ja ne govorim.
             To aga – bábo – on to govori!
            SULTANIJA
             A gdje i kad je to ti rekao?
            HASANAGINICA
             Ni sama te još ne vjerujem rieči,
             već cieli dan i cielu noćas noć
             ja govorim ih sama sa sobom
             po dva put i tri puta...
            SULTANIJA
             Što, zar sinoć?!
            HASANAGINICA
             (kao prečula njezino pitanje)
             Da l’ mog’o ih je on izustiti?
             Il’ da je kakva slabost staračka
             Husejinu ih prišaptala valjda,
             ра buncao ih sinoć...
            SULTANIJA
             Šta, Husejin?
             I kakove su samo rieči to
             Husejinove? Znadem tek toliko,
             da veseli smo pošli spavati,
             kad Huso nam je svima kazao,
             dа ko večeras babo doći će.
             I ti si, majko, bila vesela.
             Ti svakoga si nas poljubila:
             i Fatimu i Mehu, Ahmeda
             i malog “bega” još u bešici.
             Još liepe si nam kazivala pjesme:
             o šatoru u gori zelenoj,
             o kauru i bábi Hasanagi,
             od ljutijeh što rana boluje
             i što ih junak već prebolio!
            HASANAGINICA
             Da, tako bilo sve, Sultanijo!
             Al’ kad sam sve vas u san spremila,
             prošetala sam kuli po bedemu
             ko svako veče. U to Huso je
             već dočeko me – o da nije tako! –
             I reko mi je mučno... polagano...
             Rieč po rieč kano živu žeravicu!
             U meni samo srce zamrlo –
             oko mene se sve okrenulo.
             I dvor i kula i to nebo gore...
             Ko ranjena sam zvierka skočila,
             Poletjela i htjela lomit vrat
             niz bielu kulu...
            SULTANIJA
             Majko jedina!
             Ta, kakove su rieči bile to,
             da sa njih bi životu kidisala?!
            HASANAGINICA
             Ja ne znam, da li pravo sam ih čula!
             I dugo u njih vjerovala nisam,
             tek pekle su me.
             (Pokazuje na grudi.)
             Tu su bile mi,
             dо glave tek su sporo dopirale,
             razumjeti ih nisam mogla, ne!
             I nisam mogla pravo smirit se
             u kuli nigdje. Tužna legla sam
             sve misleć, da to ružni neki san
             рre spavanja mi došo, pa sam htjela
             mjesto njeg ljepši sanak usniti.
             Аl’ nije bilo sna! Kroz pendžer je
             u moju sobu mjesec svietlio.
             Poludjet mišljah...
            SULTANIJA
             Šta je, reci mi.
            HASANAGINICA
             (kao da je ne čuje)
             Zar kriva sam? Zar drugoga zavoljeh?
             Zar svraćah koga u dvor, da ga ljubim?
             Ne rodih li mu djece petero:
             pet cvjetova? Ta, šta mu skrivih ја?!
            SULTANIJA
             Zar to bi on o tebi mislio!
             Ne, ne, ja u to ne vjerujem, majko.
             Ta, šta je reko? Što l’ poručio?
             (S kule dopire tiha pjesmica MEHE i FATE:
             “Kroz bašču mi Drina voda teče,
             krajem Drine badem drvo raste,
             il’ se vješaj il’ u Drinu skači!“
             Iza pjesme smijeh.)
            HASANAGINICA
             Do jutra nisam mogla usnuti.
             Dva bulbula su svu noć pjevala
             i s moje glave sanak tjerala.
             Tišinom noćnom tad sam slušala:
             pod kulu našu netko došao,
             sedefli on je igro tamburu.
             Do pendžera mi dopro muški glas.
             Da nije ašik tvoj, Sultanijo?
            SULTANIJA
             Ja nemam jošte svoga dilbera
             Da pjeva mi. Ti, majko, dobro znaš,
             Da ja još nikog sevdisala nisam.
            HASANAGINICA
             Ah, tako liepa bila pjesma noćna
             I tako mila! Pjesma ljubavna,
             Što aga mi je znao pjevati
             U dane mlade. Eno, slušaj ju!
             To sada djeca gore pjevaju
             Na kuli našoj. – S tim sam usnula.
            SULTANIJA
             I spavala si dugo, dugo – majko!
             Odskočilo je bilo jutros sunce
             Visoko već – a ti si spavala,
             I ja te nisam htjela buditi.
             A tada mrka, mrka ustala si,
             Pa k sluškinjama onda pošla si
             Sva slomljena i poništena, tužna.
             Među nas djecu nisi ni izišla,
             Već skrila se u svoje odaje.
             Za ručkom sve si tako ćutala,
             Da svi smo bili žalosni. A tada
             Ja nigdje naći nisam mogla te.
             Sve bježiš od nas.
            HASANAGINICA
             Bježala sam samo
             Pred onim njeg’vim strašnim riečima.
            SULTANIJA
             Ta, kakvim, majko, kakvim riečima?
             Daj, reci svojoj kćerci jedinoj,
             jer “jedinom” me svojom zoveš ti,
             ko sestra da sam tvoja. Reci mi!
             I lakše će ti biti, kad mi rečeš...
            HASANAGINICA
             Nek reče ti Husejin! Ja ne mogu?
             Jer to je tako strašno. – Tamo je!
             Oj Huso, starče, amo dođi sada!
            HUSEJIN
             (digao se s tratine)
             Zove li to hanuma baš mene?
            HASANAGINICA
             Da, tebe, tebe! Samo tebe čujem
             Svu noćas noć i cieli danas dan.
             Ded kaži sada tu pred djevojkom,
             što reko si mi sinoć. Sve nam reci,
             jer i ja hoću čuti drugi put.
            HUSEJIN
             (došao naprijed)
             Što li ću vam kazivati jade!
             Dosta ih je jednom čuti bilo.
            SULTANIJA
             Kaži, Huso, lakše će nam biti!
             Kaži, pa da utješimo majku!
            HUSEJIN
             Kad zajaših konja lastavicu
             i kad dođoh aginu šatoru,
             sjedi aga mrko pred šatorom.
             Uza nj majka, uza nj je sestrica,
             uzа nj svieta i askera vojska.
             {{“Selam(208)}} {{alejć(208)}}! Aga Hasanaga!
             Evo tebi Huso selam nosi
             a od tvoje ljube i dječice,
             da te pitam, jesi li prizdravio
             I hoćeš li skoro bielom dvoru,
             da mi tebe, ago, dočekamo!”
             Ćuti aga, ništa ne govori,
             već pogleda majku i sestricu,
             pа na mene oči naoblači:
             ”Vrat se natrag, otkuda si došo!
             Isporuči Hasanaginici:
             Kada sutra na noćište panem,
             nek me mlada ne čeka u dvoru –
            HASANAGINICA
             Oh, “ni u dvoru, ni u rodu mome!”
             On taki meni haber naslao!
            HUSEJIN
             “Ni u dvoru, ni u rodu mome”,
             tako reče – ja se {{obeznani(210)}}’.
             Samo gledam, vjerovat ne mogu.
             “Idi, idi, u što si sad stao?
             Treba li ti jedno dvaput reći?
             Valja da si već podjetinjio,
             igrajuć se s dječicom po dvoru!”
             “Ago!” šanem, “nemoj, dobri ago,
             nemoj griešit duše na hanumi!
             Nije ovo da se šališ vrieme...”
             A on trže brza {{samokresa(211)}},
             dа ne strugnuh, ubi me ko zeca!
             Takog agu još ne vidjeh nigda.
             Jeste ljutit aga Hasanaga.
            SULTANIJA
             Zar majku nam je potjerao babo?
             Аl’ zašto, zašto?
			`,
    author: `Milan Ogrizović`,
    year: false,
    video: false,
    audio: false,
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
            title: 'po sadržaju',
            right: false,
          },
        ],
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
  {
    id: 27,
    title: 'Umjetnička književnost - Drama',
    subtitle: 'Јазавац пред судом ',
    subtitleDescr: '(Одломак)',
    type: essay,
    text: `СУДАЦ: Па ти, Давиде, ниси, како видим, будала?
            ДАВИД: Ко каже да сам будала?
            СУДАЦ: Не каже нико, него... Како ти можеш, божји човјече, тужити јазавца?
            ДАВИД: А како ти мене јопе’ мореш тако питати? Зар ти мислиш, болан, да ја не знам да овај ваш цар има за свашто закон? Знам ја то, знам: добро ја то знам. Немој мислити да не знам!
            СУДАЦ: Ама, ето, Давиде, да речемо да има закон и за јазавце, опет је то некако незгодно. Бистар си и паметан човјек, промисли се... Ти знаш, кад суд неког осуђује треба да зна колико је стар, је ли ожењен, има ли дјеце, како говори, које је вјере. Све је то потребно суду. Ето, које је вјере тај твој несретник?
            ДАВИД: Никакве! Да је икакве вјере, не би дир’о у моју сиротињу.
            СУДАЦ (смијуљи се): Је ли ожењен?
            ДАВИД: Јес’, ожењен је.
            СУДАЦ: По чему знаш?
            ДАВИД: Знам, ’вамо, по нечем. То не треба славни суд да зна. Срамота је то вође и помислити, а камоли изрећи. Ожењен је, ожењен!
            СУДАЦ: Има ли дјеце, враг га однио, кад је ожењен?
            ДАВИД: Има. О, да му видиш дјеце и вамилије! Пуна и’ долина више оне моје јадне и једине њивице што се зове Ни Давидова ни царска ни спа’иска.
            СУДАЦ: Како говори, Давиде, тај лопов, којим језиком?
            ДАВИД: То ти, главати господине, ’нако посигурно не умијем казати. Бркљачи ко и ти и ово дијете кад сте се нешто малоприје договарали. Забркљачи де, господине, мало на њег’ да видим ’оће ли...
            СУДАЦ (смије се, говори нешто и удара јазавца по њушци)
            ДАВИД: Види, господине, види како диже њушку, како те разумије! Види курвина сина како се {{ко(212)}} {{ђоја(212)}} ражалостио. Не претварај се, лопове један! Иако говориш господиновим језиком, то ти неће помоћи. Слободно, немој се претварати.
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
            ДАВИД (у себи): Е, мој синко, зар си ти то сад видио?... Не гријеши, дијете, душе. Не биједи ме код славног суда!... Ето, господине, казао сам све што си ме пит’о. Сад морате тог лопова по закону осудити.
            СУДАЦ: А име?
            ДАВИД: Име му је Јолпаз Давидов. Тако га свијет зове, а тако ће му и славни суд позивке писати, ако га данас не осудите на вјешала. Село му се зове Мелина, котар Бања Лука, окружје Бања Лука, а земља, мислим, главати господине, да ће и њему бити Босна. Кућна му је лумера, каже кнез, оне двије кантарске куке.
            `,
    author: `Петар Кочић`,
    year: false,
    video: false,
    audio: require('../assets/sounds/pronunciation/27.aac'),
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
