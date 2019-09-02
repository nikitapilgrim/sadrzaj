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
            right: true
          },
          {
            title: 'događaji',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 2nd question',
        question: 'Prema kome djevojka ispoljava osjećanja:',
        answers: [
          {
            title: 'samo prema majci',
            right: true
          },
          {
            title: 'događaji',
            right: false
          },
          {
            title: 'i prema majci i prema mladiću',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 3rd question',
        question: 'O čemu majka misli i govori?',
        answers: [
          {
            title: 'o „bjeljenju platna“, odnosno o poslu zbog koga je djevojka pošla',
            right: false
          },
          {
            title: 'o tome kako će izgrditi kćerku',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 4th question',
        question: 'O čemu kćerka misli i govori?',
        answers: [
          {
            title: 'da ne može oprati rublje zbog mutne vode',
            right: false
          },
          {
            title: 'da se srela sa dragim i da posao nije ni započela',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 5th question',
        question: 'Razlike u mišljenju su izražene:',
        answers: [
          {
            title: 'samo brojevima',
            right: true
          },
          {
            title: 'samo riječima',
            right: false
          },
          {
            title: 'i brojevima i riječima',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 6th question',
        question: '„…dragi mi je vodu zamutio!“ je:',
        answers: [
          {
            title: 'izgovor što se djevojka predugo zadržala',
            right: false
          },
          {
            title: 'činjenica da je dragi konjem prešao preko vode i zamutio je pa zbog toga djevojka nije mogla „ubjeliti platno“.',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 7th question',
        question: 'Kroz djevojčino „odzivanje“ (odgovaranje majci) se naslućuje:',
        answers: [
          {
            title: 'ljutnja',
            right: false
          },
          {
            title: 'radost zbog susreta sa dragim“.',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 8th question',
        question: 'Kćerka i majka su u:',
        answers: [
          {
            title: 'bliskom odnosu',
            right: true
          },
          {
            title: 'u sukobu',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 9th question',
        question: 'Kletvom se izražava:',
        answers: [
          {
            title: 'djevojčina želja da ostvari sreću sa svojim momkom',
            right: true
          },
          {
            title: 'djevojčina želja da se osveti momku',
            right: false
          }
        ]
      },
      {
        title: 'This is title for 10th question',
        question: 'Pjesma nam dočarava…',
        answers: [
          {
            title: 'djevojčinu tugu',
            right: false
          },
          {
            title: 'atmosferu sreće',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 11th question',
        question: 'Lirske narodne pjesme ispjevane su u:',
        answers: [
          {
            title: 'lirskom osmercu',
            right: false
          },
          {
            title: 'lirskom desetercu',
            right: true
          }
        ]
      },
      {
        title: 'This is title for 12th question',
        question: 'Sevdah je arapska riječ i znači:',
        answers: [
          {
            title: 'praznik',
            right: true
          },
          {
            title: 'ljubav, ljubavna čežnja, ljubavni zanos',
            right: false
          }
        ]
      },
    ]
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
            right: true
          },
          {
            title: 'baštu sa cvijećem',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Cvjetovi u ovoj pjesmi imaju…',
        answers: [
          {
            title: 'simbolično značenje',
            right: true
          },
          {
            title: 'onomatopejsko značenje',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Šta o mladićevim osjećanjima govori pitanje: „Dušo moja, u bostanu kado, / kako ti je u bostanu samoj?“',
        answers: [
          {
            title: 'da je mladić zaboravio djevojku',
            right: false
          },
          {
            title: 'mladićevu brigu, ljubav i tugu',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Uloga hiperbole u predstavljanju djevojčinih osjećanja je:',
        answers: [
          {
            title: 'da opiše prirodu koja je okružuje',
            right: false
          },
          {
            title: 'dada stvori jasnu sliku o njenoj tuzi, bolu',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Cvijet je simbol…:',
        answers: [
          {
            title: 'ljubavi, nježnosti, pažnje, ljepote',
            right: true
          },
          {
            title: 'rastanka i zaborava',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pridjevi koji stoje uz imenice i bliže ih određuju su…',
        answers: [
          {
            title: 'sinonimi',
            right: false
          },
          {
            title: 'epiteti',
            right: true
          }
        ]
      }
    ]
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
            right: false
          },
          {
            title: 'o nekom događaju, ali su prožete snažnim emocijama',
            right: true
          },
          {
            title: 'isključivo o bojevima i junacima',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Balade su…',
        answers: [
          {
            title: 'izrazito tužne pjesme',
            right: true
          },
          {
            title: 'vesele, šaljive pjesme',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Stihovi „Nije blago ni srebro ni zlato, / već je blago što je srcu drago“, samostalno upotrijebljeni predstavljaju:',
        answers: [
          {
            title: 'zagonetku',
            right: false
          },
          {
            title: 'poslovicu',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Aliteracija je…',
        answers: [
          {
            title: 'uzastopno ponavljanje istog samoglasnika u nizu riječi',
            right: false
          },
          {
            title: 'uzastopno ponavljanje istog suglasnika u nizu riječi',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pjesma se završava gradacijom. U njoj se osjećanja i slike nižu prema:',
        answers: [
          {
            title: 'težini',
            right: true
          },
          {
            title: 'zanimljivosti',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Omer i Mejrima su simbol…',
        answers: [
          {
            title: 'tragične ljubavi',
            right: true
          },
          {
            title: 'davno prošlog vremena',
            right: false
          }
        ]
      }
    ]
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
            right: true
          },
          {
            title: 'Bolji ti je dram smijeha, nego tovar blaga.',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Drugi dio priče najavljuje mudrost:',
        answers: [
          {
            title: 'Jedna suza može vrijediti više od tovara smijeha.',
            right: false
          },
          {
            title: 'I jedna suza može nekad vrijediti više od tovara zlata.',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'O čijoj je suzi ovdje riječ?',
        answers: [
          {
            title: 'trgovčevoj',
            right: false
          },
          {
            title: 'majčinoj',
            right: true
          },
          {
            title: 'djetetovoj',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Koja bi poslovica odgovarala trgovčevom postupku (dao je somun sirotici iako je u njegovoj kući nestalo hrane):',
        answers: [
          {
            title: 'Dobro se dobrim vraća.',
            right: true
          },
          {
            title: 'Dobar i lud su braća.',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pričalac je ispričao priču da bi one koji su je slušali…',
        answers: [
          {
            title: 'poučio dobroti',
            right: true
          },
          {
            title: 'zabavio',
            right: false
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: ' Umjetnička književnost - Roman',
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
            right: false
          },
          {
            title: 'Nobelove nagrade',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'U romanima se prikazuje…',
        answers: [
          {
            title: 'cijeli život jednog lika',
            right: true
          },
          {
            title: 'jedan važan događaj iz života književnog lika',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Slikajući nesklad između ribareve snage i težine borbe sa ribom, pisac se poslužio stilskom figurom koja se zove…',
        answers: [
          {
            title: 'kontrast',
            right: true
          },
          {
            title: 'simbol',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Ribareve riječi upućene ribi: „Nikad nisam vidio većeg, ljepšeg, mirnijeg ili plemenitijeg stvora od tebe, sestro“, izražavaju…',
        answers: [
          {
            title: 'zadovoljstvo zbog dobrog ulova',
            right: false
          },
          {
            title: 'saznanje da narušava sklad i ljepotu prirode',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Legenda je…',
        answers: [
          {
            title: 'istinita priča o nekom važnom događaju ili ličnosti.',
            right: false
          },
          {
            title: 'priča sa nestvarnim elementima o nekom važnom događaju ili ličnosti.',
            right: true
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: ' Umjetnička književnost - Roman',
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
            right: true
          },
          {
            title: 'mislio da će ostati da živi u dječakovoj prostranoj kući',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Šta je pripovjedača privlačilo na druženje sa dječakom za vrijeme kišnih dana?',
        answers: [
          {
            title: 'nestrpljenje i dosada',
            right: false
          },
          {
            title: 'sjećanje na sopstveno djetinjstvo',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Pripovjedač kaže: „Taj tavan me je stvarao“, ali i druga mjesta i susreti. To znači da je…',
        answers: [
          {
            title: 'tavan bio dio njega kao životno iskustvo i veza sa prošlošću',
            right: true
          },
          {
            title: 'on bio dijete koje je voljelo da se krije',
            right: false
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Zlatna ptica iz mladih dana je...',
        answers: [
          {
            title: 'samo priča pripovjedačeve majke',
            right: false
          },
          {
            title: 'simbol mladalačkog gledanja na život koji nudi samo sreću',
            right: true
          }
        ]
      },
      {
        title: 'Odaberi tačan odgovor',
        question: 'Roman “Derviš i smrt“ iz koga je uzet ovaj odlomak, je…',
        answers: [
          {
            title: 'historijski roman',
            right: false
          },
          {
            title: 'psihološki roman',
            right: true
          }
        ]
      }
    ]
  }
]