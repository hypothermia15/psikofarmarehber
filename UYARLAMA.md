# Uyarlama notu

Bu depo, **lipsumation** tarafından geliştirilen *Psikofarmakoloji Rehberi*'nin uyarlamasıdır.

**Bu uyarlamanın canlı sürümü:** https://hypothermia15.github.io/psikofarmarehber/

| | |
|---|---|
| **Özgün çalışma** | Psikofarmakoloji Rehberi, © 2026 lipsumation |
| **Özgün depo** | https://github.com/lipsumation/psikofarmarehber |
| **Özgün canlı sürüm** | https://lipsumation.github.io/psikofarmarehber/ |
| **Temel alınan özgün sürüm** | `ee60e63` (12 Kasım 2026) |
| **Uyarlayan** | Doç. Dr. Miraç Barış Usta, https://miracbarisusta.com |
| **Lisans** | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.tr); özgün çalışmayla aynı lisans. Tam metin: [LICENSE](LICENSE) |

Özgün yazar bu uyarlamayı onaylamış ya da desteklemiş değildir. Uyarlamada yapılan değişikliklerin sorumluluğu uyarlayana aittir.

## Yapılan değişiklikler

**13 Kasım 2026**

- Uygulamanın alt bilgisine kaynak, lisans ve uyarlayan bildirimi eklendi.
- Üst barda, marka adının ve hasta grubu seçicisinin altına uyarlayan satırı eklendi.
- İlk açılış: hasta grubu daha önce seçilmemişse rehber çocuk-ergen görünümüyle açılır ve karşılama penceresi gösterilmez. Erişkin görünümü üst bardaki seçiciden ya da bağlantıya `?kitle=eri` eklenerek açılır; tasarım, üst bardaki tasarım düğmesinden seçilir.
- Telefon görünümü: ana sayfadaki dört adımlı süreç şeridi 520 pikselin altında iki sütuna iner (taşma giderildi); klinik içerik değişmedi. Önbellek için dosya sürümü `v=15` yapıldı.
- README'nin başına uyarlama bildirimi eklendi; bu dosya oluşturuldu.
- Yayın: Site GitHub Pages ile `main` dalının kökünden yayınlanır. Özgün README'deki "Yayın" bölümü (`gh-pages` dalı) özgün depoya aittir; bu depoda `main` dalına gönderilen her değişiklik siteye yansır.

**21 Kasım 2026: DEHB ilaçlarında klinik içerik değişiklikleri**

Metilfenidat, lisdeksamfetamin ve viloksazin kayıtları güncel FDA etiketleriyle karşılaştırıldı (Concerta 4/2026, Vyvanse 9/2025, Qelbree 1/2025) ve aşağıdaki değişiklikler yapıldı. Değişiklikler uyarlayanın sorumluluğundadır.

| İlaç | Değişiklik | Dayanak |
|---|---|---|
| Lisdeksamfetamin | Çocukta başlangıç dozu "20–30 mg" yerine "30 mg" | Vyvanse etiketi, Bölüm 2.3 |
| Lisdeksamfetamin | Kapsül güçlerine 10 mg eklendi | Bölüm 3 |
| Lisdeksamfetamin | Böbrek yetmezliğinde üst sınır notu eklendi (ağır: 50 mg; son dönem: 30 mg) | Bölüm 2.5 |
| Metilfenidat | Uyarılara göz içi basıncı artışı/glokom ve OROS tablette gastrointestinal tıkanma riski eklendi | Concerta etiketi, Bölüm 5.8–5.10 |
| Metilfenidat | Etkileşimlere antihipertansifler, halojenli anestezikler ve risperidon eklendi | Bölüm 7 |
| Metilfenidat | "TCA, SSRI, antiepileptik ve varfarin düzeylerini artırabilir" cümlesi korundu; güncel ABD OROS etiketinde yer almadığı notu eklendi | Bölüm 7'de yok. AB ürün bilgilerinde yer aldığı bir arama sonucuna dayanır; AB metni ve Türkiye RİTALİN KÜB'ü okunamadı, **doğrulanmalıdır** |
| Metilfenidat | Ergende OROS üst sınırına "2 mg/kg/günü aşmadan" eklendi | Bölüm 2.3 |
| Viloksazin | Böbrek yetmezliği notu (eGFR < 30: başlangıç 100 mg, en çok 200 mg) ve pudinge serpme seçeneği eklendi | Qelbree etiketi, Bölüm 2.3–2.4 |

**21 Kasım 2026, ikinci tur:** Kalan altı DEHB ilacı da FDA etiketleriyle karşılaştırıldı (Strattera 6/2026, Intuniv 12/2019, Kapvay 2/2020, Focalin XR 10/2023, Adderall XR 9/2025, Provigil 1/2015). Doz, onay yaşı ve üst sınırlarda etiketle çelişen bir kayıt bulunmadı; hiçbir doz değiştirilmedi. Yalnızca ekleme ve açıklama yapıldı:

| İlaç | Ekleme | Dayanak |
|---|---|---|
| Atomoksetin | Uyarılara saldırgan davranış/düşmanlık ve aşırı duyarlılık; etkileşimlere antihipertansifler; forma "ABD'de 100 mg da var" | Strattera, Bölüm 3, 5.7, 5.8, Highlights |
| Guanfasin | Kalp iletim bozuklukları uyarısı; ek tedavide 4 mg üzeri çalışılmadığı notu; CYP3A4 için "güçlü ve orta düzey" ve "iki katına kadar" ifadeleri | Intuniv, Bölüm 2.2, 2.7, 5.3 |
| Guanfasin | "Valproat düzeyini artırabilir" cümlesi korundu; ABD etiketinde yer almadığı notu eklendi | Intuniv Bölüm 7'de yok; Türkiye KÜB'üyle **doğrulanmalıdır** |
| Klonidin | Onaylı uzatılmış salımlı formun etiket şeması not olarak eklendi; kalp iletim bozuklukları ve alerjik reaksiyon uyarıları | Kapvay, Bölüm 2.2, 5.4, 5.5 |
| Deksmetilfenidat | Priapizm, periferik vaskülopati ve glokom uyarıları; antihipertansif, halojenli anestezik ve risperidon etkileşimleri | Focalin XR, Bölüm 5.5–5.9, 7.1 |
| Amfetamin | Böbrek yetmezliği dozu; periferik vaskülopati ve nöbet uyarıları; trisiklik antidepresan ve proton pompa inhibitörü etkileşimleri | Adderall XR, Bölüm 2.6, 5.6, 5.7, 7.1 |

Bu turda denetlenemeyenler: yarılanma ömürleri (etiketlerin farmakokinetik bölümleri okunamadı); atomoksetinde CYP2D6 inhibitörleriyle "6–8 kat" artış; klonidinde "önce beta blokeri kesin" notu (uzatılmış salımlı form etiketinde yok, kısa etkili form etiketi okunmadı); kısa etkili amfetamin etiketi (≥ 3 yaş onayı, 40 mg üst sınır); modafinilde ketiapin ve aripiprazol örnekleri (etiket midazolam, triazolam ve siklosporini adlandırır). Intuniv, Kapvay ve Provigil için okunan etiketler en güncel sürüm olmayabilir. Klonidin ve modafinilin pediatrik dozları etiket dışı kullanıma dayanır ve etiketle karşılaştırılamaz.

Halojenli anestezik maddesindeki "ameliyat günü vermeyin" ifadesi etiketin tam cümlesiyle karşılaştırılmadı.

**22 Kasım 2026: antidepresanlar ve antipsikotikler**

On altı antidepresan ve on iki antipsikotik güncel FDA etiketleriyle karşılaştırıldı. Etiketlerin her birinin yalnızca ilk bölümü (endikasyon, doz, kontrendikasyon, uyarı başlıkları) okunabildi; etkileşim ve özel popülasyon bölümlerinin çoğu okunamadı.

Yapılan tek düzeltme: **risperidon**, otizmde irritabilite onay yaşı "5–16" yerine "5–17" (Risperdal etiketi 2/2021).

Bunun dışında hiçbir doz ya da onay bilgisi değiştirilmedi. Her ilaca etiket dayanaklı eklemeler yapıldı: eksik uyarı başlıkları (ör. QT uzaması, nöbet, dar açılı glokom, ortostatik hipotansiyon, lökopeni), böbrek ve karaciğer yetmezliğinde doz, MAOİ ile ara süreleri, enzim inhibitörü ve indükleyicileriyle doz ayarı. Eklenen her satır `git log -p` ile görülebilir.

Etiketle rehber arasında fark görülüp **değiştirilmeyen, yalnızca not düşülen** noktalar:

| İlaç | Rehber | FDA etiketi | Yapılan |
|---|---|---|---|
| Essitalopram | Çocukta başlangıç 2,5–5 mg, ergende 5–10 mg | Her iki pediatrik endikasyonda başlangıç 10 mg | Not eklendi; rehberin daha düşük başlangıcı korundu |
| Bupropion XL | Erişkin üst sınır 450 mg | Nöbet bölümünde 300 mg, özet bölümünde 450 mg (etiket içi tutarsızlık) | Not eklendi; **Türkiye KÜB'üyle doğrulanmalı** |
| Amitriptilin | Onay: depresyon ≥ 12 yaş | Kutulu uyarı pediatrik onay bulunmadığını söyler; 12 yaş altında önerilmez, ergen dozu verilir | Onay satırına açıklama eklendi |
| Ketiapin | Erişkin üst sınır 800 mg | Şizofrenide 750 mg, bipolar depresyonda 300 mg | Not eklendi |
| Klozapin | Başlama eşiği nötrofil ≥ 2000/mm³ | Mutlak nötrofil ≥ 1500/µL; ara verme kuralı 2025'te değişmiş | ABD eşiği ve yeni ara verme kuralı not olarak eklendi |
| Pimozid | Onay ≥ 12 yaş | Açık yaş alt sınırı yok; 12 yaş altında doz-yanıt verisi yok | Not eklendi |

Karşılaştırılamayanlar: **haloperidol** ve **klorpromazin** (etiket metni alınamadı); **agomelatin, tianeptin, amisulpirid, zuklopentiksol** (ABD'de ruhsatsız, FDA etiketi yok; Türkiye KÜB'leri bu ortamdan açılamadı). Bu altı ilacın kaydı değiştirilmedi.

**22 Kasım 2026: duygudurum düzenleyiciler, anksiyolitikler, yardımcı ilaçlar ve uzun etkili enjektabl antipsikotikler**

Yirmi üç kayıt daha FDA etiketleriyle karşılaştırıldı: lityum, valproat, lamotrijin, karbamazepin, okskarbazepin, pregabalin, klonazepam, lorazepam, alprazolam, diazepam, buspiron, hidroksizin; naltrekson, buprenorfin/nalokson, nalokson, propranolol, metformin, prazosin; risperidon mikroküre, aylık ve 3 aylık paliperidon palmitat, aylık aripiprazol, olanzapin pamoat, haloperidol dekanoat.

Bu turda hiçbir doz değiştirilmedi. Tek metin düzeltmesi **okskarbazepin** onay notundadır: "epilepside ≥ 4 yaş onaylı" yerine "monoterapi ≥ 4 yaş, ek tedavi ≥ 2 yaş" (Trileptal etiketi 9/2025). Geri kalan her şey etiket dayanaklı eklemedir: kontrendikasyon listeleri, eksik uyarı başlıkları, böbrek ve karaciğer yetmezliğinde doz, etkileşimlerde sayısal doz ayarı, başlangıç tetkikleri. Nalokson kaydı etiketle uyumlu bulundu, eklenmedi.

Etiketle rehber arasında fark görülüp **değiştirilmeyen, yalnızca not düşülen** noktalar:

| İlaç | Rehber | FDA etiketi | Yapılan |
|---|---|---|---|
| Lityum | Çocukta sürdürüm hedefi 0,6–1,0 mEq/L | 0,8–1,0 mEq/L (10/2022) | Not eklendi |
| Lamotrijin | "5 günden uzun ara verildiyse baştan titre edin" | Kural 5 yarı ömre bağlanır (10/2025) | Not eklendi |
| Hidroksizin | Erişkin üst sınır 100 mg/gün; çocukta 2 mg/kg/gün | Erişkin 50–100 mg ×4; çocukta 50–100 mg/gün; üst sınır yok (11/2016) | Not eklendi; rehber Avrupa QT kısıtlamasını izliyor |
| Buprenorfin/nalokson | 1. gün 4 mg, ek dozlarla (Türkiye KÜB'ü) | 1. gün 8 mg'a, 2. gün 16 mg'a kadar (5/2025) | Not eklendi |
| Metformin | Çocukta başlangıç 500 mg ×1 | 500 mg ×2 (5/2018) | Not eklendi |
| Metformin | Erişkin üst sınır 2000 mg (kilo artışı) | Diyabette 2550 mg/gün | Not eklendi |
| Prazosin | 1 mg yatarken (endikasyon dışı kullanım) | Hipertansiyonda 1 mg ×2–3; üst sınır 20, bazı hastada 40 mg/gün | Not eklendi |

**Doğrulanamayan ve kullanıcıya bırakılan noktalar**

- **Haloperidol dekanoat:** rehber başlangıcı günlük oral dozun 10–15 katı, üst sınırı 300 mg/4 hafta verir. Etiketin doz bölümü okunamadı; otomatik özet "başlangıç 10–20 kat, ilk doz en fazla 100 mg" diyor. Özet güvenilir sayılmadığı için rehber değiştirilmedi.
- **Buspiron:** rehber MAOİ ile "kontrendike" der. Okunan 2010 tarihli BuSpar etiketi "birlikte kullanım önerilmez" diyor ve kontrendikasyon listesinde yalnızca aşırı duyarlılık var. Güncel jenerik etiket okunamadı; ifade değiştirilmedi.
- **Buprenorfin/nalokson:** rehberdeki "FDA: 16 yaş altında güvenlilik belirlenmemiş" notu doğrulanamadı; 2025 etiketinin pediatrik bölümü okunamadı.
- **Karbamazepin, klonazepam, diazepam:** etiketlerin doz bölümleri okunamadı; bu üç ilacın doz satırları karşılaştırılmadı.
- **Klonopin** için 2023 sürümü açılamadı; 2/2021 sürümü kullanıldı. Eski sürümler: BuSpar 2010, Inderal 2010, Revia 2013, Minipress 2015, Vistaril 2016, Glucophage 2018, Narcan 2020.
- Etiketlerin çoğunda metnin yalnızca ilk %40–50'si okunabildi (endikasyon, doz, kontrendikasyon, uyarılar). Etkileşim, özel popülasyon ve farmakokinetik bölümleri çoğunlukla okunamadı.

Bu turda karşılaştırılamayan on üç kayıt için aşağıdaki "kalan kayıtlar" bölümüne bakın.

**22 Kasım 2026: kalan kayıtlar (FDA dışı kaynaklarla)**

Önceki turlarda FDA etiketi bulunamayan on üç kayıttan onu başka resmî ürün bilgileriyle karşılaştırıldı. Hiçbir doz değiştirilmedi; etiket dayanaklı eklemeler yapıldı.

| Kayıt | Kaynak | Okunan kısım |
|---|---|---|
| Haloperidol (oral) | DailyMed, Mylan, 1/2025 | İlk yarı; doz bölümü okunamadı |
| Klorpromazin | DailyMed, Novadoz, 1/2022 | İlk yarı; doz bölümü okunamadı |
| Triheksifenidil | DailyMed, Natco, 9/2010 | Tamamı |
| Agomelatin | EMA, Valdoxan ürün bilgisi | Tamamı |
| Melatonin | EMA, Slenyto ve Circadin ürün bilgileri | Tamamı |
| Nalmefen (oral) | EMA, Selincro halk özeti (2013) | Yalnızca özet; ürün bilgisi değil |
| Tianeptin | ANSM (Fransa), Stablon, 1/2018 | Tamamı |
| Amisülpirid | emc (İngiltere), 6/2026 | Tamamı |
| Zuklopentiksol dekanoat | emc, Clopixol, 4/2026 | Tamamı |
| Flupentiksol dekanoat | emc, Depixol, 1/2021 | Tamamı |

Tek içerik eklemesi **melatonin** onayındadır: uzatılmış salımlı pediatrik formun Avrupa'daki ikinci endikasyonu (DEHB'de uykusuzluk, 6–17 yaş) onay listesine eklendi.

Kaynakla rehber arasında fark görülüp **değiştirilmeyen, yalnızca not düşülen** noktalar:

| İlaç | Rehber | Kaynak | Yapılan |
|---|---|---|---|
| Tianeptin | ≥ 15 yaşa doz verir; "15 yaş altında önerilmez" | Fransa: 15 yaş altında kontrendike, 15–18 yaşta kullanılmamalı | Not eklendi; **doz satırını kaldırıp kaldırmamak kullanıcı kararı** |
| Tianeptin | MAOİ ile "kontrendike (14 gün ara)" | Tianeptinden MAOİ'ye 2 hafta, MAOİ'den tianeptine 24 saat; "önerilmez" | Not eklendi |
| Haloperidol | Onay ≥ 3 yaş | Etiket endikasyonda çocukları anar, pediatrik bölümde "belirlenmemiş" der; 3 yaş sınırı okunan metinde yok | Not eklendi |

**Biperiden (kullanıcının eklediği Türkiye KÜB'üyle):** Akineton 2 mg tablet KÜB'ü (taranmış PDF; ilk ruhsat 16.06.2011, KÜB yenileme tarihi boş) sayfa görüntülerinden okundu. Bir düzeltme yapıldı: erişkinde ilaca bağlı ekstrapiramidal belirtilerde doz "1–2 mg ×1–4/gün" yerine KÜB'deki gibi "1–4 mg ×1–4/gün (½–2 tablet; 1–16 mg/gün)". Pediatrik doz (3–15 yaş, günde 1–3 kez ½–1 tablet), erişkin başlangıcı, üst sınır ve kontrendikasyonlar KÜB'le uyumlu bulundu. Kademeli kesme, dikkat gerektiren durumlar, göz içi basıncı ve laboratuvar izlemi eklendi. Ampul KÜB'ü görülmedi; ampul dozları doğrulanmadı.

**Bornaprin ve oral zuklopentiksol:** bornaprin Almanya ürün bilgisiyle (Sormodren Fachinformation, 4/2019), oral zuklopentiksol İngiltere ürün bilgisiyle (Clopixol tablet, emc, 4/2026) karşılaştırıldı; ikisi de tam metin okundu. Bornaprin dozları, endikasyonları ve kontrendikasyonları uyumlu bulundu. Zuklopentiksolde bir fark not edildi, değiştirilmedi: rehber başlangıcı 10–20 mg/gün (Türkiye KÜB'ü), İngiltere 20–30 mg/gün verir. Her iki kayda kontrendikasyon, uyarı, etkileşim ve özel popülasyon notları eklendi.

Bu turla birlikte rehberdeki 66 ilaç ve 8 depo kaydının tamamı en az bir resmî ürün bilgisiyle karşılaştırılmış oldu. Doğrulanmadan kalanlar: oral haloperidol, klorpromazin, karbamazepin, klonazepam ve diazepamın doz satırları; haloperidol dekanoat dozu; biperiden ampul dozları; nalmefen (yalnızca halk özeti okundu).

İlaç kayıtları dışındaki klinik içerik (titrasyon ve kesme şemaları, tetkik ve izlem, ilaç geçiş kuralları, metabolizma bilgileri ve Türkiye KÜB özetleri) özgün sürümle aynıdır; bu uyarlamada değiştirilmemiş ve ayrıca doğrulanmamıştır. Özgün uyarı metni korunmuştur.

**22 Kasım 2026: okunurluk**

Klinik içerik değişmedi; yalnızca gösterim değişti (`js/app.js` içindeki `liste` işlevi, `css/stil.css` sonu).

- "Kontrendikasyon" ile başlayan satırlar listenin başına alınır ve kırmızı yazılır.
- Ruhsat etiketiyle karşılaştırma notları (FDA ya da ABD etiketi, Türkiye KÜB'ü anılan satırlar) listenin sonuna alınır ve "Etiket" rozetiyle işaretlenir. Böylece gündelik uygulama notları önce okunur.
- Dar ekranda yana kayan tabloların altında "Tablo yana kayar" ipucu görünür.

**22 Kasım 2026: kullanıcı kararları ve onay yaşı çizelgesi**

Kullanıcı kararıyla olduğu gibi bırakılanlar: tianeptinin 15–18 yaş doz satırı; buspiron ve tianeptinde MAOİ için "kontrendike" ifadesi.

Yeni sayfa: **Onay Yaşları** (`#/onay`; `js/app.js` içinde `sayfaOnay`, `css/stil.css` sonu). Sayfa yeni veri içermez: ilaç kayıtlarındaki `onay` alanından ve `TR_KUB` içindeki `pediatrik` listesinden türetilir. İlaç sınıfına ve hasta yaşına göre süzülür; "FDA / Avrupa" ve "Türkiye" sekmeleri ayrı ayrı açılıp kapatılabilir; yaş ifadesi sayıya çevrilemeyen satırlar (ör. "yaş sınırı belirtilmemiş") çubuksuz gösterilir ve her yaşta listelenir. "Ergen" ifadesi çubukta yaklaşık 12–18 yaş olarak çizilir. Türkiye sütunu özgün yazarın KÜB özetlerine dayanır ve bu uyarlamada ayrıca doğrulanmamıştır.

**22 Kasım 2026: QT özeti**

"Tetkik ve İzlem" sayfasının sonuna **QT uzaması: hangi ilaçlarda dikkat** bölümü eklendi (`js/app.js` içinde `qtBolumu`). Yeni veri içermez: ilaç kayıtlarındaki göreli QT puanı (`profil.qt`), QT geçen uyarı satırları ve EKG geçen notlardan derlenir. Puanlar özgün rehberindir; bu uyarlamada yeniden derecelendirilmedi. Lityum puansızdır, Brugada uyarısı nedeniyle listede yer alır.

Önerilen "organ yetmezliğinde doz tablosu" ayrıca yapılmadı: özgün rehberde "Metabolizma (CYP)" sayfasında 66 ilacın tamamı için zaten vardır. Yirmi satırı bu denetimde okunan kaynaklarla karşılaştırıldı; çelişki görülmedi.

## Özgün depodan güncelleme alma

Özgün depo düzenli olarak güncellenmektedir (doz ve KÜB düzeltmeleri dahil). Güncellemeler GitHub'da bu deponun sayfasındaki **Sync fork** düğmesiyle alınabilir. Komut satırından:

```bash
git remote add upstream https://github.com/lipsumation/psikofarmarehber.git   # yalnızca ilk seferde
git fetch upstream
git merge upstream/main
git push origin main
```

Uyarlamaya ait değişiklikler `index.html` (üst bardaki satır ve stilleri, ilk açılış ayarı, alt bilgi), README'nin ilk paragrafı ve bu dosyayla sınırlı tutulmuştur; özgün depodaki düzeltmeler bu sayede büyük olasılıkla çakışmadan alınabilir. Yeni değişiklikler yukarıdaki listeye tarihiyle eklenmelidir.

## Lisans koşulları (özet)

- **Atıf:** Özgün yazar, özgün depo ve lisans bağlantısı korunmalı; yapılan değişiklikler belirtilmelidir.
- **Gayriticari:** Uyarlama ticari amaçla kullanılamaz.
- **Aynı lisansla paylaş:** Bu uyarlamadan türetilen çalışmalar da CC BY-NC-SA 4.0 ile paylaşılmalıdır.

Bağlayıcı olan, [LICENSE](LICENSE) dosyasındaki lisans metnidir.
