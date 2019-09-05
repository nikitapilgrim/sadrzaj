export default [
  {
    id: 1,
    title: 'Narodna književnost',
    subtitle: 'Majka Fatu kroz tri gore viče',
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
];