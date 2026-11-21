/* Uzun etkili enjektabl (depo) antipsikotikler
   enj: [[gün, etiket | null], ...]  — başlama zaman çizelgesindeki enjeksiyonlar
   oralGun: oral ek tedavi süresi (gün); oralAzalt: oral doz azaltılarak mı sürdürülür */
window.DEPOLAR = [
  {
    id: 'risperidon-depo', ad: 'Risperidon uzun etkili (mikroküre)', oral: 'risperidon', kusak: 'İkinci kuşak',
    aralik: '2 haftada bir', yer: 'Deltoid veya gluteal',
    test: 'Önce oral risperidon ile tolerabilite gösterilmeli.',
    baslama: '25 mg IM, 2 haftada bir', surdurum: '25–50 mg / 2 hafta', maks: '50 mg / 2 hafta',
    oralGun: 21, oralAzalt: false, oralEtiket: 'Oral risperidon (veya önceki antipsikotik): ilk enjeksiyondan sonra 3 hafta tam doz',
    enj: [[0, '25 mg'], [14, '25 mg'], [28, '25 mg'], [42, null], [56, null], [70, null], [84, null]],
    kararli: 'Asıl salım 3. haftada başlar; kararlı durum 4. enjeksiyondan sonra (6–8 hafta).',
    donusum: [['Oral risperidon ≤ 4 mg/gün', '25 mg / 2 hafta'], ['Oral risperidon > 4 mg/gün', '37,5 mg / 2 hafta düşünülür'], ['Yanıt yetersizse', '4 haftadan sık olmamak üzere 12,5 mg artış']],
    dikkat: ['İlk 3 hafta ilaç salımı çok azdır: oral örtüşme atlanırsa hasta korumasız kalır.', 'Doz değişikliğinin etkisi 3 hafta sonra görülür; 4 haftadan sık doz artırmayın.', 'Buzdolabında saklanır; uygulamadan önce oda sıcaklığına getirilir.', 'Prolaktin artışı ve EPS oral risperidon ile aynıdır.', 'Klinik gerekçe varsa 12,5 mg ile başlanabilir: böbrek ya da karaciğer yetmezliği, fluoksetin ya da paroksetin kullanımı (FDA etiketi, 1/2025).', 'Karbamazepin gibi indükleyiciler düzeyi düşürür: eklendikten sonra 4–8 hafta yakın izleyin; indükleyici kesilecekse dozu 2–4 hafta önce gözden geçirin.', 'Böbrek ya da karaciğer yetmezliğinde önce oral risperidon titre edilir (1. hafta 0,5 mg ×2, 2. hafta 2 mg/gün); 2 mg/gün tolere edilirse 25 mg ya da 12,5 mg ile başlanır.', 'FDA etiketinde 18 yaş altında güvenlilik ve etkinlik belirlenmemiştir.'],
    kacirma: 'Geciken dozu en kısa sürede uygulayın. Uzun aradan sonra kararlı durum bozulmuşsa 3 haftalık oral örtüşmeyi yineleyin.'
  },
  {
    id: 'paliperidon-aylik', ad: 'Paliperidon palmitat (aylık)', oral: 'paliperidon', kusak: 'İkinci kuşak',
    aralik: 'Ayda bir', yer: 'Yükleme dozları deltoid; sürdürüm deltoid veya gluteal',
    test: 'Önce oral paliperidon veya risperidon ile tolerabilite gösterilmeli.',
    baslama: '1. gün 150 mg + 8. gün 100 mg (ikisi de deltoid)', surdurum: '75 mg / ay (25–150 mg)', maks: '150 mg / ay',
    oralGun: 0, oralEtiket: 'Oral ek tedavi gerekmez: yükleme dozları hızla etkin düzey sağlar',
    enj: [[0, '150 mg'], [7, '100 mg'], [35, '75 mg'], [63, '75 mg']],
    kararli: 'Yükleme şemasıyla ilk haftada terapötik düzeye ulaşılır. 8. gün dozu ± 4 gün, aylık dozlar ± 7 gün esneyebilir.',
    donusum: [['Oral paliperidon 3 mg/gün', '25–50 mg / ay'], ['Oral paliperidon 6 mg/gün', '75 mg / ay'], ['Oral paliperidon 9 mg/gün', '100 mg / ay'], ['Oral paliperidon 12 mg/gün', '150 mg / ay'],
      ['Risperidon depo 25 mg / 2 hf', '50 mg / ay'], ['Risperidon depo 37,5 mg / 2 hf', '75 mg / ay'], ['Risperidon depo 50 mg / 2 hf', '100 mg / ay']],
    dikkat: ['Oral antipsikotik ilk enjeksiyon günü kesilebilir.', 'Başka bir depo antipsikotikten geçişte yükleme şeması uygulanmaz: sıradaki enjeksiyon günü sürdürüm dozuyla başlanır.', 'Böbrek yetmezliğinde doz azaltılır (kreatinin klirensi < 50 mL/dk ise önerilmez).', 'Prolaktin artışı belirgindir.', 'Kreatinin klirensi 50–80 mL/dk: 1. gün 100 mg, 8. gün 75 mg, sonra ayda 50 mg; en fazla 100 mg/ay (FDA etiketi, 9/2024; ABD\'de aynı dozlar palmitat tuzu olarak 156, 117, 78 mg diye yazılır).', 'Güçlü CYP3A4 ve P-glikoprotein indükleyicilerinden doz aralığı boyunca kaçının; gerekiyorsa oral paliperidona geçmeyi düşünün.', '8. gün dozu atlandıysa: ilk enjeksiyondan 4 haftadan az geçtiyse 100 mg, 5. haftada 75 mg; 4–7 hafta geçtiyse bir hafta arayla iki kez 100 mg; 7 haftadan fazlaysa baştan yükleme.', 'FDA etiketinde endikasyon erişkinle sınırlıdır; 18 yaş altında belirlenmemiştir.'],
    kacirma: 'Sürdürümde 6 haftaya kadar gecikmede normal doza devam edin. 6 hafta–6 ay arası gecikmede iki enjeksiyonlu yeniden başlatma, 6 aydan uzun arada baştan yükleme şeması gerekir (KÜB şemasına bakın).'
  },
  {
    id: 'paliperidon-3aylik', ad: 'Paliperidon palmitat (3 aylık)', oral: 'paliperidon', kusak: 'İkinci kuşak',
    aralik: '3 ayda bir', yer: 'Deltoid veya gluteal',
    test: 'Yalnızca aylık paliperidon palmitat ile en az 4 ay stabil olan (son iki doz aynı) hastalarda.',
    baslama: 'Sıradaki aylık enjeksiyon yerine: aylık dozun 3,5 katı', surdurum: '175–525 mg / 3 ay', maks: '525 mg / 3 ay',
    oralGun: 0, oralEtiket: 'Oral ek tedavi gerekmez; doğrudan aylık formdan geçilir',
    enj: [[0, 'Aylık doz × 3,5'], [91, 'Aynı doz'], [182, 'Aynı doz']], sureGun: 196,
    kararli: 'İlk doz, sıradaki aylık enjeksiyon gününde (± 7 gün) yapılır; sonraki dozlar ± 2 hafta esneyebilir.',
    donusum: [['Aylık 50 mg', '175 mg / 3 ay'], ['Aylık 75 mg', '263 mg / 3 ay'], ['Aylık 100 mg', '350 mg / 3 ay'], ['Aylık 150 mg', '525 mg / 3 ay']],
    dikkat: ['Oral ilaçtan veya başka depodan doğrudan 3 aylık forma geçilmez.', 'Doz ayarı gerekiyorsa etkisi aylar sonra görülür: stabil olmayan hastada aylık forma dönün.', 'Kesildikten sonra ilaç 1 yıla kadar dolaşımda kalabilir.', 'Kreatinin klirensi 50 mL/dk altında önerilmez; 50–80 mL/dk ise doz önce aylık formda ayarlanır, sonra geçilir (FDA etiketi, 1/2025).', 'Güçlü CYP3A4 ve P-glikoprotein indükleyicilerinden doz aralığı boyunca kaçının.', 'ABD\'de dozlar palmitat tuzu olarak yazılır: 273, 410, 546, 819 mg (bu rehberdeki 175, 263, 350, 525 mg ile aynı).'],
    kacirma: '3,5–4 ay arası gecikmede en kısa sürede uygulayın. 4–9 ay arası gecikmede aylık formla yeniden başlatma şeması; 9 aydan uzun arada aylık formla baştan başlayın.'
  },
  {
    id: 'aripiprazol-aylik', ad: 'Aripiprazol uzun etkili (aylık)', oral: 'aripiprazol', kusak: 'İkinci kuşak',
    aralik: 'Ayda bir (en az 26 gün arayla)', yer: 'Deltoid veya gluteal',
    test: 'Önce oral aripiprazol ile tolerabilite gösterilmeli.',
    baslama: '400 mg IM + 14 gün oral aripiprazol 10–20 mg/gün', surdurum: '400 mg / ay (yan etkide 300 mg)', maks: '400 mg / ay',
    oralGun: 14, oralAzalt: false, oralEtiket: 'Oral aripiprazol 10–20 mg/gün: ilk enjeksiyondan sonra 14 gün',
    enj: [[0, '400 mg'], [28, '400 mg'], [56, '400 mg'], [84, null]],
    kararli: 'Kararlı durum 4. enjeksiyonda. Alternatif (iki enjeksiyonlu başlama): aynı gün farklı bölgelere iki ayrı 400 mg enjeksiyon + tek doz oral 20 mg; sonrasında oral ek tedavi gerekmez.',
    donusum: [['Standart', '400 mg / ay'], ['CYP2D6 zayıf metabolizör', '300 mg / ay'], ['Güçlü CYP2D6 veya CYP3A4 inhibitörü (> 14 gün)', '300 mg / ay'], ['Her iki inhibitör birlikte', '200 mg / ay'], ['CYP3A4 indükleyici (karbamazepin)', 'Birlikte kullanmaktan kaçının']],
    dikkat: ['Başka antipsikotikten geçiliyorsa önce oral aripiprazole geçip stabilize edin, sonra depoya başlayın.', 'Akatizi ve uykusuzluk ilk haftalarda görülebilir.', 'Fluoksetin, paroksetin gibi inhibitörlerle doz azaltın.', 'CYP2D6 zayıf metabolizörü ayrıca CYP3A4 inhibitörü alıyorsa 200 mg/ay; iki enjeksiyonlu başlama bu hastada ve iki inhibitörü birlikte alanlarda kullanılmaz (FDA etiketi, 3/2025).', 'Atlanan doz: 2. ya da 3. dozda 4–5 hafta, sonraki dozlarda 4–6 hafta arası gecikmede oral ek tedavi gerekmeden en kısa sürede uygulanır.', 'FDA etiketinde endikasyon erişkinle sınırlıdır (şizofreni, bipolar I sürdürüm).'],
    kacirma: '2. veya 3. doz 5 haftadan, 4. ve sonraki dozlar 6 haftadan fazla gecikirse enjeksiyonla birlikte 14 gün oral aripiprazol yeniden başlanır.'
  },
  {
    id: 'olanzapin-pamoat', ad: 'Olanzapin pamoat', oral: 'olanzapin', kusak: 'İkinci kuşak',
    aralik: '2 veya 4 haftada bir', yer: 'Yalnızca derin gluteal',
    test: 'Önce oral olanzapin ile tolerabilite ve yanıt gösterilmeli.',
    baslama: 'Oral doza göre: ilk 2 ay yükleme dozu, sonra sürdürüm dozu', surdurum: '150–300 mg / 2 hafta veya 300–405 mg / 4 hafta', maks: '300 mg / 2 hafta veya 405 mg / 4 hafta',
    oralGun: 0, oralEtiket: 'Oral ek tedavi gerekmez; her enjeksiyondan sonra 3 saat gözlem',
    enj: [[0, '210–300 mg'], [14, null], [28, null], [42, null], [56, 'Sürdürüm dozu'], [70, null], [84, null]],
    kararli: 'İlk 2 ay daha yüksek (yükleme) doz, sonrasında sürdürüm dozu verilir.',
    donusum: [['Oral 10 mg/gün · ilk 2 ay', '210 mg / 2 hf veya 405 mg / 4 hf'], ['Oral 10 mg/gün · sürdürüm', '150 mg / 2 hf veya 300 mg / 4 hf'],
      ['Oral 15 mg/gün · ilk 2 ay', '300 mg / 2 hf'], ['Oral 15 mg/gün · sürdürüm', '210 mg / 2 hf veya 405 mg / 4 hf'],
      ['Oral 20 mg/gün · ilk 2 ay', '300 mg / 2 hf'], ['Oral 20 mg/gün · sürdürüm', '300 mg / 2 hf']],
    dikkat: ['Enjeksiyon sonrası deliryum/sedasyon sendromu (yaklaşık her 1400 enjeksiyonda 1): sedasyon, konfüzyon, dizartri, ataksi, koma.', 'Her enjeksiyondan sonra sağlık kuruluşunda en az 3 saat gözlem zorunludur; hasta o gün araç kullanmamalı ve eve refakatçiyle gitmelidir.', 'Kilo artışı ve metabolik etkiler oral olanzapin ile aynıdır.', 'Düşkün ya da hipotansiyona yatkın hastada 4 haftada bir 150 mg ile başlanması düşünülür (FDA etiketi, 1/2025).', 'Fluvoksamin olanzapin düzeyini artırır: daha düşük doz düşünün. Karbamazepin klirensi yaklaşık %50 artırır.', 'ABD\'de yalnızca kayıtlı merkezlerde, risk yönetim programı kapsamında uygulanır; 18 yaş altında güvenlilik ve etkinlik belirlenmemiştir.'],
    kacirma: 'Geciken dozu en kısa sürede uygulayın; uzun aradan sonra yükleme dozunu yeniden değerlendirin.'
  },
  {
    id: 'haloperidol-dekanoat', ad: 'Haloperidol dekanoat', oral: 'haloperidol', kusak: 'Birinci kuşak',
    aralik: '4 haftada bir', yer: 'Derin gluteal',
    test: 'Önce oral haloperidol ile tolerabilite gösterilmeli.',
    baslama: 'Günlük oral dozun 10–15 katı (ilk doz en fazla 100 mg)', surdurum: '50–200 mg / 4 hafta', maks: '300 mg / 4 hafta',
    oralGun: 28, oralAzalt: true, oralEtiket: 'Oral haloperidol: ilk 1–2 enjeksiyon boyunca azaltılarak sürdürülebilir',
    enj: [[0, 'Oral doz × 10–15'], [28, null], [56, null], [84, null]],
    kararli: 'Doruk düzey 3–9. günde; kararlı durum 2–4 ayda. Yarı ömür yaklaşık 3 hafta.',
    donusum: [['Oral 5 mg/gün', '50–75 mg / 4 hafta'], ['Oral 10 mg/gün', '100–150 mg / 4 hafta'], ['İlk doz 100 mg\'ı aşacaksa', 'Kalanı 3–7 gün sonra ikinci enjeksiyonla']],
    dikkat: ['EPS, akatizi ve geç diskinezi riski yüksektir; akut distoni için antikolinerjik hazır bulundurun.', 'Susam yağı içerir (alerji sorgusu).', 'QT uzaması açısından başlangıç EKG.', 'Kontrendikasyon (FDA etiketi, 11/2020): ağır santral sinir sistemi depresyonu ya da koma, Parkinson hastalığı, Lewy cisimcikli demans.', 'Damar içine verilmez. Hipotansiyon gelişirse adrenalin kullanılmaz.', 'CYP3A4 ve CYP2D6 inhibitörleri (itrakonazol, ritonavir, paroksetin) düzeyi artırır; karbamazepin, fenitoin, rifampisin düşürür: dozu buna göre ayarlayın.', 'FDA etiketinde pediatrik güvenlilik ve etkinlik belirlenmemiştir.'],
    kacirma: 'Geciken dozu en kısa sürede uygulayın; belirti alevlenirse geçici oral ek tedavi verin.'
  },
  {
    id: 'zuklopentiksol-dekanoat', ad: 'Zuklopentiksol dekanoat', oral: 'zuklopentiksol', kusak: 'Birinci kuşak',
    aralik: '2–4 haftada bir', yer: 'Derin gluteal',
    test: 'Test dozu 100 mg; en az 1 hafta sonra tedavi dozuna geçilir.',
    baslama: 'Test dozu 100 mg → 1 hafta sonra 200–400 mg', surdurum: '200–400 mg / 2–4 hafta', maks: '600 mg / hafta',
    oralGun: 7, oralAzalt: true, oralEtiket: 'Oral zuklopentiksol: ilk enjeksiyondan sonraki hafta azaltılarak kesilir',
    enj: [[0, 'Test 100 mg'], [7, '200–400 mg'], [21, null], [35, null], [49, null], [63, null], [77, null]],
    kararli: 'Doruk düzey 4–7. günde; kararlı durum yaklaşık 3 ayda.',
    donusum: [['Oral günlük doz (mg) × 8', '2 haftada bir depo dozu (mg)'], ['Oral 25 mg/gün', '200 mg / 2 hafta'], ['Oral 50 mg/gün', '400 mg / 2 hafta']],
    dikkat: ['Sedasyon ve EPS sık görülür.', 'Zuklopentiksol asetat (kısa etkili, 2–3 gün) ile karıştırmayın: farklı preparattır.', 'Ajitasyon ve agresyonun eşlik ettiği psikozda tercih edilir.', 'İngiltere ürün bilgisi (Clopixol, 4/2026): 200–500 mg, 1–4 haftada bir; tek enjeksiyonda en fazla 600 mg. Gluteal üst dış kadran ya da uyluk yan yüzü; 2 mL\'yi aşan hacim iki bölgeye bölünür.', 'Yaşlı ya da düşkün hastada başlangıç dozunun ¼–½\'si. Böbrek yetmezliğinde ve karaciğer yetmezliğinde yarı doz.', 'Kontrendikasyon: dolaşım kollapsı, bilinç baskılanması (alkol, barbitürat, opioid), koma.', 'Lityumla birlikte kullanımdan kaçının (nörotoksisite, QT); CYP2D6 inhibitörleri düzeyi artırır. Çocuklarda önerilmez.'],
    kacirma: 'Geciken dozu en kısa sürede uygulayın.'
  },
  {
    id: 'flupentiksol-dekanoat', ad: 'Flupentiksol dekanoat', oral: null, kusak: 'Birinci kuşak',
    aralik: '2–4 haftada bir', yer: 'Derin gluteal',
    test: 'Test dozu 20 mg; en az 1 hafta sonra tedavi dozuna geçilir.',
    baslama: 'Test dozu 20 mg → 1 hafta sonra 20–40 mg', surdurum: '50 mg / 4 hafta – 300 mg / 2 hafta', maks: '400 mg / hafta',
    oralGun: 7, oralAzalt: true, oralEtiket: 'Oral flupentiksol: ilk enjeksiyondan sonraki hafta azaltılarak kesilir',
    enj: [[0, 'Test 20 mg'], [7, '20–40 mg'], [21, null], [35, null], [49, null], [63, null], [77, null]],
    kararli: 'Doruk düzey 4–7. günde; kararlı durum yaklaşık 3 ayda.',
    donusum: [['Oral günlük doz (mg) × 4', '2 haftada bir depo dozu (mg)'], ['Oral 10 mg/gün', '40 mg / 2 hafta']],
    dikkat: ['EPS ve akatizi sık; sedasyon zuklopentiksole göre azdır.', 'Aktive edici olabilir: ajite ve aşırı uyarılmış hastalarda uygun değildir.', 'İngiltere ürün bilgisi (Depixol, 1/2021): yalnızca oral tedaviyle stabilleşmiş hastada. Tek enjeksiyonda en fazla 400 mg. Gluteal üst dış kadran ya da uyluk yan yüzü; 2 mL\'yi aşan hacim iki bölgeye bölünür.', 'Yaşlı ya da düşkün hastada başlangıç dozunun ¼–½\'si. Karaciğer yetmezliğinde özel dikkat ve serum düzeyi izlemi.', 'Kontrendikasyon: dolaşım kollapsı, bilinç baskılanması, koma. İntihar düşüncesi ürün bilgisinde ayrı uyarıdır.', 'Lityumla birlikte kullanımdan kaçının (nörotoksisite, QT). Çocuklarda önerilmez.'],
    kacirma: 'Geciken dozu en kısa sürede uygulayın.'
  }
];
