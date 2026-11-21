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

Henüz karşılaştırılmayan gruplar: duygudurum düzenleyiciler ve anksiyolitikler, yardımcı ilaçlar, uzun etkili enjektabl antipsikotikler.

DEHB ilaçları, antidepresanlar ve antipsikotikler dışındaki klinik içerik (ilaç listesi, dozlar, titrasyon ve kesme şemaları, tetkik ve izlem, ilaç geçiş kuralları, metabolizma bilgileri ve Türkiye KÜB özetleri) özgün sürümle aynıdır; bu uyarlamada değiştirilmemiş ve ayrıca doğrulanmamıştır. Özgün uyarı metni korunmuştur.

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
