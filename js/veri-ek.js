/* Uyarlama eki: özgün rehberde bulunmayan beş ilaç (topiramat, gabapentin, mianserin, sülpirid, tetrabenazin).
   Dozlar, onay yaşları, uyarılar ve etkileşimler resmî ürün bilgilerinden alınmıştır (kaynaklar UYARLAMA.md içinde).
   Etki düzeneği özetleri ve göreli yan etki puanları uyarlayanın değerlendirmesidir; ürün bilgisinden okunmamıştır.
   Bu dosya veri-metabolizma.js dosyasından sonra yüklenir. */
(function () {
  "use strict";
  var EK = [
    {
      id: "topiramat", ad: "Topiramat", sinif: "dd", altSinif: "Antiepileptik (psikiyatride endikasyon dışı)", grup: "dd",
      mek: "Antiepileptik. Zayıf karbonik anhidraz inhibisyonu metabolik asidoz, böbrek taşı ve terleme azalması uyarılarının temelidir. Psikiyatrik endikasyonda ruhsatı yoktur; bu kayıt epilepsi ve migren ürün bilgisine dayanır.",
      t12: "Yaklaşık 21 saat", t12s: 21, etki: "Hedef doza ulaşım 4 hafta ve üzeri (yavaş titrasyon)", form: "Tablet 25 / 50 / 100 / 200 mg; serpme kapsül 15 / 25 mg (ABD)",
      onay: [["Epilepsi (ek tedavi)", "≥ 2 yaş"], ["Epilepsi (monoterapi)", "≥ 2 yaş (ABD); İngiltere'de > 6 yaş"], ["Migren profilaksisi", "≥ 12 yaş (ABD); İngiltere'de yalnız erişkin"]],
      onayNot: "Psikiyatrik endikasyonda onay yok · endikasyon dışı",
      onayEri: [["Epilepsi"], ["Migren profilaksisi"]],
      ped: {
        bas: "Epilepsi ek tedavi (≥ 2 yaş): 25 mg gece ya da 1–3 mg/kg/gün · migren (≥ 12 yaş, ABD): 25 mg gece", artis: "Epilepsi: 1–2 haftada bir 1–3 mg/kg/gün · migren: haftada 25 mg", hedef: "Epilepsi ek tedavi: 5–9 mg/kg/gün (ikiye bölünmüş) · migren: 100 mg/gün", maks: "400 mg/gün (ABD, 2–16 yaş ek tedavi)",
        birim: "mg/gün", adim: [[0, 25], [7, 50], [14, 75], [21, 100]], bant: [100, 100], tavan: 100,
        not: ["Grafik ≥ 12 yaş migren profilaksisi şemasıdır (ABD etiketi): 1. hafta 25 mg gece, 4. haftada 50 mg ×2.", "Monoterapide (İngiltere, > 6 yaş) 0,5–1 mg/kg gece ile başlanır, 1–2 haftada bir 0,5–1 mg/kg/gün artırılır; hedef yaklaşık 2 mg/kg/gün (100 mg/gün).", "ABD etiketi 2–9 yaş monoterapide kiloya göre sürdürüm aralığı verir (ör. 23–31 kg: 200–350 mg/gün).", "Sıcak havada ve egzersizde terleme azalması ve ateş açısından aileyi uyarın; bol sıvı önerin.", "Bilişsel yan etki doza bağlıdır ve 6–11 yaşta daha belirgindir (ABD etiketi): okul performansını sorgulayın.", "Kız çocuklarda menarşta uzman değerlendirmesi ve gebelik önleme programı (İngiltere ürün bilgisi)."]
      },
      eri: {
        bas: "25 mg gece", artis: "Haftada bir 25–50 mg/gün", hedef: "Epilepsi ek tedavi: 200–400 mg/gün · migren: 100 mg/gün (ikiye bölünmüş)", maks: "Monoterapide 500 mg/gün (İngiltere); migrende 200 mg/gün'e dek çalışılmış",
        birim: "mg/gün", adim: [[0, 25], [7, 50], [14, 75], [21, 100]], bant: [100, 200], tavan: 400,
        not: ["Kreatinin klirensi 70 mL/dk altında başlangıç ve sürdürüm dozunun yarısı; hemodiyaliz günlerinde ek doz.", "Orta–ağır karaciğer yetmezliğinde dikkat.", "ABD etiketi (Topamax, 3/2025) ve İngiltere ürün bilgisi (emc, 6/2024) kullanıldı; İngiltere metninin gebelik ve farmakokinetik bölümleri okunamadı."]
      },
      surdurum: ["Etkin en düşük dozu hedefleyin; doz arttıkça bilişsel yan etki artar.", "Kilo, boy ve iştahı her vizitte izleyin: kilo kaybı ve büyümede yavaşlama bildirilmiştir.", "Serum bikarbonatına başlangıçta ve aralıklı bakın (ABD etiketi).", "Ani görme azalması ya da göz ağrısında ilacı kesip acil göz muayenesi isteyin."],
      kesme: { risk: 2, sure: "Erişkin epilepside haftada 50–100 mg/gün azaltım; çocukta 2–8 hafta", adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]],
        not: ["Ani kesme nöbet sıklığını artırabilir; epilepsisi olmayan hastada da kademeli kesin.", "Erişkin migren profilaksisinde haftada 25–50 mg/gün azaltın.", "Akut miyopi ya da açı kapanmasında kademeli azaltım beklenmeden kesilir."] },
      izlem: "topiramat", profil: { sed: 2, kilo: 0, gis: 1, akt: 0, istah: 2, kes: 2 },
      kutu: "Gebelikte majör malformasyon (yarık dudak-damak dahil) ve gebelik yaşına göre küçük bebek riski artar. Çocuk doğurma potansiyeli olan hastada İngiltere ürün bilgisi gebelik önleme programı ister: tedavi öncesi gebelik testi, tedavi boyunca ve kesildikten sonra en az 4 hafta etkili kontrasepsiyon, yılda en az bir gözden geçirme.",
      uyari: ["Metabolik asidoz (bikarbonatta ortalama 4 mmol/L düşüş); çocuklarda daha sık", "Terleme azalması ve hipertermi (özellikle küçük çocuk, sıcak ortam)", "Akut miyopi ve ikincil açı kapanması glokomu (çoğu ilk ayda); görme alanı defekti", "Böbrek taşı: bol sıvı; ketojenik diyet ve öteki karbonik anhidraz inhibitörleriyle risk artar", "Bilişsel yavaşlama, sözcük bulma güçlüğü, dikkat ve bellek sorunu; parestezi", "İştah azalması, kilo kaybı; çocukta boy ve kilo artışında yavaşlama, kemik mineral yoğunluğunda azalma", "Hiperamonyemi ve ensefalopati (valproatla daha sık); valproatla hipotermi", "Duygudurum değişikliği, depresyon, intihar düşüncesi (antiepileptik sınıf uyarısı)", "Stevens-Johnson sendromu, toksik epidermal nekroliz (nadir)"],
      etkilesim: ["Hormonal kontraseptif etkinliği azalabilir (özellikle 200 mg/gün üzerinde): bariyer yöntem ekleyin", "Karbamazepin ve fenitoin topiramat düzeyini düşürür; fenitoin düzeyi bazı hastalarda artabilir", "Valproatla hiperamonyemi ve hipotermi riski", "Lityum düzeyi değişebilir (azalma ya da artış bildirilmiştir): düzey izleyin", "Risperidon düzeyini düşürür (EAA %16–33); yan etki sıklığı artmıştır", "Asetazolamid, zonisamid gibi karbonik anhidraz inhibitörleriyle birlikte kullanmayın", "Alkol ve santral sinir sistemi depresanlarıyla birlikte önerilmez", "Hidroklorotiyazid topiramat düzeyini yaklaşık %29 artırır"],
      oz: ["tpm", "topamax"]
    },
    {
      id: "gabapentin", ad: "Gabapentin", sinif: "anks", altSinif: "Alfa-2-delta ligandı (psikiyatride endikasyon dışı)", grup: "diger",
      mek: "Pregabalinle aynı sınıftandır. Psikiyatrik endikasyonda ruhsatı yoktur; ürün bilgilerinde anksiyete yalnızca kesilme belirtisi ve yan etki olarak geçer. Bu kayıt epilepsi ve nöropatik ağrı ürün bilgisine dayanır.",
      t12: "5–7 saat (böbrek yetmezliğinde belirgin uzar)", t12s: 6, etki: "Titrasyon 3 gün; etkin doza 1–3 hafta", form: "Kapsül 100 / 300 / 400 mg; tablet 600 / 800 mg; oral solüsyon 250 mg/5 mL (ABD)",
      onay: [["Epilepsi (ek tedavi, parsiyel nöbet)", "≥ 3 yaş (ABD); İngiltere'de ≥ 6 yaş"], ["Epilepsi (monoterapi, İngiltere)", "≥ 12 yaş"]],
      onayNot: "Psikiyatrik endikasyonda onay yok · endikasyon dışı",
      onayEri: [["Epilepsi"], ["Periferik nöropatik ağrı, postherpetik nevralji"]],
      ped: {
        bas: "10–15 mg/kg/gün, üçe bölünmüş (≥ 12 yaş: erişkin şeması)", artis: "Yaklaşık 3 günde etkin doza", hedef: "5–11 yaş: 25–35 mg/kg/gün · 3–4 yaş: 40 mg/kg/gün (ABD)", maks: "50 mg/kg/gün (uzun süreli çalışmalarda tolere edilmiş)",
        birim: "mg/gün", adim: [[0, 300], [1, 600], [2, 900]], bant: [900, 1800], tavan: 3600,
        not: ["Grafik ≥ 12 yaş için erişkin başlangıç şemasıdır.", "3–12 yaşta nöropsikiyatrik yan etkiler plasebodan sıktır (ABD etiketi): duygusal değişkenlik %6, hostilite ve saldırganlık %5, hiperkinezi %5, dikkat ve okul performansında düşme.", "Dozlar arası süre 12 saati geçmemelidir.", "12 yaş altında böbrek yetmezliğinde doz çalışılmamıştır.", "Madde kullanım öyküsünü sorgulayın: kötüye kullanım ve bağımlılık bildirilmiştir."]
      },
      eri: {
        bas: "1. gün 300 mg ×1 · 2. gün 300 mg ×2 · 3. gün 300 mg ×3", artis: "2–3 günde bir 300 mg/gün", hedef: "900–3600 mg/gün (üçe bölünmüş); postherpetik nevraljide 1800 mg/gün üzerinde ek yarar gösterilmemiş", maks: "3600 mg/gün",
        birim: "mg/gün", adim: [[0, 300], [1, 600], [2, 900]], bant: [900, 3600], tavan: 3600,
        not: ["Böbrek yetmezliği (İngiltere ürün bilgisi, kreatinin klirensi): 50–79 mL/dk 600–1800 mg/gün · 30–49 mL/dk 300–900 mg/gün · 15–29 mL/dk 150–600 mg/gün · < 15 mL/dk 150–300 mg/gün. Hemodiyalizde her 4 saatlik seans sonrası ek doz.", "Opioid, benzodiazepin ya da solunum hastalığı varlığında düşük dozla başlayın.", "ABD etiketi (Neurontin, 4/2025) ve İngiltere ürün bilgisi (emc, 2/2026) kullanıldı; farmakokinetik bölümleri yalnızca özetten okundu."]
      },
      surdurum: ["Etkin en düşük dozu kullanın ve gereksinimi düzenli aralıklarla yeniden değerlendirin.", "Bağımlılık terapötik dozlarda da gelişebilir: reçete miktarını ve erken yenileme isteklerini izleyin.", "Sedasyon, baş dönmesi ve düşme riskini sorgulayın."],
      kesme: { risk: 2, sure: "En az 1 hafta; 3600 mg/gün dozda en az 3 hafta", adim: [[0, 100], [7, 50], [14, 0]],
        not: ["Kesilme belirtileri çoğunlukla 48 saat içinde başlar: anksiyete, uykusuzluk, bulantı, terleme.", "Epilepside ani kesme nöbet sıklığını artırabilir."] },
      izlem: "gabapentin", profil: { sed: 2, kilo: 1, gis: 1, akt: 0, kes: 2 },
      kutu: "Opioidler ve öteki santral sinir sistemi depresanlarıyla birlikte ya da solunum hastalığında ciddi, yaşamı tehdit eden solunum depresyonu bildirilmiştir. Kötüye kullanım ve bağımlılık terapötik dozlarda da gelişebilir.",
      uyari: ["Somnolans, baş dönmesi, ataksi, yorgunluk; düşme riski", "Çocukta duygusal değişkenlik, hostilite, hiperkinezi, düşünce ve dikkat sorunları", "Solunum depresyonu (opioid, sedatif, böbrek yetmezliği, ileri yaş ile risk artar)", "Kötüye kullanım, bağımlılık ve kesilme belirtileri", "İntihar düşüncesi (antiepileptik sınıf uyarısı)", "DRESS, Stevens-Johnson sendromu, anafilaksi ve anjiyoödem (nadir)", "Periferik ödem; akut pankreatit ve miyastenia gravis alevlenmesi bildirilmiştir"],
      etkilesim: ["Opioidlerle solunum depresyonu ve sedasyon: morfin gabapentin düzeyini yaklaşık %44 artırır, dozu azaltın", "Benzodiazepin, alkol ve öteki sedatiflerle additif etki", "Alüminyum ve magnezyum içeren antasitler emilimi yaklaşık %20–24 azaltır: gabapentini antasitten en az 2 saat sonra verin", "Hormonal kontraseptiflerle ve öteki antiepileptiklerle (fenitoin, valproat, karbamazepin, fenobarbital) etkileşmez"],
      oz: ["gbp", "neurontin"]
    },
    {
      id: "mianserin", ad: "Mianserin", sinif: "ad", altSinif: "Tetrasiklik antidepresan", grup: "addiger",
      mek: "Mirtazapinin öncülü olan tetrasiklik antidepresan. Sedatif etkisi belirgindir; gece dozu uykuya yardımcı olur. Ürün bilgisi kemik iliği baskılanması nedeniyle düzenli kan sayımı ister.",
      t12: "6–39 saat (iki fazlı; terminal faz)", t12s: 22, etki: "2–4 hafta", form: "Film tablet 30 mg (İngiltere)",
      onay: [], onayNot: "18 yaş altında kullanılmamalıdır (İngiltere ürün bilgisi)",
      onayEri: [["Depresyon", "İngiltere ve Avrupa; ABD'de onaysız"]],
      ped: {
        bas: "Önerilmez: İngiltere ürün bilgisi 18 yaş altında kullanılmamasını ister.", artis: "—", hedef: "—", maks: "—",
        not: ["Ürün bilgisinde pediatrik doz yoktur.", "Antidepresan sınıf uyarısı: çocuk ve ergende intihar düşüncesi ve düşmanca davranış plasebodan sık bildirilmiştir."]
      },
      eri: {
        bas: "30–40 mg/gün (gece tek doz ya da bölünmüş)", artis: "Yanıta göre kademeli", hedef: "30–90 mg/gün", maks: "Ürün bilgisi kesin üst sınır vermez; bölünmüş 200 mg/gün'e kadar iyi tolere edildiği belirtilir",
        birim: "mg/gün", adim: [[0, 30], [7, 60], [14, 90]], bant: [30, 90], tavan: 90,
        not: ["Grafik örnek şemadır; ürün bilgisi artış aralığı vermez.", "65 yaş üstünde başlangıç en fazla 30 mg/gün; gece dozu yeğlenir.", "Ağır karaciğer hastalığında kontrendike; böbrek yetmezliğinde özel doz ayarı verilmemiştir.", "İngiltere ürün bilgisi (emc, 6/2026) tam metin okundu."]
      },
      surdurum: ["İyileşmeden sonra aylarca aynı dozda sürdürün; ürün bilgisi dozun azaltılmamasını önerir.", "İlk 3 ay 4 haftada bir tam kan sayımı.", "Ateş, boğaz ağrısı, ağız yarası ya da enfeksiyon belirtisinde ilacı kesip hemen kan sayımı isteyin."],
      kesme: { risk: 2, sure: "2–4 hafta", adim: [[0, 100], [7, 50], [14, 25], [21, 0]],
        not: ["Ürün bilgisi kesme şeması vermez; kademeli azaltım genel antidepresan ilkesine göre önerilmiştir.", "MAOİ'ye geçişte ara: ürün bilgisine bakın (moklobemid için en az 1 hafta)."] },
      izlem: "mianserin", profil: { sed: 3, kilo: 2, gis: 0, akt: 0, kes: 2 },
      kutu: "Granülositopeni ve agranülositoz bildirilmiştir; çoğu tedavinin 4–6. haftasında ortaya çıkar ve ilaç kesilince genellikle düzelir. İlk 3 ay 4 haftada bir tam kan sayımı gerekir.",
      uyari: ["Kontrendikasyon: mani, ağır karaciğer hastalığı, aşırı duyarlılık", "Kemik iliği baskılanması: lökopeni, agranülositoz, aplastik anemi", "Sedasyon ve uyuklama (en sık yan etki)", "Nöbet eşiğini düşürür: epilepside çok dikkatli kullanın ya da kaçının", "İntihar düşüncesi ve klinik kötüleşme (özellikle başlangıçta ve doz değişiminde)", "Bipolar bozuklukta hipomani; karaciğer enzim yükselmesi", "Yakın zamanda miyokard enfarktüsü, kalp bloğu ve aritmide dikkat", "Emzirmede kontrendike; gebelikte zorunlu olmadıkça kullanılmaz"],
      etkilesim: ["MAOİ kesildikten sonra 2 hafta geçmeden başlanmaz", "Alkol ve santral sinir sistemi depresanlarıyla additif sedasyon", "Karbamazepin ve fenobarbital mianserin düzeyini düşürür; fenitoin düzeyini izleyin", "Atomoksetinle nöbet riski", "Varfarinle yakın izlem; antihipertansiflerle kan basıncı izlemi"],
      oz: ["tolvon", "lerivon"]
    },
    {
      id: "sulpirid", ad: "Sülpirid", sinif: "ap", altSinif: "Birinci kuşak antipsikotik (benzamid)", grup: "ap",
      mek: "Amisülpiridin öncülü olan benzamid antipsikotik. Düşük dozda uyarıcı, yüksek dozda antipsikotik etki gösterir; prolaktini belirgin artırır. Büyük bölümü değişmeden atılır.",
      t12: "Yaklaşık 8 saat", t12s: 8, etki: "Doruk düzey 3–6 saat; antipsikotik etki haftalar", form: "Tablet 200 mg (İngiltere)",
      onay: [], onayNot: "14 yaş altında klinik deneyim öneri için yetersiz (İngiltere ürün bilgisi)",
      onayEri: [["Akut ve kronik şizofreni", "İngiltere ve Avrupa; ABD'de onaysız"]],
      ped: {
        bas: "14 yaş altında önerilecek doz yoktur; 14 yaş ve üstünde erişkin dozları geçerlidir (İngiltere ürün bilgisi).", artis: "—", hedef: "—", maks: "—",
        not: ["Ürün bilgisi çocuklarda dikkatli kullanım ister.", "Ergenlerde prolaktin artışına bağlı belirtileri sorgulayın: adet düzensizliği, galaktore, jinekomasti."]
      },
      eri: {
        bas: "400–800 mg/gün, ikiye bölünmüş (sabah ve akşamüstü)", artis: "Yanıta göre", hedef: "Pozitif belirti: en az 400 mg ×2 · negatif belirti: 800 mg/gün altı · karma tablo: 400–600 mg ×2", maks: "1200 mg ×2 (2400 mg/gün)",
        birim: "mg/gün", adim: [[0, 400], [7, 800]], bant: [400, 1600], tavan: 2400,
        not: ["Grafik örnek şemadır; ürün bilgisi artış aralığı vermez.", "Böbrek yetmezliğinde dozu azaltın ve küçük adımlarla titre edin; ürün bilgisi klirens bandı vermez.", "Ajite, saldırgan ya da taşkın hastada düşük dozlar belirtileri ağırlaştırabilir.", "İngiltere ürün bilgisi (emc, 10/2019) tam metin okundu; metin 2019 tarihlidir."]
      },
      surdurum: ["Etkin en düşük dozu hedefleyin.", "Hareket bozukluğunu, prolaktin belirtilerini ve kiloyu düzenli izleyin.", "Açıklanamayan ateş ya da enfeksiyonda kan sayımı isteyin."],
      kesme: { risk: 2, sure: "4–8 hafta", adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]],
        not: ["Ürün bilgisi kademeli kesmeyi önerir; süre genel antipsikotik ilkesine göre verilmiştir.", "Ani kesmede bulantı, terleme, uykusuzluk ve hareket bozukluğu görülebilir."] },
      izlem: "antipsikotik", profil: { sed: 1, kilo: 1, eps: 2, prl: 3, qt: 2, ach: 0, kes: 2 },
      kutu: "QT aralığını uzatır. Başlamadan önce bradikardi (55/dk altı), hipokalemi, konjenital uzun QT ve QT uzatan eş ilaç sorgulanır. Demansı olan yaşlılarda antipsikotiklerle ölüm riski artmıştır.",
      uyari: ["Kontrendikasyon: feokromositoma, akut porfiri, prolaktine bağımlı tümör ve meme kanseri, levodopa ve antiparkinson ilaçlarla birlikte kullanım", "Hiperprolaktinemi (galaktore, meme ağrısı, adet düzensizliği)", "Ekstrapiramidal belirtiler, akatizi, parkinsonizm; nöroleptik malign sendrom", "QT uzaması, torsades de pointes", "Uykusuzluk, sedasyon, kilo artışı, kabızlık", "Nöbet eşiğini düşürür; venöz tromboemboli; lökopeni ve agranülositoz", "Mani ya da hipomani; düşük dozda ajitasyon", "Gebeliğin son üç ayında maruz kalan yenidoğanda ekstrapiramidal ve kesilme belirtileri"],
      etkilesim: ["Levodopa ve antiparkinson ilaçlarla (ropinirol dahil) kontrendike", "QT uzatan ilaçlarla birlikte önerilmez (amiodaron, sotalol, haloperidol, metadon, imipramin, lityum vb.)", "Lityumla ekstrapiramidal yan etki riski artar: nörotoksisite belirtisinde ikisini de kesin", "Antasit ve sükralfat emilimi azaltır: sülpiridi bunlardan 2 saat önce verin", "Alkolle birlikte önerilmez; antihipertansiflerle additif hipotansiyon"],
      oz: ["dogmatil", "sulpir"]
    },
    {
      id: "tetrabenazin", ad: "Tetrabenazin", sinif: "diger", altSinif: "VMAT2 inhibitörü (hareket bozukluğu)", grup: "yanetki",
      mek: "Veziküler monoamin taşıyıcı 2 (VMAT2) inhibitörü. Huntington koresi ve İngiltere'de antipsikotik değişikliğine yanıt vermeyen geç diskinezide kullanılır. Depresyon ve intihar düşüncesi en önemli riskidir.",
      t12: "Etkin metabolitler 5–7 saat", t12s: 6, etki: "Doz ayarı haftalar; en yüksek dozda 7 gün içinde yarar yoksa yarar beklenmez", form: "Tablet 25 mg (çentikli); ABD'de 12,5 mg da var",
      onay: [], onayNot: "Çocuklarda güvenlilik ve etkinlik belirlenmemiştir (İngiltere ve ABD)",
      onayEri: [["Huntington koresi"], ["Geç diskinezi", "orta–ağır, antipsikotik değişikliğine rağmen süren · İngiltere; ABD'de onaysız"]],
      ped: {
        bas: "Önerilmez: çocuklarda güvenlilik ve etkinlik belirlenmemiştir.", artis: "—", hedef: "—", maks: "—",
        not: ["Ürün bilgilerinde pediatrik doz ve tik bozukluğu endikasyonu yoktur."]
      },
      eri: {
        bas: "12,5 mg sabah (ABD) ya da 12,5–25 mg/gün (İngiltere)", artis: "ABD: haftada 12,5 mg/gün · İngiltere: 4–7 günde bir", hedef: "37,5–50 mg/gün, üçe bölünmüş", maks: "ABD: 50 mg/gün (tek doz en çok 25 mg); CYP2D6 genotipiyle hızlı ya da ara metabolizörde 100 mg/gün (tek doz en çok 37,5 mg) · İngiltere: 200 mg/gün",
        birim: "mg/gün", adim: [[0, 12.5], [7, 25], [14, 37.5], [21, 50]], bant: [37.5, 50], tavan: 100,
        not: ["50 mg/gün üzerine çıkmadan önce CYP2D6 genotipi istenir (ABD etiketi); zayıf metabolizörde üst sınır 50 mg/gün.", "Güçlü CYP2D6 inhibitörü (fluoksetin, paroksetin) alan hastada üst sınır 50 mg/gün, tek doz en çok 25 mg.", "5 günden uzun ara verildiyse 12,5 mg ×2 ile yeniden titre edin; 5 gün ve altında önceki dozla sürdürülür.", "Karaciğer yetmezliğinde derecesi ne olursa olsun kontrendike; böbrek yetmezliğinde çalışılmamıştır.", "İngiltere ürün bilgisi (emc, 12/2022) tam metin, ABD etiketi (Xenazine, 9/2017) ilk yarısı okundu."]
      },
      surdurum: ["Her vizitte depresyon ve intihar düşüncesini sorgulayın; aileyi belirtiler konusunda bilgilendirin.", "Akatizi, parkinsonizm ve yutma güçlüğünü izleyin; gelişirse dozu azaltın.", "Gereksinimi düzenli aralıklarla yeniden değerlendirin."],
      kesme: { risk: 1, sure: "Kademeli azaltım gerekmez", adim: [[0, 100], [1, 0]],
        not: ["Ürün bilgileri kademeli kesme istemez; kore 12–18 saat içinde geri döner.", "Nöroleptik malign sendrom kuşkusunda hemen kesilir."] },
      izlem: "tetrabenazin", profil: { sed: 3, kilo: 0, gis: 1, eps: 2, prl: 2, qt: 1, kes: 1 },
      kutu: "Kara kutu uyarısı (ABD): depresyon ve intihar düşüncesi ve davranışı. Etkin intihar düşüncesi olan ya da depresyonu tedavi edilmemiş hastada kontrendikedir. 12 haftalık çalışmada depresyon %19, plaseboda %0 bildirilmiştir.",
      uyari: ["Kontrendikasyon: etkin intihar düşüncesi, yeterince tedavi edilmemiş depresyon, karaciğer yetmezliği, MAOİ (14 gün ara), rezerpin (20 gün ara), parkinsonizm, emzirme (İngiltere)", "Sedasyon (%31), yorgunluk, uykusuzluk", "Akatizi (%19), parkinsonizm (%15), huzursuzluk", "Nöroleptik malign sendrom", "QTc uzaması (yaklaşık 8 ms): konjenital uzun QT ve aritmi öyküsünde kaçının", "Hiperprolaktinemi", "Yutma güçlüğü ve aspirasyon pnömonisi; ortostatik hipotansiyon"],
      etkilesim: ["Güçlü CYP2D6 inhibitörleri (fluoksetin, paroksetin, kinidin) etkin metabolit düzeyini 3–9 kat artırır: doz en çok 50 mg/gün", "MAOİ ile kontrendike (14 gün ara); rezerpin kesildikten sonra 20 gün beklenir", "Antipsikotiklerle parkinsonizm, akatizi ve nöroleptik malign sendrom riski artar", "QT uzatan ilaçlarla birlikte kullanmaktan kaçının", "Alkol ve sedatiflerle additif sedasyon; levodopanın etkisini azaltır", "Deutetrabenazin ve valbenazinle birlikte kullanılmaz"],
      oz: ["xenazine", "vmat2"]
    }
  ];

  var METAB_EK = {
    topiramat: { ozet: "Büyük bölümü değişmeden böbrekle atılır (ABD etiketinin özetine göre yaklaşık %70); proteine bağlanma %15–41. Enzim indükleyicileri (karbamazepin, fenitoin) düzeyini düşürür. Farmakokinetik bölümleri tam okunamadı.", sub: {}, inh: { "2C19": 1 }, ind: {}, diger: "Büyük bölümü böbrekle değişmeden", aktif: null, atilim: null, atilimYazi: "Başlıca idrarla, büyük bölümü değişmeden.", fe: 70, feYazi: "yaklaşık %70 (ABD etiketi özeti)", bobrek: "Kreatinin klirensi < 70 mL/dk: başlangıç ve sürdürüm dozunun yarısı. Hemodiyaliz günlerinde ek doz.", karaciger: "Orta–ağır bozuklukta dikkatli kullanın.", dusuren: ["Karbamazepin, fenitoin: topiramat düzeyi düşer"], artiran: ["Hidroklorotiyazid: düzey yaklaşık %29 artar"] },
    gabapentin: { ozet: "İnsanda metabolize olduğuna ilişkin kanıt yoktur ve plazma proteinlerine bağlanmaz; böbrekle atılır. Emilim doyurulabilir: biyoyararlanım doz arttıkça düşer (900 mg/gün'de yaklaşık %60, 4800 mg/gün'de %27). CYP üzerinden etkileşimi yoktur.", sub: {}, inh: {}, ind: {}, diger: "Metabolize olmaz; böbrekle atılır", aktif: null, atilim: null, atilimYazi: "Emilen ilaç değişmeden böbrekle atılır.", fe: 95, feYazi: "emilen bölümün tamamına yakını (metabolize olmaz)", bobrek: "Kreatinin klirensi 50–79 mL/dk: 600–1800 mg/gün; 30–49: 300–900; 15–29: 150–600; < 15: 150–300 mg/gün. Hemodiyaliz sonrası ek doz.", karaciger: "Ürün bilgisinde doz önerisi yoktur.", artiran: ["Morfin: düzey yaklaşık %44 artar"], dusuren: ["Alüminyum ve magnezyumlu antasitler: emilim %20–24 azalır"], cocuk: "5 yaş altında kg başına klirens daha yüksektir: 3–4 yaşta etkin doz 40 mg/kg/gün." },
    mianserin: { ozet: "Karaciğerde aromatik hidroksilasyon, N-oksidasyon ve N-demetilasyonla yıkılır; ürün bilgisi enzim adı vermez. Biyoyararlanım yaklaşık %70. İdrarla neredeyse tümüyle metabolit olarak atılır.", sub: {}, inh: {}, ind: {}, diger: "Karaciğer metabolizması (enzim belirtilmemiş)", aktif: null, atilim: null, atilimYazi: "Başlıca idrarla metabolit olarak; bir bölümü dışkıyla.", fe: 0, bobrek: "Özel doz ayarı verilmemiştir; dikkatli kullanın.", karaciger: "Ağır karaciğer hastalığında kontrendikedir.", dusuren: ["Karbamazepin, fenobarbital: düzey düşer"] },
    sulpirid: { ozet: "Ürün bilgisine göre dozun %95'i idrar ve dışkıda değişmeden bulunur; metabolizma ve enzim bilgisi verilmez. Proteine bağlanma yaklaşık %40. Doz böbrek işlevine göre ayarlanır.", sub: {}, inh: {}, ind: {}, diger: "Değişmeden atılım (idrar ve dışkı)", aktif: null, atilim: null, atilimYazi: "İdrar ve dışkıda toplam %95'i değişmeden; idrar payı ürün bilgisinde ayrılmamıştır.", fe: 0, bobrek: "Dozu azaltın ve küçük adımlarla titre edin (ürün bilgisi klirens bandı vermez).", karaciger: "Ürün bilgisinde bilgi yoktur.", dusuren: ["Antasit ve sükralfat: emilim azalır (2 saat ara)"] },
    tetrabenazin: { ozet: "Hızla etkin metabolitlerine (alfa ve beta dihidrotetrabenazin) dönüşür; bunlar CYP2D6 ile yıkılır. Güçlü CYP2D6 inhibitörleri ve zayıf metabolizör genotipi maruziyeti belirgin artırır. İdrarda %2'den azı değişmeden bulunur.", sub: { "2D6": 2 }, inh: {}, ind: {}, aktif: "Alfa ve beta dihidrotetrabenazin: etkin; yarı ömürleri yaklaşık 5–7 saat.", atilim: null, atilimYazi: "Başlıca idrarla metabolit olarak.", fe: 1, feYazi: "%2'nin altında", bobrek: "Çalışılmamıştır.", karaciger: "Derecesi ne olursa olsun kontrendikedir.", artiran: ["Paroksetin 20 mg: alfa metabolit EAA yaklaşık 3 kat, beta metabolit 9 kat artar", "Fluoksetin, kinidin (güçlü CYP2D6 inhibitörleri)"] }
  };

  var S = window.IZLEM;
  S.topiramat = { ad: "Topiramat", satir: [
    ["Serum bikarbonatı", [1, 0, 1, 1, 1], "Başlangıçta ve aralıklı (ABD etiketi). Hiperventilasyon, yorgunluk, iştahsızlıkta hemen bakın."],
    ["Kilo, boy, iştah", [1, 1, 1, 1, 1], "Kilo kaybı ve büyümede yavaşlama."],
    ["Görme yakınması", [0, 1, 1, 1, 1], "Ani bulanık görme ya da göz ağrısı: ilacı kesin, acil göz muayenesi."],
    ["Bilişsel işlev, okul performansı", [1, 1, 1, 1, 1], "Sözcük bulma, dikkat, bellek."],
    ["Gebelik testi ve kontrasepsiyon", [1, 2, 2, 2, 1], "Çocuk doğurma potansiyeli olan hastada; yılda en az bir gözden geçirme."],
    ["Amonyak", [0, 2, 2, 2, 2], "Açıklanamayan letarji, kusma ya da bilinç değişikliğinde."]
  ] };
  S.gabapentin = { ad: "Gabapentin", satir: [
    ["Böbrek işlevi", [1, 0, 0, 2, 1], "Doz kreatinin klirensine göre ayarlanır."],
    ["Sedasyon, baş dönmesi, düşme", [1, 1, 1, 1, 1], ""],
    ["Davranış değişikliği (çocuk)", [1, 1, 1, 1, 1], "Duygusal değişkenlik, hostilite, hiperkinezi."],
    ["Kötüye kullanım ve bağımlılık", [1, 1, 1, 1, 1], "Madde kullanım öyküsü; erken reçete yenileme istekleri."],
    ["Solunum riski", [1, 2, 2, 2, 2], "Opioid, sedatif ya da solunum hastalığı varsa düşük doz."]
  ] };
  S.mianserin = { ad: "Mianserin", satir: [
    ["Tam kan sayımı", [1, "4 haftada bir (ilk 3 ay)", 1, 2, 2], "Ateş, boğaz ağrısı, ağız yarası ya da enfeksiyonda ilacı kesip hemen bakın."],
    ["İntihar düşüncesi, klinik kötüleşme", [1, 1, 1, 1, 1], "Özellikle başlangıçta ve doz değişiminde."],
    ["Mani ya da hipomani belirtisi", [1, 1, 1, 1, 1], ""],
    ["Karaciğer işlev testleri", [2, 0, 2, 2, 2], "Ürün bilgisi takvim vermez; sarılık ya da belirti varlığında."],
    ["Kilo, sedasyon", [1, 1, 1, 1, 1], ""]
  ] };
  S.tetrabenazin = { ad: "Tetrabenazin", satir: [
    ["Depresyon ve intihar düşüncesi", [1, 1, 1, 1, 1], "Her vizitte; aileyi bilgilendirin."],
    ["Akatizi, parkinsonizm", [1, 1, 1, 1, 1], "Gelişirse dozu azaltın."],
    ["Yutma güçlüğü", [1, 1, 1, 1, 1], "Aspirasyon riski."],
    ["QT riski sorgusu / EKG", [2, 0, 0, 0, 2], "Kardiyak öykü ya da QT uzatan eş ilaç varsa."],
    ["CYP2D6 genotipi", [0, 2, 0, 0, 0], "50 mg/gün üzerine çıkılacaksa (ABD etiketi)."],
    ["Prolaktin", [0, 2, 2, 2, 2], "Belirti varlığında."]
  ] };

  /* TİTCK "Ek izlemeye tabi ilaçlar" listesi (ruhsatlı ilaçlar, 22.07.2026; kullanıcının eklediği Excel dosyası, 466 satır).
     Yalnızca bu rehberdeki etkin maddelerle eşleşen satırlar alınmıştır. */
  window.EK_IZLEM_TARIH = "22.07.2026";
  window.EK_IZLEM = {
    brekspiprazol: { kapsam: "Rexulti, Rebexip", tarih: "18.05.2022 (Rexulti), 22.07.2026 (Rebexip)" },
    guanfasin: { kapsam: "Arislow ER, Guago", tarih: "19.10.2021 (Arislow ER), 03.03.2023 (Guago)" },
    kariprazin: { kapsam: "Kaprazdi", tarih: "06.12.2024" },
    lurasidon: { kapsam: "lurasidon içeren tüm ilaçlar", tarih: "25.09.2025" },
    melatonin: { kapsam: "melatonin içeren tüm ilaçlar", tarih: "06.12.2024" },
    valproat: { kapsam: "valproat içeren tüm ilaçlar", tarih: "18.03.2015" },
    topiramat: { kapsam: "topiramat içeren tüm ilaçlar", tarih: "20.08.2024" },
    propranolol: { kapsam: "yalnız Hemangiol (infantil hemanjiyom çözeltisi)", tarih: "20.11.2018" }
  };

  EK.forEach(function (i) { i.metab = METAB_EK[i.id]; window.METAB[i.id] = METAB_EK[i.id]; window.ILACLAR.push(i); });
})();
